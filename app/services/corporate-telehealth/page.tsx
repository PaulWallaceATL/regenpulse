import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import type { ServicePageData } from "@/components/sections/service-page-template";

export const metadata: Metadata = {
  title: "Corporate Telehealth | REAL PT & Wellness",
  description: "Virtual wellness consultations, telehealth PT, and remote health monitoring for enterprise teams.",
};

const PAGE_DATA: ServicePageData = {
  title: "Corporate Telehealth",
  secondaryImage: "/images/services/corporate-telehealth-2.jpeg",
  heroImage: "/images/services/corporate-telehealth.jpg",
  subtitle: "Virtual wellness consultations, telehealth PT, and remote health monitoring for enterprise teams.",
  overview: {
    heading: "Virtual Wellness for Your Workforce",
    description: "REAL PT Corporate Telehealth extends our clinical expertise to remote and distributed workforces. Employees access licensed physical therapists, wellness consultants, and health coaches through secure video visits — reducing workers' comp claims, improving productivity, and demonstrating your company's commitment to employee health.",
    features: [
    "Video visits with licensed physical therapists",
    "Virtual ergonomic assessments for remote workers",
    "Telehealth wellness coaching & nutrition",
    "Mental health & stress management sessions",
    "Remote health monitoring integration",
    "HIPAA-compliant video platform",
    "Group workshops & webinars",
    "Enterprise reporting & utilization analytics",
    ],
  },
  howItWorks: {
    heading: "Telehealth Implementation",
    steps: [
    { title: "Enterprise Setup", description: "We configure your company's telehealth portal with employee onboarding, scheduling, and benefit integration." },
    { title: "Employee Access", description: "Employees book virtual visits through a branded portal — PT consultations, ergonomic assessments, wellness coaching, and more." },
    { title: "Analytics & ROI", description: "Quarterly reports show utilization rates, health outcomes, workers' comp reduction, and program ROI for your leadership team." },
    ],
  },
  benefits: {
    heading: "Corporate Telehealth Benefits",
    items: [
    "Reduce workers' comp claims & costs",
    "Improve employee productivity & satisfaction",
    "Accessible for remote & distributed teams",
    "Ergonomic assessments prevent workplace injuries",
    "Demonstrate commitment to employee wellness",
    "Measurable ROI with enterprise analytics",
    ],
  },
  whoIsItFor: {
    heading: "Who Is This For",
    audiences: ["Enterprise HR & Benefits Teams", "Remote-First Companies", "Manufacturing & Warehouse", "Tech Companies", "Government Agencies", "Healthcare Systems"],
  },
  pricing: {
    heading: "Enterprise Pricing",
    description: "Per-employee-per-month (PEPM) pricing with volume discounts for large organizations.",
    tiers: [
      { name: "Essentials", price: "$8/employee/mo", description: "Virtual PT + ergonomic assessments" },
      { name: "Professional", price: "$15/employee/mo", description: "Full wellness suite + coaching" },
      { name: "Enterprise", price: "Custom", description: "Dedicated providers + custom programs + analytics" },
    ],
  },
  cta: {
    heading: "Launch Corporate Telehealth",
    description: "Schedule a demo to see how REAL PT telehealth can serve your workforce.",
    buttonText: "Request Enterprise Demo",
  },
};

export default function Page() {
  return <ServicePageTemplate data={PAGE_DATA} />;
}
