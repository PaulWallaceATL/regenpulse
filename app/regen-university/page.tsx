import type { Metadata } from "next";
import { SolutionsVideoHero } from "@/components/solutions/SolutionsVideoHero";
import { RegenUniversity } from "@/components/sections/regen-university";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Regen University | RegenPulse",
  description:
    "Hybrid education and certification for the RegenPulse ecosystem and regenerative wellness.",
};

export default function RegenUniversityPage() {
  return (
    <div className="brand-page min-h-screen overflow-x-hidden">
      <SolutionsVideoHero
        badge="Regen University"
        title="Hybrid education and certification for the RegenPulse ecosystem."
        subtitle="Grow your practice with certification tracks, partner networks, and equipment pathways—from fundamentals to train-the-trainer."
        primaryCta={{ label: "Explore Programs", href: "/contact" }}
        secondaryCta={{ label: "View Tracks", scrollId: "regen-university-content" }}
        footnote="Fundamentals to Enterprise • Equipment bundles • Partner eligibility"
      />
      <div id="regen-university-content">
        <RegenUniversity />
      </div>
      <Footer />
    </div>
  );
}
