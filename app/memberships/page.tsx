import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { MembershipBenefits } from "@/components/sections/membership-benefits";
import { MembershipTiers } from "@/components/sections/membership-tiers";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Memberships | RegenPulse",
  description:
    "Membership benefits and tiers for RegenPulse Total Wellness & Regenerative Center.",
};

export default function MembershipsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <PageHero
        title="Memberships"
        description="Choose the plan that fits your wellness goals and unlock full access to our departments and programs."
      />
      <MembershipBenefits />
      <MembershipTiers />
      <Footer />
    </div>
  );
}
