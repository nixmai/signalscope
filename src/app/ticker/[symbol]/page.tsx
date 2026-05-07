import { FooterDisclaimer, Navbar } from "@/components/layout/Navbar";
import { MarketHeatmaps } from "@/components/market/MarketHeatmaps";
import { SectorExplorer } from "@/components/market/SectorExplorer";
import { PriceChartCard, RevenueMarginChart } from "@/components/stock/Charts";
import {
  BusinessBriefCard,
  BullBearCaseCard,
  CatalystsCard,
  CompanySnapshotCard,
  CompetitorMap,
  ExecutiveSummaryCard,
  FilingsCard,
  FinancialMetricsGrid,
  NewsFeedCard,
  PartnershipsCard,
  RiskScoreCard,
  ThemeExposureCard,
  ValuationCard,
} from "@/components/stock/DashboardCards";
import { StockHeader } from "@/components/stock/StockHeader";
import { getDashboardData } from "@/data/mock-dashboard";

type PageProps = {
  params: Promise<{ symbol: string }>;
};

export default async function TickerPage({ params }: PageProps) {
  const { symbol } = await params;
  const data = await getDashboardData(symbol);

  return (
    <div className="app-shell min-h-screen text-zinc-100">
      <Navbar />
      <main className="mx-auto max-w-[1500px] space-y-4 px-4 py-4">
        <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-violet-300/10 bg-[#0c0714]/86 px-4 py-2 text-xs text-zinc-400">
          <span className="font-mono uppercase tracking-[0.16em] text-violet-200/75">{data.dataNotice.label}</span>
          <span>{data.dataNotice.detail}</span>
        </div>
        <StockHeader data={data} />
        <BusinessBriefCard data={data} />
        <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_360px]">
          <div className="space-y-4">
            <ExecutiveSummaryCard data={data} />
            <PriceChartCard data={data} />
            <FinancialMetricsGrid data={data} />
            <RevenueMarginChart data={data} />
            <MarketHeatmaps />
            <BullBearCaseCard data={data} />
            <div className="grid gap-4 lg:grid-cols-2">
              <CompanySnapshotCard data={data} />
              <ValuationCard data={data} />
            </div>
          </div>
          <div className="space-y-4">
            <SectorExplorer activeSector={data.company.sector} />
            <RiskScoreCard data={data} />
            <PartnershipsCard data={data} />
            <CatalystsCard data={data} />
            <ThemeExposureCard data={data} />
            <CompetitorMap data={data} />
            <NewsFeedCard data={data} />
            <FilingsCard data={data} />
          </div>
        </div>
      </main>
      <FooterDisclaimer />
    </div>
  );
}
