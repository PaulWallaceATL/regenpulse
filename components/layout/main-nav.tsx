"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase/client";
import { useCart } from "@/contexts/cart-context";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Menu, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/departments", label: "Departments" },
  { href: "/memberships", label: "Memberships" },
  { href: "/partner-network", label: "Partner Network" },
  { href: "/corporate-wellness", label: "Corporate Wellness" },
  { href: "/regen-university", label: "Regen University" },
  { href: "/regen-mart", label: "Regen Mart" },
  { href: "/regen-fresh", label: "Regen Fresh" },
  { href: "/cost-plus-rx", label: "Cost Plus RX" },
] as const;

export function MainNav() {
  const { openCart, itemCount } = useCart();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const closeMenu = () => setMenuOpen(false);

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
        <nav className="container mx-auto flex h-14 items-center justify-between gap-4 px-4 sm:px-6">
          <Link
            href="/"
            className="shrink-0 text-lg font-semibold text-foreground sm:text-xl"
          >
            RegenPulse
          </Link>

          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="relative h-9 w-9 shrink-0"
              onClick={openCart}
              aria-label={`Open cart${itemCount > 0 ? `, ${itemCount} items` : ""}`}
            >
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-medium text-primary-foreground">
                  {itemCount > 99 ? "99+" : itemCount}
                </span>
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 shrink-0"
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </nav>
      </header>

      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetContent
          side="right"
          className="flex w-full flex-col border-l border-border bg-background p-0 sm:max-w-sm"
        >
          <SheetHeader className="border-b border-border px-6 py-4 text-left">
            <SheetTitle className="text-lg font-semibold">Menu</SheetTitle>
          </SheetHeader>
          <div className="flex flex-1 flex-col overflow-y-auto">
            <ul className="flex flex-col gap-0 py-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block px-6 py-3 text-sm font-medium text-foreground",
                      "hover:bg-accent hover:text-accent-foreground",
                      "transition-colors"
                    )}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-auto border-t border-border px-6 py-4">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  closeMenu();
                  setDialogOpen(true);
                }}
              >
                Request Franchise
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/signup" onClick={closeMenu}>
                  Sign up
                </Link>
              </Button>
              <Button className="mt-3 w-full" asChild>
                <Link href="/login" onClick={closeMenu}>
                  Login
                </Link>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>

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
