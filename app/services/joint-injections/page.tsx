import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import type { ServicePageData } from "@/components/sections/service-page-template";

export const metadata: Metadata = {
  title: "Joint Injections | REAL PT & Wellness",
  description: "Corticosteroid, hyaluronic acid, and regenerative joint injections for pain relief and mobility.",
};

const PAGE_DATA: ServicePageData = {
  title: "Joint Injections",
  subtitle: "Corticosteroid, hyaluronic acid, and regenerative joint injections for pain relief and mobility.",
  overview: {
    heading: "Precision Joint Injection Therapy",
    description: "Our joint injection program offers a range of evidence-based injectable treatments to manage pain, reduce inflammation, and restore joint function. From corticosteroid injections for acute flares to hyaluronic acid viscosupplementation for osteoarthritis, we provide targeted relief where you need it most.",
    features: [
    "Corticosteroid injections for acute inflammation",
    "Hyaluronic acid (viscosupplementation) for OA",
    "Ultrasound-guided injection accuracy",
    "Knee, shoulder, hip, and small joint treatment",
    "Reduced need for oral pain medications",
    "Rapid pain relief (often within 24–48 hours)",
    "Covered by most insurance plans",
    "Integration with PT for lasting results",
    ],
  },
  howItWorks: {
    heading: "Injection Process",
    steps: [
    { title: "Clinical Evaluation", description: "A thorough examination and imaging review to determine the appropriate injection type and precise injection site." },
    { title: "Guided Injection", description: "Using ultrasound guidance for accuracy, the provider delivers the therapeutic agent directly to the affected joint or tissue." },
    { title: "Follow-Up & Rehab", description: "Post-injection monitoring with physical therapy integration to maximize and sustain the benefits of the injection." },
    ],
  },
  benefits: {
    heading: "Why Joint Injections",
    items: [
    "Fast-acting pain relief (24–48 hours)",
    "Reduced inflammation at the source",
    "Improved joint mobility & range of motion",
    "Delay or avoid surgical intervention",
    "Insurance-covered for qualifying conditions",
    "Minimal downtime — return to activity quickly",
    ],
  },
  whoIsItFor: {
    heading: "Who Is This For",
    audiences: ["Osteoarthritis Patients", "Sports Injuries", "Chronic Joint Pain", "Post-Surgical Recovery", "Bursitis & Tendinitis", "Seniors"],
  },
  pricing: {
    heading: "Insurance & Pricing",
    description: "Most joint injections are covered by Medicare, Medicaid, and major insurance plans. Self-pay options available for non-covered procedures.",
  },
  cta: {
    heading: "Get Joint Pain Relief",
    description: "Schedule your consultation and find out which injection therapy is right for your condition.",
    buttonText: "Book Injection Consult",
  },
};

export default function Page() {
  return <ServicePageTemplate data={PAGE_DATA} />;
}
