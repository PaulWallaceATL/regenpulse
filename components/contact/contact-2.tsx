"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { REALPT } from "@/lib/realpt";

const SOCIAL_LINKS = [
  { href: "https://twitter.com/regenpulse", label: "Twitter", icon: Twitter },
  { href: "https://linkedin.com/company/regenpulse", label: "LinkedIn", icon: Linkedin },
  { href: "https://instagram.com/regenpulse", label: "Instagram", icon: Instagram },
  { href: "https://youtube.com/@regenpulse", label: "YouTube", icon: Youtube },
] as const;

export default function Contact2() {
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="w-full bg-white py-16 dark:bg-neutral-950 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Company Info */}
          <div className="flex flex-col justify-between">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="mb-4 text-2xl font-normal text-neutral-900 dark:text-white sm:text-3xl"
              >
                Get in touch—for care or partnership.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="mt-4 text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-md"
              >
                Whether you’re looking for physical therapy, aquatic therapy in our clinical-grade SwimEx® pool, or recovery services like HBOT and EXOPOD—we’re here. We work with insurance when appropriate and offer cash and membership options so you can get the care that fits.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="mt-6 text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-md"
              >
                If you’re a business or institution—corporate wellness, operator–equity partnership, government programs, or campus partnerships through REAL University—use the form or give us a call to start the conversation.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="mt-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-semibold">
                  R
                </div>
                <p className="mt-4 font-semibold text-neutral-900 dark:text-white">
                  {REALPT.siteName}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  <a href={`tel:${REALPT.phone}`} className="hover:underline">{REALPT.displayPhone}</a>
                </p>
                <ul className="mt-6 flex flex-wrap gap-4" aria-label="Social links">
                  {SOCIAL_LINKS.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center rounded-lg p-2 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-neutral-800 transition-colors"
                        aria-label={item.label}
                      >
                        <item.icon className="h-5 w-5" aria-hidden />
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <h3 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
              Contact us
            </h3>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first-name" className="text-neutral-700 dark:text-neutral-300">
                    First name
                  </Label>
                  <Input
                    id="first-name"
                    name="first-name"
                    placeholder="First name"
                    className="border-0 border-b border-neutral-300 rounded-none px-0 focus-visible:ring-0 dark:border-neutral-700"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name" className="text-neutral-700 dark:text-neutral-300">
                    Last name
                  </Label>
                  <Input
                    id="last-name"
                    name="last-name"
                    placeholder="Last name"
                    className="border-0 border-b border-neutral-300 rounded-none px-0 focus-visible:ring-0 dark:border-neutral-700"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-neutral-700 dark:text-neutral-300">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="border-0 border-b border-neutral-300 rounded-none px-0 focus-visible:ring-0 dark:border-neutral-700"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company" className="text-neutral-700 dark:text-neutral-300">
                  Company
                </Label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Company"
                  className="border-0 border-b border-neutral-300 rounded-none px-0 focus-visible:ring-0 dark:border-neutral-700"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-neutral-700 dark:text-neutral-300">
                  Message
                </Label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Type your message..."
                  className={cn(
                    "flex w-full resize-none rounded-none border-0 border-b border-neutral-300 bg-transparent px-0 py-2 text-base placeholder:text-muted-foreground",
                    "focus-visible:outline-none focus-visible:ring-0 focus-visible:border-primary",
                    "dark:border-neutral-700 dark:focus-visible:border-primary"
                  )}
                />
              </div>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacy"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-neutral-300 text-primary focus:ring-primary dark:border-neutral-600"
                />
                <Label
                  htmlFor="privacy"
                  className="text-sm text-neutral-600 dark:text-neutral-400 cursor-pointer leading-relaxed"
                >
                  I have read and understood the{" "}
                  <Link
                    href="/privacy"
                    className="font-medium text-neutral-900 dark:text-white underline underline-offset-2 hover:no-underline"
                  >
                    privacy statement
                  </Link>
                  .
                </Label>
              </div>
              <Button
                type="submit"
                size="lg"
                className="rounded-xl px-8 py-6 h-auto text-base font-semibold"
              >
                Submit
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
