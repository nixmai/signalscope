"use client";

import { Area, AreaChart, Bar, BarChart, CartesianGrid, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import { Card, CardHeader, StatusPill } from "@/components/ui/card";
import type { DashboardData } from "@/types/stock";

const chartText = "#a1a1aa";
const grid = "rgba(255,255,255,0.08)";

export function PriceChartCard({ data }: Readonly<{ data: DashboardData }>) {
  return (
    <Card className="min-h-[330px]">
      <CardHeader
        eyebrow="Price action"
        title="Price history"
        action={<StatusPill tone={data.quote.freshness === "mock" ? "warning" : "positive"}>{data.quote.freshness.replaceAll("_", " ")}</StatusPill>}
      />
      <div className="h-[270px] p-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data.priceHistory}>
            <defs>
              <linearGradient id="priceFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#22c55e" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke={grid} vertical={false} />
            <XAxis dataKey="date" stroke={chartText} tickLine={false} axisLine={false} fontSize={12} />
            <YAxis stroke={chartText} tickLine={false} axisLine={false} fontSize={12} width={42} />
            <Tooltip
              contentStyle={{ background: "#05070d", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 8 }}
              labelStyle={{ color: "#fff" }}
            />
            <Area type="monotone" dataKey="close" stroke="#22d3ee" strokeWidth={2} fill="url(#priceFill)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

export function RevenueMarginChart({ data }: Readonly<{ data: DashboardData }>) {
  return (
    <Card className="min-h-[330px]">
      <CardHeader eyebrow="Fundamental trend" title="Revenue and margins" />
      <div className="h-[270px] p-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data.revenueMargins}>
            <CartesianGrid stroke={grid} vertical={false} />
            <XAxis dataKey="period" stroke={chartText} tickLine={false} axisLine={false} fontSize={12} />
            <YAxis yAxisId="left" stroke={chartText} tickLine={false} axisLine={false} fontSize={12} width={42} />
            <YAxis yAxisId="right" orientation="right" stroke={chartText} tickLine={false} axisLine={false} fontSize={12} width={42} />
            <Tooltip
              contentStyle={{ background: "#05070d", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 8 }}
              labelStyle={{ color: "#fff" }}
            />
            <Bar yAxisId="left" dataKey="revenue" fill="#22d3ee" radius={[4, 4, 0, 0]} name="Revenue ($B)" />
            <Line yAxisId="right" type="monotone" dataKey="grossMargin" stroke="#22c55e" strokeWidth={2} name="Gross margin %" />
            <Line yAxisId="right" type="monotone" dataKey="operatingMargin" stroke="#f59e0b" strokeWidth={2} name="Operating margin %" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
