import Link from "next/link";

import { Card, CardHeader } from "@/components/ui/card";
import type { HeatMapGroup, HeatMapTile } from "@/data/market-map";
import { etfHeatmaps, indexHeatmaps } from "@/data/market-map";
import { cn } from "@/lib/utils/cn";

export function MarketHeatmaps() {
  return (
    <div className="grid gap-4 xl:grid-cols-2">
      <HeatmapPanel eyebrow="Index heatmaps" groups={indexHeatmaps} />
      <HeatmapPanel eyebrow="ETF heatmaps" groups={etfHeatmaps} />
    </div>
  );
}

function HeatmapPanel({ eyebrow, groups }: Readonly<{ eyebrow: string; groups: HeatMapGroup[] }>) {
  return (
    <Card>
      <CardHeader eyebrow={eyebrow} title="Market breadth map" />
      <div className="space-y-4 p-4">
        {groups.map((group) => (
          <div key={group.slug}>
            <div className="mb-2 flex items-end justify-between gap-3">
              <div>
                <h3 className="text-sm font-semibold text-white">{group.name}</h3>
                <p className="mt-1 text-xs text-zinc-500">{group.description}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-5">
              {group.tiles.map((tile) => (
                <HeatmapTile key={`${group.slug}-${tile.ticker}`} tile={tile} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function HeatmapTile({ tile }: Readonly<{ tile: HeatMapTile }>) {
  const positive = tile.change >= 0;
  const intensity = Math.min(Math.abs(tile.change) / 5, 1);

  return (
    <Link
      href={`/ticker/${tile.ticker}`}
      className={cn(
        "min-h-20 rounded-md border p-3 transition hover:scale-[1.015]",
        positive ? "border-violet-300/20 text-violet-50" : "border-rose-300/20 text-rose-50",
      )}
      style={{
        background: positive
          ? `rgba(139, 92, 246, ${0.14 + intensity * 0.34})`
          : `rgba(244, 63, 94, ${0.12 + intensity * 0.3})`,
      }}
    >
      <div className="flex items-start justify-between gap-2">
        <span className="font-mono text-sm font-semibold">{tile.ticker}</span>
        <span className="font-mono text-xs">{tile.change >= 0 ? "+" : ""}{tile.change.toFixed(2)}%</span>
      </div>
      <p className="mt-2 truncate text-xs opacity-80">{tile.name}</p>
      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] opacity-55">Weight {tile.weight}%</p>
    </Link>
  );
}
