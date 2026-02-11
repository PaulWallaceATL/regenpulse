"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const VERTICAL_BADGES = [
  "Pee Wee",
  "Construction",
  "Military",
  "Pro Athletes",
] as const;

const REFUND_PLANS = [
  {
    id: "wellness-plus",
    name: "Wellness Plus",
    description: "Earn refunds for completing monthly wellness check-ins and staying active.",
    eligibility: "All members with qualifying premium",
    refundRate: "Up to 25% of premiums back annually",
    details: "Complete 10+ eligible activities per month. Refunds credited quarterly.",
  },
  {
    id: "injury-prevention",
    name: "Injury Prevention",
    description: "Designed for physically demanding roles. Get rewarded for preventive care.",
    eligibility: "Construction, Military, Pro Athletes",
    refundRate: "Up to 35% of premiums back",
    details: "Attend designated screenings and follow recommended care. Higher refund tier for consistent engagement.",
  },
  {
    id: "youth-sports",
    name: "Youth Sports (Pee Wee)",
    description: "Families earn back premiums when young athletes stay in the program.",
    eligibility: "Pee Wee / youth program participants",
    refundRate: "Up to 20% of premiums back per season",
    details: "Enrollment in a season plus completion of baseline and exit assessments. Refunds applied to next season or account credit.",
  },
  {
    id: "elite-performance",
    name: "Elite Performance",
    description: "Maximum refund potential for pro and semi-pro athletes.",
    eligibility: "Pro Athletes only",
    refundRate: "Up to 50% of premiums back",
    details: "Tiered milestones: screenings, recovery compliance, and performance metrics. Refunds paid quarterly with optional instant QR claims.",
  },
] as const;

const TRUST_SIGNALS = [
  "Instant QR claims",
  "100% refundable premiums",
] as const;

/** Mock live refund amount: starts at a base and ticks up slightly on an interval. */
const REFUND_BASE = 1240;
const REFUND_TICK_MIN = 5;
const REFUND_TICK_MAX = 25;

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export function WeekendWarrior() {
  const [selectedPlanId, setSelectedPlanId] = useState<string>(REFUND_PLANS[0].id);
  const [liveRefund, setLiveRefund] = useState(REFUND_BASE);

  const selectedPlan = REFUND_PLANS.find((p) => p.id === selectedPlanId) ?? REFUND_PLANS[0];

  useEffect(() => {
    const t = setInterval(() => {
      setLiveRefund((prev) =>
        prev + Math.floor(Math.random() * (REFUND_TICK_MAX - REFUND_TICK_MIN + 1)) + REFUND_TICK_MIN
      );
    }, 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="border-t border-border bg-muted/10">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Get Your Premiums Back as You Get Healthy
        </h2>
        <p className="mt-3 text-center text-muted-foreground">
          Refund programs tailored to your vertical. Choose a plan to see details.
        </p>

        {/* Target vertical badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {VERTICAL_BADGES.map((label) => (
            <span
              key={label}
              className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm"
            >
              {label}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* Refund Calculator (Select + plan details) */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-lg">Refund Calculator</CardTitle>
              <CardDescription>
                Select a plan to view eligibility and refund details.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="refund-plan-select">Plan</Label>
                <Select
                  value={selectedPlanId}
                  onValueChange={setSelectedPlanId}
                  name="refund-plan"
                >
                  <SelectTrigger id="refund-plan-select" aria-label="Select refund plan">
                    <SelectValue placeholder="Choose a plan" />
                  </SelectTrigger>
                  <SelectContent>
                    {REFUND_PLANS.map((plan) => (
                      <SelectItem key={plan.id} value={plan.id}>
                        {plan.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="rounded-lg border border-border bg-muted/10 p-4 space-y-3">
                <p className="text-sm font-medium text-foreground">
                  {selectedPlan.description}
                </p>
                <dl className="grid gap-2 text-sm">
                  <div>
                    <dt className="font-medium text-muted-foreground">Eligibility</dt>
                    <dd className="text-foreground">{selectedPlan.eligibility}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-muted-foreground">Refund potential</dt>
                    <dd className="text-foreground">{selectedPlan.refundRate}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-muted-foreground">How it works</dt>
                    <dd className="text-foreground">{selectedPlan.details}</dd>
                  </div>
                </dl>
              </div>
            </CardContent>
          </Card>

          {/* Live Refund Tracker + trust signals */}
          <div className="space-y-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">Live Refund Tracker</CardTitle>
                <CardDescription>
                  Your refund to date (example — updates periodically).
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p
                  className="text-3xl font-bold tabular-nums text-foreground sm:text-4xl"
                  aria-live="polite"
                >
                  {formatCurrency(liveRefund)}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Refundable amount this period
                </p>
              </CardContent>
            </Card>

            {/* Trust signals */}
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                Trust signals
              </p>
              <ul className="space-y-2">
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
        </div>
      </div>
    </section>
  );
}
