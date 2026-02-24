"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const GOVERNMENT_TIERS = [
  {
    tier: "Agency",
    contractRange: "Custom quote",
    scope: "Single agency or department",
    features: ["Core platform", "Compliance reporting", "Dedicated support"],
  },
  {
    tier: "Multi-Agency",
    contractRange: "Custom quote",
    scope: "Multiple agencies or statewide",
    features: ["Everything in Agency", "Central dashboard", "SLA", "Custom integrations"],
  },
  {
    tier: "Federal / National",
    contractRange: "Custom quote",
    scope: "Federal or multi-state rollout",
    features: ["Bespoke contract", "On-site options", "Global rollout", "GSA-style terms"],
  },
] as const;

export function GovernmentPricingSection() {
  return (
    <section id="government-pricing" className="bg-white dark:bg-neutral-950 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-3xl">
            Government Program Tiers
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Scalable programs for public sector workforce wellness. Contact us for contract terms and pricing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GOVERNMENT_TIERS.map((tier, i) => (
            <motion.div
              key={tier.tier}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
            >
              <Card className="h-full border-neutral-200/80 dark:border-neutral-800">
                <CardContent className="p-6">
                  <div className="font-semibold text-lg text-neutral-900 dark:text-white">
                    {tier.tier}
                  </div>
                  <div className="mt-2 text-lg font-semibold text-neutral-700 dark:text-neutral-300">
                    {tier.contractRange}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{tier.scope}</p>
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
      </div>
    </section>
  );
}
