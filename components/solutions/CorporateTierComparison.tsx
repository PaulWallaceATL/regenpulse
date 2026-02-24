"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const CORPORATE_TIERS = [
  {
    tier: "Team",
    contractRange: "$50K – $125K",
    employees: "50 – 200",
    features: [
      "Core platform",
      "Wellness challenges",
      "Basic reporting",
    ],
  },
  {
    tier: "Growth",
    contractRange: "$125K – $250K",
    employees: "200 – 500",
    features: [
      "Everything in Team",
      "Regen TV",
      "Regen Credit",
      "Dedicated CSM",
    ],
  },
  {
    tier: "Enterprise",
    contractRange: "$250K – $500K",
    employees: "500 – 2,000",
    features: [
      "Everything in Growth",
      "Custom programs",
      "API access",
      "White-label",
      "SLA",
    ],
  },
  {
    tier: "Custom",
    contractRange: "$500K+",
    employees: "2,000+",
    features: [
      "Bespoke contract",
      "On-site options",
      "Global rollout",
    ],
  },
] as const;

const ROI_METRICS = [
  { value: "17%", label: "lower healthcare costs" },
  { value: "23%", label: "higher productivity" },
  { value: "89%", label: "employee participation" },
] as const;

export function CorporateTierComparison() {
  return (
    <section id="corporate-wellness-content" className="bg-white dark:bg-neutral-950 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-3xl">
            Corporate Tier Structure
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Enterprise wellness programs with guaranteed ROI. Tiered pricing to fit your size and goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {CORPORATE_TIERS.map((tier, i) => (
            <motion.div
              key={tier.tier}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
            >
              <Card
                className={cn(
                  "h-full border-neutral-200/80 dark:border-neutral-800",
                  i === 1 && "ring-2 ring-primary/20 dark:ring-primary/30"
                )}
              >
                <CardContent className="p-6">
                  <div className="font-semibold text-lg text-neutral-900 dark:text-white">
                    {tier.tier}
                  </div>
                  <div className="mt-2 text-2xl font-bold text-neutral-900 dark:text-white">
                    {tier.contractRange}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {tier.employees} employees
                  </p>
                  <ul className="mt-4 space-y-2">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300"
                      >
                        <Check className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-500 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="mt-14 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/50 p-8 md:p-10"
        >
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6 text-center">
            Guaranteed ROI
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {ROI_METRICS.map((m) => (
              <div key={m.label}>
                <div className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
                  {m.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{m.label}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            Based on aggregate program outcomes. Terms in master agreement.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
