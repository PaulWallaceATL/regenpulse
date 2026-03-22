import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import type { ServicePageData } from "@/components/sections/service-page-template";

export const metadata: Metadata = {
  title: "Partner Commissions | REAL PT & Wellness",
  description: "Earn commissions by referring clinics, facilities, and providers to the REAL PT ecosystem.",
};

const PAGE_DATA: ServicePageData = {
  title: "Partner Commissions",
  subtitle: "Earn commissions by referring clinics, facilities, and providers to the REAL PT ecosystem.",
  overview: {
    heading: "Earn With REAL PT",
    description: "Our partner commission program rewards individuals and organizations who refer new clinics, equipment buyers, and franchise operators to REAL PT. Whether you're a sales rep, consultant, existing partner, or industry professional, earn generous commissions on equipment sales, franchise deals, and software subscriptions.",
    features: [
    "15–20% commission on equipment referrals",
    "Recurring commissions on CLINIX SaaS referrals",
    "Franchise referral bonuses",
    "Real-time commission tracking dashboard",
    "Marketing materials & co-branded collateral",
    "Dedicated partner success manager",
    "Monthly commission payouts",
    "No cap on earnings",
    ],
  },
  howItWorks: {
    heading: "How the Program Works",
    steps: [
    { title: "Apply & Get Approved", description: "Submit your partner application. We review your network, industry experience, and market reach to approve qualified partners." },
    { title: "Refer & Earn", description: "Share your unique referral link or introduce prospects directly. Track all referrals and commissions in real-time through your partner dashboard." },
    { title: "Get Paid Monthly", description: "Commissions are calculated and paid monthly via direct deposit. Recurring commissions on SaaS referrals provide ongoing passive income." },
    ],
  },
  benefits: {
    heading: "Partner Program Benefits",
    items: [
    "Generous 15–20% commission rates",
    "Recurring revenue on SaaS referrals",
    "No earnings cap — unlimited potential",
    "Real-time tracking & reporting dashboard",
    "Marketing support & branded materials",
    "Dedicated partner success manager",
    ],
  },
  whoIsItFor: {
    heading: "Who Is This For",
    audiences: ["Medical Equipment Sales Reps", "Healthcare Consultants", "Gym & Fitness Owners", "Physical Therapy Professionals", "Business Brokers", "Industry Influencers"],
  },
  cta: {
    heading: "Become a Partner",
    description: "Apply to the REAL PT partner commission program and start earning.",
    buttonText: "Apply Now",
  },
};

export default function Page() {
  return <ServicePageTemplate data={PAGE_DATA} />;
}
