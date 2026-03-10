import type { Metadata } from "next";
import Link from "next/link";
import { ServiceVideoHero } from "@/components/sections/service-video-hero";
import Contact2 from "@/components/contact/contact-2";
import { Footer } from "@/components/layout/footer";
import { REALPT } from "@/lib/realpt";

const CONTACT_HERO_VIDEO = "/videos/contact-hero.mp4";

export const metadata: Metadata = {
  title: "Contact | REAL PT & Wellness",
  description: "Get in touch with REAL PT & Wellness. Book a consult, request information, or partner with us.",
};

export default function ContactPage() {
  return (
    <div className="brand-page min-h-screen">
      <ServiceVideoHero
        title="Get in touch with REAL PT & Wellness"
        description="Book a consult, request information, or partner with us. We're here to help you move and recover."
        videoSrc={CONTACT_HERO_VIDEO}
        videoType="video/mp4"
      >
        <Link
          href={REALPT.schedulingUrl}
          className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-neutral-900 shadow-lg transition-all hover:bg-white/95 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
        >
          Book a Consult
        </Link>
        <Link
          href="#contact-form"
          className="inline-flex items-center justify-center rounded-xl border-2 border-white/80 bg-transparent px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
        >
          Send a message
        </Link>
      </ServiceVideoHero>
      <div id="contact-form">
        <Contact2 />
      </div>
      <Footer />
    </div>
  );
}
