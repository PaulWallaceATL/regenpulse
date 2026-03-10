import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ServiceVideoHero } from "@/components/sections/service-video-hero";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { REALPT } from "@/lib/realpt";

const AQUATIC_HERO_VIDEO = "/videos/oxygen-bubbles-hero.mov";

export const metadata: Metadata = {
  title: "Aquatic Therapy (SwimEx) | REAL PT & Wellness",
  description:
    "Clinical-grade SwimEx hydrotherapy—adjustable current, multi-depth, full control. True aquatic PT for post-op, spine, arthritis, balance, and low-impact conditioning.",
  openGraph: {
    title: "Aquatic Therapy with SwimEx® | REAL PT & Wellness",
    description:
      "True clinical-grade hydrotherapy. Adjustable current, multi-depth, full control for aquatic PT and recovery.",
  },
};

const WHY_SWIMEX = [
  { title: "Adjustable current", body: "Resistance and flow you can dial to match each patient and phase of rehab." },
  { title: "Multi-depth", body: "Work at the depth that supports the body while challenging balance and strength." },
  { title: "Clinical control", body: "Precise settings for true aquatic PT—not just a pool." },
  { title: "True aquatic PT", body: "Designed for therapeutic protocols and measurable progress." },
];

const USE_CASES = [
  "Post-op joints (knee, hip, shoulder)",
  "Spine and arthritis",
  "High pain sensitivity",
  "Balance and fall risk",
  "Low-impact conditioning for athletes",
];

export default function AquaticTherapyPage() {
  return (
    <div className="brand-page min-h-screen overflow-x-hidden">
      <ServiceVideoHero
        title="Aquatic Therapy with SwimEx®"
        description="True clinical-grade hydrotherapy—adjustable current, multi-depth, full control."
        videoSrc={AQUATIC_HERO_VIDEO}
        videoType="video/quicktime"
      >
        <Link
          href={REALPT.schedulingUrl}
          className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-neutral-900 shadow-lg transition-all hover:bg-white/95 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
        >
          Book Aquatic PT Evaluation
        </Link>
        <Link
          href={`${REALPT.membershipsUrl}#tier-comparison`}
          className="inline-flex items-center justify-center rounded-xl border-2 border-white/80 bg-transparent px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
        >
          View Membership Options
        </Link>
      </ServiceVideoHero>

      <section className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-12 sm:px-6 md:py-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Why SwimEx (Not Just a Pool)
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Our in-house SwimEx pool is built for clinical outcomes—not lap swimming. Every session can be tailored to support recovery and progress.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_SWIMEX.map((item) => (
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
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Who It&apos;s For
              </h2>
              <p className="mt-2 text-muted-foreground">
                Aquatic therapy with SwimEx is commonly used to support a wide range of goals—from post-surgical rehab to ongoing conditioning with less joint load.
              </p>
              <ul className="mt-6 list-inside list-disc space-y-2 text-muted-foreground">
                {USE_CASES.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-muted">
              <Image
                src="/images/placeholder.svg"
                alt="Clinical-grade SwimEx hydrotherapy pool for aquatic physical therapy—adjustable current, multi-depth."
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-12 sm:px-6 md:py-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Integration & Payment
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Aquatic therapy is part of our standard PT plans. We work with insurance when appropriate and also offer cash and membership options so you can get the frequency and access that fits your goals.
          </p>
          <div className="mt-8 rounded-xl border border-border bg-background p-6">
            <h3 className="font-semibold text-foreground">Membership pricing</h3>
            <p className="mt-2 text-muted-foreground">
              Memberships start at $49.99/month. Higher tiers include more sessions and access to other recovery services.
            </p>
            <Button asChild className="mt-4">
              <Link href={REALPT.membershipsUrl}>View Membership Options</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
