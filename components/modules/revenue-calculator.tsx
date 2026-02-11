"use client";

import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { DollarSign } from "lucide-react";

const SLIDER_MIN = 0;
const SLIDER_MAX = 200;
const SLIDER_STEP = 5;

const REVENUE_PER_APPOINTMENT = 85;
const WORKING_DAYS_PER_MONTH = 22;
const MONTHS_PER_YEAR = 12;

function formatCurrency(value: number): string {
  if (value >= 1_000_000) {
    return `$${(value / 1_000_000).toFixed(2)}M`;
  }
  if (value >= 1_000) {
    return `$${(value / 1_000).toFixed(1)}K`;
  }
  return `$${Math.round(value).toLocaleString()}`;
}

export function RevenueCalculator() {
  const [dailyAppointments, setDailyAppointments] = useState(50);

  const { daily, monthly, yearly } = useMemo(() => {
    const daily =
      dailyAppointments * REVENUE_PER_APPOINTMENT;
    const monthly = daily * WORKING_DAYS_PER_MONTH;
    const yearly = monthly * MONTHS_PER_YEAR;
    return { daily, monthly, yearly };
  }, [dailyAppointments]);

  return (
    <Card className="w-full max-w-md overflow-hidden">
      <CardHeader className="border-b border-border bg-muted/30 pb-4">
        <CardTitle className="flex items-center gap-2 text-lg">
          <DollarSign className="h-5 w-5 text-primary" aria-hidden />
          Platform Revenue Projection
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label htmlFor="daily-appointments-slider">
              Daily appointments
            </Label>
            <span className="text-sm font-medium tabular-nums text-foreground">
              {dailyAppointments}
            </span>
          </div>
          <Slider
            id="daily-appointments-slider"
            min={SLIDER_MIN}
            max={SLIDER_MAX}
            step={SLIDER_STEP}
            value={[dailyAppointments]}
            onValueChange={([v]) => setDailyAppointments(v ?? SLIDER_MIN)}
            aria-label="Daily appointments"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-border bg-muted/20 p-3 text-center">
            <p className="text-xs font-medium text-muted-foreground">Daily</p>
            <p className="mt-1 text-lg font-bold tabular-nums text-foreground">
              {formatCurrency(daily)}
            </p>
          </div>
          <div className="rounded-lg border border-border bg-muted/20 p-3 text-center">
            <p className="text-xs font-medium text-muted-foreground">Monthly</p>
            <p className="mt-1 text-lg font-bold tabular-nums text-foreground">
              {formatCurrency(monthly)}
            </p>
          </div>
          <div className="rounded-lg border border-border bg-muted/20 p-3 text-center">
            <p className="text-xs font-medium text-muted-foreground">Yearly</p>
            <p className="mt-1 text-lg font-bold tabular-nums text-foreground">
              {formatCurrency(yearly)}
            </p>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-muted/10 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Assumptions
          </p>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            <li>
              Platform revenue per appointment:{" "}
              <span className="font-medium text-foreground">
                ${REVENUE_PER_APPOINTMENT}
              </span>
            </li>
            <li>
              Working days per month:{" "}
              <span className="font-medium text-foreground">
                {WORKING_DAYS_PER_MONTH}
              </span>
            </li>
            <li>
              Daily revenue = Daily appointments × Revenue per appointment
            </li>
            <li>
              Monthly revenue = Daily revenue × Working days per month
            </li>
            <li>
              Yearly revenue = Monthly revenue × {MONTHS_PER_YEAR}
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
