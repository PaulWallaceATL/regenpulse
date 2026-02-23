"use client";

import {
  Building2,
  Compass,
  MapPinned,
  Mountain,
  type LucideIcon,
} from "lucide-react";
import LiquidEther from "@/components/canvas/liquid-ether";
import { GradientText } from "@/components/ui/gradient-text";

const metrics: { label: string; icon: LucideIcon }[] = [
  { label: "Western Pod: Owensboro + Greenville hubs", icon: MapPinned },
  { label: "Western satellites: 4 markets planned", icon: Compass },
  { label: "Eastern/Central: Richmond + Appalachia development", icon: Mountain },
  { label: "Louisville metro flagship: future Phase 2", icon: Building2 },
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden">
      {/* Full-bleed liquid ether background (homepage only) */}
      <div className="absolute inset-0 z-0">
        <LiquidEther
          colors={["#E0F4FF", "#8FC9E8", "#5B9BD5"]}
          resolution={0.5}
          className="h-full w-full"
        />
      </div>

      {/* Content block */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pt-20 text-center sm:px-6">
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Kentucky Desert Network
        </h1>
        <div className="mt-6 max-w-2xl text-lg sm:text-xl">
          <GradientText
            colors={["#7EC8E3", "#5B9BD5", "#8FC9E8"]}
            className="text-center"
          >
            Rural Kentucky first for PT, home-health, and mobile access.
            Western hubs launch first, Eastern/Central follows, and Louisville
            enters as a future Phase 2 metro flagship.
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
