"use client";

import { useState, useEffect } from "react";
import RisingLines from "@/components/canvas/rising-lines";
import { GradientText } from "@/components/ui/gradient-text";

type PageHeroProps = {
  title: string;
  description: string;
};

const BRAND_COLORS = {
  primary: "#4d78b0",
  light: "#8bbfe2",
  accent: "#6ca3cf",
};

export function PageHero({ title, description }: PageHeroProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="relative min-h-[45vh] overflow-hidden border-b border-border bg-[linear-gradient(145deg,var(--brand-navy),color-mix(in_oklch,var(--brand-blue)_70%,var(--brand-navy)))] sm:min-h-[50vh] md:min-h-[55vh]">
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
          <div className="h-full w-full bg-[var(--brand-navy)]" />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[45vh] flex-col items-center justify-center px-4 py-24 text-center sm:min-h-[50vh] sm:px-6 sm:py-28 md:min-h-[55vh] md:py-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            {title}
          </h1>
          <div className="mt-4 text-lg sm:text-xl">
            <GradientText
              colors={[BRAND_COLORS.accent, BRAND_COLORS.primary, BRAND_COLORS.light]}
              className="text-center"
            >
              {description}
            </GradientText>
          </div>
        </div>
      </div>
    </section>
  );
}
