import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { getUserWithRole } from "@/lib/auth-server";

export async function GET() {
  const user = await getUserWithRole();
  if (!user || user.user_type !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("chatbot_documents")
    .select("id, name, created_at")
    .order("created_at", { ascending: false });
  if (error) {
    console.error("chatbot-documents list error:", error);
    return NextResponse.json(
      { error: "Failed to list documents" },
      { status: 500 }
    );
  }
  return NextResponse.json({ documents: data ?? [] });
}

export async function POST(req: NextRequest) {
  const user = await getUserWithRole();
  if (!user || user.user_type !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return NextResponse.json(
      { error: "Invalid form data" },
      { status: 400 }
    );
  }
  const file = formData.get("file") as File | null;
  if (!file || !(file instanceof File)) {
    return NextResponse.json(
      { error: "Missing or invalid file. Upload a .txt document." },
      { status: 400 }
    );
  }
  const name = file.name.trim() || "Untitled";
  const text = await file.text();
  const supabase = await createClient();
  const { error } = await supabase.from("chatbot_documents").insert({
    name,
    content: text,
  });
  if (error) {
    console.error("chatbot-documents insert error:", error);
    return NextResponse.json(
      { error: "Failed to save document" },
      { status: 500 }
    );
  }
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: NextRequest) {
  const user = await getUserWithRole();
  if (!user || user.user_type !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json(
      { error: "Missing id" },
      { status: 400 }
    );
  }
  const supabase = await createClient();
  const { error } = await supabase
    .from("chatbot_documents")
    .delete()
    .eq("id", id);
  if (error) {
    console.error("chatbot-documents delete error:", error);
    return NextResponse.json(
      { error: "Failed to delete document" },
      { status: 500 }
    );
  }
  return NextResponse.json({ ok: true });
}
