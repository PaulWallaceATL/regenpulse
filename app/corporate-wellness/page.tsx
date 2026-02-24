import type { Metadata } from "next";
import { CorporateWellnessVideoHero } from "@/components/corporate-wellness/CorporateWellnessVideoHero";
import { CorporateWellness } from "@/components/sections/corporate-wellness";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Corporate Wellness | RegenPulse",
  description:
    "Corporate wellness programs that drive engagement, reduce claims, and close in 30 days.",
};

export default function CorporateWellnessPage() {
  return (
    <div className="brand-page min-h-screen overflow-x-hidden">
      <CorporateWellnessVideoHero />
      <div id="corporate-wellness-content">
        <CorporateWellness />
      </div>
      <Footer />
    </div>
  );
}
