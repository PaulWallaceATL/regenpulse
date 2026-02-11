"use client";

import {
  Truck,
  UtensilsCrossed,
  ScanLine,
  ShoppingBag,
  Flame,
  BarChart3,
  Sun,
  Coffee,
  Dumbbell,
  Moon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const MEAL_TIERS = [
  {
    tier: "Essentials",
    price: "$89/wk",
    mealsPerWeek: "5",
    highlights: "Balanced macros, variety rotation, standard delivery",
  },
  {
    tier: "Performance",
    price: "$129/wk",
    mealsPerWeek: "7",
    highlights: "Athlete-focused, higher protein, fresh-shipped + local pickup",
  },
  {
    tier: "Regeneration",
    price: "$179/wk",
    mealsPerWeek: "10",
    highlights: "Recovery-focused, anti-inflammatory options, priority delivery",
  },
  {
    tier: "Elite",
    price: "$249/wk",
    mealsPerWeek: "14",
    highlights: "Fully customized, InBody-linked plans, concierge scheduling",
  },
] as const;

const KEY_FEATURES = [
  {
    id: "inbody",
    title: "InBody scan auto meal plan generator",
    description: "Sync your InBody results to get meal plans that match your body composition and goals.",
    icon: ScanLine,
  },
  {
    id: "ubereats",
    title: "One-click Uber Eats ordering",
    description: "Order Regen Fresh–approved meals from partner restaurants via Uber Eats without leaving the app.",
    icon: ShoppingBag,
  },
  {
    id: "gamification",
    title: "Gamification bonuses for meal streaks",
    description: "Hit daily or weekly meal goals to earn XP, badges, and premium refunds or discounts.",
    icon: Flame,
  },
  {
    id: "macro",
    title: "Macro tracking",
    description: "Track protein, carbs, and fats across meals; goals sync with your tier and InBody data.",
    icon: BarChart3,
  },
] as const;

const DAY_IN_LIFE = [
  { time: "6:00 AM", label: "Morning check-in", detail: "Log sleep, weight (optional); daily mission appears.", icon: Sun },
  { time: "7:30 AM", label: "Fresh delivery", detail: "Today’s Regen Fresh meals arrive or are ready for pickup.", icon: Truck },
  { time: "8:00 AM", label: "Breakfast + macro log", detail: "Eat from plan; one-tap log or scan. Streak counts.", icon: Coffee },
  { time: "12:00 PM", label: "Lunch (Uber Eats)", detail: "One-click order from approved menu; delivered to home or office.", icon: UtensilsCrossed },
  { time: "5:30 PM", label: "Class or recovery", detail: "Live class on Regen TV or visit partner location.", icon: Dumbbell },
  { time: "7:00 PM", label: "Dinner + reflect", detail: "Final meal from plan; weekly summary and rewards unlock.", icon: Moon },
] as const;

export function RegenFresh() {
  return (
    <section className="border-t border-border bg-muted/10">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Regen Fresh | Nutrition Delivery
        </h2>
        <p className="mt-3 text-center text-muted-foreground max-w-2xl mx-auto">
          Meal plans that fit your tier, delivery how you want—nationwide
          fresh-shipped or via Uber Eats.
        </p>

        {/* Meal Tiers table */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Meal Tiers
          </h3>
          <Card className="border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="font-semibold text-foreground">
                    Tier
                  </TableHead>
                  <TableHead className="font-semibold text-foreground">
                    Price
                  </TableHead>
                  <TableHead className="font-semibold text-foreground">
                    Meals/week
                  </TableHead>
                  <TableHead className="font-semibold text-foreground">
                    Highlights
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {MEAL_TIERS.map((row) => (
                  <TableRow key={row.tier}>
                    <TableCell className="font-medium">{row.tier}</TableCell>
                    <TableCell className="tabular-nums">{row.price}</TableCell>
                    <TableCell className="tabular-nums text-muted-foreground">
                      {row.mealsPerWeek}
                    </TableCell>
                    <TableCell className="text-muted-foreground text-sm">
                      {row.highlights}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>

        {/* Delivery Options */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Delivery Options
          </h3>
          <div className="grid gap-6 sm:grid-cols-2">
            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary mb-3">
                  <Truck className="h-5 w-5" aria-hidden />
                </div>
                <p className="font-semibold text-foreground">
                  Nationwide fresh-shipped delivery
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Meals are prepared in regional kitchens and shipped cold to your
                  door on your chosen schedule (e.g. weekly). Available across
                  the US; delivery windows and fees vary by tier and location.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary mb-3">
                  <UtensilsCrossed className="h-5 w-5" aria-hidden />
                </div>
                <p className="font-semibold text-foreground">
                  Partnership with Uber Eats
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Order from a curated list of Regen Fresh–approved restaurants
                  on Uber Eats. Meals count toward your plan and macro goals;
                  one-click ordering from the RegenPulse app with member pricing
                  where available.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key features with icons */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Key features
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {KEY_FEATURES.map((feature) => (
              <Card key={feature.id} className="border-border">
                <CardContent className="pt-6 flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <feature.icon className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {feature.title}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Ecosystem Synergy: A Day in RegenPulse Life */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Ecosystem Synergy
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            A Day in RegenPulse Life — how nutrition fits with check-ins,
            delivery, classes, and rewards.
          </p>
          <ul className="space-y-0">
            {DAY_IN_LIFE.map((item, index) => (
              <li key={item.time} className="flex gap-4">
                <div className="flex w-10 shrink-0 flex-col items-center">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-border bg-card text-primary"
                    aria-hidden
                  >
                    <item.icon className="h-5 w-5" />
                  </div>
                  {index < DAY_IN_LIFE.length - 1 && (
                    <div className="w-px flex-1 min-h-[1rem] bg-border my-1" aria-hidden />
                  )}
                </div>
                <Card className="flex-1 border-border mb-4">
                  <CardContent className="p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {item.time}
                    </p>
                    <p className="font-semibold text-foreground mt-1">
                      {item.label}
                    </p>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {item.detail}
                    </p>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
