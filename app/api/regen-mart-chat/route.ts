import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { createClient } from "@/lib/supabase/server";

export const runtime = "nodejs";
export const maxDuration = 30;

const SYSTEM_BASE = `You are a friendly Regen Mart assistant on the RegenPulse wellness platform. You help customers with questions about equipment, recovery gear, and wellness products.

Regen Mart categories and options:
- Categories: Aquatic, HBOT, Thermal/Ozone, Recovery Pods, Rehab/Strength, Diagnostics, Neuro/Vets, Retail/POS, Kitchen/Lounge
- Brands: SwimEx, HBOT Pro, HOCATT, Ammortal, Hyperice, CryoPhit, Lympha Press, VAbody, Arca Aesthetics, Speediance, Storz Medical, LightForce, Olympic, DEXA, PNOE, Symmetry, Inogen, O2 Smoothie, Masimo
- Service flows: Full Regen (Aquatic, Oxygen, Rehab, Intake, End, Public), Recovery Bay, NEW Rehab Bay, NEW Strength Bay, Neuro/Vets Branch, Retail Upsell, Lounge/Public

When suggesting specific products, use ONLY the product IDs from the product list below. Reply in a friendly, natural way. At the very end of your reply, on a new line, output exactly one JSON object with keys "message" (your full reply text including any product names you mentioned) and "product_ids" (array of product UUIDs you are suggesting, or empty array). Example last line: {"message":"Your full reply text here.","product_ids":["uuid-1","uuid-2"]}

When customers ask about recovery, rehab, aquatic therapy, HBOT, diagnostics, or specific brands, direct them to the marketplace and suggest relevant products from the list when applicable. Keep responses concise and helpful.`;

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

type ProductRef = {
  id: string;
  name: string;
  sku: string | null;
  price: number;
  category: string | null;
  brand: string | null;
};

async function getChatContext(): Promise<{
  docContext: string;
  productList: ProductRef[];
  productListForPrompt: string;
}> {
  const supabase = await createClient();
  const [docsRes, productsRes] = await Promise.all([
    supabase
      .from("chatbot_documents")
      .select("name, content")
      .order("created_at", { ascending: false }),
    supabase
      .from("products")
      .select("id, name, sku, price, category, brand")
      .order("category")
      .order("name"),
  ]);
  const docs = docsRes.data ?? [];
  const products = (productsRes.data ?? []).map((p) => ({
    id: p.id,
    name: p.name,
    sku: p.sku ?? null,
    price: Number(p.price ?? 0),
    category: p.category ?? null,
    brand: p.brand ?? null,
  }));
  const docContext =
    docs.length === 0
      ? ""
      : `\n\nAdditional context from admin documents:\n${docs
          .map((d) => `--- ${d.name} ---\n${(d.content ?? "").slice(0, 15000)}`)
          .join("\n\n")}`;
  const productListForPrompt =
    products.length === 0
      ? "\n\n(No products in catalog yet.)"
      : `\n\nProducts (use these IDs when suggesting items):\n${products
          .map(
            (p) =>
              `- id: ${p.id} | name: ${p.name} | price: $${p.price} | category: ${p.category ?? ""} | brand: ${p.brand ?? ""}`
          )
          .join("\n")}`;
  return {
    docContext,
    productList: products,
    productListForPrompt,
  };
}

function parseStructuredReply(content: string): {
  message: string;
  productIds: string[];
} {
  try {
    const trimmed = content.trim();
    const lastBrace = trimmed.lastIndexOf("}");
    if (lastBrace === -1)
      return { message: trimmed, productIds: [] };
    const jsonStr = trimmed.slice(trimmed.lastIndexOf("{", lastBrace), lastBrace + 1);
    const parsed = JSON.parse(jsonStr) as unknown;
    if (parsed && typeof parsed === "object" && "message" in parsed && typeof (parsed as { message: unknown }).message === "string") {
      const obj = parsed as { message: string; product_ids?: string[] };
      const ids = Array.isArray(obj.product_ids)
        ? obj.product_ids.filter((id): id is string => typeof id === "string")
        : [];
      return { message: obj.message.trim(), productIds: ids };
    }
  } catch {
    // ignore
  }
  return { message: content.trim(), productIds: [] };
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

    const { docContext, productList, productListForPrompt } = await getChatContext();
    const systemContent = SYSTEM_BASE + docContext + productListForPrompt;

    const openai = new OpenAI({ apiKey });
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemContent },
        ...messages,
      ],
      max_tokens: 600,
    });

    const rawContent =
      completion.choices[0]?.message?.content?.trim() ??
      "I'm not sure how to respond. Try asking about recovery equipment, brands, or categories.";
    const { message, productIds } = parseStructuredReply(rawContent);
    const products =
      productIds.length === 0
        ? []
        : productIds
            .map((id) => productList.find((p) => p.id === id))
            .filter((p): p is ProductRef => p != null);

    return NextResponse.json({
      message: message || rawContent,
      products: products.map((p) => ({
        id: p.id,
        name: p.name,
        sku: p.sku,
        price: p.price,
        category: p.category,
        brand: p.brand,
      })),
    });
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
