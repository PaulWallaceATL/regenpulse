import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ServiceVideoHero } from "@/components/sections/service-video-hero";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { REALPT } from "@/lib/realpt";

const VETERANS_HERO_VIDEO = "/videos/veterans-hero.mp4";

export const metadata: Metadata = {
  title: "Veterans ANS Program | REAL PT & Wellness",
  description:
    "Physio PS autonomic nervous system (ANS) testing for veterans. FDA-cleared, non-invasive, ~15 min. Used at VA Medical Centers and DoD programs. REAL PT complements VA care and integrates ANS insights into PT and recovery plans.",
  openGraph: {
    title: "Veterans / VA & DoD ANS Testing | REAL PT & Wellness",
    description:
      "ANS testing has been used in VA and DoD settings. We integrate insights into your PT and recovery plan and share reports at your request.",
  },
};

export default function VeteransAnsProgramPage() {
  return (
    <div className="brand-page min-h-screen overflow-x-hidden">
      <section id="veterans-hero" className="scroll-mt-6">
        <ServiceVideoHero
          title="Veterans / VA & DoD ANS Testing"
          description="Autonomic nervous system testing that has been used in VA and DoD settings—integrated into your PT and recovery plan."
          videoSrc={VETERANS_HERO_VIDEO}
          videoType="video/mp4"
        >
          <Link
            href={REALPT.schedulingUrl}
            className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-neutral-900 shadow-lg transition-all hover:bg-white/95 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
          >
            Request ANS Evaluation
          </Link>
          <Link
            href={REALPT.contactUrl}
            className="inline-flex items-center justify-center rounded-xl border-2 border-white/80 bg-transparent px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
          >
            Discuss Referral Options
          </Link>
        </ServiceVideoHero>
      </section>

      <section id="veterans-why-ans" className="scroll-mt-6 border-b border-border bg-background">
        <div className="container mx-auto px-4 py-12 sm:px-6 md:py-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Why ANS Testing
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Physio PS autonomic nervous system (ANS) testing is FDA-cleared and non-invasive—typically about 15 minutes. It distinguishes sympathetic vs. parasympathetic function (not just generic HRV), which can help inform care for complex symptoms.
          </p>
        </div>
      </section>

      <section id="veterans-proof" className="scroll-mt-6 border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-12 sm:px-6 md:py-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Where ANS Has Been Used
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            ANS testing has been used at VA Medical Centers (e.g., East Orange, Atlanta), Walter Reed, and in Office of Naval Research–supported programs. We present this as context—real-world use in veteran and DoD care settings—not as an endorsement of our specific location.
          </p>
        </div>
      </section>

      <section id="veterans-how-it-works" className="scroll-mt-6 border-b border-border bg-background">
        <div className="container mx-auto px-4 py-12 sm:px-6 md:py-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            How It Works
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            The test is non-invasive and usually takes about 15 minutes. Results can help guide PT and recovery planning. We integrate ANS insights into your care and, at your request, can share reports with your VA or other providers so your team stays aligned.
          </p>
        </div>
      </section>

      <section id="veterans-who-for" className="scroll-mt-6 border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-12 sm:px-6 md:py-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Who It&apos;s For
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            ANS testing is commonly considered for veterans with complex symptoms, including POTS, PTSD-related autonomic issues, toxic exposures (e.g., Agent Orange, burn pits), and Long COVID or autonomic neuropathy. REAL PT complements your VA care—we do not replace it. We integrate insights into your PT and recovery plans and share reports at your request.
          </p>
          <ul className="mt-6 list-inside list-disc space-y-1 text-muted-foreground">
            <li>POTS and dysautonomia</li>
            <li>PTSD-related autonomic issues</li>
            <li>Toxic exposures (Agent Orange, burn pits)</li>
            <li>Long COVID / autonomic neuropathy</li>
          </ul>
        </div>
      </section>

      <section id="veterans-application" className="scroll-mt-6 border-b border-border bg-background">
        <div className="container mx-auto px-4 py-12 sm:px-6 md:py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Next Steps
              </h2>
              <p className="mt-2 max-w-xl text-muted-foreground">
                Request an ANS evaluation or discuss referral options with our team. We can walk you through the process and how results may support your PT and recovery plan.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-muted">
              <Image
                src="/images/veterans/ans/veteran-client-consult.png"
                alt="Veteran and spouse in consultation with a care professional—respectful, veteran-focused setting for ANS and recovery care."
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="veterans-cta" className="scroll-mt-6 border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-12 sm:px-6 md:py-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Get Started
          </h2>
          <div className="mt-6 flex flex-wrap gap-4">
            <Button asChild>
              <Link href={REALPT.schedulingUrl}>Request ANS Evaluation</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href={REALPT.contactUrl}>Discuss Referral Options</Link>
            </Button>
          </div>
          <div className="mt-8 rounded-xl border border-border bg-primary/5 px-4 py-4 text-center sm:px-6">
            <p className="text-sm text-muted-foreground">{REALPT.siteName}</p>
            <a
              href={`tel:${REALPT.phone}`}
              className="mt-1 inline-block text-lg font-semibold text-primary underline-offset-4 hover:underline"
              aria-label={`Call ${REALPT.displayPhone}`}
            >
              {REALPT.displayPhone}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
