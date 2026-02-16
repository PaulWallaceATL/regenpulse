import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { getUserWithRole, getRedirectPathForUserType } from "@/lib/auth-server";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ClinicDashboardClient } from "./clinic-dashboard-client";
import type { Booking } from "./clinic-dashboard-client";

export default async function ClinicDashboardPage() {
  const user = await getUserWithRole();
  if (!user) redirect("/login");
  if (user.user_type !== "clinic_admin" || !user.clinic_id) {
    redirect(getRedirectPathForUserType(user.user_type));
  }

  const supabase = await createClient();

  const { data: bookings } = await supabase
    .from("bookings")
    .select(`
      id,
      scheduled_at,
      status,
      therapies ( name )
    `)
    .eq("clinic_id", user.clinic_id)
    .gte("scheduled_at", new Date().toISOString())
    .order("scheduled_at", { ascending: true })
    .limit(50);

  const rawList = bookings ?? [];
  const list: Booking[] = rawList.map((b: { id: string; scheduled_at: string; status: string | null; therapies: { name: string | null } | { name: string | null }[] | null }) => ({
    id: b.id,
    scheduled_at: b.scheduled_at,
    status: b.status,
    therapies: Array.isArray(b.therapies) ? b.therapies[0] ?? null : b.therapies,
  }));
  const bookedDates = list.map((b) => new Date(b.scheduled_at).toDateString());

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Clinic Dashboard</h1>
        <Button variant="outline" asChild>
          <Link href="/">Back to home</Link>
        </Button>
      </div>

      <div className="mb-8 grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Upcoming bookings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{list.length}</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Calendar</CardTitle>
        </CardHeader>
        <CardContent>
          <ClinicDashboardClient
            bookings={list}
            bookedDates={bookedDates}
          />
        </CardContent>
      </Card>
    </div>
  );
}
