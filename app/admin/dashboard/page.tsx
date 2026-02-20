import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { getUserWithRole, getRedirectPathForUserType } from "@/lib/auth-server";
import { Button } from "@/components/ui/button";
import { AdminDashboardClient } from "./admin-dashboard-client";

export default async function AdminDashboardPage() {
  const user = await getUserWithRole();
  if (!user) redirect("/login");
  if (user.user_type !== "admin") {
    redirect(getRedirectPathForUserType(user.user_type));
  }

  const supabase = await createClient();

  const [
    { data: users },
    { data: departments },
    { data: tiers },
    { data: partners },
    { data: inquiries },
    { data: products },
  ] = await Promise.all([
    supabase
      .from("users")
      .select("id, full_name, email, user_type, created_at")
      .order("created_at", { ascending: false }),
    supabase
      .from("departments")
      .select("id, title, subheader, monthly_cost, feature_caption")
      .order("title"),
    supabase
      .from("membership_tiers")
      .select("id, tier_name, price_monthly, access_details, best_for")
      .order("price_monthly"),
    supabase
      .from("manufacturers")
      .select("id, name, slug")
      .order("name"),
    supabase
      .from("leads")
      .select("id, name, email, message, created_at")
      .order("created_at", { ascending: false }),
    supabase
      .from("products")
      .select("id, name, sku, price, category, brand")
      .order("name"),
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Admin Dashboard</h1>
        <Button variant="outline" asChild>
          <Link href="/">Back to home</Link>
        </Button>
      </div>

      <AdminDashboardClient
        users={users ?? []}
        departments={departments ?? []}
        tiers={tiers ?? []}
        partners={partners ?? []}
        inquiries={inquiries ?? []}
        products={products ?? []}
      />
    </div>
  );
}
