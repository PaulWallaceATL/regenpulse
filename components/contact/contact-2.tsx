"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

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
                Ready to create
                <br />
                something amazing?
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="mt-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-semibold">
                  R
                </div>
                <p className="mt-4 font-semibold text-neutral-900 dark:text-white">
                  RegenPulse
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Atlanta, GA
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href="https://linkedin.com/company/regenpulse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
                  >
                    LinkedIn
                  </Link>
                  <Link
                    href="https://instagram.com/regenpulse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
                  >
                    Instagram
                  </Link>
                  <Link
                    href="https://twitter.com/regenpulse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
                  >
                    Twitter
                  </Link>
                  <Link
                    href="https://youtube.com/@regenpulse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
                  >
                    YouTube
                  </Link>
                </div>
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
