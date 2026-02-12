"use client";

import { useState, useEffect } from "react";
import {
  Boxes,
  DollarSign,
  BarChart3,
  Percent,
  type LucideIcon,
} from "lucide-react";
import LiquidEther from "@/components/canvas/liquid-ether";
import { GradientText } from "@/components/ui/gradient-text";

const metrics: { label: string; icon: LucideIcon }[] = [
  { label: "89 Units Installed", icon: Boxes },
  { label: "$54,791/mo Tech Lease", icon: DollarSign },
  { label: "$650,000 Monthly Gross Capacity", icon: BarChart3 },
  { label: "65% Profit Margin", icon: Percent },
];

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden">
      {/* Full-bleed liquid ether background */}
      <div className="absolute inset-0 z-0">
        {mounted ? (
          <LiquidEther
            colors={["#E0F4FF", "#8FC9E8", "#5B9BD5"]}
            resolution={0.5}
            className="h-full w-full"
          />
        ) : (
          <div className="h-full w-full bg-muted/30" />
        )}
      </div>

      {/* Content block */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pt-20 text-center sm:px-6">
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          RegenPulse Total Wellness & Regenerative Center
        </h1>
        <div className="mt-6 max-w-2xl text-lg sm:text-xl">
          <GradientText
            colors={["#7EC8E3", "#5B9BD5", "#8FC9E8"]}
            className="text-center"
          >
            15 Clinical & Lifestyle Departments | Integrated Technology for
            Regeneration, Recovery & Performance
          </GradientText>
        </div>
      </div>

      {/* Metric bar */}
      <div className="border-t border-border bg-muted/20">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-4 px-4 py-5 sm:gap-8 sm:px-6 md:gap-12">
          {metrics.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex items-center gap-3 text-foreground"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
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
