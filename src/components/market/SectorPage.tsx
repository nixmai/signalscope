import Link from "next/link";

import { FooterDisclaimer, Navbar } from "@/components/layout/Navbar";
import { MarketHeatmaps } from "@/components/market/MarketHeatmaps";
import { SectorExplorer } from "@/components/market/SectorExplorer";
import { Card, CardHeader, StatusPill } from "@/components/ui/card";
import type { SectorGroup } from "@/data/market-map";

export function SectorPage({ sector }: Readonly<{ sector?: SectorGroup }>) {
  return (
    <div className="app-shell min-h-screen text-zinc-100">
      <Navbar />
      <main className="mx-auto max-w-[1500px] space-y-4 px-4 py-4">
        {sector ? (
          <Card>
            <CardHeader eyebrow="Sector detail" title={sector.name} action={<StatusPill tone="positive">{sector.stocks.length} stocks</StatusPill>} />
            <div className="p-4">
              <p className="max-w-3xl text-sm leading-6 text-zinc-400">{sector.description}</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {sector.stocks.map((stock) => (
                  <Link
                    key={stock.ticker}
                    href={`/ticker/${stock.ticker}`}
                    className="rounded-md border border-violet-300/10 bg-black/25 p-3 transition hover:border-violet-300/35 hover:bg-violet-400/10"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-mono text-lg font-semibold text-white">{stock.ticker}</p>
                        <p className="text-sm text-zinc-400">{stock.name}</p>
                      </div>
                      <span className={stock.change >= 0 ? "font-mono text-xs text-violet-200" : "font-mono text-xs text-rose-300"}>
                        {stock.change >= 0 ? "+" : ""}{stock.change.toFixed(2)}%
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-5 text-zinc-500">{stock.note}</p>
                    <p className="mt-3 font-mono text-xs text-zinc-500">{stock.marketCap}</p>
                  </Link>
                ))}
              </div>
            </div>
          </Card>
        ) : null}
        <SectorExplorer activeSector={sector?.name} />
        <MarketHeatmaps />
      </main>
      <FooterDisclaimer />
    </div>
  );
}
