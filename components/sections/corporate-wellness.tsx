"use client";

import { useRef } from "react";
import { Trophy, Store, Gift, ClipboardCheck, LayoutDashboard, Zap, FileSignature, ArrowRight, Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

const CORPORATE_TIERS = [
  {
    tier: "Team",
    contractRange: "$50K – $125K",
    employees: "50 – 200",
    highlights: "Core platform, wellness challenges, basic reporting",
  },
  {
    tier: "Growth",
    contractRange: "$125K – $250K",
    employees: "200 – 500",
    highlights: "+ Regen TV, Regen Credit, dedicated CSM",
  },
  {
    tier: "Enterprise",
    contractRange: "$250K – $500K",
    employees: "500 – 2,000",
    highlights: "+ Custom programs, API, white-label, SLA",
  },
  {
    tier: "Custom",
    contractRange: "$500K+",
    employees: "2,000+",
    highlights: "Bespoke contract, on-site options, global rollout",
  },
] as const;

const ROI_METRICS = [
  { value: "17%", label: "lower healthcare costs" },
  { value: "23%", label: "higher productivity" },
  { value: "89%", label: "employee participation" },
] as const;

const ENGAGEMENT_ITEMS = [
  {
    id: "leaderboards",
    title: "Corporate Leaderboards",
    description: "Company-wide and team rankings drive friendly competition. Employees see their standing and can opt in to challenges.",
    icon: Trophy,
  },
  {
    id: "popups",
    title: "On-Site Popups",
    description: "We set up pop-up wellness stations at your locations—screenings, sign-ups, and demos—to maximize reach and participation.",
    icon: Store,
  },
  {
    id: "incentives",
    title: "Incentives",
    description: "Configurable rewards: premium refunds, merch, extra PTO, or charity matching. Tie incentives to milestones and challenges.",
    icon: Gift,
  },
] as const;

const CLOSE_MODEL_STEPS = [
  { step: 1, label: "Wellness Audit", description: "Free assessment of your workforce and current wellness spend.", icon: ClipboardCheck },
  { step: 2, label: "Custom Dashboard", description: "Proposal with ROI projections and a tailored program view.", icon: LayoutDashboard },
  { step: 3, label: "Popup Pilot", description: "Short on-site pilot to validate engagement before full rollout.", icon: Zap },
  { step: 4, label: "3-Year Contract", description: "Sign and launch; we handle onboarding and ongoing support.", icon: FileSignature },
] as const;

const TARGET_VERTICALS = ["Manufacturing", "Healthcare", "Logistics", "Construction"] as const;

export function CorporateWellness() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollAnimation(sectionRef, {
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0, duration: 0.5 },
    scrollTrigger: { start: "top 88%" },
  });

  return (
    <section ref={sectionRef} className="brand-section">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Corporate Wellness | 3-Year Contracts | $50K – $500K Per Company
        </h2>
        <p className="mt-3 text-center text-muted-foreground max-w-2xl mx-auto">
          Enterprise wellness programs with guaranteed ROI. Tiered pricing to
          fit your size and goals.
        </p>

        {/* Corporate Tier Structure */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Corporate Tier Structure
          </h3>
          <Card className="border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="font-semibold text-foreground">
                    Tier
                  </TableHead>
                  <TableHead className="font-semibold text-foreground">
                    Contract (annual)
                  </TableHead>
                  <TableHead className="font-semibold text-foreground">
                    Employees
                  </TableHead>
                  <TableHead className="font-semibold text-foreground">
                    Key features
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {CORPORATE_TIERS.map((row) => (
                  <TableRow key={row.tier}>
                    <TableCell className="font-medium">{row.tier}</TableCell>
                    <TableCell className="tabular-nums">
                      {row.contractRange}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {row.employees}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {row.highlights}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>

        {/* Guaranteed ROI */}
        <div className="mt-10">
          <Card className="border-border border-primary/20 bg-primary/5 overflow-hidden">
            <CardContent className="pt-6 pb-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-4">
                Guaranteed ROI
              </p>
              <div className="grid gap-6 sm:grid-cols-3">
                {ROI_METRICS.map((metric) => (
                  <div key={metric.label} className="text-center sm:text-left">
                    <p className="text-3xl font-bold tabular-nums text-foreground">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Based on aggregate program outcomes. Terms in master agreement.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Employee Engagement Engine */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Employee Engagement Engine
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ENGAGEMENT_ITEMS.map((item) => (
              <Card key={item.id} className="border-border">
                <CardContent className="pt-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary mb-3">
                    <item.icon className="h-5 w-5" aria-hidden />
                  </div>
                  <p className="font-semibold text-foreground">{item.title}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 30-Day Close Model */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            30-Day Close Model
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            From first touch to signed contract in four steps.
          </p>
          <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:justify-center md:gap-2">
            {CLOSE_MODEL_STEPS.map((s, index) => (
              <div
                key={s.step}
                className={cn(
                  "flex items-center gap-3 md:gap-2",
                  index < CLOSE_MODEL_STEPS.length - 1 && "md:flex-nowrap"
                )}
              >
                <Card className="w-full min-w-0 border-border md:max-w-[200px]">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold text-sm">
                        {s.step}
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-sm text-foreground">
                          {s.label}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {s.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                {index < CLOSE_MODEL_STEPS.length - 1 && (
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

        {/* Target verticals */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Target verticals
          </h3>
          <ul className="flex flex-wrap gap-3">
            {TARGET_VERTICALS.map((vertical) => (
              <li key={vertical}>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground">
                  <Check className="h-4 w-4 text-primary" aria-hidden />
                  {vertical}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" className="gap-2">
            Free Wellness Audit
            <span aria-hidden>→</span>
            Book Now
          </Button>
        </div>
      </div>
    </section>
  );
}
