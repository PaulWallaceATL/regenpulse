"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

// TODO: Update these values to real RegenPulse membership pricing.
// Keep numbers as integers for clean formatting.
type BillingCycle = "monthly" | "annual";

type Plan = {
  name: string;
  price: { monthly: number; annual: number };
  description: string;
  features: string[];
  popular?: boolean;
  ctaLabel: string;
  ctaHref: string;
};

export default function PricingMemberships() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  // NOTE: Keep plan copy consumer-facing (benefits, outcomes, access).
  const plans: Plan[] = useMemo(
    () => [
      {
        name: "Essentials",
        price: { monthly: 149, annual: 129 }, // TODO
        description:
          "For staying consistent—baseline recovery and monthly check-ins to keep you progressing.",
        features: [
          "Monthly recovery session credits",
          "Member-only pricing on add-ons",
          "Foundational diagnostics add-on access",
          "Protocol guidance & tracking",
        ],
        ctaLabel: "Start Essentials",
        ctaHref: "/contact", // TODO: replace with membership checkout if it exists
      },
      {
        name: "Performance",
        price: { monthly: 249, annual: 219 }, // TODO
        description:
          "Our most popular plan—performance recovery, deeper insights, and the structure to make it stick.",
        features: [
          "More monthly modality credits",
          "Priority booking windows",
          "Quarterly baseline diagnostics review",
          "Personalized protocol recommendations",
          "Best-value member add-on pricing",
        ],
        popular: true,
        ctaLabel: "Join Performance",
        ctaHref: "/contact", // TODO
      },
      {
        name: "Concierge",
        price: { monthly: 399, annual: 349 }, // TODO
        description:
          "High-touch support for longevity-focused members who want a proactive, guided plan.",
        features: [
          "Highest monthly credit allotment",
          "Protocol concierge support",
          "Advanced diagnostics access",
          "VIP scheduling & priority support",
          "Invitation-only events & partner perks",
        ],
        ctaLabel: "Talk to Us",
        ctaHref: "/contact",
      },
    ],
    [],
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  return (
    <section
      id="memberships"
      className="relative z-10 w-full flex flex-col items-center justify-center overflow-hidden bg-white py-16 px-4 dark:bg-neutral-950 sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-[1400px] flex flex-col items-center relative z-10">
        <div className="mb-10 space-y-4 text-center">
          <h2 className="text-4xl font-medium leading-[1.1] tracking-tight text-neutral-900 dark:text-white sm:text-6xl">
            Memberships that make consistency effortless.
          </h2>
          <p className="mx-auto max-w-2xl text-base text-neutral-600 dark:text-neutral-300 sm:text-lg">
            Choose a plan that matches your goals—recovery, performance, or
            longevity—then build momentum with structured access.
          </p>
        </div>

        <div className="mb-12 flex items-center justify-center">
          <div className="relative flex w-60 items-center rounded-full border border-neutral-200 p-1 dark:border-neutral-800">
            <motion.div
              className="absolute top-1 bottom-1 w-[calc(50%-0.25rem)] rounded-full shadow-sm bg-primary"
              style={{ left: "0.25rem" }}
              animate={{ x: billingCycle === "monthly" ? 0 : "100%" }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 35,
                mass: 0.8,
              }}
              aria-hidden
            />
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              className={`relative z-10 flex-1 rounded-full py-2 text-center text-sm font-medium transition-colors duration-200 ${
                billingCycle === "monthly"
                  ? "text-primary-foreground"
                  : "text-neutral-500 dark:text-neutral-400"
              }`}
              aria-pressed={billingCycle === "monthly"}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle("annual")}
              className={`relative z-10 flex-1 rounded-full py-2 text-center text-sm font-medium transition-colors duration-200 ${
                billingCycle === "annual"
                  ? "text-primary-foreground"
                  : "text-neutral-500 dark:text-neutral-400"
              }`}
              aria-pressed={billingCycle === "annual"}
            >
              Annual
            </button>
          </div>
        </div>

        <motion.div
          className="grid w-full max-w-6xl grid-cols-1 gap-6 items-center lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              className={`
                relative flex flex-col overflow-hidden rounded-2xl p-6
                ${
                  plan.popular
                    ? "bg-gradient-to-t from-primary/20 to-transparent shadow-xl ring-1 ring-primary/20 dark:from-primary/15 lg:-my-4 lg:py-6 lg:z-10"
                    : "border border-neutral-200 bg-white text-neutral-900 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:text-white"
                }
              `}
            >
              <div className="relative z-10 mb-4 flex items-center justify-between">
                <h3
                  className={`text-xl font-medium ${
                    plan.popular
                      ? "text-primary"
                      : "text-neutral-600 dark:text-neutral-400"
                  }`}
                >
                  {plan.name}
                </h3>
                {plan.popular && (
                  <span className="rounded-full bg-neutral-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary dark:bg-white/5">
                    Most Popular
                  </span>
                )}
              </div>

              <div className="relative z-10 mb-3 flex items-baseline gap-2">
                <span className="text-4xl font-medium tracking-tight text-neutral-900 dark:text-white">
                  $
                  {billingCycle === "monthly"
                    ? plan.price.monthly
                    : plan.price.annual}
                </span>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">
                  /mo
                </span>
              </div>

              <p className="relative z-10 mb-6 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                {plan.description}
              </p>

              <Link
                href={plan.ctaHref}
                className="relative z-10 mb-7 w-full rounded-xl bg-primary py-3.5 text-center font-medium text-primary-foreground transition-all duration-200 hover:opacity-95 hover:scale-[1.02]"
              >
                {plan.ctaLabel}
              </Link>

              <div className="relative z-10 space-y-4">
                <p className="text-sm font-medium text-neutral-900 dark:text-white">
                  What&apos;s included:
                </p>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span
                        className={`rounded-full p-1 ${
                          plan.popular
                            ? "bg-primary text-primary-foreground"
                            : "bg-neutral-900 text-white dark:bg-white dark:text-black"
                        }`}
                      >
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span className="text-sm text-neutral-600 dark:text-neutral-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {billingCycle === "annual" && (
                <p className="relative z-10 mt-6 text-xs text-neutral-500 dark:text-neutral-400">
                  Annual billing shown as a discounted monthly equivalent.
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-10 max-w-2xl text-center text-sm text-neutral-500 dark:text-neutral-400">
          Not sure which plan fits?{" "}
          <Link
            href="/contact"
            className="underline underline-offset-4 hover:text-primary"
          >
            Book a quick consult
          </Link>{" "}
          and we&apos;ll recommend a protocol based on your goals.
        </p>
      </div>
    </section>
  );
}
