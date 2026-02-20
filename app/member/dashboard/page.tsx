import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { getUserWithRole, getRedirectPathForUserType } from "@/lib/auth-server";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default async function MemberDashboardPage() {
  const user = await getUserWithRole();
  if (!user) redirect("/login");
  if (user.user_type !== "member") {
    redirect(getRedirectPathForUserType(user.user_type));
  }

  const supabase = await createClient();

  const { data: profile } = await supabase
    .from("users")
    .select("full_name, email, membership_tier_id")
    .eq("id", user.id)
    .single();

  let tierName: string | null = null;
  if (profile?.membership_tier_id) {
    const { data: tier } = await supabase
      .from("membership_tiers")
      .select("tier_name, price_monthly, access_details")
      .eq("id", profile.membership_tier_id)
      .single();
    tierName = tier?.tier_name ?? null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Member Dashboard</h1>
        <Button variant="outline" asChild>
          <Link href="/">Back to home</Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Your account</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p><span className="text-muted-foreground">Name:</span> {profile?.full_name ?? "—"}</p>
            <p><span className="text-muted-foreground">Email:</span> {profile?.email ?? "—"}</p>
            <p><span className="text-muted-foreground">Tier:</span> {tierName ?? "None"}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick actions</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <Button asChild variant="outline">
              <Link href="/book">Book a visit</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/regen-mart">Regen Mart</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
