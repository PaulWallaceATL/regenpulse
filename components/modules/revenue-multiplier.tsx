"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layers, Building2, Network } from "lucide-react";

function formatCurrency(value: number): string {
  if (value >= 1_000_000) {
    return `$${(value / 1_000_000).toFixed(2)}M`;
  }
  if (value >= 1_000) {
    return `$${(value / 1_000).toFixed(0)}K`;
  }
  return `$${Math.round(value).toLocaleString()}`;
}

/** Projected monthly revenue by stream (display-only; aligned with cost-revenue model). */
const REVENUE_STREAMS = [
  {
    id: "membership",
    name: "Membership Math",
    description: "Recurring membership fees across tiers",
    monthlyRevenue: 220_000,
    icon: Layers,
  },
  {
    id: "owned",
    name: "Owned Clinics",
    description: "Revenue from company-owned locations",
    monthlyRevenue: 230_000,
    icon: Building2,
  },
  {
    id: "partner",
    name: "Partner Network",
    description: "Platform and partner location revenue",
    monthlyRevenue: 200_000,
    icon: Network,
  },
] as const;

const TOTAL_MONTHLY_REVENUE = REVENUE_STREAMS.reduce(
  (sum, s) => sum + s.monthlyRevenue,
  0
);
const MONTHLY_COSTS = 225_000;
const NET_MONTHLY = TOTAL_MONTHLY_REVENUE - MONTHLY_COSTS;

export function RevenueMultiplier() {
  return (
    <Card className="w-full overflow-hidden border-border bg-card">
      <CardHeader className="border-b border-border bg-muted/30 pb-4">
        <CardTitle className="text-lg font-semibold text-foreground">
          Combined Revenue Potential
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Projected monthly revenue streams and net (display only).
        </p>
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        {/* Three revenue streams */}
        <div className="grid gap-4 sm:grid-cols-3">
          {REVENUE_STREAMS.map(({ id, name, description, monthlyRevenue, icon: Icon }) => (
            <div
              key={id}
              className="flex flex-col rounded-lg border border-border bg-muted/10 p-4"
            >
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon className="h-4 w-4 shrink-0" aria-hidden />
                <span className="text-xs font-medium uppercase tracking-wide">
                  {name}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {description}
              </p>
              <p className="mt-3 text-xl font-bold tabular-nums text-foreground">
                {formatCurrency(monthlyRevenue)}
                <span className="ml-1 text-sm font-normal text-muted-foreground">
                  /mo
                </span>
              </p>
            </div>
          ))}
        </div>

        {/* Total Revenue */}
        <div className="flex flex-wrap items-baseline gap-2 border-t border-border pt-4">
          <span className="text-sm font-medium text-muted-foreground">
            Total Revenue
          </span>
          <span className="text-sm text-muted-foreground">=</span>
          <span className="text-sm text-muted-foreground">
            {REVENUE_STREAMS.map((s) => formatCurrency(s.monthlyRevenue)).join(
              " + "
            )}
          </span>
          <span className="text-sm text-muted-foreground">=</span>
          <span className="text-lg font-bold tabular-nums text-foreground">
            {formatCurrency(TOTAL_MONTHLY_REVENUE)}/mo
          </span>
        </div>

        {/* Net profit calculation */}
        <div className="rounded-lg border border-border bg-muted/10 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Net profit (monthly)
          </p>
          <div className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1 text-sm">
            <span className="font-medium text-foreground">
              {formatCurrency(TOTAL_MONTHLY_REVENUE)}
            </span>
            <span className="text-muted-foreground">−</span>
            <span className="font-medium text-foreground">
              {formatCurrency(MONTHLY_COSTS)}
            </span>
            <span className="text-muted-foreground">(costs)</span>
            <span className="text-muted-foreground">=</span>
            <span className="text-xl font-bold tabular-nums text-foreground">
              {formatCurrency(NET_MONTHLY)}
            </span>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Total revenue minus operating and platform costs.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
