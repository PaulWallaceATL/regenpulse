"use client";

import {
  Video,
  TrendingUp,
  Smartphone,
  UserPlus,
  FileText,
  Camera,
  CheckCircle2,
  Check,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const DASHBOARD_FEATURES = [
  {
    id: "live-studio",
    title: "Live Streaming Studio",
    description:
      "Go live from any RegenPulse location or from home. Built-in overlays, membership CTAs, and one-click stream to Regen TV.",
    icon: Video,
    placeholderLabel: "Live stream preview",
  },
  {
    id: "revenue-tracker",
    title: "Revenue Tracker",
    description:
      "Real-time earnings by content type, conversion funnel, and payout history. See exactly what you’ve earned and when you get paid.",
    icon: TrendingUp,
    placeholderLabel: "Earnings this month",
  },
  {
    id: "in-app",
    title: "In-App Integration",
    description:
      "Your content appears in the RegenPulse app and on Regen TV. Viewers can join memberships or book visits without leaving the stream.",
    icon: Smartphone,
    placeholderLabel: "App placement",
  },
] as const;

const PROGRAMMING_CATEGORIES = [
  "Live classes (fitness, recovery, yoga)",
  "On-demand programs (multi-week challenges)",
  "Short-form series (tips, demos, mini-workouts)",
  "Live-from-location (clinics, studios, events)",
  "Expert Q&As and wellness panels",
  "Recovery and mobility workshops",
] as const;

const SIGNUP_STEPS = [
  {
    step: 1,
    label: "Create account",
    description: "Sign up with email or social; verify in one click.",
    icon: UserPlus,
  },
  {
    step: 2,
    label: "Accept terms",
    description: "Review creator agreement and revenue share (50/50).",
    icon: FileText,
  },
  {
    step: 3,
    label: "Connect your stream",
    description: "Link your camera or streaming software.",
    icon: Camera,
  },
  {
    step: 4,
    label: "Go live & earn",
    description: "Start streaming; earnings track automatically.",
    icon: CheckCircle2,
  },
] as const;

const CREATOR_TRUST_SIGNALS = [
  "500+ active creators",
  "Weekly payouts",
  "50/50 revenue share, no hidden fees",
  "Stream from 1,289+ locations",
  "Dedicated creator support",
] as const;

export function CreatorFeatures() {
  return (
    <section className="border-t border-border bg-muted/10">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Creator Features
        </h2>
        <p className="mt-3 text-center text-muted-foreground max-w-2xl mx-auto">
          Tools, programming formats, and a simple signup so you can start
          earning on Regen TV.
        </p>

        {/* Mock Creator Dashboard */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Creator Dashboard
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DASHBOARD_FEATURES.map((feature) => (
              <Card
                key={feature.id}
                className="flex flex-col border-border bg-card overflow-hidden"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"
                      aria-hidden
                    >
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-base">
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-1 pt-0">
                  <div
                    className="rounded-lg border border-dashed border-border bg-muted/20 flex items-center justify-center min-h-[100px] mb-4"
                    aria-hidden
                  >
                    <span className="text-xs font-medium text-muted-foreground">
                      {feature.placeholderLabel}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground flex-1">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Original Programming Categories */}
        <div className="mt-14">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Original Programming Categories
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Top-performing formats on Regen TV.
          </p>
          <Card className="border-border">
            <CardContent className="pt-6">
              <ul className="grid gap-2 sm:grid-cols-2">
                {PROGRAMMING_CATEGORIES.map((category) => (
                  <li
                    key={category}
                    className="flex items-center gap-3 text-sm text-foreground"
                  >
                    <span
                      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"
                      aria-hidden
                    >
                      <Check className="h-3 w-3" strokeWidth={2.5} />
                    </span>
                    {category}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* 60-Second Creator Signup Flow */}
        <div className="mt-14">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            60-Second Creator Signup Flow
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            Four simple steps to start streaming and earning.
          </p>
          <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:justify-center md:gap-2">
            {SIGNUP_STEPS.map((item, index) => (
              <div
                key={item.step}
                className={cn(
                  "flex items-center gap-3 md:gap-2",
                  index < SIGNUP_STEPS.length - 1 && "md:flex-nowrap"
                )}
              >
                <Card className="w-full min-w-0 border-border bg-card md:max-w-[200px]">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold text-sm">
                        {item.step}
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-sm text-foreground">
                          {item.label}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                {index < SIGNUP_STEPS.length - 1 && (
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

        {/* Trust signals for creators */}
        <div className="mt-14 rounded-lg border border-border bg-card p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-4">
            Why creators choose Regen TV
          </p>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CREATOR_TRUST_SIGNALS.map((signal) => (
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
