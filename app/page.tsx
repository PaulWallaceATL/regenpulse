import { HeroSection } from "@/components/sections/hero-section";
import { ExploreFeaturesSection } from "@/components/sections/explore-features";
import { TrustFooter } from "@/components/sections/trust-footer";
import { Footer } from "@/components/layout/footer";

const KEY_VALUE_PROPS = [
  { value: "4", label: "Markets Across Kentucky + Appalachia" },
  { value: "10,000+", label: "Patients Served" },
  { value: "92%", label: "Patient-Reported Mobility Improvement" },
  { value: "For Everyone", label: "Care That Supports Daily Life At Any Age" },
] as const;

export default function Home() {
  return (
    <div className="brand-page">
      <HeroSection />
      <section className="brand-section">
        <div className="container mx-auto px-4 py-12 sm:px-6 md:py-16">
          <h2 className="brand-title text-center">
            Impact At A Glance
          </h2>
          <p className="brand-subtitle mx-auto mt-3 max-w-3xl text-center">
            Better mobility, better outcomes, and stronger communities through
            accessible regenerative care.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-3 text-center sm:grid-cols-2 lg:grid-cols-4">
            {KEY_VALUE_PROPS.map(({ value, label }) => (
              <div
                key={label}
                className="rounded-lg border border-border/50 bg-background/70 px-4 py-4"
              >
                <p className="text-2xl font-bold text-primary sm:text-3xl">{value}</p>
                <p className="mt-1 text-xs font-medium text-foreground sm:text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ExploreFeaturesSection />
      <TrustFooter />
      <Footer />
    </div>
  );
}
