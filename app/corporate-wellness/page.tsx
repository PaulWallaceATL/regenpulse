import type { Metadata } from "next";
import { SolutionsVideoHero } from "@/components/solutions/SolutionsVideoHero";
import { CorporateTierComparison } from "@/components/solutions/CorporateTierComparison";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Corporate Wellness | RegenPulse",
  description:
    "Corporate wellness programs that drive engagement, reduce claims, and close in 30 days.",
};

export default function CorporateWellnessPage() {
  return (
    <div className="brand-page min-h-screen overflow-x-hidden">
      <SolutionsVideoHero
        badge="Corporate Wellness"
        title="Employer programs that drive engagement, reduce claims, and close in 30 days."
        subtitle="Boost participation, integrate with your benefits, and get ROI projections—with a structured rollout from audit to contract."
        primaryCta={{ label: "Get a Proposal", href: "/contact" }}
        secondaryCta={{ label: "View Programs", scrollId: "corporate-wellness-content" }}
        footnote="Free wellness audit • Custom dashboards • 3-year contracts"
      />
      <CorporateTierComparison />
      <Footer />
    </div>
  );
}
