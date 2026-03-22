import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import type { ServicePageData } from "@/components/sections/service-page-template";

export const metadata: Metadata = {
  title: "CLINIX Megabilling SaaS | REAL PT & Wellness",
  description: "All-in-one clinic management, billing, and insurance matching platform for wellness providers.",
};

const PAGE_DATA: ServicePageData = {
  title: "CLINIX Megabilling SaaS",
  subtitle: "All-in-one clinic management, billing, and insurance matching platform for wellness providers.",
  overview: {
    heading: "The Operating System for Wellness Clinics",
    description: "CLINIX is REAL PT's proprietary clinic management and megabilling SaaS platform. Built for regenerative wellness centers, PT clinics, and med spas, CLINIX handles patient scheduling, insurance verification, billing, claims processing, and revenue cycle management — all in one dashboard.",
    features: [
    "Patient scheduling & appointment management",
    "Real-time insurance verification & eligibility",
    "Automated claims submission & tracking",
    "Revenue cycle management dashboard",
    "Patient intake & digital forms",
    "Multi-location management",
    "Provider productivity analytics",
    "HIPAA-compliant & EHR integration",
    ],
  },
  howItWorks: {
    heading: "How CLINIX Works",
    steps: [
    { title: "Onboarding", description: "We set up your CLINIX instance with your payer contracts, provider credentials, fee schedules, and patient intake forms." },
    { title: "Automated Billing", description: "CLINIX automatically verifies insurance, submits claims, tracks payments, and flags denials for rapid resolution." },
    { title: "Revenue Optimization", description: "Real-time dashboards show revenue, denial rates, average reimbursement, and provider productivity — so you can optimize operations." },
    ],
  },
  benefits: {
    heading: "Why CLINIX",
    items: [
    "Reduce billing errors & claim denials by 60%+",
    "Faster insurance payments (avg 14-day turnaround)",
    "One platform for scheduling, billing & analytics",
    "Built specifically for wellness & regenerative clinics",
    "Multi-location support for franchise operators",
    "HIPAA-compliant with bank-grade security",
    ],
  },
  whoIsItFor: {
    heading: "Who Is This For",
    audiences: ["PT & Rehab Clinics", "Med Spas & Aesthetics", "Regenerative Wellness Centers", "Multi-Location Operators", "REAL PT Franchise Partners", "Chiropractic Offices"],
  },
  pricing: {
    heading: "CLINIX Pricing",
    description: "Subscription pricing based on provider count and locations. Volume discounts for REAL PT franchise partners.",
    tiers: [
      { name: "Starter", price: "$299/mo", description: "1 location, up to 3 providers" },
      { name: "Professional", price: "$599/mo", description: "Up to 3 locations, 10 providers" },
      { name: "Enterprise", price: "Custom", description: "Unlimited locations & providers, dedicated support" },
    ],
  },
  cta: {
    heading: "Run Your Clinic Smarter",
    description: "Schedule a CLINIX demo and see how our platform can transform your clinic operations.",
    buttonText: "Request Demo",
  },
};

export default function Page() {
  return <ServicePageTemplate data={PAGE_DATA} />;
}
