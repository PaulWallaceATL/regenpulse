"use client";

import Image from "next/image";

const PARTNERS = [
  {
    name: "SwimEx",
    description: "Clinical-Grade Hydrotherapy",
    image: "/images/partners/swimex-triton.jpg",
    url: "/services/aquatic-therapy",
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
    name: "Plunge Pools",
    description: "Hot & Cold Recovery Pools",
    image: "/images/partners/plunge-pools.png",
    url: "/services/aquatic-therapy",
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
    <section className="overflow-hidden bg-neutral-950 pt-12 md:pt-16">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Key Partners
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-center text-slate-400">
          World-class technology and clinical partners powering recovery,
          performance, and accessible care.
        </p>
      </div>

      {/* Infinite scroll carousel */}
      <div className="relative mt-10 w-full md:mt-12">
        {/* Left/right fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-neutral-950 to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-neutral-950 to-transparent sm:w-24" />

        <div className="flex animate-scroll-left pb-10">
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
              className="group mx-3 flex w-[280px] shrink-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/10 sm:mx-4 sm:w-[320px]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-800">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="320px"
                />
              </div>
              <div className="px-5 py-4">
                <h3 className="text-base font-semibold text-white">
                  {partner.name}
                </h3>
                <p className="mt-1 text-sm text-slate-400">
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
