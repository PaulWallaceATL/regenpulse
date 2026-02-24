"use client";

import Link from "next/link";

const HERO_VIDEO_SRC = "/videos/services-hero.mp4";

function scrollToContent() {
  const el = document.getElementById("corporate-wellness-content");
  el?.scrollIntoView({ behavior: "smooth" });
}

export function CorporateWellnessVideoHero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden pt-20">
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
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/50"
          aria-hidden
        />
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pt-20 text-center md:items-start md:pl-12 md:pr-12 md:text-left lg:pl-16 lg:pr-16 xl:pl-24">
        <p className="mb-4 inline-block rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/90 backdrop-blur-sm">
          Corporate Wellness
        </p>
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          Employer programs that drive engagement, reduce claims, and close in 30 days.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-100/90 sm:text-xl">
          Boost participation, integrate with your benefits, and get ROI projections—with a structured rollout from audit to contract.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:justify-start">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-neutral-900 shadow-lg transition-all hover:bg-white/95 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
          >
            Get a Proposal
          </Link>
          <button
            type="button"
            onClick={scrollToContent}
            className="inline-flex items-center justify-center rounded-xl border-2 border-white/80 bg-transparent px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
          >
            View Programs
          </button>
        </div>

        <p className="mt-6 text-sm text-slate-200/80 sm:text-base">
          Free wellness audit • Custom dashboards • 3-year contracts
        </p>
      </div>
    </section>
  );
}
