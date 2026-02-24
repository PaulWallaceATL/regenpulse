"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const TIERS = ["Essential", "Performance", "Regeneration", "Elite", "Platinum"] as const;
type TierId = (typeof TIERS)[number];

const TIER_DESCRIPTIONS: Record<TierId, string> = {
  Essential:
    "Core membership — everything above included. No tier-specific add-ons; full access to core features only.",
  Performance: "For members focused on fitness and recovery.",
  Regeneration: "Advanced wellness and longevity support.",
  Elite: "Premium access and concierge-style care.",
  Platinum: "Our highest level of access and benefits.",
};

const CORE_FEATURES = [
  "Access to all RegenPulse partner locations",
  "Online booking and appointment management",
  "Member-only pricing on select services",
  "Insurance verification support",
  "Monthly wellness tips and resources",
  "Customer support via email and chat",
  "Secure health data and privacy standards",
];

const PERFORMANCE_BENEFITS = [
  "Priority booking at Performance & Recovery departments",
  "2 complimentary recovery assessments per year",
  "10% discount on performance packages",
  "Access to member-only recovery workshops",
  "Quarterly progress check-ins with a wellness coach",
];

const REGENERATION_BENEFITS = [
  "Regenerative therapy consultations (2 per year)",
  "15% discount on regenerative treatments",
  "Longevity and biomarker discussion sessions",
  "Access to Regeneration department open-house events",
  "Preferred scheduling for IV therapy and recovery suites",
];

const ELITE_BENEFITS = [
  "Dedicated member concierge for scheduling and questions",
  "20% discount across all eligible services",
  "4 complimentary premium assessments per year",
  "Invitations to exclusive member events and seminars",
  "Priority waitlist for high-demand time slots",
  "Complimentary guest pass (1 per quarter)",
];

const PLATINUM_BENEFITS = [
  "Unlimited premium assessments (subject to availability)",
  "25% discount on all services",
  "White-glove onboarding and annual planning session",
  "First access to new programs and pilot offerings",
  "Quarterly 1:1 strategy calls with a wellness advisor",
  "2 guest passes per quarter",
  "Recognition in partner locations (optional)",
];

type FeatureRow = {
  name: string;
  includedByTier: Record<TierId, boolean>;
};

function buildFeatureRows(): FeatureRow[] {
  const rows: FeatureRow[] = [];
  const allFalse: Record<TierId, boolean> = {
    Essential: false,
    Performance: false,
    Regeneration: false,
    Elite: false,
    Platinum: false,
  };

  CORE_FEATURES.forEach((name) => {
    rows.push({
      name,
      includedByTier: { ...allFalse, Essential: true, Performance: true, Regeneration: true, Elite: true, Platinum: true },
    });
  });

  PERFORMANCE_BENEFITS.forEach((name) => {
    rows.push({
      name,
      includedByTier: { ...allFalse, Performance: true, Regeneration: true, Elite: true, Platinum: true },
    });
  });

  REGENERATION_BENEFITS.forEach((name) => {
    rows.push({
      name,
      includedByTier: { ...allFalse, Regeneration: true, Elite: true, Platinum: true },
    });
  });

  ELITE_BENEFITS.forEach((name) => {
    rows.push({
      name,
      includedByTier: { ...allFalse, Elite: true, Platinum: true },
    });
  });

  PLATINUM_BENEFITS.forEach((name) => {
    rows.push({
      name,
      includedByTier: { ...allFalse, Platinum: true },
    });
  });

  return rows;
}

const FEATURE_ROWS = buildFeatureRows();

export function MembershipComparison() {
  return (
    <section
      id="tier-comparison"
      className="relative w-full bg-background px-4 py-12 md:py-16"
      aria-labelledby="comparison-heading"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <h2
              id="comparison-heading"
              className="mb-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              Compare membership tiers
            </h2>
            <p className="mb-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Every tier includes core access to partner locations, booking, and
              member pricing. Higher tiers add priority booking, assessments,
              discounts, and concierge-style benefits.
            </p>
            <div className="flex flex-wrap gap-3">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3.5 text-base font-medium text-background transition-colors hover:bg-foreground/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  Book a Consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Comparison Table (scrollable on small screens) */}
          <div className="w-full overflow-hidden">
            <p className="mb-3 text-xs text-muted-foreground lg:sr-only">
              Swipe or scroll horizontally to compare all tiers.
            </p>
            <div
              className="overflow-x-auto pb-2 scroll-smooth max-lg:pr-8"
              style={{
                maskImage: "linear-gradient(to right, black 0%, black 75%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to right, black 0%, black 75%, transparent 100%)",
              }}
            >
              <table className="w-full min-w-[680px] border-collapse text-left">
                <thead>
                  <tr>
                    <th scope="col" className="sticky left-0 z-10 w-[200px] bg-background py-3 pr-4 text-sm font-semibold text-foreground">
                      Benefit
                    </th>
                    {TIERS.map((tier, i) => (
                      <th
                        key={tier}
                        scope="col"
                        className="min-w-[100px] py-3 px-2 text-center text-sm font-semibold text-foreground"
                      >
                        <motion.span
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.05 * (i + 1) }}
                          className="block"
                        >
                          {tier}
                        </motion.span>
                        <p className="mt-1 hidden text-xs font-normal text-muted-foreground lg:block">
                          {TIER_DESCRIPTIONS[tier].slice(0, 40)}
                          {TIER_DESCRIPTIONS[tier].length > 40 ? "…" : ""}
                        </p>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {FEATURE_ROWS.map((row, index) => (
                    <motion.tr
                      key={row.name}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: Math.min(0.02 * index, 0.4) }}
                      className="border-b border-border"
                    >
                      <td className="sticky left-0 z-10 bg-background py-3 pr-4">
                        <span className="text-sm font-medium text-foreground">
                          {row.name}
                        </span>
                      </td>
                      {TIERS.map((tier) => {
                        const included = row.includedByTier[tier];
                        return (
                          <td
                            key={tier}
                            className="min-w-[100px] py-3 px-2 text-center"
                          >
                            <div
                              className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md ${
                                included
                                  ? "bg-foreground text-background"
                                  : "border-2 border-muted-foreground/30 bg-transparent"
                              }`}
                              aria-hidden
                            >
                              {included && (
                                <Check
                                  className="h-3.5 w-3.5"
                                  strokeWidth={3}
                                />
                              )}
                            </div>
                          </td>
                        );
                      })}
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-6 text-center">
              <Link
                href="/contact"
                className="text-sm font-medium text-primary underline underline-offset-4 hover:text-primary/90"
              >
                Questions? Talk to a wellness advisor
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
