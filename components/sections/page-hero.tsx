"use client";

import { useState, useEffect } from "react";
import Aurora from "@/components/canvas/aurora";

type PageHeroProps = {
  title: string;
  description: string;
};

export function PageHero({ title, description }: PageHeroProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-[45vh] overflow-hidden border-b border-border sm:min-h-[50vh] md:min-h-[55vh]">
      {/* Full-bleed Aurora background */}
      <div className="absolute inset-0 z-0">
        {mounted ? (
          <Aurora
            colorStops={["#5227FF", "#7cff67", "#5227FF"]}
            amplitude={1.0}
            blend={0.5}
            className="h-full w-full"
          />
        ) : (
          <div className="h-full w-full bg-muted/20" />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[45vh] flex-col items-center justify-center px-4 py-24 text-center sm:min-h-[50vh] sm:px-6 sm:py-28 md:min-h-[55vh] md:py-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
