import Link from "next/link";
import { HeroSection } from "@/components/sections/hero-section";
import { TrustFooter } from "@/components/sections/trust-footer";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, MapPinned, Mountain } from "lucide-react";

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

const NETWORK_CARDS = [
  {
    title: "Western Pod (Phase 1)",
    icon: MapPinned,
    copy: "Owensboro and Greenville lead launch operations, with Madisonville, Hopkinsville/Ft Campbell, Henderson, and Paducah staged as satellite markets.",
  },
  {
    title: "Eastern/Central Pod (Phase 1b)",
    icon: Mountain,
    copy: "Richmond serves as the operations and tech hub for Appalachian expansion, with satellite towns in development.",
  },
  {
    title: "Louisville (Future Phase 2)",
    icon: Building2,
    copy: "Louisville is now positioned as a later metro flagship after the rural network model is validated.",
  },
] as const;

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <HeroSection />
      <section className="border-t border-border bg-background">
        <div className="container mx-auto px-4 py-12 sm:px-6 md:py-16">
          <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Kentucky Rollout At A Glance
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-center text-muted-foreground">
            Own the deserts, not the downtowns. Our current launch strategy
            prioritizes PT deserts, home-health access, and rural Kentucky
            coverage before metro expansion.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {NETWORK_CARDS.map(({ title, icon: Icon, copy }) => (
              <Card key={title}>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Icon className="h-5 w-5 text-primary" aria-hidden />
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{copy}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild>
              <Link href="/partner-network">View Kentucky Network Plan</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/departments">Browse Departments</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="border-t border-border bg-muted/10">
        <div className="container mx-auto px-4 py-12 sm:px-6 md:py-16">
          <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Explore RegenPulse
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
            Explore programs, services, and platform experiences supporting the
            Kentucky rollout.
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
