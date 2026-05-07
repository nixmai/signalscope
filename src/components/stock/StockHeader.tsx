import { Download, GitCompare, RefreshCw, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { StatusPill } from "@/components/ui/card";
import { formatMarketCap } from "@/lib/utils/formatters";
import type { DashboardData } from "@/types/stock";

export function StockHeader({ data }: Readonly<{ data: DashboardData }>) {
  const positive = data.quote.change >= 0;

  return (
    <section className="rounded-lg border border-white/10 bg-[#0b0f18]/90 p-4 shadow-[0_10px_40px_rgba(0,0,0,0.22)] backdrop-blur">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-semibold text-white sm:text-4xl">{data.company.ticker}</h1>
            <span className="text-lg text-zinc-300 sm:text-xl">{data.company.name}</span>
            <StatusPill>{data.company.exchange}</StatusPill>
            <StatusPill tone="positive">{data.company.sector}</StatusPill>
          </div>
          <p className="mt-3 max-w-4xl text-sm leading-6 text-zinc-400">{data.company.description}</p>
          <div className="mt-3 flex flex-wrap gap-3 font-mono text-xs text-zinc-500">
            <span>{data.company.industry}</span>
            <span>CEO: {data.company.ceo}</span>
            <span>{data.company.country}</span>
            <span>{data.company.employees.toLocaleString()} employees</span>
          </div>
        </div>
        <div className="min-w-[280px]">
          <div className="rounded-md border border-white/10 bg-black/30 p-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">Last available price</p>
            <div className="mt-2 flex items-end gap-3">
              <span className="text-3xl font-semibold text-white">${data.quote.price.toFixed(2)}</span>
              <span className={positive ? "pb-1 text-sm text-emerald-300" : "pb-1 text-sm text-rose-300"}>
                {positive ? "+" : ""}
                {data.quote.change.toFixed(2)} ({positive ? "+" : ""}
                {data.quote.changePercent.toFixed(2)}%)
              </span>
            </div>
            <div className="mt-3 flex justify-between font-mono text-xs text-zinc-500">
              <span>Market cap {formatMarketCap(data.company.marketCap)}</span>
              <span>{data.quote.lastUpdated}</span>
            </div>
            <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-cyan-200/70">
              {data.quote.source} / {data.quote.freshness.replaceAll("_", " ")}
            </div>
          </div>
          <div className="mt-3 grid grid-cols-4 gap-2">
            <Button variant="secondary" className="px-0" title="Save to watchlist">
              <Star className="size-4" />
            </Button>
            <Button variant="secondary" className="px-0" title="Refresh report">
              <RefreshCw className="size-4" />
            </Button>
            <Button variant="secondary" className="px-0" title="Compare">
              <GitCompare className="size-4" />
            </Button>
            <Button variant="secondary" className="px-0" title="Export PDF">
              <Download className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
