import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CorporateWellness } from "@/components/sections/corporate-wellness";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Corporate Wellness | RegenPulse",
  description:
    "Corporate wellness programs that drive engagement, reduce claims, and close in 30 days.",
};

export default function CorporateWellnessPage() {
  return (
    <div className="brand-page">
      <PageHero
        title="Corporate Wellness"
        description="Employer programs that boost engagement, reduce healthcare costs, and integrate with your benefits in 30 days."
      />
      <CorporateWellness />
      <Footer />
    </div>
  );
}
