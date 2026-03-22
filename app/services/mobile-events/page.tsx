import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import type { ServicePageData } from "@/components/sections/service-page-template";

export const metadata: Metadata = {
  title: "Mobile Events | REAL PT & Wellness",
  description: "Bring REAL PT recovery and wellness technology to your event, team, or corporate campus.",
};

const PAGE_DATA: ServicePageData = {
  title: "Mobile Events",
  secondaryImage: "/images/services/mobile-events-2.jpg",
  heroImage: "/images/services/mobile-events.jpg",
  subtitle: "Bring REAL PT recovery and wellness technology to your event, team, or corporate campus.",
  overview: {
    heading: "Recovery On the Move",
    description: "REAL PT Mobile Events brings our recovery and wellness technology directly to sporting events, corporate campuses, festivals, military installations, and community health fairs. Our mobile units are fully equipped with cryotherapy, compression, red light therapy, and body composition scanning — delivering the full REAL PT experience anywhere.",
    features: [
    "Fully equipped mobile recovery trailers",
    "Cryotherapy, compression & red light therapy",
    "Body composition scanning & health assessments",
    "On-site licensed therapists & technicians",
    "Corporate wellness days & health fairs",
    "Sporting event & tournament recovery stations",
    "Military & first responder wellness events",
    "Custom branding & co-marketing opportunities",
    ],
  },
  howItWorks: {
    heading: "How Mobile Events Work",
    steps: [
    { title: "Book Your Event", description: "Contact our events team with your date, location, expected attendance, and which recovery modalities you'd like on-site." },
    { title: "We Set Up", description: "Our mobile team arrives with fully equipped trailers, sets up recovery stations, and briefs your group on available services." },
    { title: "Experience REAL Recovery", description: "Attendees experience hands-on recovery sessions with our licensed staff, plus health screenings and product sampling." },
    ],
  },
  benefits: {
    heading: "Event Benefits",
    items: [
    "Wow factor for corporate wellness programs",
    "Attract attendees to sporting events & festivals",
    "On-site recovery for athletes & teams",
    "Health screening & lead generation",
    "Build brand awareness in new markets",
    "Full-service — we handle setup & staffing",
    ],
  },
  whoIsItFor: {
    heading: "Who Is This For",
    audiences: ["Corporate Wellness Events", "Sporting Events & Tournaments", "Music Festivals & Expos", "Military Installations", "University Campuses", "Community Health Fairs"],
  },
  pricing: {
    heading: "Event Pricing",
    description: "Custom pricing based on event duration, location, attendance, and modalities requested.",
    tiers: [
      { name: "Half-Day Event", price: "From $2,500", description: "4 hours with 2–3 recovery modalities" },
      { name: "Full-Day Event", price: "From $5,000", description: "8 hours with full recovery suite" },
      { name: "Multi-Day / Series", price: "Custom", description: "Tournament, festival, or ongoing corporate programs" },
    ],
  },
  cta: {
    heading: "Book a Mobile Event",
    description: "Bring REAL PT recovery technology to your next event.",
    buttonText: "Request Event Quote",
  },
};

export default function Page() {
  return <ServicePageTemplate data={PAGE_DATA} />;
}
