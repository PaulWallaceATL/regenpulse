import type { Metadata } from "next";
import Contact2 from "@/components/contact/contact-2";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Contact | RegenPulse",
  description: "Get in touch with RegenPulse. Book a consult, request information, or partner with us.",
};

export default function ContactPage() {
  return (
    <div className="brand-page min-h-screen">
      <Contact2 />
      <Footer />
    </div>
  );
}
