"use client";

import { useRef, useEffect, useState } from "react";
import {
  CalendarCheck,
  ShieldCheck,
  Stethoscope,
  FileCheck,
  Building2,
  UserCheck,
  Zap,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { supabase } from "@/lib/supabase/client";

type Partner = {
  id: string;
  name: string;
  category: string;
  url: string;
  sort_order: number | null;
};

const STEPS = [
  {
    icon: CalendarCheck,
    title: "Patient Books",
    description: "Patient selects a partner clinic and time that works.",
  },
  {
    icon: ShieldCheck,
    title: "Insurance Match",
    description: "We verify coverage and match the visit to the right plan.",
  },
  {
    icon: Stethoscope,
    title: "Visit & Treat",
    description: "Patient receives care at the clinic; we handle eligibility.",
  },
  {
    icon: FileCheck,
    title: "We Handle Billing",
    description: "Claims submitted and reconciled; clinic gets paid, patient gets superbill if needed.",
  },
];

const BENEFITS_CLINICS = [
  "More booked appointments from our network",
  "Insurance verification and eligibility handled",
  "Streamlined billing and faster reimbursement",
  "No extra admin burden — we integrate with your workflow",
];

const BENEFITS_PATIENTS = [
  "Book at 1,200+ clinics nationwide",
  "Know your coverage before you go",
  "One place to manage visits and benefits",
  "Superbills for HSA/FSA when applicable",
];

const BENEFITS_REGENPULSE = [
  "Unified network quality and standards",
  "Real-time capacity and scheduling visibility",
  "Consistent branding and patient experience",
  "Data and insights to grow the network",
];

export function PartnerNetwork() {
  const sectionRef = useRef<HTMLElement>(null);
  const [partners, setPartners] = useState<Partner[]>([]);
  const [partnersLoading, setPartnersLoading] = useState(true);

  useScrollAnimation(sectionRef, {
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0, duration: 0.5 },
    scrollTrigger: { start: "top 85%" },
  });

  useEffect(() => {
    async function fetchPartners() {
      try {
        const { data, error } = await supabase
          .from("partners")
          .select("id, name, category, url, sort_order")
          .order("sort_order", { nullsFirst: false });
        if (!error) setPartners((data ?? []) as Partner[]);
      } finally {
        setPartnersLoading(false);
      }
    }
    fetchPartners();
  }, []);

  return (
    <section ref={sectionRef} className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl max-w-4xl mx-auto">
          1,200+ Partner Clinics Nationwide | Book Anywhere, We Handle Insurance
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <div
              key={step.title}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <step.icon className="h-6 w-6" aria-hidden />
              </div>
              <p className="mt-3 text-sm font-medium text-muted-foreground">
                Step {index + 1}
              </p>
              <h3 className="mt-1 font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <h3 className="mt-14 text-center text-xl font-semibold text-foreground">
          Partner Clinic Benefits Grid
        </h3>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <Building2 className="h-5 w-5 text-primary" aria-hidden />
                Clinics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {BENEFITS_CLINICS.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <UserCheck className="h-5 w-5 text-primary" aria-hidden />
                Patients
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {BENEFITS_PATIENTS.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <Zap className="h-5 w-5 text-primary" aria-hidden />
                RegenPulse
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {BENEFITS_REGENPULSE.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {(partners.length > 0 || partnersLoading) && (
          <>
            <h3 className="mt-14 text-center text-xl font-semibold text-foreground">
              Our Partners
            </h3>
            <p className="mt-2 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
              Technology and vendor partners powering the RegenPulse network.
            </p>
            {partnersLoading ? (
              <p className="mt-6 text-center text-sm text-muted-foreground">
                Loading partners…
              </p>
            ) : (
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {partners.map((partner) => (
                  <Card key={partner.id} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base font-semibold">
                        {partner.name}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {partner.category}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <a
                        href={partner.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                      >
                        Visit site
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
