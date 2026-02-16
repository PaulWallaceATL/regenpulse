"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function BookPage() {
  const router = useRouter();
  const [zip, setZip] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = zip.trim();
    if (!trimmed) return;
    router.push(`/book/results?zip=${encodeURIComponent(trimmed)}`);
  }

  return (
    <div className="container mx-auto flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Find a clinic</CardTitle>
          <CardDescription>
            Enter your ZIP code to see clinics near you.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="zip">ZIP code</Label>
              <Input
                id="zip"
                type="text"
                inputMode="numeric"
                placeholder="e.g. 40202"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                maxLength={10}
              />
            </div>
            <Button type="submit" className="w-full">
              Search
            </Button>
          </CardContent>
        </form>
      </Card>
      <Button variant="link" asChild className="mt-4 text-muted-foreground">
        <Link href="/">Back to home</Link>
      </Button>
    </div>
  );
}
