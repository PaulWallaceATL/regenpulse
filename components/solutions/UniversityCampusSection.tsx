"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Trophy, Heart, Users, BookOpen, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const PARTNERSHIP_AREAS = [
  {
    id: "athletics",
    title: "Athletics Programs",
    description: "Partner with athletic departments to deliver recovery, performance, and wellness services to student-athletes and staff. Integrated with sports medicine and strength & conditioning.",
    icon: Trophy,
  },
  {
    id: "wellness",
    title: "University Wellness Systems",
    description: "Work with campus wellness and student health to offer RegenPulse services campus-wide—from rec centers and health clinics to employee wellness and student engagement.",
    icon: Heart,
  },
  {
    id: "campus",
    title: "Campus-Wide Services",
    description: "Deploy our platform and on-site options across campus: pop-up stations, dedicated wellness spaces, and app access for students, faculty, and staff.",
    icon: Users,
  },
] as const;

const OFFERINGS = [
  "Recovery & performance for athletes",
  "Student and employee wellness programs",
  "Integration with campus rec and health services",
  "Custom dashboards and participation reporting",
  "Multi-year contracts tailored to university budgets",
];

export function UniversityCampusSection() {
  return (
    <section id="regen-university-content" className="bg-white dark:bg-neutral-950 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-3xl">
            Partner with Athletics & University Wellness
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            We partner with athletics programs and university wellness systems to bring RegenPulse services to campuses—supporting student-athletes, students, faculty, and staff with recovery, performance, and holistic wellness.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {PARTNERSHIP_AREAS.map((area, i) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.1 }}
              >
                <Card className="h-full border-neutral-200/80 dark:border-neutral-800">
                  <CardContent className="p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-semibold text-lg text-neutral-900 dark:text-white">
                      {area.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {area.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-14 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/50 p-8 md:p-10"
        >
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            What we offer campuses
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {OFFERINGS.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300"
              >
                <Check className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-500 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-14 flex flex-col items-center gap-4 text-center"
        >
          <Button size="lg" className="text-base px-8 py-6 h-auto" asChild>
            <Link href="/contact">Partner with us</Link>
          </Button>
          <p className="text-sm text-muted-foreground">
            Contact us to discuss athletics and campus wellness partnerships.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
