import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import type { ServicePageData } from "@/components/sections/service-page-template";

export const metadata: Metadata = {
  title: "In-Clinic Physical Therapy | REAL PT & Wellness",
  description: "Evidence-based outpatient physical therapy with advanced technology integration.",
};

const PAGE_DATA: ServicePageData = {
  title: "In-Clinic Physical Therapy",
  secondaryImage: "/images/services/in-clinic-pt-2.jpg",
  heroImage: "/images/services/in-clinic-pt.jpeg",
  subtitle: "Evidence-based outpatient physical therapy with advanced technology integration.",
  overview: {
    heading: "Advanced Outpatient Physical Therapy",
    description: "Our in-clinic physical therapy program combines traditional manual techniques with cutting-edge recovery technology. Every session is guided by licensed therapists using AI-powered motion analysis, aquatic therapy pools, and regenerative modalities to accelerate your recovery.",
    features: [
    "1-on-1 sessions with licensed physical therapists",
    "AI-powered 3D gait & motion analysis",
    "Manual therapy & therapeutic exercise",
    "Sport-specific rehabilitation programs",
    "Post-surgical recovery protocols",
    "Chronic pain management",
    "Balance & vestibular rehabilitation",
    "Integration with HBOT, red light, and cryo therapies",
    ],
  },
  howItWorks: {
    heading: "Your PT Journey",
    steps: [
    { title: "Evaluation & Diagnosis", description: "Comprehensive assessment including functional movement screening, pain evaluation, and AI-powered biomechanical analysis." },
    { title: "Personalized Plan", description: "Your therapist creates a custom treatment plan combining manual therapy, exercise prescription, and technology-assisted recovery." },
    { title: "Progressive Treatment", description: "Regular sessions with measurable progress tracking, home exercise programs, and ongoing plan adjustments to optimize outcomes." },
    ],
  },
  benefits: {
    heading: "The REAL PT Difference",
    items: [
    "Technology-enhanced assessments for precise diagnosis",
    "Access to recovery tech (HBOT, cryo, red light) in one facility",
    "Individualized treatment — never grouped sessions",
    "Insurance-friendly with transparent pricing",
    "Flexible scheduling including early morning & evening",
    "Seamless referral coordination with physicians",
    ],
  },
  whoIsItFor: {
    heading: "Who Is This For",
    audiences: ["Athletes & Active Adults", "Post-Surgical Patients", "Chronic Pain Sufferers", "Workplace Injury Recovery", "Seniors", "Auto Accident Patients"],
  },
  pricing: {
    heading: "Insurance & Pricing",
    description: "We accept most major insurance plans, Medicare, Medicaid, workers' comp, and auto accident coverage. Self-pay rates and membership discounts available.",
  },
  cta: {
    heading: "Book Your PT Evaluation",
    description: "Schedule your initial evaluation and start your path to recovery with the most advanced PT clinic in the region.",
    buttonText: "Schedule Evaluation",
  },
};

export default function Page() {
  return <ServicePageTemplate data={PAGE_DATA} />;
}
