"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#departments", label: "Departments" },
  { href: "/#memberships", label: "Memberships" },
  { href: "/#partner-network", label: "Partner Network" },
  { href: "/#corporate-wellness", label: "Corporate Wellness" },
  { href: "/#regen-university", label: "Regen University" },
  { href: "/#regen-mart", label: "Regen Mart" },
  { href: "/#regen-fresh", label: "Regen Fresh" },
  { href: "/#cost-plus-rx", label: "Cost Plus RX" },
] as const;

export function MainNav() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleOpenChange = (open: boolean) => {
    setDialogOpen(open);
    if (!open) {
      setSubmitStatus("idle");
      setForm({ name: "", email: "", message: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus("idle");
    try {
      const { error } = await supabase.from("leads").insert({
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim() || null,
      });
      if (error) throw error;
      setSubmitStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setDialogOpen(false), 1500);
    } catch {
      setSubmitStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container mx-auto flex h-14 items-center justify-between gap-4 px-4">
          <Link href="/" className="shrink-0 font-semibold text-foreground">
            RegenPulse
          </Link>

          {/* Desktop: NavigationMenu */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-1">
              {NAV_LINKS.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "h-9 px-3 text-sm"
                      )}
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop: CTA buttons */}
          <div className="hidden md:flex shrink-0 items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setDialogOpen(true)}
            >
              Request Franchise
            </Button>
            <Button size="sm" asChild>
              <Link href="/login">Login / Sign Up</Link>
            </Button>
          </div>

          {/* Mobile: menu button */}
          <div className="flex shrink-0 items-center gap-2 md:hidden">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setDialogOpen(true)}
            >
              Request Franchise
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9"
              onClick={() => setMobileMenuOpen((o) => !o)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </nav>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="border-t border-border bg-background px-4 py-4 md:hidden">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2 border-t border-border pt-2">
                <Link
                  href="/login"
                  className="block rounded-md px-3 py-2 text-sm font-medium text-primary hover:bg-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login / Sign Up
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>

      <Dialog open={dialogOpen} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Request Franchise or Partnership Deck</DialogTitle>
            <DialogDescription>
              Submit your details and we&apos;ll send you our deck.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="grid gap-4 py-2">
            <div className="grid gap-2">
              <Label htmlFor="lead-name">Name</Label>
              <Input
                id="lead-name"
                required
                placeholder="Your name"
                value={form.name}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, name: e.target.value }))
                }
                disabled={submitting}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="lead-email">Email</Label>
              <Input
                id="lead-email"
                type="email"
                required
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, email: e.target.value }))
                }
                disabled={submitting}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="lead-message">Message (optional)</Label>
              <textarea
                id="lead-message"
                placeholder="Tell us about your interest..."
                rows={3}
                value={form.message}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, message: e.target.value }))
                }
                disabled={submitting}
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              />
            </div>
            {submitStatus === "success" && (
              <p className="text-sm text-green-600 dark:text-green-400">
                Thanks! We&apos;ll be in touch.
              </p>
            )}
            {submitStatus === "error" && (
              <p className="text-sm text-destructive">
                Something went wrong. Please try again.
              </p>
            )}
            <Button type="submit" disabled={submitting}>
              {submitting ? "Submitting…" : "Submit"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
