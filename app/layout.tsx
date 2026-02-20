import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MainNav } from "@/components/layout/main-nav";
import { PageTransition } from "@/components/layout/page-transition";
import { Providers } from "@/components/providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RegenPulse | Total Wellness & Regenerative Center",
  description:
    "15 Clinical & Lifestyle Departments. Integrated technology for regeneration, recovery & performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased overflow-x-hidden`}
      >
        <Providers>
          <MainNav />
          <PageTransition>{children}</PageTransition>
        </Providers>
      </body>
    </html>
  );
}
