import { redirect } from "next/navigation";
import Link from "next/link";
import { getUserWithRole, getRedirectPathForUserType } from "@/lib/auth-server";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default async function CreatorDashboardPage() {
  const user = await getUserWithRole();
  if (!user) redirect("/login");
  if (user.user_type !== "creator") {
    redirect(getRedirectPathForUserType(user.user_type));
  }

  return (
    <div className="brand-page">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Creator Dashboard</h1>
          <Button variant="outline" asChild>
            <Link href="/">Back to home</Link>
          </Button>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Content</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">No content yet.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
