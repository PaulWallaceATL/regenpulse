"use client";

import Link from "next/link";

const HERO_VIDEO_SRC = "/videos/memberships-hero.mp4";

function scrollToTierComparison() {
  const el = document.getElementById("tier-comparison");
  el?.scrollIntoView({ behavior: "smooth" });
}

export function MembershipsVideoHero() {
  return (
    <section className="relative -mt-[5.5rem] flex min-h-[100svh] flex-col overflow-hidden pt-[5.5rem]">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/40"
          aria-hidden
        />
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pt-20 text-center md:items-start md:pl-12 md:pr-12 md:text-left lg:pl-16 lg:pr-16 xl:pl-24">
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          Memberships built for regeneration, recovery, and performance.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-100/90 sm:text-xl">
          Choose a tier that fits your goals—then get consistent access, better
          pricing, and priority scheduling across our partner locations.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:justify-start">
          <button
            type="button"
            onClick={scrollToTierComparison}
            className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-neutral-900 shadow-lg transition-all hover:bg-white/95 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
          >
            Compare Tiers
          </button>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl border-2 border-white/80 bg-transparent px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
          >
            Book a Consultation
          </Link>
        </div>

        <p className="mt-6 text-sm text-slate-200/80 sm:text-base">
          No-pressure consult • Flexible plans • Member-only pricing
        </p>
      </div>
    </section>
  );
}
