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
    default: "RegenPulse | Regenerative Wellness, Elevated",
    template: "%s | RegenPulse",
  },
  description:
    "Regenerative wellness and performance experiences across clinical care, programs, and partner network services.",
  keywords: [
    "RegenPulse",
    "regenerative wellness",
    "performance recovery",
    "corporate wellness",
    "membership health programs",
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
    siteName: "RegenPulse",
    title: "RegenPulse | Regenerative Wellness, Elevated",
    description:
      "Clinical and lifestyle programs for recovery, longevity, and performance with a premium member experience.",
    url: siteUrl,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "RegenPulse social preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RegenPulse | Regenerative Wellness, Elevated",
    description:
      "Clinical and lifestyle programs for recovery, longevity, and performance with a premium member experience.",
    images: ["/twitter-image"],
    creator: "@regenpulse",
    site: "@regenpulse",
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
          <Navigation2 />
          <PageTransition>{children}</PageTransition>
        </Providers>
      </body>
    </html>
  );
}
