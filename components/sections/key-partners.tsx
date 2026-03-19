"use client";

import Image from "next/image";

const PARTNERS = [
  {
    name: "SwimEx",
    description: "Clinical-Grade Hydrotherapy",
    image: "/images/partners/swimex.jpg",
    url: "https://www.swimex.com",
  },
  {
    name: "EXOPOD",
    description: "Stacked Recovery Modalities",
    image: "/images/partners/exopod.png",
    url: "/services/hbot-exopod",
  },
  {
    name: "ExoSkin",
    description: "Body Contouring & CryoSlimming",
    image: "/images/partners/exoskin.jpg",
    url: "/services/exoskin",
  },
  {
    name: "REAL Cost Plus",
    description: "Transparent Medication Pricing",
    image: "/images/partners/costplus.jpg",
    url: "/cost-plus-rx",
  },
  {
    name: "PNOE",
    description: "Metabolic Testing & Analysis",
    image: "/images/partners/pnoe.jpg",
    url: "https://www.pnoe.com",
  },
  {
    name: "Speediance",
    description: "AI-Powered Smart Gym",
    image: "/images/partners/speediance.jpg",
    url: "https://www.speediance.com",
  },
  {
    name: "Storz Medical",
    description: "Shockwave Therapy",
    image: "/images/partners/storz.jpg",
    url: "https://www.storzmedical.com",
  },
  {
    name: "Oxy Chambers",
    description: "Hyperbaric Oxygen Therapy",
    image: "/images/partners/oxychambers.jpg",
    url: "https://oxychambers.com",
  },
] as const;

export function KeyPartners() {
  // Duplicate list for seamless infinite scroll
  const items = [...PARTNERS, ...PARTNERS];

  return (
    <section className="brand-section overflow-hidden">
      <div className="container mx-auto px-4 py-12 sm:px-6 md:py-16">
        <h2 className="brand-title text-center">Key Partners</h2>
        <p className="brand-subtitle mx-auto mt-3 max-w-3xl text-center">
          World-class technology and clinical partners powering recovery,
          performance, and accessible care.
        </p>
      </div>

      {/* Infinite scroll carousel */}
      <div className="relative w-full">
        {/* Left/right fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-24" />

        <div className="flex animate-scroll-left pb-12">
          {items.map((partner, i) => (
            <a
              key={`${partner.name}-${i}`}
              href={partner.url}
              target={partner.url.startsWith("http") ? "_blank" : undefined}
              rel={
                partner.url.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group mx-3 flex w-[280px] shrink-0 flex-col overflow-hidden rounded-2xl border border-border/50 bg-background/70 transition-all hover:border-primary/40 hover:shadow-lg sm:mx-4 sm:w-[320px]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="320px"
                />
              </div>
              <div className="px-5 py-4">
                <h3 className="text-base font-semibold text-foreground">
                  {partner.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {partner.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
