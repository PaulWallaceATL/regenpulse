import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import type { ServicePageData } from "@/components/sections/service-page-template";

export const metadata: Metadata = {
  title: "Occupational Therapy | REAL PT & Wellness",
  description: "Restoring independence through functional rehabilitation and adaptive strategies.",
};

const PAGE_DATA: ServicePageData = {
  title: "Occupational Therapy",
  subtitle: "Restoring independence through functional rehabilitation and adaptive strategies.",
  overview: {
    heading: "Functional Independence Through OT",
    description: "Occupational therapy at REAL PT & Wellness focuses on helping you regain the ability to perform daily activities — from dressing and cooking to returning to work. Our licensed occupational therapists use evidence-based techniques and adaptive strategies to restore your independence after injury, surgery, or neurological events.",
    features: [
    "Activities of daily living (ADL) training",
    "Fine motor & hand therapy rehabilitation",
    "Cognitive rehabilitation & brain injury recovery",
    "Sensory integration therapy",
    "Adaptive equipment training & recommendations",
    "Workplace ergonomic assessments",
    "Pediatric OT services",
    "Home modification consultations",
    ],
  },
  howItWorks: {
    heading: "The OT Process",
    steps: [
    { title: "Functional Assessment", description: "Comprehensive evaluation of your daily living abilities, cognitive function, fine motor skills, and home/work environment needs." },
    { title: "Goal-Centered Plan", description: "Your OT creates a customized treatment plan focused on the specific activities and skills most important to your independence." },
    { title: "Skill Building & Adaptation", description: "Progressive therapy sessions combining skill retraining, adaptive technique instruction, and environmental modifications." },
    ],
  },
  benefits: {
    heading: "Why Occupational Therapy",
    items: [
    "Regain independence in daily activities",
    "Faster return to work after injury or surgery",
    "Improved fine motor skills & hand function",
    "Cognitive recovery support after stroke or TBI",
    "Home safety assessments to prevent falls",
    "Pediatric developmental milestone support",
    ],
  },
  whoIsItFor: {
    heading: "Who Is This For",
    audiences: ["Stroke & TBI Survivors", "Post-Surgical Patients", "Seniors", "Pediatric Patients", "Workers' Comp Cases", "Neurological Conditions"],
  },
  pricing: {
    heading: "Coverage & Payment",
    description: "Occupational therapy is covered by Medicare, Medicaid, most private insurance, and workers' compensation. We handle all insurance verification.",
  },
  cta: {
    heading: "Start Your OT Program",
    description: "Let our occupational therapists help you regain the independence and function that matters most to you.",
    buttonText: "Schedule OT Evaluation",
  },
};

export default function Page() {
  return <ServicePageTemplate data={PAGE_DATA} />;
}
