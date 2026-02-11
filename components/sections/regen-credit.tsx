"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const CREDIT_TIERS = [
  {
    tier: "Starter",
    creditLimit: "$500",
    bestFor: "Single treatments, supplements, small purchases",
  },
  {
    tier: "Wellness",
    creditLimit: "$2,000",
    bestFor: "Recurring wellness visits, packages, equipment",
  },
  {
    tier: "Performance",
    creditLimit: "$5,000",
    bestFor: "Programs, recovery packages, multi-visit plans",
  },
  {
    tier: "Platinum",
    creditLimit: "$10,000+",
    bestFor: "Full care plans, family add-ons, premium services",
  },
] as const;

const TRUST_SIGNALS = [
  "No hard credit pull",
  "AI Wellness Score approval boost",
  "0% APR for qualified members",
  "60-second decision",
  "Use at any RegenPulse partner location",
] as const;

const UNDERWRITING_FEATURES = [
  "Plaid integration for bank verification and income insights",
  "Soft FICO pull only—no impact on consumer credit score",
  "AI Wellness Score factors (engagement, check-ins, plan tier) for approval boost",
  "Real-time bank balance and cash flow for affordability assessment",
  "Instant decisioning with optional same-day credit line",
  "Compliance-ready decision logs and adverse action support",
] as const;

/** Example AOV: without credit vs with credit (3x). */
const AOV_WITHOUT_CREDIT = 150;
const AOV_WITH_CREDIT = 450; // 3x
const MERCHANT_FEE_PCT = 2.9;
const INTEREST_REVENUE_PCT = 12; // portion of revenue from interest after 0% period

export function RegenCredit() {
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: wire to pre-approval flow or lead capture
  };

  return (
    <section className="border-t border-border bg-muted/10">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Instant Regen Credit | 0% APR Wellness Financing
        </h2>
        <p className="mt-3 text-center text-muted-foreground max-w-2xl mx-auto">
          Get pre-approved in 60 seconds. Use your credit at any partner
          location—no interest when you pay on time.
        </p>

        {/* 60-second application CTA */}
        <Card className="mt-10 border-border bg-card max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-lg">Get pre-approved</CardTitle>
            <CardDescription>
              Enter your phone number to start. We’ll text you a link—no hard
              credit pull.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="regen-credit-phone">Phone number</Label>
                <Input
                  id="regen-credit-phone"
                  type="tel"
                  inputMode="tel"
                  placeholder="(555) 123-4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  aria-describedby="regen-credit-phone-hint"
                  className="w-full"
                />
                <p
                  id="regen-credit-phone-hint"
                  className="text-xs text-muted-foreground"
                >
                  60-second application. Message and data rates may apply.
                </p>
              </div>
              <Button type="submit" className="w-full" size="lg">
                Get Pre-Approved in 60 Seconds
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Credit tiers table */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Credit tiers
          </h3>
          <Card className="border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="font-semibold text-foreground">
                    Tier
                  </TableHead>
                  <TableHead className="font-semibold text-foreground">
                    Credit limit
                  </TableHead>
                  <TableHead className="font-semibold text-foreground">
                    Best for
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {CREDIT_TIERS.map((row) => (
                  <TableRow key={row.tier}>
                    <TableCell className="font-medium">{row.tier}</TableCell>
                    <TableCell className="tabular-nums">{row.creditLimit}</TableCell>
                    <TableCell className="text-muted-foreground">
                      {row.bestFor}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>

        {/* Smart Underwriting */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Smart Underwriting
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Our automated AI model combines financial and wellness signals for
            fast, fair decisions—without a hard credit pull.
          </p>
          <Card className="border-border">
            <CardContent className="pt-6">
              <ul className="grid gap-3 sm:grid-cols-2">
                {UNDERWRITING_FEATURES.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-foreground"
                  >
                    <span
                      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"
                      aria-hidden
                    >
                      <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Revenue Impact */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Revenue Impact
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Credit drives higher ticket sizes and adds two revenue streams:
            merchant fees and interest (after promotional period).
          </p>
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="border-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">
                  Credit revenue model
                </CardTitle>
                <CardDescription>
                  How merchant fees and interest contribute to the bottom line.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border border-border bg-muted/10 p-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      Merchant discount fee (per transaction)
                    </span>
                    <span className="font-medium tabular-nums">
                      {MERCHANT_FEE_PCT}%
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      Interest revenue (post–0% APR period)
                    </span>
                    <span className="font-medium tabular-nums">
                      ~{INTEREST_REVENUE_PCT}% of credit revenue
                    </span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Partners receive full payment upfront; RegenPulse earns from
                  the fee and from interest when members carry a balance after
                  the promotional window.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border border-primary/20 bg-primary/5">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">
                  Boosts Average Order Value 3×
                </CardTitle>
                <CardDescription>
                  Members who use Regen Credit spend significantly more per
                  visit.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-muted-foreground text-sm">
                    Without financing:
                  </span>
                  <span className="text-lg font-bold tabular-nums text-foreground">
                    ${AOV_WITHOUT_CREDIT} avg order
                  </span>
                </div>
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-muted-foreground text-sm">
                    With Regen Credit:
                  </span>
                  <span className="text-lg font-bold tabular-nums text-primary">
                    ${AOV_WITH_CREDIT} avg order
                  </span>
                </div>
                <p className="text-sm text-foreground">
                  Offering 0% APR financing at checkout increases basket size
                  (e.g. full program vs. single session), directly increasing
                  partner and platform revenue.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Trust signals */}
        <div className="mt-10 rounded-lg border border-border bg-card p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-4">
            Why apply
          </p>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {TRUST_SIGNALS.map((signal) => (
              <li
                key={signal}
                className="flex items-center gap-3 text-sm text-foreground"
              >
                <span
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"
                  aria-hidden
                >
                  <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
                {signal}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
