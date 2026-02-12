import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { PartnerNetwork } from "@/components/sections/partner-network";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Partner Network | RegenPulse",
  description:
    "Our partner network of clinics and locations. Find a RegenPulse center near you.",
};

export default function PartnerNetworkPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <PageHero
        title="Partner Network"
        description="Find a RegenPulse clinic near you. Our partners deliver the same standards of care and technology."
      />
      <PartnerNetwork />
      <Footer />
    </div>
  );
}
