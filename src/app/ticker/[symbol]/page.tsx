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
import { getDashboardData } from "@/data/mock-dashboard";

type PageProps = {
  params: Promise<{ symbol: string }>;
};

export default async function TickerPage({ params }: PageProps) {
  const { symbol } = await params;
  const data = await getDashboardData(symbol);

  return (
    <div className="min-h-screen bg-[#05070d] text-zinc-100">
      <Navbar />
      <main className="mx-auto max-w-[1500px] space-y-4 px-4 py-4">
        <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-white/10 bg-[#0b0f18]/80 px-4 py-2 text-xs text-zinc-400">
          <span className="font-mono uppercase tracking-[0.16em] text-cyan-200/70">{data.dataNotice.label}</span>
          <span>{data.dataNotice.detail}</span>
        </div>
        <StockHeader data={data} />
        <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_360px]">
          <div className="space-y-4">
            <ExecutiveSummaryCard data={data} />
            <PriceChartCard data={data} />
            <FinancialMetricsGrid data={data} />
            <RevenueMarginChart data={data} />
            <BullBearCaseCard data={data} />
            <div className="grid gap-4 lg:grid-cols-2">
              <CompanySnapshotCard data={data} />
              <ValuationCard data={data} />
            </div>
          </div>
          <div className="space-y-4">
            <RiskScoreCard data={data} />
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
