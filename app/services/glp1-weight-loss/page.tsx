import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import type { ServicePageData } from "@/components/sections/service-page-template";

export const metadata: Metadata = {
  title: "GLP-1 Weight Loss Programs | REAL PT & Wellness",
  description: "Medical weight management with GLP-1 medications, nutrition guidance, and metabolic support.",
};

const PAGE_DATA: ServicePageData = {
  title: "GLP-1 Weight Loss Programs",
  subtitle: "Medical weight management with GLP-1 medications, nutrition guidance, and metabolic support.",
  overview: {
    heading: "Medical Weight Loss with GLP-1",
    description: "Our GLP-1 weight loss program combines FDA-approved GLP-1 receptor agonist medications with comprehensive metabolic support, nutrition counseling, and body composition monitoring. This is physician-supervised medical weight management — not a diet, but a clinically-proven approach to sustainable weight loss.",
    features: [
    "FDA-approved GLP-1 receptor agonist medications",
    "Physician-supervised dosing & monitoring",
    "Advanced body composition tracking",
    "Nutrition counseling & meal planning",
    "Metabolic rate testing",
    "Integration with exercise & recovery programs",
    "Weekly or bi-weekly injection protocols",
    "Ongoing lab monitoring & health markers",
    ],
  },
  howItWorks: {
    heading: "Weight Loss Journey",
    steps: [
    { title: "Medical Assessment", description: "Comprehensive health evaluation including labs, body composition scan, metabolic testing, and medical history review." },
    { title: "GLP-1 Protocol Start", description: "Begin your GLP-1 medication with gradual dose titration, nutrition guidance, and weekly check-ins to monitor progress and manage any side effects." },
    { title: "Sustained Results", description: "Ongoing body composition tracking, metabolic optimization, and maintenance protocols to ensure lasting weight management success." },
    ],
  },
  benefits: {
    heading: "GLP-1 Program Benefits",
    items: [
    "Clinically proven 15–22% body weight reduction",
    "Reduced appetite & food cravings",
    "Improved blood sugar & insulin sensitivity",
    "Lower cardiovascular risk markers",
    "Body composition monitoring (not just scale weight)",
    "Integrated with fitness & recovery services",
    ],
  },
  whoIsItFor: {
    heading: "Who Is This For",
    audiences: ["BMI 27+ with Comorbidities", "BMI 30+ (Obesity)", "Type 2 Diabetes", "Metabolic Syndrome", "Failed Diet Programs", "Cardiovascular Risk Reduction"],
  },
  pricing: {
    heading: "Program Pricing",
    description: "GLP-1 programs include medication, monitoring, and support. Some insurance plans cover GLP-1 medications.",
    tiers: [
      { name: "Consultation + Labs", price: "$199", description: "Initial assessment, labs, body composition scan" },
      { name: "Monthly Program", price: "From $399/mo", description: "Medication + weekly support + monitoring" },
      { name: "Premium Program", price: "$599/mo", description: "Medication + nutrition + metabolic testing + recovery" },
    ],
  },
  cta: {
    heading: "Start Your Weight Loss Journey",
    description: "Schedule your medical weight loss consultation and take the first step toward lasting results.",
    buttonText: "Book Weight Loss Consult",
  },
};

export default function Page() {
  return <ServicePageTemplate data={PAGE_DATA} />;
}
