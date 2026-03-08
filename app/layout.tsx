import type { Metadata } from "next";
import { Geist_Mono, Manrope, Playfair_Display } from "next/font/google";
import Navigation2 from "@/components/navigation/navigation-2";
import { PageTransition } from "@/components/layout/page-transition";
import { Providers } from "@/components/providers";
import "./globals.css";

const brandSans = Manrope({
  variable: "--font-brand-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const brandDisplay = Playfair_Display({
  variable: "--font-brand-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://regenpulse.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "REAL PT & Wellness | Physical and Aquatic Therapy",
    template: "%s | REAL PT & Wellness",
  },
  description:
    "REAL PT & Wellness — physical and aquatic therapy with a clinical-grade SwimEx hydrotherapy pool. PT, aquatic therapy, and recovery services; insurance when appropriate, plus cash and membership options.",
  keywords: [
    "REAL PT",
    "physical therapy",
    "aquatic therapy",
    "SwimEx",
    "hydrotherapy",
    "recovery",
    "wellness",
    "membership",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon",
    apple: "/apple-icon",
    shortcut: "/icon",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "REAL PT & Wellness",
    title: "REAL PT & Wellness | Physical and Aquatic Therapy",
    description:
      "Physical and aquatic therapy with clinical-grade SwimEx hydrotherapy. PT, recovery services, insurance and cash/membership options.",
    url: siteUrl,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "REAL PT & Wellness",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "REAL PT & Wellness | Physical and Aquatic Therapy",
    description:
      "Physical and aquatic therapy with clinical-grade SwimEx hydrotherapy. PT, recovery services, insurance and cash/membership options.",
    images: ["/twitter-image"],
    creator: "@realptwellness",
    site: "@realptwellness",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${brandSans.variable} ${brandDisplay.variable} ${geistMono.variable} min-h-screen overflow-x-hidden antialiased`}
      >
        <Providers>
          <PageTransition>{children}</PageTransition>
          <Navigation2 />
        </Providers>
      </body>
    </html>
  );
}
