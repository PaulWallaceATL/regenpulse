import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import type { ServicePageData } from "@/components/sections/service-page-template";

export const metadata: Metadata = {
  title: "REAL Fresh Nutrition | REAL PT & Wellness",
  description: "Clinical-grade smoothies, supplement stacks, and nutrition products from our in-house wellness bar.",
};

const PAGE_DATA: ServicePageData = {
  title: "REAL Fresh Nutrition",
  subtitle: "Clinical-grade smoothies, supplement stacks, and nutrition products from our in-house wellness bar.",
  overview: {
    heading: "Fuel Your Recovery",
    description: "REAL Fresh is our in-house nutrition bar and supplement program. From oxygen-infused smoothies and protein shakes to curated supplement stacks, everything we serve is designed to complement your therapy sessions and accelerate your health goals. Clinician-approved, made fresh, and available for walk-in or membership order.",
    features: [
    "O2 smoothies & oxygen-infused beverages",
    "Post-therapy recovery shakes",
    "Curated supplement stacks (recovery, sleep, focus)",
    "Collagen & gut health blends",
    "Pre-workout activation drinks",
    "Grab-and-go healthy meal options",
    "Member pricing on all products",
    "Online ordering for pickup",
    ],
  },
  howItWorks: {
    heading: "The REAL Fresh Experience",
    steps: [
    { title: "Choose Your Fuel", description: "Browse our menu of smoothies, shakes, and supplement stacks — each designed for a specific health goal (recovery, energy, sleep, immunity)." },
    { title: "Made Fresh", description: "Our team prepares your order with clinical-grade ingredients, no fillers, no artificial sweeteners — just real nutrition." },
    { title: "Fuel Your Session", description: "Grab your order before or after your therapy session for maximum synergy with your treatment plan." },
    ],
  },
  benefits: {
    heading: "Why REAL Fresh",
    items: [
    "Clinician-designed nutrition formulas",
    "Complements HBOT, cryo, and PT sessions",
    "No artificial ingredients or fillers",
    "Convenient grab-and-go options",
    "Member discounts on all products",
    "Supports recovery, energy, sleep & immunity",
    ],
  },
  whoIsItFor: {
    heading: "Who Is This For",
    audiences: ["Post-Therapy Recovery", "Athletes", "Health-Conscious Professionals", "Members", "Walk-In Customers", "Supplement Seekers"],
  },
  pricing: {
    heading: "Menu Pricing",
    description: "Walk-in pricing available. Members receive 15–25% off all REAL Fresh products.",
    tiers: [
      { name: "Smoothies & Shakes", price: "$8–$15", description: "Fresh-made with clinical-grade ingredients" },
      { name: "Supplement Stacks", price: "$24–$89/mo", description: "Curated monthly supplement packages" },
      { name: "Meal Options", price: "$12–$18", description: "Healthy grab-and-go meals" },
    ],
  },
  cta: {
    heading: "Fuel Your Wellness",
    description: "Visit REAL Fresh in-clinic or order online for pickup.",
    buttonText: "View Menu",
  },
};

export default function Page() {
  return <ServicePageTemplate data={PAGE_DATA} />;
}
