"use client";

import { useEffect, useState, useRef } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { supabase } from "@/lib/supabase/client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export type MembershipTier = {
  id: string;
  tier_name: string;
  price_monthly: number | null;
  access_details: string | null;
  best_for: string | null;
};

function TierCard({
  tier,
  onJoin,
}: {
  tier: MembershipTier;
  onJoin: (tier: MembershipTier) => void;
}) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>{tier.tier_name}</CardTitle>
        <CardDescription>
          {tier.price_monthly != null
            ? `$${Number(tier.price_monthly).toLocaleString()}/month`
            : "Contact for pricing"}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 space-y-3">
        {tier.access_details && (
          <p className="text-sm text-muted-foreground">{tier.access_details}</p>
        )}
        {tier.best_for && (
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Best for
            </p>
            <p className="mt-1 text-sm text-foreground">{tier.best_for}</p>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={() => onJoin(tier)}>
          Join Now
        </Button>
      </CardFooter>
    </Card>
  );
}

export function MembershipTiers() {
  const sectionRef = useRef<HTMLElement>(null);
  const [tiers, setTiers] = useState<MembershipTier[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useScrollAnimation(sectionRef, {
    from: { opacity: 0, y: 24 },
    to: { opacity: 1, y: 0, duration: 0.6 },
    scrollTrigger: { start: "top 88%" },
    disabled: loading || !!error,
  });

  useEffect(() => {
    async function fetchTiers() {
      try {
        setLoading(true);
        setError(null);
        const { data, error: fetchError } = await supabase
          .from("membership_tiers")
          .select("id, tier_name, price_monthly, access_details, best_for")
          .order("price_monthly", { ascending: true, nullsFirst: false });
        if (fetchError) throw fetchError;
        setTiers((data as MembershipTier[]) ?? []);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to load membership tiers");
        setTiers([]);
      } finally {
        setLoading(false);
      }
    }
    fetchTiers();
  }, []);

  const handleJoin = (tier: MembershipTier) => {
    // Placeholder: open franchise/partnership dialog or navigate to signup
    window.location.href = "#request-deck";
  };

  if (loading) {
    return (
      <section className="brand-section">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Choose Your RegenPulse Membership
          </h2>
          <p className="mt-6 text-center text-muted-foreground">
            Loading membership tiers…
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="brand-section">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Choose Your RegenPulse Membership
          </h2>
          <p className="mt-6 text-center text-destructive">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="brand-section">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Choose Your RegenPulse Membership
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {tiers.map((tier) => (
            <TierCard key={tier.id} tier={tier} onJoin={handleJoin} />
          ))}
        </div>
        {tiers.length === 0 && (
          <p className="mt-8 text-center text-muted-foreground">
            No membership tiers yet. Add records to the membership_tiers table in
            Supabase (e.g. Essential, Performance, Regeneration, Elite, Platinum).
          </p>
        )}
      </div>
    </section>
  );
}
