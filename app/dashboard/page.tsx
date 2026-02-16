import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { getUserWithRole, getRedirectPathForUserType } from "@/lib/auth-server";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default async function ManufacturerDashboardPage() {
  const user = await getUserWithRole();
  if (!user) redirect("/login");
  if (user.user_type !== "manufacturer" || !user.manufacturer_id) {
    redirect(getRedirectPathForUserType(user.user_type));
  }

  const supabase = await createClient();

  const [clinicsRes, campaignsRes, transactionsRes] = await Promise.all([
    supabase
      .from("clinics")
      .select("id, name, city, state, zip, address")
      .eq("manufacturer_id", user.manufacturer_id)
      .order("name"),
    supabase
      .from("campaigns")
      .select("id", { count: "exact", head: true })
      .eq("manufacturer_id", user.manufacturer_id),
    supabase
      .from("transactions")
      .select("amount")
      .eq("manufacturer_id", user.manufacturer_id),
  ]);

  const clinics = clinicsRes.data ?? [];
  const campaignCount = campaignsRes.count ?? 0;
  const totalRevenue =
    transactionsRes.data?.reduce((sum, t) => sum + Number(t.amount ?? 0), 0) ?? 0;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Manufacturer Dashboard</h1>
        <Button variant="outline" asChild>
          <Link href="/">Back to home</Link>
        </Button>
      </div>

      <div className="mb-8 grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Clinics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{clinics.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Campaigns
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{campaignCount}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total revenue (transactions)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              ${totalRevenue.toLocaleString("en-US", { minimumFractionDigits: 2 })}
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Clinics</CardTitle>
        </CardHeader>
        <CardContent>
          {clinics.length === 0 ? (
            <p className="py-12 text-center text-muted-foreground">
              No clinics have been added yet.
            </p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>City</TableHead>
                  <TableHead>State</TableHead>
                  <TableHead>ZIP</TableHead>
                  <TableHead>Address</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {clinics.map((c) => (
                  <TableRow key={c.id}>
                    <TableCell className="font-medium">{c.name}</TableCell>
                    <TableCell>{c.city ?? "—"}</TableCell>
                    <TableCell>{c.state ?? "—"}</TableCell>
                    <TableCell>{c.zip ?? "—"}</TableCell>
                    <TableCell className="text-muted-foreground">
                      {c.address ?? "—"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
