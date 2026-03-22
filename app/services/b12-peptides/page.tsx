import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import type { ServicePageData } from "@/components/sections/service-page-template";

export const metadata: Metadata = {
  title: "B12 & Peptide Programs | REAL PT & Wellness",
  description: "B12 injections and peptide therapy for energy, metabolism, healing, and anti-aging.",
};

const PAGE_DATA: ServicePageData = {
  title: "B12 & Peptide Programs",
  secondaryImage: "/images/services/b12-peptides-2.jpg",
  heroImage: "/images/services/b12-peptides.jpg",
  subtitle: "B12 injections and peptide therapy for energy, metabolism, healing, and anti-aging.",
  overview: {
    heading: "Peptide & B12 Optimization",
    description: "Our B12 and peptide programs use targeted injectable therapies to optimize energy, metabolism, healing, and hormonal balance. From simple B12 energy shots to advanced peptide protocols for tissue repair, these programs are designed for those seeking next-level health optimization.",
    features: [
    "B12 methylcobalamin injections",
    "Tissue repair & gut healing peptides",
    "Growth hormone optimization peptides",
    "Immune modulation peptide protocols",
    "Sexual wellness peptide therapy",
    "Custom peptide stacking protocols",
    "Weekly injection programs available",
    "Physician-supervised with lab monitoring",
    ],
  },
  howItWorks: {
    heading: "How Peptide Programs Work",
    steps: [
    { title: "Consultation & Labs", description: "Initial assessment with bloodwork to identify deficiencies, hormonal imbalances, and determine the best peptide protocol." },
    { title: "Custom Protocol", description: "Your provider designs a personalized injection schedule targeting your specific health goals — energy, healing, sleep, or anti-aging." },
    { title: "Ongoing Optimization", description: "Regular follow-ups with lab monitoring to adjust dosing and track measurable improvements in your biomarkers." },
    ],
  },
  benefits: {
    heading: "Program Benefits",
    items: [
    "Sustained energy without stimulants (B12)",
    "Accelerated tissue & injury healing",
    "Optimized growth hormone production",
    "Enhanced immune function & resilience",
    "Improved sleep quality & recovery",
    "Anti-aging & metabolic optimization",
    ],
  },
  whoIsItFor: {
    heading: "Who Is This For",
    audiences: ["Low Energy & Fatigue", "Athletes & Recovery", "Anti-Aging", "Gut Health Issues", "Hormone Optimization", "Chronic Injury Recovery"],
  },
  pricing: {
    heading: "Program Pricing",
    description: "B12 injections available as walk-ins. Peptide programs require consultation.",
    tiers: [
      { name: "B12 Shot", price: "$25", description: "Single methylcobalamin B12 injection" },
      { name: "Peptide Consult", price: "$150", description: "Initial assessment + first month protocol" },
      { name: "Monthly Program", price: "From $200/mo", description: "Ongoing peptide program with monitoring" },
    ],
  },
  cta: {
    heading: "Optimize Your Biology",
    description: "Schedule your peptide consultation and start a protocol designed for your goals.",
    buttonText: "Book Peptide Consult",
  },
};

export default function Page() {
  return <ServicePageTemplate data={PAGE_DATA} />;
}
