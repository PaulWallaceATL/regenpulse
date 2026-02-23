"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getRedirectPathForUserType } from "@/lib/auth";

function LoginForm() {
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") ?? undefined;
  const message = searchParams.get("message");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const TEST_LOGINS = [
    { role: "User", email: "user@regenpulse.com", password: "password123" },
    { role: "Member", email: "member@regenpulse.com", password: "password123" },
    { role: "Partner", email: "partner@oxyhealth.com", password: "password123" },
    { role: "Admin", email: "admin@regenpulse.com", password: "password123" },
    { role: "Clinic", email: "info@louisvillerecovery.com", password: "password123" },
    { role: "Creator", email: "sarah@recoverycoach.com", password: "password123" },
    { role: "Patient", email: "patient@test.com", password: "password123" },
  ] as const;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const { data: authData, error: signInError } =
        await supabase.auth.signInWithPassword({ email: email.trim(), password });
      if (signInError) {
        setError(signInError.message);
        return;
      }
      if (!authData.user) {
        setError("Login failed. Please try again.");
        return;
      }
      let profile: { user_type: string | null } | null = null;
      const { data: profileData, error: profileError } = await supabase
        .from("users")
        .select("user_type")
        .eq("id", authData.user.id)
        .single();
      if (profileError && profileError.code !== "PGRST116") {
        setError(profileError.message || "Could not load profile. Check that the users table and RLS are set up.");
        setLoading(false);
        return;
      }
      if (profileError?.code === "PGRST116" || !profileData) {
        await supabase.from("users").insert({
          id: authData.user.id,
          email: authData.user.email ?? "",
          full_name: authData.user.user_metadata?.full_name ?? null,
          user_type: "patient",
        });
        profile = { user_type: "patient" };
      } else {
        profile = profileData;
      }
      const userType = profile?.user_type ?? "patient";
      const path = redirectTo && !redirectTo.startsWith("/login") ? redirectTo : getRedirectPathForUserType(userType);
      // Full page navigation so the server receives the new session cookies
      window.location.assign(path);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setError(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="brand-page flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-12">
      <Card className="w-full max-w-sm border-primary/10">
          <CardHeader>
          <CardTitle>Sign in</CardTitle>
          <CardDescription>
            Sign in to your RegenPulse account.
          </CardDescription>
          {message && (
            <p className="text-sm text-green-600 dark:text-green-400 mt-2">
              {decodeURIComponent(message)}
            </p>
          )}
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
                autoComplete="email"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
                autoComplete="current-password"
              />
            </div>
            {error && (
              <p className="text-sm text-destructive">{error}</p>
            )}
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Signing in…" : "Sign in"}
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="underline hover:text-foreground">
                Sign up
              </Link>
            </p>
            <Button variant="link" asChild className="text-muted-foreground">
              <Link href="/">Back to home</Link>
            </Button>
          </CardFooter>
        </form>
      </Card>

      <Card className="mt-6 w-full max-w-sm border-dashed border-primary/25 bg-secondary/40">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Test logins
          </CardTitle>
          <CardDescription className="text-xs">
            Click a row to fill the form. Password for all: <code className="rounded bg-muted px-1">password123</code>
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-1">
            {TEST_LOGINS.map(({ role, email: testEmail, password: testPassword }) => (
              <button
                key={testEmail}
                type="button"
                onClick={() => {
                  setEmail(testEmail);
                  setPassword(testPassword);
                  setError(null);
                }}
                className="flex w-full items-center justify-between rounded-md border border-transparent px-3 py-2 text-left text-sm hover:border-border hover:bg-muted/50"
              >
                <span className="font-medium">{role}</span>
                <span className="truncate text-muted-foreground ml-2">{testEmail}</span>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="brand-page flex min-h-[calc(100vh-4rem)] items-center justify-center">Loading…</div>}>
      <LoginForm />
    </Suspense>
  );
}
