"use client";

import { useState, useEffect } from "react";
import Aurora from "@/components/canvas/aurora";
import { GradientText } from "@/components/ui/gradient-text";

type PageHeroProps = {
  title: string;
  description: string;
};

export function PageHero({ title, description }: PageHeroProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-[45vh] overflow-hidden border-b border-border bg-[#E8F6FC] sm:min-h-[50vh] md:min-h-[55vh]">
      {/* Full-bleed Aurora background (fades to transparent; section bg shows as light blue/white) */}
      <div className="absolute inset-0 z-0">
        {mounted ? (
          <Aurora
            colorStops={["#E0F4FF", "#8FC9E8", "#5B9BD5"]}
            amplitude={1.0}
            blend={0.5}
            className="h-full w-full"
          />
        ) : (
          <div className="h-full w-full bg-[#E8F6FC]" />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[45vh] flex-col items-center justify-center px-4 py-24 text-center sm:min-h-[50vh] sm:px-6 sm:py-28 md:min-h-[55vh] md:py-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {title}
          </h1>
          <div className="mt-4 text-lg sm:text-xl">
            <GradientText
              colors={["#7EC8E3", "#5B9BD5", "#8FC9E8"]}
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
