import Link from "next/link";

import { heatmapTabs, type SectorStock } from "@/data/market-map";
import { cn } from "@/lib/utils/cn";

export function StockHeatmap({
  activeSlug,
  description,
  groups,
}: Readonly<{
  activeSlug: string;
  description: string;
  groups: Array<{ name: string; stocks: SectorStock[] }>;
}>) {
  return (
    <section className="rounded-lg border border-violet-300/10 bg-[#0c0714]/86 p-4 shadow-[0_16px_70px_rgba(0,0,0,0.34)]">
      <div className="flex flex-col gap-4 border-b border-violet-300/10 pb-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-4xl font-semibold text-white">Stock Heatmap</h1>
            <p className="mt-2 text-sm text-zinc-400">{description}</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="grid size-10 place-items-center rounded-md border border-violet-300/15 bg-white/5 text-zinc-300" title="Snapshot">
              <span className="text-lg">□</span>
            </button>
            <button className="grid size-10 place-items-center rounded-md border border-violet-300/15 bg-white/5 text-zinc-300" title="Settings">
              <span className="text-lg">◇</span>
            </button>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {heatmapTabs.map((tab) => (
            <Link
              key={tab.slug}
              href={`/heatmaps?map=${tab.slug}`}
              className={cn(
                "rounded-md border px-4 py-2 text-sm font-medium transition",
                activeSlug === tab.slug
                  ? "border-violet-300/40 bg-violet-400/15 text-violet-50"
                  : "border-violet-300/10 bg-black/25 text-zinc-400 hover:border-violet-300/30 hover:text-violet-100",
              )}
            >
              {tab.label}
            </Link>
          ))}
          <span className="hidden h-8 w-px bg-violet-300/10 sm:block" />
          <span className="rounded-md border border-violet-300/10 bg-black/25 px-4 py-2 text-sm text-zinc-300">Market cap</span>
          <span className="rounded-md border border-violet-300/10 bg-black/25 px-4 py-2 text-sm text-zinc-300">Change D, %</span>
          <span className="rounded-md border border-violet-300/10 bg-black/25 px-4 py-2 text-sm text-zinc-300">Sector</span>
        </div>
      </div>
      <div className="mt-4 grid auto-rows-[88px] grid-cols-12 gap-2 xl:grid-cols-24">
        {groups.map((group) => (
          <div
            key={group.name}
            className="col-span-12 grid grid-cols-6 gap-1.5 rounded-md border border-violet-300/10 bg-black/20 p-2 xl:col-span-8"
            style={{ gridAutoRows: "72px" }}
          >
            <div className="col-span-full flex items-center justify-between text-sm text-zinc-300">
              <span>{group.name}</span>
              <span>›</span>
            </div>
            {group.stocks.map((stock, index) => (
              <HeatmapCell key={`${group.name}-${stock.ticker}`} stock={stock} index={index} />
            ))}
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-zinc-500">
        Heatmap membership, weights, and changes are curated for UI/navigation until licensed constituent feeds are connected.
      </p>
    </section>
  );
}

function HeatmapCell({ stock, index }: Readonly<{ stock: SectorStock; index: number }>) {
  const positive = stock.change >= 0;
  const intensity = Math.min(Math.abs(stock.change) / 6, 1);
  const large = stock.weight >= 6 || index === 0;
  const medium = stock.weight >= 1 || index < 4;

  return (
    <Link
      href={`/ticker/${stock.ticker}`}
      className={cn(
        "flex min-h-16 flex-col items-center justify-center overflow-hidden rounded-sm border px-2 text-center transition hover:scale-[1.01] hover:ring-2 hover:ring-white/30",
        large ? "col-span-3 row-span-3" : medium ? "col-span-2 row-span-2" : "col-span-1 row-span-1",
        positive ? "border-emerald-950/25 text-white" : "border-rose-950/25 text-white",
      )}
      style={{
        background: positive
          ? `rgb(${Math.round(22 - intensity * 8)}, ${Math.round(138 + intensity * 72)}, ${Math.round(82 + intensity * 36)})`
          : `rgb(${Math.round(220 + intensity * 20)}, ${Math.round(70 - intensity * 25)}, ${Math.round(80 - intensity * 20)})`,
      }}
      title={`${stock.name}: ${stock.change >= 0 ? "+" : ""}${stock.change.toFixed(2)}%`}
    >
      <div className={cn("grid place-items-center rounded-full bg-black/35 font-mono font-semibold", large ? "mb-3 size-16 text-xl" : medium ? "mb-2 size-10 text-sm" : "size-7 text-[10px]")}>
        {stock.ticker.slice(0, 2)}
      </div>
      <span className={cn("font-mono font-semibold", large ? "text-3xl" : medium ? "text-base" : "text-[10px]")}>{stock.ticker}</span>
      <span className={cn("font-mono", large ? "mt-2 text-3xl" : medium ? "text-sm" : "hidden")}>
        {stock.change >= 0 ? "+" : ""}{stock.change.toFixed(2)}%
      </span>
    </Link>
  );
}
