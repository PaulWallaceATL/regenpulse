import type { Metadata } from "next";
import Link from "next/link";
import { ServiceVideoHero } from "@/components/sections/service-video-hero";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { REALPT } from "@/lib/realpt";

const OPERATOR_EQUITY_HERO_VIDEO = "/videos/operator-equity-hero.mp4";

export const metadata: Metadata = {
  title: "Operator–Equity Partnership | REAL PT & Wellness",
  description:
    "Partner with REAL PT & Wellness—equity partnership, not a franchise. PT, aquatic therapy, and recovery with shared technology including Clinix Agent for intake, scheduling, and follow-up.",
  openGraph: {
    title: "Operator–Equity Partnership (Not a Franchise) | REAL PT & Wellness",
    description:
      "Equity partnership with no franchise fees or royalties. PT + aquatic + recovery; shared tech stack and Clinix Agent.",
  },
};

const DIFFERENTIATORS = [
  {
    title: "Equity partnership, not a franchise",
    body: "No franchise fees or royalties. You build equity in your location while staying aligned with our model and standards.",
  },
  {
    title: "PT + aquatic + recovery, with flexible payment",
    body: "Offer physical therapy, aquatic therapy (SwimEx), and recovery services. We work with insurance where appropriate and cash/membership programs so you can serve a broad patient base.",
  },
  {
    title: "Shared technology stack",
    body: "Including Clinix Agent for intake, scheduling, and follow-up—a shared technology stack so you can focus on care while operations stay consistent and scalable.",
  },
];

const TIMELINE_STEPS = [
  "Intro call — discuss fit and model",
  "Diligence — review financials, site, and operations",
  "Site buildout — facility and equipment",
  "Opening — launch and ongoing support",
];

export default function OperatorEquityPage() {
  return (
    <div className="brand-page min-h-screen overflow-x-hidden">
      <ServiceVideoHero
        title="Operator–Equity Partnership (Not a Franchise)"
        description="Build with us as an equity partner—PT, aquatic therapy, and recovery with shared technology and no franchise fees."
        videoSrc={OPERATOR_EQUITY_HERO_VIDEO}
        videoType="video/mp4"
      >
        <Link
          href={REALPT.contactUrl}
          className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-neutral-900 shadow-lg transition-all hover:bg-white/95 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
        >
          Discuss Partnership
        </Link>
      </ServiceVideoHero>

      <section className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-12 sm:px-6 md:py-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Why This Is Different
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {DIFFERENTIATORS.map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="container mx-auto px-4 py-12 sm:px-6 md:py-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            How It Works
          </h2>
          <ol className="mt-8 space-y-6">
            {TIMELINE_STEPS.map((step, i) => (
              <li key={step} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {i + 1}
                </span>
                <div>
                  <p className="font-medium text-foreground">{step}</p>
                </div>
              </li>
            ))}
          </ol>
          <Button asChild className="mt-10">
            <Link href={REALPT.contactUrl}>Discuss Partnership</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
