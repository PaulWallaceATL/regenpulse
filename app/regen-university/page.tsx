import type { Metadata } from "next";
import Link from "next/link";
import { ServiceVideoHero } from "@/components/sections/service-video-hero";
import { UniversityCampusSection } from "@/components/solutions/UniversityCampusSection";
import { Footer } from "@/components/layout/footer";

const UNIVERSITY_HERO_VIDEO = "/videos/real-university-hero.mp4";

export const metadata: Metadata = {
  title: "REAL University | REAL PT & Wellness",
  description:
    "Partner with athletics programs and university wellness systems to bring REAL PT & Wellness services to campuses—student-athletes, students, faculty, and staff.",
};

export default function RegenUniversityPage() {
  return (
    <div className="brand-page min-h-screen overflow-x-hidden">
      <ServiceVideoHero
        title="Partner with athletics programs and university wellness systems."
        description="Bring REAL PT & Wellness to your campus—recovery and performance for athletes, wellness for students and staff, and integration with campus rec and health services."
        videoSrc={UNIVERSITY_HERO_VIDEO}
        videoType="video/mp4"
      >
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-neutral-900 shadow-lg transition-all hover:bg-white/95 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
        >
          Partner with us
        </Link>
        <Link
          href="#real-university-content"
          className="inline-flex items-center justify-center rounded-xl border-2 border-white/80 bg-transparent px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
        >
          Our partnerships
        </Link>
        <p className="w-full text-center text-sm text-slate-200/80 md:w-auto md:text-left md:text-base">
          Athletics • Campus wellness • Student & employee health
        </p>
      </ServiceVideoHero>
      <UniversityCampusSection />
      <Footer />
    </div>
  );
}
