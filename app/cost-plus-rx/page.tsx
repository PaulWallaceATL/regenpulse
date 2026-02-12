import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CostPlusRx } from "@/components/sections/cost-plus-rx";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Cost Plus RX | RegenPulse",
  description:
    "Transparent, cost-plus pharmacy and prescriptions for RegenPulse members.",
};

export default function CostPlusRxPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <PageHero
        title="Cost Plus RX"
        description="Transparent, cost-plus pharmacy. Pay what we pay, plus a small markup—no hidden fees."
      />
      <CostPlusRx />
      <Footer />
    </div>
  );
}
