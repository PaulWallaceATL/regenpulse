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
  Wind,
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
    icon: Wind,
    title: "HBOT + EXOPOD",
    description: "Hyperbaric oxygen therapy and stacked recovery modalities in one membership.",
    href: "/services/hbot-exopod",
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
    title: "REAL University",
    description: "Training and certification pathways for modern regenerative care.",
    href: "/real-university",
  },
  {
    icon: ShoppingBag,
    title: "REAL Mart",
    description: "Curated products and recovery tools for day-to-day performance.",
    href: "/real-mart",
  },
  {
    icon: UtensilsCrossed,
    title: "REAL Fresh",
    description: "Nutrition programs that reinforce better healing and mobility.",
    href: "/real-fresh",
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
    <section className="relative overflow-hidden bg-neutral-950 py-16 md:py-20">
      {/* Background video — oxygen bubbles */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          aria-hidden="true"
        >
          <source src="/videos/oxygen-bubbles-hero.mp4" type="video/mp4" />
        </video>
      </div>
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/90 via-neutral-950/75 to-neutral-950/85" aria-hidden="true" />

      {/* Content on top */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="mb-12 md:mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="text-sm text-slate-400"
          >
            Services & Programs
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Explore REAL PT & Wellness
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="mt-4 max-w-2xl text-sm text-slate-300 sm:text-base"
          >
            PT, aquatic therapy, and recovery services—plus memberships and programs
            designed to support better movement, recovery, and wellness.
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
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 backdrop-blur-sm transition-colors group-hover:bg-white/20">
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

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3 border-t border-white/10 pt-8">
          <Button asChild>
            <Link href="/partner-network">View Kentucky Network Plan</Link>
          </Button>
          <Button variant="outline" asChild className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white">
            <Link href="/departments">Browse Departments</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
