import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function BookResultsPage({
  searchParams,
}: {
  searchParams: Promise<{ zip?: string }>;
}) {
  const { zip } = await searchParams;
  const zipTrim = zip?.trim() ?? "";

  const supabase = await createClient();

  const { data: clinics } = await supabase
    .from("clinics")
    .select("id, name, address, city, state, zip")
    .ilike("zip", zipTrim + "%")
    .order("name")
    .limit(50);

  const list = clinics ?? [];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">
          Clinics {zipTrim ? "near " + zipTrim : ""}
        </h1>
        <Button variant="outline" asChild>
          <Link href="/book">New search</Link>
        </Button>
      </div>

      {list.length === 0 ? (
        <Card>
          <CardContent className="py-12">
            <p className="text-center text-muted-foreground">
              No clinics found in your area. Please try a different ZIP code.
            </p>
            <div className="mt-4 flex justify-center">
              <Button asChild>
                <Link href="/book">Search again</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((c) => (
            <Card key={c.id}>
              <CardHeader>
                <CardTitle className="text-lg">{c.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {[c.address, [c.city, c.state].filter(Boolean).join(", "), c.zip]
                  .filter(Boolean)
                  .join(" · ") || "No address"}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
