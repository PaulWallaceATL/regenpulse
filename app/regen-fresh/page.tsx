import type { Metadata } from "next";
import Link from "next/link";
import { ServiceVideoHero } from "@/components/sections/service-video-hero";
import { RegenFresh } from "@/components/sections/regen-fresh";
import { Footer } from "@/components/layout/footer";
import { REALPT } from "@/lib/realpt";

const REAL_FRESH_HERO_VIDEO = "/videos/real-fresh-hero.mp4";

export const metadata: Metadata = {
  title: "REAL Fresh | REAL PT & Wellness",
  description:
    "Fresh, local nutrition and meal programs for recovery and wellness.",
};

export default function RegenFreshPage() {
  return (
    <div className="brand-page">
      <ServiceVideoHero
        title="REAL Fresh"
        description="Fresh, local nutrition and meal programs designed for recovery and performance."
        videoSrc={REAL_FRESH_HERO_VIDEO}
        videoType="video/mp4"
      >
        <Link
          href={REALPT.contactUrl}
          className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-neutral-900 shadow-lg transition-all hover:bg-white/95 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
        >
          Book a Consultation
        </Link>
      </ServiceVideoHero>
      <RegenFresh />
      <Footer />
    </div>
  );
}
