import type { Metadata } from "next";
import Link from "next/link";
import { ServiceVideoHero } from "@/components/sections/service-video-hero";
import { GovernmentPricingSection } from "@/components/solutions/GovernmentPricingSection";
import { Footer } from "@/components/layout/footer";

const GOVERNMENT_HERO_VIDEO = "/videos/government-hero.mp4";

export const metadata: Metadata = {
  title: "Government | REAL PT & Wellness",
  description:
    "Public sector wellness and workforce health programs for agencies and institutions.",
};

export default function GovernmentPage() {
  return (
    <div className="brand-page min-h-screen overflow-x-hidden">
      <ServiceVideoHero
        title="Public Sector Wellness | Workforce Health Programs"
        description="Wellness and engagement programs for government agencies and public institutions. Compliance-ready, scalable, and built for long-term contracts."
        videoSrc={GOVERNMENT_HERO_VIDEO}
        videoType="video/mp4"
      >
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-neutral-900 shadow-lg transition-all hover:bg-white/95 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
        >
          Request Information
        </Link>
        <Link
          href="#government-pricing"
          className="inline-flex items-center justify-center rounded-xl border-2 border-white/80 bg-transparent px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
        >
          View Programs
        </Link>
        <p className="w-full text-center text-sm text-slate-200/80 md:w-auto md:text-left md:text-base">
          GSA-style contracts • Compliance & reporting • Multi-year agreements
        </p>
      </ServiceVideoHero>
      <div id="government-pricing">
        <GovernmentPricingSection />
      </div>
      <Footer />
    </div>
  );
}
