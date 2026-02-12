import Link from "next/link";
import { HeroSection } from "@/components/sections/hero-section";
import { TrustFooter } from "@/components/sections/trust-footer";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";

const EXPLORE_LINKS = [
  { href: "/departments", label: "Departments" },
  { href: "/memberships", label: "Memberships" },
  { href: "/partner-network", label: "Partner Network" },
  { href: "/corporate-wellness", label: "Corporate Wellness" },
  { href: "/regen-university", label: "Regen University" },
  { href: "/regen-mart", label: "Regen Mart" },
  { href: "/regen-fresh", label: "Regen Fresh" },
  { href: "/cost-plus-rx", label: "Cost Plus RX" },
] as const;

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <HeroSection />
      <section className="border-t border-border bg-muted/10">
        <div className="container mx-auto px-4 py-12 sm:px-6 md:py-16">
          <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Explore RegenPulse
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
            Dive into our departments, memberships, programs, and more.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {EXPLORE_LINKS.map((link) => (
              <Button key={link.href} variant="outline" size="sm" asChild>
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
          </div>
        </div>
      </section>
      <TrustFooter />
      <Footer />
    </div>
  );
}
