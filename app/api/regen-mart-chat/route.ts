import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export const runtime = "nodejs";
export const maxDuration = 30;

const SYSTEM_PROMPT = `You are a friendly Regen Mart assistant on the RegenPulse wellness platform. You help customers with questions about equipment, recovery gear, and wellness products.

Regen Mart categories and options:
- Categories: Aquatic, HBOT, Thermal/Ozone, Recovery Pods, Rehab/Strength, Diagnostics, Neuro/Vets, Retail/POS, Kitchen/Lounge
- Brands: SwimEx, HBOT Pro, HOCATT, Ammortal, Hyperice, CryoPhit, Lympha Press, VAbody, Arca Aesthetics, Speediance, Storz Medical, LightForce, Olympic, DEXA, PNOE, Symmetry, Inogen, O2 Smoothie, Masimo
- Service flows: Full Regen (Aquatic, Oxygen, Rehab, Intake, End, Public), Recovery Bay, NEW Rehab Bay, NEW Strength Bay, Neuro/Vets Branch, Retail Upsell, Lounge/Public

When customers ask about recovery, rehab, aquatic therapy, HBOT, diagnostics, or specific brands, direct them to the marketplace filters (category, brand, service flow) and suggest relevant categories or products. Keep responses concise and helpful. If they mention a concern (e.g. "recovery after workouts", "chronic pain", "TBI/PTSD"), suggest the most relevant category or service flow and encourage them to browse or use the filters.`;

type ValidRole = "user" | "assistant";

function normalizeMessages(
  raw: unknown
): { role: ValidRole; content: string }[] {
  if (!Array.isArray(raw) || raw.length === 0) return [];
  return raw
    .map((m) => {
      if (m == null || typeof m !== "object") return null;
      const role = m.role === "assistant" ? "assistant" : "user";
      const content =
        typeof m.content === "string" ? m.content.trim() : String(m.content ?? "").trim();
      if (!content) return null;
      return { role, content };
    })
    .filter((m): m is { role: ValidRole; content: string } => m != null);
}

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Chat is not configured. Set OPENAI_API_KEY." },
        { status: 503 }
      );
    }

    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON body." },
        { status: 400 }
      );
    }

    const rawMessages = body && typeof body === "object" && "messages" in body ? (body as { messages: unknown }).messages : undefined;
    const messages = normalizeMessages(rawMessages);
    if (messages.length === 0) {
      return NextResponse.json(
        { error: "Request must include a non-empty messages array with role and content." },
        { status: 400 }
      );
    }

    const openai = new OpenAI({ apiKey });
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages,
      ],
      max_tokens: 500,
    });

    const content =
      completion.choices[0]?.message?.content?.trim() ??
      "I’m not sure how to respond. Try asking about recovery equipment, brands, or categories.";
    return NextResponse.json({ message: content });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("Regen Mart chat error:", err);

    if (message.includes("401") || message.toLowerCase().includes("invalid") || message.toLowerCase().includes("api key")) {
      return NextResponse.json(
        { error: "Chat service is misconfigured. Please try again later." },
        { status: 503 }
      );
    }
    if (message.includes("429") || message.toLowerCase().includes("rate")) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a moment and try again." },
        { status: 429 }
      );
    }

    return NextResponse.json(
      { error: "Failed to get a response. Please try again." },
      { status: 500 }
    );
  }
}
