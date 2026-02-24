import type { Metadata } from "next";
import { MembershipsVideoHero } from "@/components/memberships/MembershipsVideoHero";
import { MembershipComparison } from "@/components/memberships/MembershipComparison";
import PricingMemberships from "@/components/departments/PricingMemberships";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Memberships | RegenPulse",
  description:
    "Learn how RegenPulse memberships work — benefits, tiers, and what to expect at every level.",
};

export default function MembershipsPage() {
  return (
    <div className="brand-page">
      <MembershipsVideoHero />
      <MembershipComparison />
      <PricingMemberships ctaHrefOverride="/contact" showDepartmentAccess={false} />
      <Footer />
    </div>
  );
}
