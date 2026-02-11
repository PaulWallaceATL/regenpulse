"use client";

import {
  Share2,
  BadgeCheck,
  Palette,
  Coffee,
  Tag,
  Sparkles,
  Lock,
  TrendingUp,
  Target,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const SOCIAL_MOCKUPS = [
  {
    id: "tiktok",
    name: "TikTok",
    accent: "bg-[#00f2ea]",
    border: "border-[#00f2ea]/40",
    bg: "bg-black",
    caption: "Just hit Level 5! 🏆 30-day streak on RegenPulse",
    handle: "@regen_user",
    cta: "Share to TikTok",
  },
  {
    id: "instagram",
    name: "Instagram",
    accent: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
    border: "border-[#ee2a7b]/40",
    bg: "bg-zinc-900",
    caption: "Unlocked the Recovery Champion badge 💪 #RegenPulse #Wellness",
    handle: "@regen_user",
    cta: "Share to Instagram",
  },
  {
    id: "x",
    name: "X",
    accent: "bg-foreground",
    border: "border-zinc-600",
    bg: "bg-zinc-950",
    caption: "Hit my wellness goal this week. Better missions unlocked. 🎯",
    handle: "@regen_user",
    cta: "Post to X",
  },
] as const;

const DIGITAL_REWARDS = [
  {
    id: "badges",
    title: "Badges",
    description: "Earn badges for streaks, milestones, and challenge wins. Display on your profile and in shares.",
    icon: BadgeCheck,
  },
  {
    id: "themes",
    title: "Profile themes",
    description: "Unlock exclusive profile themes and frames as you level up (e.g. Platinum tier, seasonal).",
    icon: Palette,
  },
] as const;

const REAL_WORLD_REWARDS = [
  {
    id: "shakes",
    title: "Free shakes & smoothies",
    description: "Redeem at partner locations for complimentary recovery drinks after completing qualifying missions.",
    icon: Coffee,
  },
  {
    id: "merch",
    title: "Merch discounts",
    description: "Percentage off RegenPulse and partner merch (e.g. 10% at Silver, 25% at Gold).",
    icon: Tag,
  },
] as const;

export function GamificationRewards() {
  return (
    <section className="border-t border-border bg-muted/10">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Gamification Rewards
        </h2>
        <p className="mt-3 text-center text-muted-foreground max-w-2xl mx-auto">
          Share your wins, unlock perks, and level up your AI Wellness Score for
          better missions and rewards.
        </p>

        {/* Social Sharing */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
            <Share2 className="h-5 w-5 text-primary" aria-hidden />
            Social Sharing
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            Broadcast achievements to TikTok, Instagram, and X with one tap.
            Mock-up of how a share looks on each platform.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {SOCIAL_MOCKUPS.map((platform) => (
              <Card
                key={platform.id}
                className={cn(
                  "overflow-hidden border-2",
                  platform.border,
                  platform.bg
                )}
              >
                <div
                  className={cn(
                    "h-1.5 w-full",
                    platform.accent,
                    platform.id === "instagram" && "rounded-full"
                  )}
                  aria-hidden
                />
                <CardContent className="p-4">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
                    {platform.name}
                  </p>
                  <div className="rounded-lg border border-border/50 bg-background/10 p-3 mb-3">
                    <p className="text-xs text-muted-foreground mb-1">
                      {platform.handle}
                    </p>
                    <p className="text-sm text-foreground">
                      {platform.caption}
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground italic">
                    {platform.cta}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Unlockable Perks & Rewards */}
        <div className="mt-14">
          <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" aria-hidden />
            Unlockable Perks & Rewards
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            Digital rewards for your profile and real-world benefits at partner
            locations.
          </p>
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="border-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Digital rewards</CardTitle>
                <CardDescription>
                  Badges, themes, and profile flair earned through levels and
                  missions.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {DIGITAL_REWARDS.map((reward) => (
                  <div
                    key={reward.id}
                    className="flex gap-3 rounded-lg border border-border bg-muted/10 p-3"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <reward.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-foreground">
                        {reward.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {reward.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Real-world rewards</CardTitle>
                <CardDescription>
                  Redeem at partner locations for drinks, discounts, and more.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {REAL_WORLD_REWARDS.map((reward) => (
                  <div
                    key={reward.id}
                    className="flex gap-3 rounded-lg border border-border bg-muted/10 p-3"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <reward.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-foreground">
                        {reward.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {reward.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* AI Wellness Score */}
        <div className="mt-14">
          <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" aria-hidden />
            AI Wellness Score
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Your score reflects engagement, consistency, and outcomes. It ties
            directly into gamification: higher scores unlock harder missions
            and better rewards.
          </p>
          <Card className="border-border border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm">
                  <Lock className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                  <span className="text-foreground">
                    <strong>Unlock harder missions:</strong> Silver+ score
                    unlocks Elite missions; Gold+ unlocks Platinum-only
                    challenges with 2× XP.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Target className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                  <span className="text-foreground">
                    <strong>Better rewards:</strong> Higher tiers get access to
                    exclusive badges, partner perks (e.g. free shake of the
                    month), and priority on leaderboards.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Sparkles className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                  <span className="text-foreground">
                    <strong>Score factors:</strong> Check-in consistency, mission
                    completion rate, social challenges joined, and optional
                    biometric inputs (with your consent) all feed your AI
                    Wellness Score.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
