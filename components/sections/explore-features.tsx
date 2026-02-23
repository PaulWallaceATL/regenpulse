"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Activity,
  BadgeDollarSign,
  BookOpen,
  Building2,
  Handshake,
  HeartPulse,
  ShoppingBag,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type FeatureItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
};

const features: FeatureItem[] = [
  {
    icon: Activity,
    title: "Departments",
    description: "Clinical and lifestyle services built around whole-body recovery.",
    href: "/departments",
  },
  {
    icon: HeartPulse,
    title: "Memberships",
    description: "Tiered plans that support prevention, performance, and longevity.",
    href: "/memberships",
  },
  {
    icon: Handshake,
    title: "Partner Network",
    description: "Connected providers extending care across local communities.",
    href: "/partner-network",
  },
  {
    icon: Building2,
    title: "Corporate Wellness",
    description: "Workforce programs that improve outcomes and reduce total costs.",
    href: "/corporate-wellness",
  },
  {
    icon: BookOpen,
    title: "Regen University",
    description: "Training and certification pathways for modern regenerative care.",
    href: "/regen-university",
  },
  {
    icon: ShoppingBag,
    title: "Regen Mart",
    description: "Curated products and recovery tools for day-to-day performance.",
    href: "/regen-mart",
  },
  {
    icon: UtensilsCrossed,
    title: "Regen Fresh",
    description: "Nutrition programs that reinforce better healing and mobility.",
    href: "/regen-fresh",
  },
  {
    icon: BadgeDollarSign,
    title: "Cost Plus RX",
    description: "Transparent medication pricing that keeps care accessible.",
    href: "/cost-plus-rx",
  },
];

export function ExploreFeaturesSection() {
  return (
    <section className="brand-section">
      <div className="container mx-auto px-4 py-12 sm:px-6 md:py-16">
        <div className="mx-auto max-w-6xl rounded-3xl border border-border/60 bg-neutral-950 px-6 py-10 text-white sm:px-8 md:px-10 md:py-12">
          <div className="mb-10 md:mb-12">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="text-sm text-slate-300"
            >
              Platform Experiences
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl"
            >
              Explore RegenPulse
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="mt-4 max-w-2xl text-sm text-slate-300 sm:text-base"
            >
              Explore programs, services, and platform experiences supporting
              better health, mobility, and life-changing outcomes.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="group"
                >
                  <Link href={feature.href} className="block">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 transition-colors group-hover:bg-white/10">
                        <Icon className="h-5 w-5 text-white" aria-hidden />
                      </div>
                      <h3 className="text-base font-medium tracking-tight text-white">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="mt-3 max-w-[28ch] text-sm leading-relaxed text-slate-300">
                      {feature.description}
                    </p>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 border-t border-white/15 pt-8">
            <Button asChild>
              <Link href="/partner-network">View Kentucky Network Plan</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/departments">Browse Departments</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
