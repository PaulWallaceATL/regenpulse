"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const GROSS_K = 650;
const NET_K = 425;
const COST_K = GROSS_K - NET_K;

const CHART_DATA = [
  { name: "Monthly Gross", value: GROSS_K, fill: "var(--color-chart-1)" },
  { name: "Cost", value: COST_K, fill: "var(--color-chart-2)" },
  { name: "Net", value: NET_K, fill: "var(--color-chart-3)" },
];

function formatK(value: number) {
  return `$${(value * 1000).toLocaleString()}`;
}

function CustomTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: Array<{ name: string; value: number; payload: { name: string; value: number } }>;
}) {
  if (!active || !payload?.length) return null;
  const item = payload[0].payload;
  return (
    <div className="rounded-lg border border-border bg-background px-3 py-2 text-sm shadow-md">
      <p className="font-medium text-foreground">{item.name}</p>
      <p className="text-muted-foreground">{formatK(item.value)}</p>
    </div>
  );
}

export function CostRevenueChart() {
  return (
    <div className="h-[280px] w-full min-w-0">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={CHART_DATA}
          margin={{ top: 12, right: 12, left: 0, bottom: 0 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="var(--color-border)"
            vertical={false}
          />
          <XAxis
            dataKey="name"
            tick={{ fill: "var(--color-muted-foreground)", fontSize: 12 }}
            tickLine={false}
            axisLine={{ stroke: "var(--color-border)" }}
          />
          <YAxis
            tickFormatter={(v) => `$${v}K`}
            tick={{ fill: "var(--color-muted-foreground)", fontSize: 12 }}
            tickLine={false}
            axisLine={false}
            width={48}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: "var(--color-muted)", opacity: 0.2 }} />
          <Bar dataKey="value" radius={[4, 4, 0, 0]} maxBarSize={80}>
            {CHART_DATA.map((entry, index) => (
              <Cell key={index} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
