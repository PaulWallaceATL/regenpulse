import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() ||
  "https://placeholder.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim() || "placeholder-anon-key";

// Avoid createClient(undefined, ...) so the lib never calls .split() on undefined
export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

export const isSupabaseConfigured =
  !!process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() &&
  !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();
