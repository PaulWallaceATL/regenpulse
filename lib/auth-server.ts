import { createClient } from "@/lib/supabase/server";
import type { UserWithRole } from "@/lib/auth";
import { getRedirectPathForUserType } from "@/lib/auth";

export type { UserWithRole };
export { getRedirectPathForUserType };

export async function getUserWithRole(): Promise<UserWithRole | null> {
  const supabase = await createClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();
  if (authError || !user) return null;

  const { data: profile, error: profileError } = await supabase
    .from("users")
    .select("id, full_name, user_type, manufacturer_id, clinic_id, content_creator_id")
    .eq("id", user.id)
    .single();

  if (profileError || !profile) return null;
  return profile as UserWithRole;
}
