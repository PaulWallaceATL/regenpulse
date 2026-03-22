import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import type { ServicePageData } from "@/components/sections/service-page-template";

export const metadata: Metadata = {
  title: "Medicare Home Health PT & OT | REAL PT & Wellness",
  description: "In-home physical and occupational therapy covered by Medicare Part A & Part B.",
};

const PAGE_DATA: ServicePageData = {
  title: "Medicare Home Health PT & OT",
  subtitle: "In-home physical and occupational therapy covered by Medicare Part A & Part B.",
  overview: {
    heading: "Comprehensive Home Health Services",
    description: "REAL PT & Wellness delivers licensed physical therapy and occupational therapy directly to patients' homes. Our Medicare-certified clinicians bring hospital-grade care to your living room — no transportation barriers, no waiting rooms, just personalized rehabilitation where you're most comfortable.",
    features: [
    "Medicare Part A & Part B covered services",
    "Licensed physical therapists & occupational therapists",
    "Post-surgical rehabilitation at home",
    "Fall prevention & balance training",
    "Stroke & neurological recovery programs",
    "Chronic pain management protocols",
    "Wound care & mobility restoration",
    "Coordination with physicians & specialists",
    ],
  },
  howItWorks: {
    heading: "How Home Health Works",
    steps: [
    { title: "Physician Referral", description: "Your doctor refers you to REAL PT home health services based on medical necessity and homebound status." },
    { title: "Initial Assessment", description: "A licensed therapist visits your home within 48 hours to evaluate your condition, set goals, and develop a personalized care plan." },
    { title: "Ongoing Treatment", description: "Regular in-home sessions (2–5x per week) with progress tracking, physician updates, and discharge planning." },
    ],
  },
  benefits: {
    heading: "Why Choose REAL PT Home Health",
    items: [
    "Zero out-of-pocket cost for qualifying Medicare patients",
    "Eliminate transportation barriers for seniors & post-op patients",
    "Personalized 1-on-1 care in a familiar environment",
    "Faster recovery rates vs. outpatient-only programs",
    "Seamless coordination with your medical team",
    "Licensed, background-checked, insured clinicians",
    ],
  },
  whoIsItFor: {
    heading: "Who Is This For",
    audiences: ["Post-Surgical Patients", "Seniors & Elderly", "Stroke Survivors", "Chronic Pain Patients", "Veterans", "Homebound Individuals"],
  },
  pricing: {
    heading: "Insurance & Payment",
    description: "Medicare covers 100% of medically necessary home health PT and OT with no copay or deductible. We also accept most major private insurance, Medicaid, and VA benefits.",
  },
  cta: {
    heading: "Get Started with Home Health PT",
    description: "Contact us today to verify your Medicare eligibility and schedule your first in-home assessment.",
    buttonText: "Verify Eligibility",
  },
};

export default function Page() {
  return <ServicePageTemplate data={PAGE_DATA} />;
}
