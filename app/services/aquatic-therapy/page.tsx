import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/layout/footer";
import { REALPT } from "@/lib/realpt";
import {
  Waves,
  Thermometer,
  Gauge,
  Shield,
  HeartPulse,
  Zap,
  Users,
  ChevronRight,
  Droplets,
  Flame,
  Snowflake,
  Activity,
  Check,
} from "lucide-react";

const AQUATIC_HERO_VIDEO = "/videos/pool-water-hero.mp4";

export const metadata: Metadata = {
  title: "Aquatic Therapy with SwimEx® | REAL PT & Wellness",
  description:
    "State-of-the-art SwimEx hydrotherapy pools — adjustable current, multi-depth, full clinical control. Recover faster, hurt less, move sooner. Triton pools + hot & cold plunge.",
  openGraph: {
    title: "Aquatic Therapy with SwimEx® | REAL PT & Wellness",
    description:
      "State-of-the-art SwimEx hydrotherapy — Triton pools, plunge recovery, and clinical-grade aquatic PT.",
  },
};

const STATS = [
  { value: "35+", label: "Years of SwimEx Innovation" },
  { value: "94°F", label: "Therapeutic Water Temp" },
  { value: "100+", label: "Speed Settings" },
  { value: "50%", label: "Less Joint Load vs. Land" },
];

const WHY_DIFFERENT = [
  {
    icon: Waves,
    title: "Laminar Paddlewheel Current",
    description:
      "Smooth, even \"river-like\" flow across the entire pool — no choppy jets. Consistent support and resistance for every patient.",
  },
  {
    icon: Gauge,
    title: "100+ Speed Levels",
    description:
      "Dial the resistance to match any ability — from gentle post-op walking to high-level athletic conditioning.",
  },
  {
    icon: Thermometer,
    title: "Multi-Depth Zones",
    description:
      "Work at the exact depth that supports your body while challenging balance, gait, and strength.",
  },
  {
    icon: Shield,
    title: "Clinical-Grade Control",
    description:
      "Precise therapist-controlled settings for true aquatic PT protocols — not just a warm pool.",
  },
];

const CONDITIONS = [
  "Post-op knees, hips & shoulders",
  "ACL & lower-extremity rehab",
  "Back pain & spinal conditions",
  "Arthritis & joint inflammation",
  "Chronic pain management",
  "Balance & fall-risk reduction",
  "Stroke & neurological recovery",
  "Fibromyalgia & autoimmune",
  "Pre & post-natal conditioning",
  "Geriatric mobility & strength",
  "Sports injury rehabilitation",
  "General deconditioning",
];

const SESSION_STEPS = [
  {
    step: "01",
    title: "Check-in & Goal Setting",
    description:
      "Brief assessment of today's pain, mobility, and session goals with your therapist.",
  },
  {
    step: "02",
    title: "Safe Pool Entry",
    description:
      "Non-slip surfaces, handrails, and therapist guidance as you adjust to the warm water.",
  },
  {
    step: "03",
    title: "Guided Therapy",
    description:
      "Walking against the current, balance drills, step-ups, range-of-motion, and resistance work — all customized to you.",
  },
  {
    step: "04",
    title: "Cool-Down & Next Steps",
    description:
      "Gentle stretching, home exercise review, and planning your progression for the next session.",
  },
];

const PRICING_TIERS = [
  {
    name: "SwimEx Access Basic",
    price: "$49.99",
    period: "/month",
    features: [
      "2 SwimEx sessions per month",
      "Therapist-guided group or independent",
      "Member pricing on additional sessions",
      "Access to basic gym equipment on visit days",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "SwimEx Recovery Plus",
    price: "Contact",
    period: " for pricing",
    features: [
      "4 SwimEx sessions per month",
      "Discounted add-ons (HBOT, red light, compression)",
      "Priority scheduling for peak times",
      "Recovery lounge access",
    ],
    cta: "Learn More",
    featured: true,
  },
  {
    name: "SwimEx Unlimited",
    price: "Contact",
    period: " for pricing",
    features: [
      "Unlimited SwimEx sessions",
      "Full gym membership included",
      "Recovery lounge access",
      "Best value for athletes & frequent users",
    ],
    cta: "Learn More",
    featured: false,
  },
];

export default function AquaticTherapyPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* ───── HERO (dark — video) ───── */}
      <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden bg-neutral-950">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
            aria-hidden="true"
          >
            <source src={AQUATIC_HERO_VIDEO} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-neutral-950/50 to-neutral-950" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-sm font-medium text-cyan-300 backdrop-blur-sm">
            <Droplets className="h-4 w-4" />
            SwimEx® Hydrotherapy
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Move Sooner.
            <br />
            <span className="text-cyan-300">Hurt Less.</span>
            <br />
            Recover Faster.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl">
            State-of-the-art SwimEx therapy pools that harness the power of water
            to speed recovery — right inside our PT and wellness center.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href={REALPT.schedulingUrl}
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-7 py-3.5 text-base font-semibold text-neutral-950 shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400 hover:shadow-cyan-400/30 hover:scale-[1.02]"
            >
              Schedule Aquatic Evaluation
            </Link>
            <Link
              href={REALPT.contactUrl}
              className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/15"
            >
              Ask If SwimEx Is Right for Me
            </Link>
          </div>
        </div>
      </section>

      {/* ───── STATS BAR (soft blue-gray) ───── */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-100 to-white">
        <div className="mx-auto grid w-full max-w-5xl grid-cols-2 gap-4 px-4 py-8 sm:px-6 lg:grid-cols-4">
          {STATS.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-2xl font-bold text-sky-700 sm:text-3xl">{value}</p>
              <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ───── WHY SWIMEX IS DIFFERENT (light) ───── */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-sky-600">
                Why SwimEx
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Not Just a Pool — A Clinical Instrument
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                SwimEx is a professional-grade hydrotherapy system trusted by hospitals, sports teams, and PT clinics worldwide. The laminar paddlewheel current creates an even flow so your body gets consistent support and resistance — not choppy jets.
              </p>
              <div className="mt-8 space-y-6">
                {WHY_DIFFERENT.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-sky-200 bg-sky-50">
                        <Icon className="h-5 w-5 text-sky-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">{item.title}</h3>
                        <p className="mt-1 text-sm text-slate-500 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 shadow-xl">
                <Image
                  src="/images/swimex/triton-pro.jpg"
                  alt="SwimEx Triton therapy pool — clinical-grade hydrotherapy"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden aspect-[4/3] w-48 overflow-hidden rounded-xl border-2 border-white shadow-2xl md:block">
                <Image
                  src="/images/swimex/therapy-session.jpg"
                  alt="Therapist guiding patient in SwimEx pool"
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── FULL-WIDTH POOL IMAGE + QUOTE (dark break) ───── */}
      <section className="relative h-[40vh] min-h-[320px] overflow-hidden md:h-[50vh]">
        <Image
          src="/images/swimex/triton-pool.jpg"
          alt="SwimEx Triton pool installation"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <blockquote className="mx-auto max-w-3xl px-6 text-center">
            <p className="text-xl font-medium text-white drop-shadow-lg sm:text-2xl md:text-3xl leading-relaxed">
              &ldquo;Water changes what&apos;s possible in rehab. Patients can stand, walk, and exercise sooner — with less pain than on land.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* ───── MOVE EARLIER WITH LESS PAIN (soft blue tint) ───── */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl lg:order-first">
              <Image
                src="/images/swimex/aquatic-exercise.jpg"
                alt="Patient doing aquatic therapy exercises in the pool"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-sky-600">
                How Aquatic PT Helps
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Move Earlier, With Less Pain
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                SwimEx aquatic therapy reduces how much weight your joints have to carry, so you can stand, walk, and exercise sooner. Warm water relaxes tight muscles, improves circulation, and makes it easier to work on motion, strength, and balance without flaring your symptoms.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {CONDITIONS.map((condition) => (
                  <div key={condition} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" />
                    <span className="text-sm text-slate-700">{condition}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── WHAT TO EXPECT (dark — pool bg) ───── */}
      <section className="relative overflow-hidden py-20 md:py-24">
        <Image
          src="/images/swimex/swimex-bg.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/85 via-neutral-950/75 to-neutral-950/85" />
        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-cyan-400">
              Your First Visit
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              What to Expect in a SwimEx Session
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Every session is one-on-one with a therapist who programs the water depth and current to match exactly where you are today.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SESSION_STEPS.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
              >
                <span className="text-4xl font-bold text-cyan-400/30">{item.step}</span>
                <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href={REALPT.schedulingUrl}
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-7 py-3.5 text-base font-semibold text-neutral-950 shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400 hover:scale-[1.02]"
            >
              Schedule an Aquatic Therapy Evaluation
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ───── PERFORMANCE & RECOVERY (light) ───── */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-sky-600">
                Beyond Rehab
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Performance & Recovery, Too
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                SwimEx isn&apos;t only for injuries. Athletes and active adults use it to train harder with less joint stress and recover faster between tough sessions.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { icon: Zap, text: "Low-impact conditioning to protect joints and tendons" },
                  { icon: Activity, text: "Active recovery after heavy lifting or high-intensity training" },
                  { icon: HeartPulse, text: "In-season athletes managing nagging injuries while staying in shape" },
                  { icon: Users, text: "Older adults building strength and confidence in a safe environment" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.text} className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-50 border border-sky-200">
                        <Icon className="h-4 w-4 text-sky-600" />
                      </div>
                      <span className="text-slate-700 leading-relaxed">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/swimex/veterans-therapy.jpg"
                alt="Patient walking in SwimEx therapy pool during rehabilitation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ───── PLUNGE POOLS (dark — image bg) ───── */}
      <section className="relative overflow-hidden py-20 md:py-24">
        <Image
          src="/images/swimex/plunge-pools.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/95 via-neutral-950/80 to-neutral-950/60" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-xl">
            <p className="text-sm font-medium uppercase tracking-wider text-cyan-400">
              Hot & Cold Recovery
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              SwimEx Plunge Pools
            </h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Complete your recovery with SwimEx hot and cold plunge pools — the ultimate environment for revitalization and muscle recovery.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/15">
                    <Flame className="h-5 w-5 text-red-400" />
                  </div>
                  <h3 className="font-semibold text-white">Hot Plunge</h3>
                </div>
                <p className="mt-3 text-sm text-slate-300">
                  104°F — boosts blood flow and flexibility, relaxes muscles, and reduces strain for more effective training.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/15">
                    <Snowflake className="h-5 w-5 text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-white">Cold Plunge</h3>
                </div>
                <p className="mt-3 text-sm text-slate-300">
                  50°F — controls lactic acid build-up, minimizes inflammation, and accelerates post-workout recovery.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-cyan-400" /> Solid fiberglass construction
              </span>
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-cyan-400" /> 5 standard sizes
              </span>
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-cyan-400" /> Custom options available
              </span>
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-cyan-400" /> 10-year structural warranty
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ───── SAFETY & DESIGN (light) ───── */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg sm:p-10 md:p-12">
            <div className="text-center">
              <Shield className="mx-auto h-8 w-8 text-sky-600" />
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Built for Safety, Comfort & Clinical Results
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-500">
                Our SwimEx setup is designed like a professional hydrotherapy room with every detail considered for patient safety and therapist access.
              </p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {[
                { title: "Non-Slip Surfaces", desc: "Flat working areas and textured floors for safe walking and exercise at every depth." },
                { title: "UV/Ozone Purification", desc: "Modern filtration cuts chlorine exposure while keeping water clean and comfortable." },
                { title: "Worldwide Standard", desc: "Designed for clinics, rehab centers, and sports facilities across the globe since 1986." },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───── PRICING (light with cards) ───── */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-sky-600">
              Memberships
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              SwimEx Memberships & Pricing
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-500">
              One-time evaluation required before starting. Insurance-based PT visits and cash memberships available side by side.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl border p-7 transition-shadow hover:shadow-lg ${
                  tier.featured
                    ? "border-sky-300 bg-sky-50/50 shadow-md"
                    : "border-slate-200 bg-white"
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-sky-600 px-3 py-0.5 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-semibold text-slate-900">{tier.name}</h3>
                <div className="mt-3">
                  <span className="text-3xl font-bold text-slate-900">{tier.price}</span>
                  <span className="text-slate-500">{tier.period}</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={tier.price === "$49.99" ? REALPT.membershipsUrl : REALPT.contactUrl}
                  className={`mt-6 flex w-full items-center justify-center rounded-xl py-3 text-sm font-semibold transition-all ${
                    tier.featured
                      ? "bg-sky-600 text-white hover:bg-sky-700 shadow-md"
                      : "border border-slate-300 bg-slate-50 text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-slate-400">
            We also accept Medicare Part B, major PPO plans, and provide superbills for HSA/FSA reimbursement.
          </p>
        </div>
      </section>

      {/* ───── FINAL CTA (dark — dramatic close) ───── */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <Image
          src="/images/swimex/triton-pro-detail.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/70 to-neutral-950/90" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Is SwimEx Right for You?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300 leading-relaxed">
            We&apos;ll help you decide if aquatic therapy belongs in your plan, or if you&apos;ll get more benefit from land-based PT — or a mix of both. It starts with a simple evaluation.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href={REALPT.schedulingUrl}
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-7 py-3.5 text-base font-semibold text-neutral-950 shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400 hover:scale-[1.02]"
            >
              Book an Aquatic Evaluation
              <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              href={REALPT.contactUrl}
              className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/15"
            >
              Ask a Therapist About SwimEx
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Call us at{" "}
            <a href={`tel:${REALPT.phone}`} className="text-cyan-400 hover:text-cyan-300 transition-colors">
              {REALPT.displayPhone}
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
