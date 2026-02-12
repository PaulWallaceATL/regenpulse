import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { RegenUniversity } from "@/components/sections/regen-university";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Regen University | RegenPulse",
  description:
    "Hybrid education and certification for the RegenPulse ecosystem and regenerative wellness.",
};

export default function RegenUniversityPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <PageHero
        title="Regen University"
        description="Hybrid education and certification to grow your practice within the RegenPulse ecosystem."
      />
      <RegenUniversity />
      <Footer />
    </div>
  );
}
