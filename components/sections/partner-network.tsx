"use client";

import { useRef, useEffect, useState } from "react";
import {
  Building2,
  MapPinned,
  Mountain,
  Route,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { supabase } from "@/lib/supabase/client";
import { PartnerMap } from "@/components/maps/partner-map";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Partner = {
  id: string;
  name: string;
  category: string;
  url: string;
  sort_order: number | null;
};

const STRATEGY_PILLARS = [
  {
    icon: MapPinned,
    title: "PT desert-first access",
    description:
      "Phase 1 prioritizes underserved Kentucky communities where PT, home-health, and mobile access gaps are greatest.",
  },
  {
    icon: Route,
    title: "Hub-and-satellite rollout",
    description:
      "Owensboro and Greenville anchor Western operations, while Richmond supports Eastern and Central expansion into Appalachian counties.",
  },
  {
    icon: Mountain,
    title: "Rural Kentucky first",
    description:
      "The current wave focuses on rural and small-city Kentucky before larger metro markets.",
  },
] as const;

const WESTERN_POD = [
  {
    location: "Owensboro",
    role: "Western hub",
    phase: "Phase 1",
  },
  {
    location: "Greenville / Muhlenberg",
    role: "PT desert hub",
    phase: "Phase 1",
  },
  {
    location: "Madisonville",
    role: "Satellite",
    phase: "Coming soon",
  },
  {
    location: "Hopkinsville / Ft Campbell",
    role: "Satellite",
    phase: "Coming soon",
  },
  {
    location: "Henderson",
    role: "Satellite",
    phase: "Coming soon",
  },
  {
    location: "Paducah",
    role: "Satellite / mini-hub",
    phase: "Coming soon",
  },
] as const;

const EASTERN_CENTRAL_POD = [
  {
    location: "Richmond",
    role: "Eastern/Central hub",
    phase: "Phase 1b",
  },
  {
    location: "Beattyville / Campton area",
    role: "Appalachia satellite",
    phase: "In development",
  },
  {
    location: "Irvine / Clay City / Stanton area",
    role: "Appalachia satellite",
    phase: "In development",
  },
  {
    location: "Additional micro-site (TBD)",
    role: "Optional satellite",
    phase: "In development",
  },
] as const;

const LOUISVILLE_PHASE_2_REASONS = [
  "A rural-first rollout allows broader Kentucky access before metro concentration.",
  "The current model prioritizes multiple lower-cost locations over a single metro launch.",
  "Louisville remains a future flagship once the desert-network model is validated.",
] as const;

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
          Kentucky Desert Network Strategy
        </h2>
        <p className="mt-3 text-center text-muted-foreground max-w-3xl mx-auto">
          Own the deserts, not the downtowns. Phase 1 centers on rural and
          small-city Kentucky hubs and satellites to expand PT, home-health,
          and mobile access. Louisville is positioned as a future Phase 2
          metro flagship.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {STRATEGY_PILLARS.map((pillar) => (
            <Card key={pillar.title}>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-base">
                  <pillar.icon className="h-5 w-5 text-primary" aria-hidden />
                  {pillar.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {pillar.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <PartnerMap />
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Card className="overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">
                Western Pod (Phase 1)
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Owensboro and Greenville hubs with planned Western satellites.
              </p>
            </CardHeader>
            <CardContent className="pt-2">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Location</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {WESTERN_POD.map((row) => (
                    <TableRow key={row.location}>
                      <TableCell className="font-medium">{row.location}</TableCell>
                      <TableCell>{row.role}</TableCell>
                      <TableCell>{row.phase}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <p className="mt-3 text-xs text-muted-foreground">
                Focus: PT deserts, home-health access, and mobile coverage
                across Western Kentucky.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">
                Eastern/Central Pod (Phase 1b)
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Richmond as the hub with Appalachian satellites in development.
              </p>
            </CardHeader>
            <CardContent className="pt-2">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Location</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {EASTERN_CENTRAL_POD.map((row) => (
                    <TableRow key={row.location}>
                      <TableCell className="font-medium">{row.location}</TableCell>
                      <TableCell>{row.role}</TableCell>
                      <TableCell>{row.phase}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <p className="mt-3 text-xs text-muted-foreground">
                Focus: rural Appalachia access, home health, and mobile PT into
                medically underserved counties.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 border-primary/20 bg-primary/5">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <Building2 className="h-5 w-5 text-primary" aria-hidden />
              Why Louisville Is Future Phase 2
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {LOUISVILLE_PHASE_2_REASONS.map((item) => (
                <li key={item} className="flex gap-2">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {(partners.length > 0 || partnersLoading) && (
          <>
            <h3 className="mt-14 text-center text-xl font-semibold text-foreground">
              Technology and Vendor Partners
            </h3>
            <p className="mt-2 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
              These partners support clinical delivery, operations, and rollout
              consistency across the Kentucky network.
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
