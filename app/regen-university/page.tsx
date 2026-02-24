import type { Metadata } from "next";
import { SolutionsVideoHero } from "@/components/solutions/SolutionsVideoHero";
import { UniversityCampusSection } from "@/components/solutions/UniversityCampusSection";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "University | RegenPulse",
  description:
    "Partner with athletics programs and university wellness systems to bring RegenPulse services to campuses—student-athletes, students, faculty, and staff.",
};

export default function RegenUniversityPage() {
  return (
    <div className="brand-page min-h-screen overflow-x-hidden">
      <SolutionsVideoHero
        badge="University"
        title="Partner with athletics programs and university wellness systems."
        subtitle="Bring RegenPulse to your campus—recovery and performance for athletes, wellness for students and staff, and integration with campus rec and health services."
        primaryCta={{ label: "Partner with us", href: "/contact" }}
        secondaryCta={{ label: "Our partnerships", scrollId: "regen-university-content" }}
        footnote="Athletics • Campus wellness • Student & employee health"
      />
      <UniversityCampusSection />
      <Footer />
    </div>
  );
}
