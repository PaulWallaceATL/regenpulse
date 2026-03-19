import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/footer";
import { REALPT } from "@/lib/realpt";

const HERO_VIDEO = "/videos/operator-equity-hero.mp4";

export const metadata: Metadata = {
  title: "Operator–Equity Partnership | REAL PT & Wellness",
  description:
    "Partner with REAL PT & Wellness to co-own centers in your market. Equity partnership—not a franchise—integrating PT, aquatic therapy, and advanced recovery with shared technology including Clinix Agent.",
  openGraph: {
    title: "Operator–Equity Partnership | REAL PT & Wellness",
    description:
      "Co-own Real PT & Wellness Centers. Shared equity, no franchise fees, integrated PT + aquatic + recovery with Clinix Agent.",
  },
};

/* ── Comparison table data ── */
const COMPARISON_ROWS: { category: string; franchise: string; realpt: string }[] = [
  {
    category: "Ownership",
    franchise: "Franchisee owns unit; pays fees and royalties.",
    realpt: "Shared ownership: Real PT & Wellness + operator partner.",
  },
  {
    category: "Fees & Royalties",
    franchise: "Upfront franchise fee and recurring royalties.",
    realpt: "No franchise fee and no royalty payments.",
  },
  {
    category: "Core Services",
    franchise: "Often single-service, cash-only wellness (cryo, basic PT, or similar).",
    realpt: "Integrated PT, aquatic therapy, and recovery modalities with the ability to work with Medicare and private insurance where appropriate, plus cash-based programs.",
  },
  {
    category: "Brand & Standards",
    franchise: "Vary by individual franchisor.",
    realpt: "Central protocols, clinical frameworks, and quality control across centers.",
  },
  {
    category: "Technology Stack",
    franchise: "Basic booking tools, fragmented by owner.",
    realpt: "Shared tech stack including Clinix Agent for AI-assisted intake and scheduling, network-wide booking, CRM, and analytics.",
  },
  {
    category: "Build & Setup",
    franchise: "Support varies; 9+ months is common.",
    realpt: "Structured 2–4 month launch process with defined steps.",
  },
  {
    category: "Data & Insight",
    franchise: "Limited visibility beyond the single location.",
    realpt: "Unified reporting so operators can see their numbers in the context of the broader network.",
  },
  {
    category: "Operator Upside",
    franchise: "Local profit only.",
    realpt: "Profit distributions and an equity position in the center.",
  },
  {
    category: "Corporate Upside",
    franchise: "Royalties and brand fees.",
    realpt: "Long-term value from equity in every center and a coherent network.",
  },
];

/* ── Timeline steps ── */
const TIMELINE = [
  {
    step: "Initial Conversation",
    body: "We talk through your background, your market, and your goals. This stage is about mutual fit and clarity on what the program is—and isn't.",
  },
  {
    step: "Partnership Outline",
    body: "If there is alignment, we outline a proposed operator–equity structure, clarify roles and responsibilities, and discuss a target budget and timeline for your first center.",
  },
  {
    step: "Site Selection & Planning",
    body: "Together we identify a suitable location, align on terms, and adapt our layouts to the space with PT, aquatic, and recovery zones in mind.",
  },
  {
    step: "Design, Build-Out & Equipment",
    body: "Design details are finalized, construction and build-out begin, and equipment orders are coordinated to match the build schedule.",
  },
  {
    step: "Training & System Setup",
    body: "You and key team members train within existing centers and through digital sessions; scheduling, documentation, and analytics tools—including Clinix Agent—are configured for your site.",
  },
  {
    step: "Marketing & Community Introduction",
    body: "In the weeks leading up to opening, we support you in introducing the center to referrers, employers, and the broader community, using shared assets and playbooks.",
  },
  {
    step: "Opening & Ongoing Support",
    body: "The center opens with continued access to corporate support, regular performance reviews, and conversations about future growth opportunities when appropriate.",
  },
];

export default function OperatorEquityPage() {
  return (
    <div className="brand-page min-h-screen overflow-x-hidden bg-neutral-950">
      {/* ═══ HERO ═══ */}
      <section className="relative flex min-h-[70vh] flex-col overflow-hidden pt-20 sm:min-h-[80vh] md:min-h-[100svh]">
        <div className="absolute inset-0 z-0 bg-neutral-950">
          <video autoPlay loop muted playsInline className="h-full w-full object-cover opacity-60" aria-hidden>
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-neutral-950/30 to-neutral-950/80" />
        </div>
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 py-24 text-center sm:py-28 md:items-start md:px-12 md:py-32 md:text-left lg:px-16 xl:px-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-cyan-400">
            Equity Partnership — Not a Franchise
          </p>
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Real PT &amp; Wellness Operator–Equity Partnerships
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-300 sm:mt-6 sm:text-xl">
            Partner with us to co-own Real PT &amp; Wellness Centers in your market—integrating physical therapy, aquatic therapy, and advanced recovery with a shared-equity, tech-enabled model.
          </p>
          <p className="mt-4 max-w-2xl text-base text-slate-400">
            Our centers combine structured PT, regenerative recovery, and data-driven operations. The operator–equity program opens that platform to a select group of partners who want to grow with an established system rather than build alone.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:mt-10 md:justify-start">
            <a
              href="#partner-interest-form"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400 hover:scale-[1.02]"
            >
              Share Your Interest
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/15 hover:border-white/50"
            >
              View Program Overview
            </a>
          </div>
        </div>
      </section>

      {/* ═══ HOW THE MODEL WORKS ═══ */}
      <section id="how-it-works" className="scroll-mt-6 border-t border-white/10 bg-neutral-950">
        <div className="container mx-auto px-4 py-14 sm:px-6 md:py-20">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-cyan-400">Program Structure</p>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">How the Model Works</h2>
          <p className="mt-3 max-w-3xl text-slate-400">
            Real PT &amp; Wellness grows through an operator–equity structure, not traditional franchising. We remain the majority owner and system steward, while operator–partners invest alongside us, lead the local center, and participate in both ongoing profits and long-term value.
          </p>

          {/* Ownership, care model, and roles */}
          <h3 className="mt-10 text-lg font-semibold text-white">Ownership, Care Model &amp; Roles</h3>
          <div className="mt-4 space-y-4">
            {[
              {
                title: "Shared Ownership Structure",
                body: "Most centers follow a range of 60–80% ownership by Real PT & Wellness and 20–40% by the operator partner, set according to capital contribution and role.",
              },
              {
                title: "Integrated Clinical & Reimbursement Model",
                body: "Centers are built around physical therapy, aquatic therapy, and regenerative recovery, with the ability to work with Medicare and private insurance for medically necessary PT and related services where appropriate—alongside cash-based programs and memberships. This goes beyond the cash-only wellness studio model used by many franchises.",
              },
              {
                title: "Operator Role",
                body: "Partners focus on leading the local team, building and maintaining referral relationships (physicians, employers, sports programs, community organizations), and guiding day-to-day operations and culture.",
              },
              {
                title: "Corporate Role",
                body: "Real PT & Wellness provides the brand, clinical and operational frameworks, payer and reimbursement guidance, technology stack, vendor relationships, and ongoing oversight to keep centers aligned and performing.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-white/10 bg-neutral-900 p-5">
                <p className="font-semibold text-white">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">{item.body}</p>
              </div>
            ))}
          </div>

          {/* Launch, operations, and AI support */}
          <h3 className="mt-10 text-lg font-semibold text-white">Launch, Operations &amp; AI Support</h3>
          <div className="mt-4 space-y-4">
            {[
              {
                title: "Structured 2–4 Month Launch",
                body: "With defined steps for site selection, design, build-out, staffing, and training, most new centers move from approval to opening in roughly 2–4 months, depending on local conditions.",
              },
              {
                title: "Clinix Agent Integration",
                body: "Through our partnership with Clinix AI, each center can use Clinix Agent for AI-assisted intake, scheduling, and follow-up across voice, SMS, and web. This helps capture more calls, match patients to appropriate services, reduce no-shows, and keep schedules organized without building a separate tech stack.",
              },
              {
                title: "Daily Operating Rhythm",
                body: "Centers run on shared tools for scheduling, documentation, analytics, and communication, with regular local KPI reviews and ongoing conversations with the Real PT & Wellness team.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-white/10 bg-neutral-900 p-5">
                <p className="font-semibold text-white">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOW IT DIFFERS FROM A FRANCHISE ═══ */}
      <section className="border-t border-white/10 bg-gradient-to-b from-neutral-900 to-neutral-950">
        <div className="container mx-auto px-4 py-14 sm:px-6 md:py-20">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-cyan-400">Comparison</p>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            How It Differs From a Franchise
          </h2>
          <p className="mt-3 max-w-3xl text-slate-400">
            The support may feel familiar, but the way care, reimbursement, technology, and ownership work is different from most wellness or PT franchises.
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[700px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-4 py-3 font-medium text-slate-500 w-[160px]">Category</th>
                  <th className="px-4 py-3 font-medium text-slate-500">Typical Wellness / PT Franchise</th>
                  <th className="px-4 py-3 font-medium text-cyan-400">Real PT &amp; Wellness Partnership</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr key={row.category} className={i < COMPARISON_ROWS.length - 1 ? "border-b border-white/10" : ""}>
                    <td className="px-4 py-3 font-medium text-white align-top">{row.category}</td>
                    <td className="px-4 py-3 text-slate-500 align-top">{row.franchise}</td>
                    <td className="px-4 py-3 text-slate-300 align-top">{row.realpt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-slate-600 italic">
            This comparison is for general informational purposes and is not an earnings claim or guarantee.
          </p>
        </div>
      </section>

      {/* ═══ WHAT PARTNERS CAN EXPECT ═══ */}
      <section className="border-t border-white/10 bg-neutral-950">
        <div className="container mx-auto px-4 py-14 sm:px-6 md:py-20">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-cyan-400">Partner Benefits</p>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">What Partners Can Expect</h2>
          <p className="mt-3 max-w-3xl text-slate-400">
            The program is designed so partners step into a complete framework—clinical, operational, and technical—while still bringing their own strengths and local relationships to the center.
          </p>

          {/* Development and build-out */}
          <h3 className="mt-10 text-lg font-semibold text-white">Development &amp; Build-Out</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Site Identification & Review",
                body: "Support in selecting locations that work for PT, aquatic, and recovery services—balancing accessibility, visibility, and space needs.",
              },
              {
                title: "Facility Design & Zoning",
                body: "Layouts built around clearly defined zones (PT and rehab, aquatic suite, recovery technologies, metabolic and performance areas) to support smooth patient flow and efficient staff movement.",
              },
              {
                title: "Vendor & Equipment Support",
                body: "Access to established vendors and negotiated packages for PT, aquatic therapy, and recovery equipment, along with guidance on timing and installation.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-white/10 bg-neutral-900 p-5">
                <p className="font-semibold text-white text-sm">{item.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">{item.body}</p>
              </div>
            ))}
          </div>

          {/* Clinical, payer, and operational framework */}
          <h3 className="mt-10 text-lg font-semibold text-white">Clinical, Payer &amp; Operational Framework</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Standardized Clinical Playbooks",
                body: "Protocols for PT, aquatic therapy, and complementary recovery services derived from operating centers, to help new sites start with a mature framework.",
              },
              {
                title: "Insurance & Program Structure",
                body: "Guidance on integrating Medicare and private insurance billing for appropriate PT services with cash-based offerings and memberships, so centers can serve both medically referred and wellness-oriented populations.",
              },
              {
                title: "Staffing & Workflow Models",
                body: "Example staffing plans, role descriptions, and workflow templates to help partners hire, onboard, and organize teams effectively.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-white/10 bg-neutral-900 p-5">
                <p className="font-semibold text-white text-sm">{item.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">{item.body}</p>
              </div>
            ))}
          </div>

          {/* Technology, AI, and growth support */}
          <h3 className="mt-10 text-lg font-semibold text-white">Technology, AI &amp; Growth Support</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Clinix Agent & Shared Tools",
                body: "Built-in access to Clinix Agent for AI-assisted intake and scheduling, integrated with booking and CRM tools, so partners benefit from an advanced operations layer without custom development.",
              },
              {
                title: "Performance Dashboards & Analytics",
                body: "Network-wide analytics that track visit trends, utilization, service mix, and other key metrics, reviewed together on a regular basis to support decisions.",
              },
              {
                title: "Marketing & Relationship Playbooks",
                body: "Brand assets and practical launch and growth playbooks to help partners introduce the center, build referral and community relationships, and maintain visibility over time.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-white/10 bg-neutral-900 p-5">
                <p className="font-semibold text-white text-sm">{item.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">{item.body}</p>
              </div>
            ))}
          </div>

          {/* Not a franchise box */}
          <div className="mt-10 rounded-xl border border-cyan-500/20 bg-cyan-500/5 px-6 py-5">
            <p className="font-semibold text-cyan-400 text-sm">Not a franchise.</p>
            <p className="mt-1 text-sm text-slate-400">
              This is an equity partnership model with shared ownership, responsibilities, and infrastructure, rather than a franchise program.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ TIMELINE ═══ */}
      <section className="border-t border-white/10 bg-gradient-to-b from-neutral-900 to-neutral-950">
        <div className="container mx-auto px-4 py-14 sm:px-6 md:py-20">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-cyan-400">Path to Opening</p>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            A Typical Path to Opening
          </h2>
          <p className="mt-3 max-w-3xl text-slate-400">
            Every market has its own details, but most new Real PT &amp; Wellness Centers move through a similar set of stages.
          </p>
          <ol className="mt-8 space-y-6">
            {TIMELINE.map((item, i) => (
              <li key={item.step} className="flex gap-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-sm font-bold text-cyan-400">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-white">{item.step}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ═══ WHO THIS IS FOR ═══ */}
      <section className="border-t border-white/10 bg-neutral-950">
        <div className="container mx-auto px-4 py-14 sm:px-6 md:py-20">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-cyan-400">Ideal Partners</p>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Who This Is Designed For</h2>
          <p className="mt-3 max-w-3xl text-slate-400">
            The program is best suited for partners who want to be actively engaged in building and leading a center, not just passively investing.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                title: "Experienced Operators",
                body: "People who have led teams and managed P&Ls in healthcare, wellness, fitness, hospitality, or similar service-driven settings.",
              },
              {
                title: "Clinicians Ready to Expand",
                body: "Physical therapists and other clinicians who want to step into broader ownership and leadership while staying connected to patient outcomes.",
              },
              {
                title: "Long-Term Local Investors",
                body: "Individuals or small groups interested in building a durable, community-anchored wellness asset, comfortable being visible as local partners and engaged in oversight.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-white/10 bg-neutral-900 p-5">
                <p className="font-semibold text-white text-sm">{item.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-sm text-slate-500">
            You do not need to be a clinician to participate. The clinical framework, technology, and training resources are designed so that strong operators can run centers effectively in collaboration with clinical teams.
          </p>
        </div>
      </section>

      {/* ═══ INTEREST FORM ═══ */}
      <section id="partner-interest-form" className="scroll-mt-6 border-t border-white/10 bg-gradient-to-b from-neutral-900 to-neutral-950">
        <div className="container mx-auto px-4 py-14 sm:px-6 md:py-20">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-cyan-400">Get Started</p>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Share Your Interest</h2>
          <p className="mt-3 max-w-2xl text-slate-400">
            If the Real PT &amp; Wellness Operator–Equity Partnership aligns with how you like to build, lead, and invest, we&apos;d be glad to learn more about you and your market. Completing the form below simply starts a conversation; there is no obligation.
          </p>

          <form
            className="mt-8 max-w-2xl space-y-5"
            action={REALPT.contactUrl}
            method="GET"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="full-name" className="block text-sm font-medium text-slate-300">Full Name</label>
                <input
                  id="full-name"
                  name="name"
                  type="text"
                  required
                  className="mt-1 block w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 block w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-300">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="mt-1 block w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none"
                  placeholder="(555) 000-0000"
                />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-slate-300">City &amp; State</label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  className="mt-1 block w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none"
                  placeholder="Louisville, KY"
                />
              </div>
            </div>
            <div>
              <label htmlFor="background" className="block text-sm font-medium text-slate-300">Brief Background</label>
              <select
                id="background"
                name="background"
                className="mt-1 block w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-2.5 text-sm text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none"
              >
                <option value="">Select your background</option>
                <option value="healthcare">Healthcare</option>
                <option value="business-operator">Business Operator</option>
                <option value="clinician">Clinician</option>
                <option value="investor">Investor</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="capital" className="block text-sm font-medium text-slate-300">Approximate Capital You&apos;re Prepared to Invest</label>
              <select
                id="capital"
                name="capital"
                className="mt-1 block w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-2.5 text-sm text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none"
              >
                <option value="">Select a range</option>
                <option value="under-100k">Under $100K</option>
                <option value="100k-250k">$100K – $250K</option>
                <option value="250k-500k">$250K – $500K</option>
                <option value="500k-1m">$500K – $1M</option>
                <option value="over-1m">$1M+</option>
              </select>
            </div>
            <div>
              <label htmlFor="standout" className="block text-sm font-medium text-slate-300">
                What about this partnership model stands out to you?
              </label>
              <textarea
                id="standout"
                name="standout"
                rows={4}
                className="mt-1 block w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none resize-none"
                placeholder="Tell us a bit about what interests you..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400 hover:scale-[1.02]"
            >
              Submit Interest
            </button>
          </form>
        </div>
      </section>

      {/* ═══ CONTACT BAR ═══ */}
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
