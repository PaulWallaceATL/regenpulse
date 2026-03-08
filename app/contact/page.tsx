import type { Metadata } from "next";
import Contact2 from "@/components/contact/contact-2";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Contact | REAL PT & Wellness",
  description: "Get in touch with REAL PT & Wellness. Book a consult, request information, or partner with us.",
};

export default function ContactPage() {
  return (
    <div className="brand-page min-h-screen">
      <Contact2 />
      <Footer />
    </div>
  );
}
