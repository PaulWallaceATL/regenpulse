"use client";

import {
  Target,
  Sparkles,
  TrendingUp,
  Gift,
  Share2,
  ArrowRight,
  Trophy,
  Users,
  MapPin,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const CORE_LOOP_STEPS = [
  { id: "mission", label: "Complete Mission", icon: Target },
  { id: "xp", label: "Earn XP", icon: Sparkles },
  { id: "level", label: "Level Up", icon: TrendingUp },
  { id: "perk", label: "Unlock Perk", icon: Gift },
  { id: "share", label: "Share Progress", icon: Share2 },
] as const;

const DAILY_MISSIONS = [
  { name: "Complete 1 wellness check-in", xp: 50 },
  { name: "Log 30 min activity", xp: 75 },
  { name: "Attend a live class", xp: 100 },
  { name: "Scan QR at partner location", xp: 25 },
] as const;

const WEEKLY_MISSIONS = [
  { name: "Complete 5 check-ins", xp: 250 },
  { name: "Hit 3 live classes", xp: 400 },
  { name: "Top 10 in team challenge", xp: 500 },
  { name: "Refer a friend (signed up)", xp: 200 },
] as const;

const INDIVIDUAL_LEADERBOARD = [
  { rank: 1, name: "Alex M.", score: "12,450" },
  { rank: 2, name: "Jordan K.", score: "11,200" },
  { rank: 3, name: "Sam R.", score: "10,890" },
  { rank: 4, name: "Casey L.", score: "9,760" },
  { rank: 5, name: "Riley P.", score: "9,100" },
] as const;

const TEAM_LEADERBOARD = [
  { rank: 1, name: "Team Amazon", score: "89,200" },
  { rank: 2, name: "Team Nike", score: "76,500" },
  { rank: 3, name: "Team Delta", score: "71,100" },
  { rank: 4, name: "Team Phoenix", score: "68,400" },
  { rank: 5, name: "Team Summit", score: "65,000" },
] as const;

const REGION_LEADERBOARD = [
  { rank: 1, name: "West", score: "245,000" },
  { rank: 2, name: "Northeast", score: "198,000" },
  { rank: 3, name: "South", score: "176,500" },
  { rank: 4, name: "Midwest", score: "162,200" },
  { rank: 5, name: "Southwest", score: "148,900" },
] as const;

/** Radius for circular layout (percentage of container). */
const LOOP_RADIUS_PCT = 42;
/** 5 steps: start from top and go clockwise. */
const LOOP_ANGLES = [0, 72, 144, 216, 288];

function getCirclePosition(angleDeg: number, radiusPct: number) {
  const rad = (angleDeg * Math.PI) / 180;
  const x = 50 + radiusPct * Math.sin(rad);
  const y = 50 - radiusPct * Math.cos(rad);
  return { x, y };
}

export function GamificationIntro() {
  return (
    <section className="border-t border-border bg-muted/10">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Level Up Your Health | Gamified Wellness + Social Flex
        </h2>
        <p className="mt-3 text-center text-muted-foreground max-w-2xl mx-auto">
          Earn XP, level up, unlock perks, and compete on global leaderboards.
        </p>

        {/* Gamification Core Loop - circular flow */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-foreground mb-6 text-center">
            Gamification Core Loop
          </h3>
          <div className="relative mx-auto w-full max-w-lg aspect-square">
            {/* Connecting line (simplified: show arrows between nodes via a ring or separate arrows) */}
            <div
              className="absolute inset-0 rounded-full border-2 border-dashed border-muted-foreground/20"
              style={{ margin: "12%" }}
              aria-hidden
            />
            {CORE_LOOP_STEPS.map((step, index) => {
              const angle = LOOP_ANGLES[index];
              const { x, y } = getCirclePosition(angle, LOOP_RADIUS_PCT);
              const Icon = step.icon;
              return (
                <div
                  key={step.id}
                  className="absolute flex flex-col items-center justify-center"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-border bg-card shadow-sm sm:h-16 sm:w-16"
                    aria-hidden
                  >
                    <Icon className="h-6 w-6 text-primary sm:h-7 sm:w-7" />
                  </div>
                  <p className="mt-2 text-center text-xs font-medium text-foreground max-w-[80px] sm:max-w-[90px] sm:text-sm">
                    {step.label}
                  </p>
                </div>
              );
            })}
            {/* Arrow indicators between nodes: chevrons along the circle pointing to next step */}
            {CORE_LOOP_STEPS.map((_, index) => {
              const nextIndex = (index + 1) % CORE_LOOP_STEPS.length;
              const midAngle = (LOOP_ANGLES[index] + LOOP_ANGLES[nextIndex]) / 2;
              const { x, y } = getCirclePosition(midAngle, LOOP_RADIUS_PCT + 6);
              const arrowRotation = LOOP_ANGLES[nextIndex];
              return (
                <div
                  key={index}
                  className="absolute text-muted-foreground/60"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: `translate(-50%, -50%) rotate(${arrowRotation}deg)`,
                  }}
                  aria-hidden
                >
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Missions Dashboard mock */}
        <div className="mt-14">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Missions Dashboard
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Daily and weekly missions with XP rewards. Example view.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <Card className="border-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Daily missions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {DAILY_MISSIONS.map((m) => (
                  <div
                    key={m.name}
                    className="flex items-center justify-between rounded-lg border border-border bg-muted/10 px-3 py-2"
                  >
                    <span className="text-sm text-foreground">{m.name}</span>
                    <span className="text-sm font-semibold tabular-nums text-primary">
                      +{m.xp} XP
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Weekly missions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {WEEKLY_MISSIONS.map((m) => (
                  <div
                    key={m.name}
                    className="flex items-center justify-between rounded-lg border border-border bg-muted/10 px-3 py-2"
                  >
                    <span className="text-sm text-foreground">{m.name}</span>
                    <span className="text-sm font-semibold tabular-nums text-primary">
                      +{m.xp} XP
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Global Leaderboards */}
        <div className="mt-14">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Global Leaderboards
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            Compete as an individual, with your team, or by region.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            <Card className="border-border overflow-hidden">
              <CardHeader className="pb-2 flex flex-row items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Trophy className="h-4 w-4" />
                </div>
                <CardTitle className="text-base">Individuals</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2">
                  {INDIVIDUAL_LEADERBOARD.map((row) => (
                    <li
                      key={row.rank}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-muted-foreground w-6">
                        #{row.rank}
                      </span>
                      <span className="flex-1 truncate px-2 font-medium text-foreground">
                        {row.name}
                      </span>
                      <span className="tabular-nums text-muted-foreground">
                        {row.score}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border-border overflow-hidden">
              <CardHeader className="pb-2 flex flex-row items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Users className="h-4 w-4" />
                </div>
                <CardTitle className="text-base">Teams</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2">
                  {TEAM_LEADERBOARD.map((row) => (
                    <li
                      key={row.rank}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-muted-foreground w-6">
                        #{row.rank}
                      </span>
                      <span className="flex-1 truncate px-2 font-medium text-foreground">
                        {row.name}
                      </span>
                      <span className="tabular-nums text-muted-foreground">
                        {row.score}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border-border overflow-hidden">
              <CardHeader className="pb-2 flex flex-row items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-4 w-4" />
                </div>
                <CardTitle className="text-base">Regions</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2">
                  {REGION_LEADERBOARD.map((row) => (
                    <li
                      key={row.rank}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-muted-foreground w-6">
                        #{row.rank}
                      </span>
                      <span className="flex-1 truncate px-2 font-medium text-foreground">
                        {row.name}
                      </span>
                      <span className="tabular-nums text-muted-foreground">
                        {row.score}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
