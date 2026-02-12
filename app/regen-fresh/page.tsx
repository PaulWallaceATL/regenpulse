import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { RegenFresh } from "@/components/sections/regen-fresh";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Regen Fresh | RegenPulse",
  description:
    "Fresh, local nutrition and meal programs for regenerative wellness.",
};

export default function RegenFreshPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <PageHero
        title="Regen Fresh"
        description="Fresh, local nutrition and meal programs designed for recovery and performance."
      />
      <RegenFresh />
      <Footer />
    </div>
  );
}
