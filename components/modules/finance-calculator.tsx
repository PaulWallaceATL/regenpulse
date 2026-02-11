"use client";

import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TrendingUp } from "lucide-react";

const MEMBERSHIP_MODELS = [
  { id: "starter", label: "Starter", techLeaseMonthly: 15_000 },
  { id: "growth", label: "Growth", techLeaseMonthly: 35_000 },
  { id: "scale", label: "Scale", techLeaseMonthly: 54_791 },
  { id: "enterprise", label: "Enterprise", techLeaseMonthly: 85_000 },
] as const;

function computeROI(localPricingMonthly: number, techLeaseMonthly: number): number | null {
  if (techLeaseMonthly <= 0) return null;
  const annualLocal = localPricingMonthly * 12;
  const annualLease = techLeaseMonthly * 12;
  return ((annualLocal - annualLease) / annualLease) * 100;
}

export function FinanceCalculator() {
  const [localPricing, setLocalPricing] = useState("");
  const [modelId, setModelId] = useState<string>(MEMBERSHIP_MODELS[0].id);

  const techLeaseMonthly = useMemo(
    () => MEMBERSHIP_MODELS.find((m) => m.id === modelId)?.techLeaseMonthly ?? 0,
    [modelId]
  );

  const localPricingNum = useMemo(() => {
    const n = Number(localPricing.replace(/[^0-9.]/g, ""));
    return Number.isFinite(n) ? n : 0;
  }, [localPricing]);

  const roi = useMemo(
    () => computeROI(localPricingNum, techLeaseMonthly),
    [localPricingNum, techLeaseMonthly]
  );

  const isValid = localPricingNum > 0 && techLeaseMonthly > 0;

  return (
    <Card className="w-full max-w-md overflow-hidden">
      <CardHeader className="border-b border-border bg-muted/30 pb-4">
        <CardTitle className="flex items-center gap-2 text-lg">
          <TrendingUp className="h-5 w-5 text-primary" aria-hidden />
          ROI Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        <div className="space-y-2">
          <Label htmlFor="finance-local-pricing">Local pricing ($/mo)</Label>
          <Input
            id="finance-local-pricing"
            type="text"
            inputMode="decimal"
            placeholder="e.g. 75000"
            value={localPricing}
            onChange={(e) => setLocalPricing(e.target.value)}
            aria-describedby="finance-local-pricing-hint"
          />
          <p id="finance-local-pricing-hint" className="text-xs text-muted-foreground">
            Monthly revenue from local pricing
          </p>
        </div>

        <div className="space-y-2">
          <Label>Membership model</Label>
          <Select value={modelId} onValueChange={setModelId}>
            <SelectTrigger aria-label="Select membership model">
              <SelectValue placeholder="Choose a model" />
            </SelectTrigger>
            <SelectContent>
              {MEMBERSHIP_MODELS.map((m) => (
                <SelectItem key={m.id} value={m.id}>
                  {m.label} — ${m.techLeaseMonthly.toLocaleString()}/mo tech lease
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div
          className="rounded-lg border border-border bg-primary/5 p-4 text-center"
          aria-live="polite"
          aria-atomic="true"
        >
          <p className="text-sm font-medium text-muted-foreground">
            Projected ROI (annual)
          </p>
          {isValid && roi !== null ? (
            <p
              className={`mt-1 text-3xl font-bold tabular-nums ${
                roi >= 0 ? "text-green-600 dark:text-green-400" : "text-destructive"
              }`}
            >
              {roi >= 0 ? "+" : ""}
              {roi.toFixed(1)}%
            </p>
          ) : (
            <p className="mt-1 text-2xl font-semibold text-muted-foreground">
              —
            </p>
          )}
          {isValid && roi !== null && (
            <p className="mt-2 text-xs text-muted-foreground">
              Based on annual revenue vs. annual tech lease cost
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
