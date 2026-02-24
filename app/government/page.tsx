import type { Metadata } from "next";
import { SolutionsVideoHero } from "@/components/solutions/SolutionsVideoHero";
import { GovernmentPricingSection } from "@/components/solutions/GovernmentPricingSection";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Government | RegenPulse",
  description:
    "Public sector wellness and workforce health programs for agencies and institutions.",
};

export default function GovernmentPage() {
  return (
    <div className="brand-page min-h-screen overflow-x-hidden">
      <SolutionsVideoHero
        badge="Government"
        title="Public Sector Wellness | Workforce Health Programs"
        subtitle="Wellness and engagement programs for government agencies and public institutions. Compliance-ready, scalable, and built for long-term contracts."
        primaryCta={{ label: "Request Information", href: "/contact" }}
        secondaryCta={{ label: "View Programs", scrollId: "government-pricing" }}
        footnote="GSA-style contracts • Compliance & reporting • Multi-year agreements"
      />
      <div id="government-pricing">
        <GovernmentPricingSection />
      </div>
      <Footer />
    </div>
  );
}
