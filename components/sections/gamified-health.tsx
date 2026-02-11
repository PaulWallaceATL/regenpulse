"use client";

import {
  DollarSign,
  Activity,
  Users,
  QrCode,
  ClipboardCheck,
  CheckCircle2,
  Timer,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const REWARD_DASHBOARD_FEATURES = [
  {
    id: "refund-tracker",
    title: "Live Refund Tracker",
    description:
      "See your refund balance grow in real time as you complete eligible activities. No guessing — your dashboard shows exactly what you’ve earned.",
    icon: DollarSign,
  },
  {
    id: "biometric",
    title: "Biometric Check-Ins",
    description:
      "Quick, secure check-ins that verify your participation and wellness milestones. Your data stays private; only eligibility for rewards is shared.",
    icon: Activity,
  },
  {
    id: "social-challenges",
    title: "Social Challenges",
    description:
      "Join team or community challenges to earn bonus refunds and badges. Compete with peers, hit group goals, and unlock higher refund tiers.",
    icon: Users,
  },
] as const;

const INSTANT_CLAIMS_STEPS = [
  {
    id: "scan",
    label: "Scan",
    description: "Scan the QR code at the clinic or event",
    icon: QrCode,
  },
  {
    id: "assess",
    label: "Assess",
    description: "We verify eligibility and activity in seconds",
    icon: ClipboardCheck,
  },
  {
    id: "approve",
    label: "Approve",
    description: "Instant approval when criteria are met",
    icon: CheckCircle2,
  },
  {
    id: "refund-timer",
    label: "Refund Timer Starts",
    description: "Your refund countdown begins immediately",
    icon: Timer,
  },
] as const;

export function GamifiedHealth() {
  return (
    <section className="border-t border-border bg-muted/10">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Gamified Health — How It Works
        </h2>
        <p className="mt-3 text-center text-muted-foreground max-w-2xl mx-auto">
          Unique features that make earning refunds transparent, engaging, and
          instant.
        </p>

        {/* Reward Dashboard */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-foreground mb-6">
            Reward Dashboard
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {REWARD_DASHBOARD_FEATURES.map((feature) => (
              <Card
                key={feature.id}
                className="flex flex-col border-border bg-card overflow-hidden"
              >
                <CardHeader className="pb-2">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary"
                    aria-hidden
                  >
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-base mt-3">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 pt-0">
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Instant Claims flow */}
        <div className="mt-14">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Instant Claims
          </h3>
          <p className="text-sm text-muted-foreground mb-8">
            QR code scanning process — from scan to refund timer in four steps.
          </p>

          <div className="flex flex-col items-center gap-4 md:flex-row md:flex-wrap md:justify-center md:gap-2">
            {INSTANT_CLAIMS_STEPS.map((step, index) => (
              <div
                key={step.id}
                className={cn(
                  "flex items-center gap-3 md:gap-2",
                  index < INSTANT_CLAIMS_STEPS.length - 1 && "md:flex-nowrap"
                )}
              >
                <Card className="w-full min-w-0 border-border bg-card overflow-hidden md:w-[160px]">
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"
                      aria-hidden
                    >
                      <step.icon className="h-5 w-5" />
                    </div>
                    <p className="mt-2 font-semibold text-sm text-foreground">
                      {step.label}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                {index < INSTANT_CLAIMS_STEPS.length - 1 && (
                  <div
                    className="flex shrink-0 items-center justify-center text-muted-foreground/60"
                    aria-hidden
                  >
                    <ArrowRight className="h-5 w-5 rotate-90 md:rotate-0 md:mx-0.5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
