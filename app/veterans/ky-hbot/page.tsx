import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Brain,
  Heart,
  Clock,
  DollarSign,
  Building2,
  Phone,
  FileText,
  ArrowRight,
  CheckCircle2,
  Users,
  Activity,
  type LucideIcon,
} from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { REALPT } from "@/lib/realpt";

export const metadata: Metadata = {
  title: "KY HBOT for Vets | REAL PT & Wellness",
  description:
    "Kentucky's $1.5M state-funded HBOT program for veterans with TBI and PTSD — free treatment through HBOT4KYVETS. REAL PT & Wellness is a proud treatment partner providing medical-grade hyperbaric oxygen therapy.",
  openGraph: {
    title: "KY HBOT for Vets | REAL PT & Wellness",
    description:
      "Free hyperbaric oxygen therapy for Kentucky veterans with TBI and PTSD. State-funded through HBOT4KYVETS — REAL PT & Wellness is a treatment partner.",
  },
};

const PROGRAM_STATS = [
  { value: "12,000+", label: "KY veterans with TBI who could benefit" },
  { value: "$1.5M", label: "State funding for free HBOT treatment" },
  { value: "40–120", label: "One-hour sessions per treatment program" },
  { value: "$0", label: "Cost to qualifying veterans" },
];

const QUALIFYING_CONDITIONS: { label: string; icon: LucideIcon; desc: string }[] = [
  {
    label: "Traumatic Brain Injury (TBI)",
    icon: Brain,
    desc: "Diagnosed by your treating healthcare provider — the original qualifying condition under KRS 217.930.",
  },
  {
    label: "Post-Traumatic Stress Disorder (PTSD)",
    icon: Heart,
    desc: "Added under HB 369 (2026) — expanding eligibility to combat-related PTSD diagnosed by your provider.",
  },
];

const HOW_IT_WORKS_STEPS = [
  {
    step: "1",
    title: "Get Diagnosed",
    desc: "Your treating healthcare provider confirms a TBI or PTSD diagnosis and writes a prescription for HBOT.",
  },
  {
    step: "2",
    title: "Apply Through HBOT4KYVETS",
    desc: "Visit HBOT4KYVETS.com or call 502-938-1300 to sign up. The nonprofit handles all enrollment and funding coordination.",
  },
  {
    step: "3",
    title: "Provide Written Consent",
    desc: "Sign informed consent covering treatment options, expected outcomes, and financial terms — required under Kentucky law.",
  },
  {
    step: "4",
    title: "Begin Treatment at REAL PT",
    desc: "Start your 40–120 session program at our facility. Each session is 60 minutes in a medical-grade hardshell chamber breathing 100% oxygen.",
  },
];

const TREATMENT_DETAILS: { label: string; icon: LucideIcon; value: string }[] = [
  { label: "Session Length", icon: Clock, value: "60 minutes per session" },
  { label: "Program Duration", icon: Activity, value: "40–120 sessions (5 days/week)" },
  { label: "Cost to Veteran", icon: DollarSign, value: "Free — fully state-funded" },
  { label: "Chamber Type", icon: ShieldCheck, value: "Medical-grade hardshell (up to 2.5 ATA)" },
  { label: "Oxygen Increase", icon: Activity, value: "700–1,100% oxygenation boost" },
];

const REAL_PT_BENEFITS = [
  "Medical-grade hardshell HBOT chambers (up to 2.5 ATA)",
  "Trained and certified HBOT clinical staff",
  "Comfortable, veteran-friendly private treatment rooms",
  "Full add-on suite: red light therapy, grounding, entertainment systems",
  "Coordination with VA providers — we share reports at your request",
  "Flexible scheduling to fit your recovery plan",
  "Integration with our full wellness stack: EXOPOD, cryotherapy, IV therapy",
  "Dedicated veteran liaison for program questions and support",
];

const CLINICAL_RESULTS = [
  { value: "39%", label: "reduction in post-concussive syndrome" },
  { value: "30%", label: "reduction in PTSD symptoms" },
  { value: "28+", label: "completed clinical studies since 2007" },
  { value: "900+", label: "veterans and patients in published trials" },
];

export default function KyHbotVetsPage() {
  return (
    <div className="brand-page min-h-screen overflow-x-hidden bg-neutral-950">
      {/* Hero */}
      <section className="relative flex min-h-[70vh] flex-col overflow-hidden pt-20 sm:min-h-[80vh] md:min-h-[100svh]">
        <div className="absolute inset-0 z-0 bg-neutral-950">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
            aria-hidden
          >
            <source src="/videos/pool-water-hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/50 to-neutral-950/90" />
        </div>
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 py-24 text-center sm:py-28 md:items-start md:px-12 md:py-32 md:text-left lg:px-16 xl:px-24">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5">
            <ShieldCheck className="h-4 w-4 text-cyan-400" />
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
              State-Funded Program
            </span>
          </div>
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            KY HBOT for Vets
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300 sm:mt-6 sm:text-xl">
            Kentucky&apos;s $1.5 million state-funded program providing free hyperbaric oxygen therapy to veterans with TBI and PTSD — and REAL PT & Wellness is a proud treatment partner.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:mt-10 md:justify-start">
            <a
              href="https://hbot4kyvets.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400 hover:scale-[1.02]"
            >
              Apply at HBOT4KYVETS.com
            </a>
            <Link
              href={REALPT.schedulingUrl}
              className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/15 hover:border-white/50"
            >
              Schedule at REAL PT
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-t border-white/10 bg-neutral-900">
        <div className="container mx-auto px-4 py-10 sm:px-6">
          <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
            {PROGRAM_STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-cyan-400 md:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs text-slate-400 sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About the Program */}
      <section className="border-t border-white/10 bg-neutral-950">
        <div className="container mx-auto px-4 py-14 sm:px-6 md:py-20">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-cyan-400">
            About the Program
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            What Is HBOT4KYVETS?
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-slate-400 leading-relaxed">
            <p>
              <strong className="text-white">HBOT4KYVETS, Inc.</strong> is a 501(c)(3) nonprofit organization partnered with the state of Kentucky and the Kentucky Department of Veterans Affairs (KDVA) to provide free hyperbaric oxygen therapy to veterans suffering from traumatic brain injury (TBI) and post-traumatic stress disorder (PTSD).
            </p>
            <p>
              The program was born from the advocacy of Colonel Ronald Ray&apos;s family — a decorated U.S. Marine whose widow, Eunice Ray, and fellow advocate fought for years to get the Kentucky legislature to approve HBOT coverage for veterans. Their efforts succeeded in 2018 with the <strong className="text-white">Colonel Ron Ray Veterans Traumatic Brain Injury Treatment Act</strong> (KRS 217.930-942), and in 2024 the state dedicated <strong className="text-white">$1.5 million</strong> in funding to cover treatment at no cost to qualifying veterans.
            </p>
            <p>
              In February 2026, <strong className="text-white">HB 369</strong> passed the Kentucky House 93-0, expanding eligibility to include veterans with PTSD — not just TBI — broadening access to thousands more veterans across the Commonwealth.
            </p>
            <p>
              The program is currently funded through <strong className="text-white">June 30, 2026</strong>, with state legislators working to extend funding through 2028.
            </p>
          </div>
        </div>
      </section>

      {/* Who Qualifies */}
      <section className="border-t border-white/10 bg-neutral-900">
        <div className="container mx-auto px-4 py-14 sm:px-6 md:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Who Qualifies
          </h2>
          <p className="mt-3 max-w-2xl text-slate-400">
            Under Kentucky law, a veteran is eligible for state-funded HBOT if they meet the following criteria:
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {QUALIFYING_CONDITIONS.map(({ label, icon: Icon, desc }) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-neutral-950 p-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 mb-3">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="font-semibold text-white">{label}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-5">
            <h4 className="font-semibold text-white text-sm mb-2">Additional Requirements:</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-400 mt-0.5" />
                A prescription for HBOT written by your treating healthcare provider
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-400 mt-0.5" />
                Written informed consent signed by the veteran (or legal guardian)
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-400 mt-0.5" />
                Consent attested by treating health care provider and a witness
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-white/10 bg-neutral-950">
        <div className="container mx-auto px-4 py-14 sm:px-6 md:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            How It Works
          </h2>
          <p className="mt-3 max-w-2xl text-slate-400">
            Four steps from diagnosis to treatment — HBOT4KYVETS handles the enrollment and funding, REAL PT handles the therapy.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {HOW_IT_WORKS_STEPS.map((s) => (
              <div
                key={s.step}
                className="rounded-xl border border-white/10 bg-neutral-900 p-5"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/10 text-sm font-bold text-cyan-400 mb-3">
                  {s.step}
                </span>
                <p className="font-semibold text-white text-sm">{s.title}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Details */}
      <section className="border-t border-white/10 bg-neutral-900">
        <div className="container mx-auto px-4 py-14 sm:px-6 md:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Treatment Details
          </h2>
          <p className="mt-3 max-w-2xl text-slate-400">
            HBOT places you in a pressurized, medical-grade hardshell chamber where you breathe 100% oxygen. This dramatically increases blood oxygenation, promoting brain tissue healing and neurological recovery.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TREATMENT_DETAILS.map(({ label, icon: Icon, value }) => (
              <div
                key={label}
                className="flex items-start gap-4 rounded-xl border border-white/10 bg-neutral-950 p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="font-semibold text-white text-sm">{label}</p>
                  <p className="mt-0.5 text-xs text-slate-400">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How REAL PT Works With the Program */}
      <section className="border-t border-white/10 bg-gradient-to-b from-neutral-950 to-neutral-900">
        <div className="container mx-auto px-4 py-14 sm:px-6 md:py-20">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-cyan-400">
            Our Role
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            How REAL PT & Wellness Works With This Program
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-slate-400 leading-relaxed">
            <p>
              REAL PT & Wellness serves as a <strong className="text-white">treatment partner</strong> within the HBOT4KYVETS network. When a veteran qualifies through the state program, they can receive their prescribed HBOT sessions at our facility — at no cost to them.
            </p>
            <p>
              We don&apos;t just provide the chamber. We wrap the HBOT treatment in a full clinical environment designed for veteran recovery — certified HBOT technicians, private treatment rooms, add-on therapies, and coordination with your VA or civilian care team.
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {REAL_PT_BENEFITS.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-neutral-950/60 px-4 py-3 text-sm text-slate-300"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-400 mt-0.5" />
                {benefit}
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-6">
            <p className="text-sm text-slate-300 leading-relaxed">
              <strong className="text-white">Beyond the state program:</strong> Veterans who complete their HBOT4KYVETS treatment or want additional modalities can transition into our <Link href="/memberships" className="text-cyan-400 underline underline-offset-4 hover:text-cyan-300">membership plans</Link> starting at $99/mo — gaining access to EXOPOD, cryotherapy, IV therapy, red light therapy, and our full recovery stack at member-only pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Clinical Results */}
      <section className="border-t border-white/10 bg-neutral-900">
        <div className="container mx-auto px-4 py-14 sm:px-6 md:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Published Clinical Results
          </h2>
          <p className="mt-3 max-w-2xl text-slate-400">
            Multiple studies and trials since 2007 demonstrate HBOT&apos;s effectiveness for veterans with TBI. The VA has not yet approved HBOT for TBI/PTSD, but the evidence base continues to grow.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6 text-center md:grid-cols-4">
            {CLINICAL_RESULTS.map((r) => (
              <div key={r.label}>
                <p className="text-2xl font-bold text-cyan-400 md:text-3xl">{r.value}</p>
                <p className="mt-1 text-xs text-slate-400 sm:text-sm">{r.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-slate-600 text-center">
            Sources: International Hyperbaric Medical Foundation; Baptist Health; HBOT4Heroes.org. Individual results may vary.
          </p>
        </div>
      </section>

      {/* Partner Hospitals */}
      <section className="border-t border-white/10 bg-neutral-950">
        <div className="container mx-auto px-4 py-14 sm:px-6 md:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            HBOT4KYVETS Treatment Network
          </h2>
          <p className="mt-3 max-w-2xl text-slate-400">
            REAL PT & Wellness joins a growing network of facilities across Kentucky providing state-funded HBOT to veterans:
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "REAL PT & Wellness", location: "Your local treatment partner", highlight: true },
              { name: "Clark Regional Medical Center", location: "Winchester, KY" },
              { name: "Baptist Health Louisville", location: "Louisville, KY" },
              { name: "Baptist Health Hardin", location: "Elizabethtown, KY" },
              { name: "Jennie Stuart Health", location: "Hopkinsville, KY" },
              { name: "Southern Indiana Partners", location: "Southern Indiana" },
            ].map((h) => (
              <div
                key={h.name}
                className={`rounded-xl border p-5 ${
                  h.highlight
                    ? "border-cyan-500/30 bg-cyan-500/5"
                    : "border-white/10 bg-neutral-900"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Building2 className={`h-4 w-4 ${h.highlight ? "text-cyan-400" : "text-slate-500"}`} />
                  <p className={`font-semibold text-sm ${h.highlight ? "text-cyan-400" : "text-white"}`}>
                    {h.name}
                  </p>
                </div>
                <p className="mt-1 text-xs text-slate-500">{h.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-gradient-to-b from-neutral-900 to-neutral-950">
        <div className="container mx-auto px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Ready to Get Started?
            </h2>
            <p className="mt-3 text-slate-400">
              If you&apos;re a Kentucky veteran with TBI or PTSD, you may qualify for free HBOT through this state-funded program. Apply through HBOT4KYVETS, then book your sessions at REAL PT & Wellness.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://hbot4kyvets.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400 hover:scale-[1.02]"
              >
                Apply at HBOT4KYVETS.com
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href={REALPT.schedulingUrl}
                className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/15 hover:border-white/50"
              >
                Book at REAL PT
              </Link>
            </div>
            <div className="mt-8 flex flex-col items-center gap-2">
              <p className="text-sm text-slate-500">Questions about the program?</p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="tel:5029381300"
                  className="flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  <Phone className="h-4 w-4" />
                  HBOT4KYVETS: 502-938-1300
                </a>
                <a
                  href={`tel:${REALPT.phone}`}
                  className="flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  <Phone className="h-4 w-4" />
                  REAL PT: {REALPT.displayPhone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Bar */}
      <section className="border-t border-white/10 bg-cyan-500/10">
        <div className="container mx-auto px-4 py-8 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-4 text-center">
            <span className="font-semibold text-white">{REALPT.siteName}</span>
            <a
              href={`tel:${REALPT.phone}`}
              className="text-lg font-semibold text-cyan-400 underline-offset-4 hover:underline"
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
