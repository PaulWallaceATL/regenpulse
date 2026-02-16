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

export default async function AdminDashboardPage() {
  const user = await getUserWithRole();
  if (!user) redirect("/login");
  if (user.user_type !== "admin") {
    redirect(getRedirectPathForUserType(user.user_type));
  }

  const supabase = await createClient();

  const { data: users } = await supabase
    .from("users")
    .select("id, full_name, email, user_type, created_at")
    .order("created_at", { ascending: false });

  const list = users ?? [];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Admin Dashboard</h1>
        <Button variant="outline" asChild>
          <Link href="/">Back to home</Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Users</CardTitle>
          <p className="text-sm text-muted-foreground">
            Manage all platform users.
          </p>
        </CardHeader>
        <CardContent>
          {list.length === 0 ? (
            <p className="py-12 text-center text-muted-foreground">
              No users yet.
            </p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Email</TableHead>
                  <TableHead>Full name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Created</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {list.map((u) => (
                  <TableRow key={u.id}>
                    <TableCell className="font-medium">
                      {u.email ?? "—"}
                    </TableCell>
                    <TableCell>{u.full_name ?? "—"}</TableCell>
                    <TableCell>{u.user_type ?? "—"}</TableCell>
                    <TableCell className="text-muted-foreground">
                      {u.created_at
                        ? new Date(u.created_at).toLocaleDateString()
                        : "—"}
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
