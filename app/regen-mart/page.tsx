import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { RegenMart } from "@/components/sections/regen-mart";
import { RegenMartChat } from "@/components/regen-mart/regen-mart-chat";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Regen Mart | RegenPulse",
  description:
    "Shop supplements, recovery gear, and wellness products from RegenPulse.",
};

export default function RegenMartPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <PageHero
        title="Regen Mart"
        description="Supplements, recovery gear, and wellness products to support your journey."
      />
      <RegenMart />
      <Footer />
      <RegenMartChat />
    </div>
  );
}
