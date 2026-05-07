"use client";

import { motion } from "framer-motion";
import { Activity, Database, LineChart, ShieldCheck } from "lucide-react";
import Link from "next/link";

import { TickerSearchBar } from "@/components/stock/TickerSearchBar";
import { StatusPill } from "@/components/ui/card";
import { suggestedTickers, trendingThemes } from "@/data/mock-dashboard";

const terminalRows = [
  { icon: Database, label: "Provider mesh", value: "SEC + FMP + Finnhub + Polygon", tone: "neutral" as const },
  { icon: LineChart, label: "Signal stack", value: "Financials, valuation, peer map", tone: "positive" as const },
  { icon: ShieldCheck, label: "Research guardrails", value: "No direct buy/sell advice", tone: "warning" as const },
];

export function HomeTerminal() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgba(34,197,94,0.16),transparent_28%),radial-gradient(circle_at_78%_22%,rgba(34,211,238,0.14),transparent_27%),radial-gradient(circle_at_55%_72%,rgba(245,158,11,0.08),transparent_24%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" />
      <section className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-[1500px] items-center gap-10 px-4 py-12 lg:grid-cols-[1.04fr_0.96fr]">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex flex-wrap items-center gap-3"
          >
            <StatusPill tone="positive">Mocked MVP</StatusPill>
            <StatusPill>Terminal dashboard</StatusPill>
            <StatusPill tone="warning">Research only</StatusPill>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.55 }}
            className="max-w-5xl text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl"
          >
            Research any stock like a market analyst.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.55 }}
            className="mt-6 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg"
          >
            SignalScope turns ticker input into a dense institutional-style dashboard with financials, risks,
            valuation context, competitors, filings, catalysts, and a balanced AI research summary.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.55 }}
            className="mt-9"
          >
            <TickerSearchBar examples={suggestedTickers.slice(0, 4)} />
            <div className="mt-4 flex flex-wrap gap-2">
              {suggestedTickers.map((ticker) => (
                <Link
                  href={`/ticker/${ticker}`}
                  key={ticker}
                  className="rounded-md border border-white/10 bg-white/5 px-3 py-2 font-mono text-xs text-zinc-300 transition hover:border-cyan-300/40 hover:text-cyan-100"
                >
                  {ticker}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.aside
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 0.55 }}
          className="rounded-lg border border-white/10 bg-black/35 p-4 shadow-2xl backdrop-blur"
        >
          <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-200/70">Live workspace</p>
              <h2 className="mt-1 text-lg font-semibold text-white">Research Command Center</h2>
            </div>
            <Activity className="size-5 text-emerald-300" />
          </div>
          <div className="space-y-3">
            {terminalRows.map((row) => {
              const Icon = row.icon;
              return (
                <div key={row.label} className="rounded-md border border-white/10 bg-white/[0.045] p-3">
                  <div className="flex items-center gap-3">
                    <Icon className="size-4 text-cyan-200" />
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">{row.label}</span>
                  </div>
                  <p className="mt-2 text-sm text-zinc-200">{row.value}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {trendingThemes.map((theme) => (
              <div key={theme.label} className="rounded-md border border-white/10 bg-[#071014] p-3">
                <p className="text-sm font-medium text-white">{theme.label}</p>
                <p className="mt-2 font-mono text-xs text-zinc-500">{theme.tickers}</p>
              </div>
            ))}
          </div>
        </motion.aside>
      </section>
    </main>
  );
}
