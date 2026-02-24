import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { MembershipBenefits } from "@/components/sections/membership-benefits";
import { MembershipTiers } from "@/components/sections/membership-tiers";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "How It Works | RegenPulse",
  description:
    "Learn how RegenPulse memberships work — benefits, tiers, and what to expect at every level.",
};

export default function MembershipsPage() {
  return (
    <div className="brand-page">
      <PageHero
        title="How It Works"
        description="From your first visit to your ongoing protocol — here's how RegenPulse membership works."
      />
      <MembershipBenefits />
      <MembershipTiers />
      <Footer />
    </div>
  );
}
