import Link from "next/link";

import { Card, CardHeader, StatusPill } from "@/components/ui/card";
import { sectors, sectorSlug } from "@/data/market-map";

export function SectorExplorer({ activeSector }: Readonly<{ activeSector?: string }>) {
  const activeSlug = activeSector ? sectorSlug(activeSector) : undefined;

  return (
    <Card>
      <CardHeader eyebrow="Sector map" title="Explore sectors" />
      <div className="grid gap-3 p-4 sm:grid-cols-2 xl:grid-cols-3">
        {sectors.map((sector) => (
          <Link
            key={sector.slug}
            href={`/sector/${sector.slug}`}
            className="rounded-md border border-violet-300/10 bg-black/25 p-3 transition hover:border-violet-300/35 hover:bg-violet-400/10"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-sm font-semibold text-white">{sector.name}</h3>
                <p className="mt-2 text-xs leading-5 text-zinc-500">{sector.description}</p>
              </div>
              {activeSlug === sector.slug ? <StatusPill tone="positive">Current</StatusPill> : null}
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {sector.stocks.slice(0, 4).map((stock) => (
                <span key={stock.ticker} className="rounded border border-white/10 px-2 py-1 font-mono text-[10px] text-zinc-400">
                  {stock.ticker}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </Card>
  );
}
