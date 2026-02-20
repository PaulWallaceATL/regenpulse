"use client";

import { useState, useEffect } from "react";
import {
  Boxes,
  DollarSign,
  BarChart3,
  Percent,
  type LucideIcon,
} from "lucide-react";
import RisingLines from "@/components/canvas/rising-lines";
import { GradientText } from "@/components/ui/gradient-text";

const metrics: { label: string; icon: LucideIcon }[] = [
  { label: "89 Units Installed", icon: Boxes },
  { label: "$54,791/mo Tech Lease", icon: DollarSign },
  { label: "$650,000 Monthly Gross Capacity", icon: BarChart3 },
  { label: "65% Profit Margin", icon: Percent },
];

const BRAND_COLORS = {
  primary: "#5B9BD5",
  light: "#8FC9E8",
  accent: "#7EC8E3",
};

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-[#0c1628]">
      {/* Rising lines background – brand colors */}
      <div className="absolute inset-0 z-0">
        {mounted ? (
          <RisingLines
            color={BRAND_COLORS.primary}
            horizonColor={BRAND_COLORS.primary}
            haloColor={BRAND_COLORS.light}
            riseSpeed={0.08}
            flowSpeed={0.15}
            brightness={1.2}
            className="h-full w-full"
          />
        ) : (
          <div className="h-full w-full bg-[#0c1628]" />
        )}
      </div>

      {/* Content block */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pt-20 text-center sm:px-6">
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          RegenPulse Total Wellness & Regenerative Center
        </h1>
        <div className="mt-6 max-w-2xl text-lg sm:text-xl">
          <GradientText
            colors={[BRAND_COLORS.accent, BRAND_COLORS.primary, BRAND_COLORS.light]}
            className="text-center"
          >
            15 Clinical & Lifestyle Departments | Integrated Technology for
            Regeneration, Recovery & Performance
          </GradientText>
        </div>
      </div>

      {/* Metric bar */}
      <div className="relative z-10 border-t border-white/20 bg-black/20">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-4 px-4 py-5 sm:gap-8 sm:px-6 md:gap-12">
          {metrics.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex items-center gap-3 text-white"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15 text-[#8FC9E8]">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <span className="text-xs font-medium sm:text-sm md:text-base">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
