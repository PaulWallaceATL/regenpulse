"use client";

import { GradientText } from "@/components/ui/gradient-text";

const metrics = [
  { value: "4", label: "Markets Across Kentucky + Appalachia" },
  { value: "10,000+", label: "Patients Served" },
  { value: "92%", label: "Patient-Reported Mobility Improvement" },
  { value: "24/7", label: "Support For Everyday Life" },
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden">
      {/* Full-bleed wellness video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          aria-hidden
        >
          <source
            src="/videos/kentucky-sunset-hero.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Content block */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pt-20 text-center sm:px-6">
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Real Care. Real Outcomes. Lives Changed.
        </h1>
        <div className="mt-6 max-w-2xl text-lg sm:text-xl">
          <GradientText
            colors={["#8bbfe2", "#4d78b0", "#6ca3cf"]}
            className="text-center"
          >
            We help people move better, feel stronger, and stay independent
            through integrated regenerative care, mobility support, and
            community-first health access.
          </GradientText>
        </div>
      </div>

      {/* Metric bar */}
      <div className="border-t border-border bg-muted/20">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 px-4 py-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {metrics.map(({ value, label }) => (
            <div
              key={label}
              className="rounded-lg border border-border/50 bg-background/70 px-4 py-3 text-center text-foreground"
            >
              <p className="text-2xl font-bold text-primary sm:text-3xl">{value}</p>
              <p className="text-xs font-medium sm:text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
