import { FooterDisclaimer, Navbar } from "@/components/layout/Navbar";
import { StockHeatmap } from "@/components/market/StockHeatmap";
import { getHeatmapGroup, getHeatmapSectorGroups } from "@/data/market-map";

type PageProps = {
  searchParams: Promise<{ map?: string }>;
};

export default async function HeatmapsPage({ searchParams }: PageProps) {
  const { map } = await searchParams;
  const activeSlug = map ?? "sp500";
  const group = getHeatmapGroup(activeSlug);

  return (
    <div className="app-shell min-h-screen text-zinc-100">
      <Navbar />
      <main className="mx-auto max-w-[1900px] px-4 py-4">
        <StockHeatmap activeSlug={group.slug} description={group.description} groups={getHeatmapSectorGroups(group.slug)} />
      </main>
      <FooterDisclaimer />
    </div>
  );
}
