import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import type { ServicePageData } from "@/components/sections/service-page-template";

export const metadata: Metadata = {
  title: "Wearable Subscriptions | REAL PT & Wellness",
  description: "Monthly health monitoring subscriptions with data-driven insights and clinician oversight.",
};

const PAGE_DATA: ServicePageData = {
  title: "Wearable Subscriptions",
  subtitle: "Monthly health monitoring subscriptions with data-driven insights and clinician oversight.",
  overview: {
    heading: "Subscription Health Monitoring",
    description: "Our wearable subscription programs combine hardware devices with ongoing monitoring, data analysis, and clinician review. Get continuous health insights delivered to you and your care team — from sleep optimization reports to glucose trend analysis — all for one monthly fee.",
    features: [
    "Device + monitoring in one monthly fee",
    "Continuous glucose monitoring subscription",
    "Sleep optimization tracking & reports",
    "Heart rate variability (HRV) analysis",
    "Monthly health trend reports",
    "Clinician review of your data",
    "Alerts for concerning trends",
    "Upgrade or swap devices anytime",
    ],
  },
  howItWorks: {
    heading: "How Subscriptions Work",
    steps: [
    { title: "Choose Your Plan", description: "Select a monitoring subscription based on your health goals — glucose, sleep, cardiovascular, or comprehensive." },
    { title: "Receive Your Device", description: "We ship your monitoring device with setup instructions. Start collecting data immediately." },
    { title: "Monthly Insights", description: "Receive monthly health reports with clinician-reviewed insights, trends, and personalized recommendations." },
    ],
  },
  benefits: {
    heading: "Subscription Benefits",
    items: [
    "Affordable monthly cost (no big upfront purchase)",
    "Always have the latest monitoring technology",
    "Clinician oversight on your health data",
    "Actionable monthly health insights",
    "Early detection of metabolic & cardiac trends",
    "Seamless integration with your REAL PT care plan",
    ],
  },
  whoIsItFor: {
    heading: "Who Is This For",
    audiences: ["Chronic Disease Management", "Health Optimizers", "GLP-1 Weight Loss Patients", "Athletes", "Aging Adults", "Corporate Wellness Programs"],
  },
  pricing: {
    heading: "Subscription Plans",
    description: "All subscriptions include device, monitoring, and monthly clinician-reviewed reports.",
    tiers: [
      { name: "Sleep Track", price: "$29/mo", description: "Sleep ring + monthly sleep optimization report" },
      { name: "Glucose Track", price: "$79/mo", description: "CGM + glucose trend analysis & alerts" },
      { name: "Comprehensive", price: "$149/mo", description: "Multi-device monitoring + full health dashboard" },
    ],
  },
  cta: {
    heading: "Subscribe to Better Health",
    description: "Start your health monitoring subscription and get data-driven insights monthly.",
    buttonText: "Choose Your Plan",
  },
};

export default function Page() {
  return <ServicePageTemplate data={PAGE_DATA} />;
}
