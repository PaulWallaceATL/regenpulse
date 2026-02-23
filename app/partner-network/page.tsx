import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { PartnerNetwork } from "@/components/sections/partner-network";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Partner Network | RegenPulse",
  description:
    "Kentucky Desert Network strategy with Western and Eastern/Central pods, plus Louisville as future Phase 2.",
};

export default function PartnerNetworkPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <PageHero
        title="Kentucky Desert Network"
        description="Phase 1 focuses on rural and small-city Kentucky hubs and satellites to expand PT and home-health access. Louisville remains a future Phase 2 metro flagship."
      />
      <PartnerNetwork />
      <Footer />
    </div>
  );
}
