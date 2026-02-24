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

type PricingMembershipsProps = {
  /** When provided (e.g. on /memberships page), all plan CTAs use this href instead of plan.ctaHref */
  ctaHrefOverride?: string;
  /** When false, hide the "Department access & pricing" block (e.g. on standalone memberships page) */
  showDepartmentAccess?: boolean;
};

export default function PricingMemberships({
  ctaHrefOverride,
  showDepartmentAccess = true,
}: PricingMembershipsProps = {}) {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  // NOTE: Features sourced from /memberships page (membership-benefits.tsx).
  // Prices: monthly / annual-equivalent-per-month (billed annually).
  const plans: Plan[] = useMemo(
    () => [
      {
        name: "Essential",
        price: { monthly: 1800, annual: 1500 },
        description:
          "Core access to start your wellness journey — everything you need, nothing you don't.",
        features: [
          "Access to all RegenPulse locations",
          "Online booking & appointment management",
          "Member-only pricing on select services",
          "Insurance verification support",
          "Monthly wellness tips & resources",
          "Customer support via email & chat",
        ],
        ctaLabel: "Start Essential",
        ctaHref: ctaHrefOverride ?? "/memberships",
      },
      {
        name: "Performance",
        price: { monthly: 2500, annual: 2100 },
        description:
          "Built for members focused on fitness and recovery — priority access and real accountability.",
        features: [
          "Everything in Essential",
          "Priority booking at Performance & Recovery",
          "2 complimentary recovery assessments / year",
          "10% discount on performance packages",
          "Access to member-only recovery workshops",
          "Quarterly check-ins with a wellness coach",
        ],
        popular: true,
        ctaLabel: "Join Performance",
        ctaHref: ctaHrefOverride ?? "/memberships",
      },
      {
        name: "Concierge",
        price: { monthly: 3200, annual: 2700 },
        description:
          "Premium, concierge-style care for members who want white-glove support and maximum access.",
        features: [
          "Everything in Performance",
          "Dedicated member concierge",
          "20% discount across all eligible services",
          "4 complimentary premium assessments / year",
          "Exclusive member events & seminars",
          "Complimentary guest pass each quarter",
        ],
        ctaLabel: "Talk to Us",
        ctaHref: ctaHrefOverride ?? "/memberships",
      },
    ],
    [ctaHrefOverride],
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

  // Department access pricing (from Explore Departments)
  const departments = useMemo(
    () => [
      {
        name: "Diagnostics",
        monthlyPrice: 1800,
        highlights: ["PNOE", "DEXA", "Vitals"],
        caption: "Assessment & screening",
      },
      {
        name: "Recovery",
        monthlyPrice: 2500,
        highlights: ["HBOT", "Cryo", "Compression"],
        caption: "Core recovery tech",
      },
      {
        name: "Rehab & Strength",
        monthlyPrice: 2200,
        highlights: ["Speediance", "Storz", "Olympic"],
        caption: "Therapeutic strength",
      },
    ],
    [],
  );

  function scrollToExploreDepartments() {
    document.getElementById("explore-departments")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      id="memberships"
      className="relative z-10 w-full flex flex-col items-center justify-center overflow-hidden bg-white py-16 px-4 dark:bg-neutral-950 sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-[1400px] flex flex-col items-center relative z-10">
        <div className="mb-10 space-y-4 text-center">
          <p className="inline-block rounded-full border border-neutral-200 bg-neutral-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400">
            Membership Plans
          </p>
          <h2 className="text-4xl font-medium leading-[1.1] tracking-tight text-neutral-900 dark:text-white sm:text-6xl">
            Memberships that make consistency effortless.
          </h2>
          <p className="mx-auto max-w-2xl text-base text-neutral-600 dark:text-neutral-300 sm:text-lg">
            Choose a plan that matches your goals—recovery, performance, or
            longevity—then build momentum with structured access.
          </p>
        </div>

        <div className="mb-12 flex flex-col items-center justify-center gap-3">
          {billingCycle === "annual" && (
            <p className="text-xs font-medium text-primary">
              Save up to 20% with annual billing
            </p>
          )}
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
                  {(billingCycle === "monthly"
                    ? plan.price.monthly
                    : plan.price.annual
                  ).toLocaleString()}
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

        {/* Department access pricing — hidden on standalone memberships page */}
        {showDepartmentAccess && (
        <div className="mt-20 w-full max-w-6xl">
          <h3 className="text-center text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-3xl">
            Department access & pricing
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-neutral-600 dark:text-neutral-300 sm:text-base">
            Monthly access by department. View full equipment lists and sort by department, function, or cost below.
          </p>
          <motion.div
            className="mt-10 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {departments.map((dept) => (
              <motion.div
                key={dept.name}
                variants={itemVariants}
                className="relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:text-white"
              >
                <h4 className="text-xl font-medium text-neutral-900 dark:text-white">
                  {dept.name}
                </h4>
                <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                  {dept.highlights.join(", ")}
                </p>
                <p className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white">
                  ${dept.monthlyPrice.toLocaleString()}
                  <span className="text-sm font-normal text-neutral-500 dark:text-neutral-400">/mo</span>
                </p>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                  {dept.caption}
                </p>
                <button
                  type="button"
                  onClick={scrollToExploreDepartments}
                  className="mt-6 w-full rounded-xl border-2 border-primary/30 bg-primary/5 py-3 text-center text-sm font-medium text-primary transition-colors hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:bg-primary/10 dark:hover:bg-primary/15"
                >
                  View Full Equipment List
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
        )}
      </div>
    </section>
  );
}
