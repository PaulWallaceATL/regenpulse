import { HeroSection } from "@/components/sections/hero-section";
import { KeyPartners } from "@/components/sections/key-partners";
import { ExploreFeaturesSection } from "@/components/sections/explore-features";
import { TrustFooter } from "@/components/sections/trust-footer";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden text-foreground">
      <HeroSection />
      <KeyPartners />
      <TrustFooter />
      <ExploreFeaturesSection />
      <Footer />
    </div>
  );
}
