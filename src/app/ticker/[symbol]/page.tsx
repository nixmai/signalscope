import { FooterDisclaimer, Navbar } from "@/components/layout/Navbar";
import { PriceChartCard, RevenueMarginChart } from "@/components/stock/Charts";
import {
  BullBearCaseCard,
  CatalystsCard,
  CompanySnapshotCard,
  CompetitorMap,
  ExecutiveSummaryCard,
  FilingsCard,
  FinancialMetricsGrid,
  NewsFeedCard,
  RiskScoreCard,
  ThemeExposureCard,
  ValuationCard,
} from "@/components/stock/DashboardCards";
import { StockHeader } from "@/components/stock/StockHeader";
import { getMockDashboard } from "@/data/mock-dashboard";

type PageProps = {
  params: Promise<{ symbol: string }>;
};

export default async function TickerPage({ params }: PageProps) {
  const { symbol } = await params;
  const data = getMockDashboard(symbol);

  return (
    <div className="min-h-screen bg-[#05070d] text-zinc-100">
      <Navbar />
      <main className="mx-auto max-w-[1500px] space-y-4 px-4 py-4">
        <div className="rounded-lg border border-amber-300/20 bg-amber-300/10 px-4 py-3 font-mono text-xs text-amber-100">
          Phase 1 mock data active. TODO: connect dashboard shape to SEC EDGAR, FMP, Finnhub, Polygon/Massive, and OpenAI report generation.
        </div>
        <StockHeader data={data} />
        <div className="grid gap-4 xl:grid-cols-[330px_1fr_360px]">
          <div className="space-y-4">
            <CompanySnapshotCard data={data} />
            <ValuationCard data={data} />
            <CompetitorMap data={data} />
          </div>
          <div className="space-y-4">
            <ExecutiveSummaryCard data={data} />
            <PriceChartCard data={data} />
            <FinancialMetricsGrid data={data} />
            <RevenueMarginChart data={data} />
            <BullBearCaseCard data={data} />
          </div>
          <div className="space-y-4">
            <RiskScoreCard data={data} />
            <CatalystsCard data={data} />
            <ThemeExposureCard data={data} />
            <NewsFeedCard data={data} />
            <FilingsCard data={data} />
          </div>
        </div>
      </main>
      <FooterDisclaimer />
    </div>
  );
}
