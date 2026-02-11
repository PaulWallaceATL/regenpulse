"use client";

import {
  GraduationCap,
  Package,
  Network,
  Users,
  ArrowRight,
  Monitor,
  Smartphone,
  BadgeCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

const CERTIFICATION_TRACKS = [
  {
    course: "Fundamentals",
    price: "$199",
    studentsPerYear: "4,000",
    revenue: "$796K",
    ecosystemLockIn: "App + content access, pathway to cert",
  },
  {
    course: "Practitioner Certification",
    price: "$999",
    studentsPerYear: "3,500",
    revenue: "$3.5M",
    ecosystemLockIn: "Equipment bundle, partner eligibility",
  },
  {
    course: "Advanced / Master",
    price: "$2,495",
    studentsPerYear: "2,000",
    revenue: "$4.99M",
    ecosystemLockIn: "Partner network, referral program",
  },
  {
    course: "Enterprise / Train-the-Trainer",
    price: "$4,995",
    studentsPerYear: "500",
    revenue: "$2.5M",
    ecosystemLockIn: "White-label, full ecosystem access",
  },
] as const;

const FLYWHEEL_STEPS = [
  {
    step: 1,
    label: "Student Certifies",
    description: "Completes Regen University course and earns credential.",
    icon: GraduationCap,
  },
  {
    step: 2,
    label: "Purchases Equipment",
    description: "Buys recommended equipment or bundles from partners.",
    icon: Package,
  },
  {
    step: 3,
    label: "Joins Partner Network",
    description: "Becomes a RegenPulse partner location or affiliate.",
    icon: Network,
  },
  {
    step: 4,
    label: "Refers Clients",
    description: "Sends clients into the ecosystem; earns referral rewards.",
    icon: Users,
  },
] as const;

const REQUIRED_ECOSYSTEM_PURCHASES = [
  {
    certification: "Fundamentals",
    required: "RegenPulse app subscription (included in tuition); no equipment required.",
  },
  {
    certification: "Practitioner Certification",
    required: "Starter equipment bundle (e.g. handheld device + consumables) or proof of equivalent; available via partner lease or purchase.",
  },
  {
    certification: "Advanced / Master",
    required: "Full equipment kit per curriculum (lease or purchase); partner location access for hands-on modules.",
  },
  {
    certification: "Enterprise / Train-the-Trainer",
    required: "Enterprise equipment package; white-label learning portal; optional on-site training kit.",
  },
] as const;

const EDUCATION_ECONOMICS = [
  { stream: "Tuition", amount: "$11.8M", description: "Course fees across all certification tracks (10K students/year)." },
  { stream: "Equipment leasing", amount: "$3.2M", description: "Recurring revenue from leased equipment to practitioners and locations." },
  { stream: "Network fees", amount: "$1.5M", description: "Fees from certified practitioners joining the partner network." },
] as const;
const EDUCATION_ECONOMICS_TOTAL = "$16.5M";

export function RegenUniversity() {
  return (
    <section className="border-t border-border bg-muted/10">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Regen University | Train 10K Practitioners Per Year | $199 – $4,995
          Courses
        </h2>
        <p className="mt-3 text-center text-muted-foreground max-w-2xl mx-auto">
          Certification tracks that drive revenue and lock practitioners into
          the RegenPulse ecosystem.
        </p>

        {/* Certification Tracks + Revenue table */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Certification Tracks + Revenue
          </h3>
          <Card className="border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="font-semibold text-foreground">
                    Course
                  </TableHead>
                  <TableHead className="font-semibold text-foreground">
                    Price
                  </TableHead>
                  <TableHead className="font-semibold text-foreground">
                    Students/Year
                  </TableHead>
                  <TableHead className="font-semibold text-foreground">
                    Revenue
                  </TableHead>
                  <TableHead className="font-semibold text-foreground">
                    Ecosystem Lock-In
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {CERTIFICATION_TRACKS.map((row) => (
                  <TableRow key={row.course}>
                    <TableCell className="font-medium">{row.course}</TableCell>
                    <TableCell className="tabular-nums">{row.price}</TableCell>
                    <TableCell className="tabular-nums text-muted-foreground">
                      {row.studentsPerYear}
                    </TableCell>
                    <TableCell className="tabular-nums font-medium">
                      {row.revenue}
                    </TableCell>
                    <TableCell className="text-muted-foreground text-sm">
                      {row.ecosystemLockIn}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>

        {/* Required Ecosystem Purchases */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Required Ecosystem Purchases
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Equipment or services required for each certification track.
          </p>
          <Card className="border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="font-semibold text-foreground w-[220px]">
                    Certification
                  </TableHead>
                  <TableHead className="font-semibold text-foreground">
                    Required equipment or service
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {REQUIRED_ECOSYSTEM_PURCHASES.map((row) => (
                  <TableRow key={row.certification}>
                    <TableCell className="font-medium">{row.certification}</TableCell>
                    <TableCell className="text-muted-foreground text-sm">
                      {row.required}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>

        {/* Hybrid Education Model + App Certification Integration */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Hybrid Education Model & App Certification
          </h3>
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="border-border">
              <CardContent className="pt-6">
                <p className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Monitor className="h-4 w-4 text-primary" aria-hidden />
                  Online + Hands-On Learning
                </p>
                <p className="text-sm text-muted-foreground">
                  Courses combine self-paced online modules with required
                  hands-on sessions at RegenPulse partner locations. Students
                  complete theory and assessments in the learning portal, then
                  book in-person labs to practice on equipment and earn
                  competency sign-off. This hybrid model ensures both knowledge
                  and practical skills before certification.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="pt-6">
                <p className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Smartphone className="h-4 w-4 text-primary" aria-hidden />
                  App Certification Integration
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  Completed certifications appear in the RegenPulse app as
                  verifiable digital badges. Practitioners and clients can view
                  credentials; partners use badges for eligibility and
                  visibility. Example:
                </p>
                <div
                  className="inline-flex items-center gap-3 rounded-xl border-2 border-primary/30 bg-primary/5 px-4 py-3"
                  aria-hidden
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <BadgeCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Digital badge
                    </p>
                    <p className="font-semibold text-foreground">
                      Regen Practitioner Certified
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Issued by Regen University
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Lifetime Value Flywheel */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Lifetime Value Flywheel
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            From certification to long-term ecosystem value.
          </p>
          <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:justify-center md:gap-2">
            {FLYWHEEL_STEPS.map((s, index) => (
              <div
                key={s.step}
                className={cn(
                  "flex items-center gap-3 md:gap-2",
                  index < FLYWHEEL_STEPS.length - 1 && "md:flex-nowrap"
                )}
              >
                <Card className="w-full min-w-0 border-border md:max-w-[200px]">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <s.icon className="h-4 w-4" aria-hidden />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-sm text-foreground">
                          {s.step}. {s.label}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {s.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                {index < FLYWHEEL_STEPS.length - 1 && (
                  <div
                    className="flex shrink-0 items-center justify-center text-muted-foreground/60"
                    aria-hidden
                  >
                    <ArrowRight className="h-5 w-5 rotate-90 md:rotate-0 md:mx-0.5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Education Economics */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Education Economics
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Total revenue from tuition, equipment leasing, and network fees
            (annual, illustrative).
          </p>
          <Card className="border-border border-primary/20 bg-primary/5 overflow-hidden">
            <CardContent className="pt-6 pb-6">
              <div className="grid gap-6 sm:grid-cols-3">
                {EDUCATION_ECONOMICS.map((item) => (
                  <div key={item.stream}>
                    <p className="text-2xl font-bold tabular-nums text-foreground">
                      {item.amount}
                    </p>
                    <p className="font-medium text-sm text-foreground mt-0.5">
                      {item.stream}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm font-medium text-muted-foreground">
                  Total (annual)
                </p>
                <p className="text-3xl font-bold tabular-nums text-foreground mt-1">
                  {EDUCATION_ECONOMICS_TOTAL}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enroll Now CTA */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <Button size="lg" className="text-base px-8 py-6 h-auto">
            Enroll Now
          </Button>
          <p className="text-sm text-muted-foreground">
            Choose a certification track and start training.
          </p>
        </div>
      </div>
    </section>
  );
}
