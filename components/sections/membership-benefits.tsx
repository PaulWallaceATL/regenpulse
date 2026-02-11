"use client";

import { Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const CORE_FEATURES = [
  "Access to all RegenPulse partner locations",
  "Online booking and appointment management",
  "Member-only pricing on select services",
  "Insurance verification support",
  "Monthly wellness tips and resources",
  "Customer support via email and chat",
  "Secure health data and privacy standards",
];

const TIER_BENEFITS: Record<
  string,
  { tagline?: string; benefits: string[] }
> = {
  Essential: {
    tagline: "Core membership — everything above included.",
    benefits: [
      "No tier-specific add-ons; full access to core features only.",
    ],
  },
  Performance: {
    tagline: "For members focused on fitness and recovery.",
    benefits: [
      "Priority booking at Performance & Recovery departments",
      "2 complimentary recovery assessments per year",
      "10% discount on performance packages",
      "Access to member-only recovery workshops",
      "Quarterly progress check-ins with a wellness coach",
    ],
  },
  Regeneration: {
    tagline: "Advanced wellness and longevity support.",
    benefits: [
      "All Performance benefits, plus:",
      "Regenerative therapy consultations (2 per year)",
      "15% discount on regenerative treatments",
      "Longevity and biomarker discussion sessions",
      "Access to Regeneration department open-house events",
      "Preferred scheduling for IV therapy and recovery suites",
    ],
  },
  Elite: {
    tagline: "Premium access and concierge-style care.",
    benefits: [
      "All Regeneration benefits, plus:",
      "Dedicated member concierge for scheduling and questions",
      "20% discount across all eligible services",
      "4 complimentary premium assessments per year",
      "Invitations to exclusive member events and seminars",
      "Priority waitlist for high-demand time slots",
      "Complimentary guest pass (1 per quarter)",
    ],
  },
  Platinum: {
    tagline: "Our highest level of access and benefits.",
    benefits: [
      "All Elite benefits, plus:",
      "Unlimited premium assessments (subject to availability)",
      "25% discount on all services",
      "White-glove onboarding and annual planning session",
      "First access to new programs and pilot offerings",
      "Quarterly 1:1 strategy calls with a wellness advisor",
      "2 guest passes per quarter",
      "Recognition in partner locations (optional)",
    ],
  },
};

export function MembershipBenefits() {
  return (
    <section className="border-t border-border bg-muted/10">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Membership Benefits
        </h2>
        <p className="mt-3 text-center text-muted-foreground">
          Compare what’s included at every level.
        </p>

        {/* Core Features (All Tiers) */}
        <Card className="mt-10 border-border bg-card">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-foreground">
              Core Features (All Tiers)
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Every membership includes these benefits.
            </p>
          </CardHeader>
          <CardContent>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {CORE_FEATURES.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm text-foreground"
                >
                  <span
                    className="mt-0.5 shrink-0 rounded-full bg-primary/10 p-0.5 text-primary"
                    aria-hidden
                  >
                    <Check className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Tier-Specific Benefits */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold tracking-tight text-foreground">
            Tier-Specific Benefits
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Additional perks by membership level. Expand a tier to see its
            benefits.
          </p>
          <Accordion
            type="single"
            collapsible
            defaultValue="Performance"
            className="mt-6 rounded-lg border border-border bg-card"
          >
            {Object.entries(TIER_BENEFITS).map(([tierName, { tagline, benefits }]) => (
              <AccordionItem
                key={tierName}
                value={tierName}
                className="border-border px-4 last:border-b-0"
              >
                <AccordionTrigger className="py-4 text-left font-medium hover:no-underline [&[data-state=open]]:border-b [&[data-state=open]]:border-border [&[data-state=open]]:pb-4">
                  <span className="flex items-center gap-2">
                    <span
                      className={cn(
                        "rounded px-2 py-0.5 text-xs font-medium",
                        tierName === "Platinum" && "bg-primary/15 text-primary",
                        tierName === "Elite" && "bg-primary/10 text-primary",
                        tierName === "Regeneration" && "bg-muted text-muted-foreground",
                        tierName === "Performance" && "bg-muted text-muted-foreground",
                        tierName === "Essential" && "bg-muted/80 text-muted-foreground"
                      )}
                    >
                      {tierName}
                    </span>
                    {tagline && (
                      <span className="hidden text-muted-foreground font-normal sm:inline">
                        — {tagline}
                      </span>
                    )}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-4 pt-0">
                  <ul className="space-y-2 pl-1">
                    {benefits.map((benefit, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                          strokeWidth={2.5}
                          aria-hidden
                        />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
