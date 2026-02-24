import type { Metadata } from "next";
import { MembershipsVideoHero } from "@/components/memberships/MembershipsVideoHero";
import { MembershipComparison } from "@/components/memberships/MembershipComparison";
import { MembershipTiers } from "@/components/sections/membership-tiers";
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
      <MembershipTiers />
      <Footer />
    </div>
  );
}
