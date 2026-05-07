import { AlertTriangle, ArrowDownRight, ArrowUpRight, Building2, CircleDollarSign, FileText, Newspaper, ShieldAlert, Sparkles, Target } from "lucide-react";

import { Card, CardHeader, StatusPill } from "@/components/ui/card";
import { cn } from "@/lib/utils/cn";
import type { DashboardData, RiskSeverity } from "@/types/stock";

function severityTone(severity: RiskSeverity) {
  if (severity === "high") return "negative";
  if (severity === "medium") return "warning";
  return "positive";
}

export function ExecutiveSummaryCard({ data }: Readonly<{ data: DashboardData }>) {
  const verdict = data.report.researchVerdict;
  return (
    <Card className="xl:col-span-2">
      <CardHeader
        eyebrow="AI executive summary"
        title={verdict.label}
        action={<StatusPill tone="positive">Score {verdict.overallResearchScore}</StatusPill>}
      />
      <div className="grid gap-5 p-4 lg:grid-cols-[1fr_260px]">
        <ul className="space-y-3">
          {data.report.executiveSummary.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-6 text-zinc-300">
              <Sparkles className="mt-1 size-4 shrink-0 text-cyan-200" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="grid gap-3">
          <div className="rounded-md border border-emerald-300/20 bg-emerald-300/10 p-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-200/70">Biggest bull point</p>
            <p className="mt-2 text-sm leading-5 text-emerald-50">{data.report.biggestBullPoint}</p>
          </div>
          <div className="rounded-md border border-amber-300/20 bg-amber-300/10 p-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-amber-200/70">Biggest bear point</p>
            <p className="mt-2 text-sm leading-5 text-amber-50">{data.report.biggestBearPoint}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export function CompanySnapshotCard({ data }: Readonly<{ data: DashboardData }>) {
  const overview = data.report.businessOverview;
  return (
    <Card>
      <CardHeader eyebrow="Company snapshot" title="Business model" action={<Building2 className="size-4 text-cyan-200" />} />
      <div className="space-y-4 p-4 text-sm leading-6 text-zinc-300">
        <p>{overview.whatTheyDo}</p>
        <div className="rounded-md border border-white/10 bg-black/25 p-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">How it makes money</p>
          <p className="mt-2">{overview.howTheyMakeMoney}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {overview.mainSegments.map((segment) => (
            <StatusPill key={segment}>{segment}</StatusPill>
          ))}
        </div>
      </div>
    </Card>
  );
}

export function FinancialMetricsGrid({ data }: Readonly<{ data: DashboardData }>) {
  return (
    <Card className="xl:col-span-2">
      <CardHeader eyebrow="Financial metrics" title="Key operating and valuation metrics" action={<CircleDollarSign className="size-4 text-emerald-200" />} />
      <div className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-5">
        {data.financialMetrics.map((metric) => {
          const Icon = metric.status === "up" ? ArrowUpRight : metric.status === "down" ? ArrowDownRight : Target;
          return (
            <div key={metric.label} className="rounded-md border border-white/10 bg-black/25 p-3">
              <div className="flex items-center justify-between gap-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">{metric.label}</p>
                <Icon className={cn("size-4", metric.status === "up" && "text-emerald-300", metric.status === "down" && "text-amber-300", metric.status === "flat" && "text-cyan-200")} />
              </div>
              <p className="mt-3 text-xl font-semibold text-white">{metric.value}</p>
              <p className="mt-1 text-xs text-zinc-500">{metric.change}</p>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

export function CompetitorMap({ data }: Readonly<{ data: DashboardData }>) {
  return (
    <Card>
      <CardHeader eyebrow="Peer map" title="Competitors and thematic peers" />
      <div className="space-y-3 p-4">
        {data.competitors.map((peer) => (
          <div key={peer.ticker} className="rounded-md border border-white/10 bg-black/25 p-3">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-mono text-lg font-semibold text-white">{peer.ticker}</p>
                <p className="text-sm text-zinc-400">{peer.name}</p>
              </div>
              <StatusPill>{peer.relationshipType.replaceAll("_", " ")}</StatusPill>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2 font-mono text-xs text-zinc-500">
              <span>{peer.marketCap}</span>
              <span>{peer.revenueGrowth}</span>
              <span>{peer.psRatio} P/S</span>
            </div>
            <p className="mt-3 text-sm leading-5 text-zinc-300">{peer.whyItCompetes}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function NewsFeedCard({ data }: Readonly<{ data: DashboardData }>) {
  return (
    <Card>
      <CardHeader eyebrow="Recent developments" title="News that matters" action={<Newspaper className="size-4 text-cyan-200" />} />
      <div className="space-y-3 p-4">
        {data.news.map((article) => (
          <a key={article.title} href={article.url} className="block rounded-md border border-white/10 bg-black/25 p-3 transition hover:border-cyan-300/30">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-sm font-medium leading-5 text-white">{article.title}</h3>
              <StatusPill tone={article.sentiment}>{article.sentiment}</StatusPill>
            </div>
            <p className="mt-2 font-mono text-[11px] text-zinc-500">{article.source} / {article.date}</p>
            <p className="mt-2 text-sm leading-5 text-zinc-400">{article.whyItMatters}</p>
          </a>
        ))}
      </div>
    </Card>
  );
}

export function FilingsCard({ data }: Readonly<{ data: DashboardData }>) {
  return (
    <Card>
      <CardHeader eyebrow="SEC filings" title="Latest source documents" action={<FileText className="size-4 text-emerald-200" />} />
      <div className="space-y-3 p-4">
        {data.filings.map((filing) => (
          <a key={`${filing.formType}-${filing.filedAt}`} href={filing.url} className="block rounded-md border border-white/10 bg-black/25 p-3 transition hover:border-emerald-300/30">
            <div className="flex items-center justify-between gap-3">
              <StatusPill tone="warning">{filing.formType}</StatusPill>
              <span className="font-mono text-xs text-zinc-500">{filing.filedAt}</span>
            </div>
            <p className="mt-3 text-sm leading-5 text-zinc-300">{filing.summary}</p>
          </a>
        ))}
      </div>
    </Card>
  );
}

export function BullBearCaseCard({ data }: Readonly<{ data: DashboardData }>) {
  return (
    <Card className="xl:col-span-2">
      <CardHeader eyebrow="Scenario framing" title="Bull case vs. bear case" />
      <div className="grid gap-4 p-4 md:grid-cols-2">
        <div className="rounded-md border border-emerald-300/20 bg-emerald-300/10 p-4">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-emerald-200/70">Bull case</p>
          <ul className="mt-3 space-y-3">
            {data.report.bullCase.map((item) => <li key={item} className="text-sm leading-6 text-emerald-50">{item}</li>)}
          </ul>
        </div>
        <div className="rounded-md border border-rose-300/20 bg-rose-300/10 p-4">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-rose-200/70">Bear case</p>
          <ul className="mt-3 space-y-3">
            {data.report.bearCase.map((item) => <li key={item} className="text-sm leading-6 text-rose-50">{item}</li>)}
          </ul>
        </div>
      </div>
    </Card>
  );
}

export function RiskScoreCard({ data }: Readonly<{ data: DashboardData }>) {
  return (
    <Card>
      <CardHeader eyebrow="Risk dashboard" title="Top risk flags" action={<ShieldAlert className="size-4 text-amber-200" />} />
      <div className="space-y-3 p-4">
        {data.report.risks.map((risk) => (
          <div key={risk.risk} className="rounded-md border border-white/10 bg-black/25 p-3">
            <div className="flex items-start justify-between gap-3">
              <p className="text-sm font-medium text-white">{risk.risk}</p>
              <StatusPill tone={severityTone(risk.severity)}>{risk.severity}</StatusPill>
            </div>
            <p className="mt-2 text-sm leading-5 text-zinc-400">{risk.explanation}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function ValuationCard({ data }: Readonly<{ data: DashboardData }>) {
  const verdict = data.report.researchVerdict;
  return (
    <Card>
      <CardHeader eyebrow="Valuation" title="Relative valuation view" />
      <div className="space-y-4 p-4 text-sm leading-6 text-zinc-300">
        <p>{data.report.valuation.summary}</p>
        <div className="rounded-md border border-amber-300/20 bg-amber-300/10 p-3">
          <div className="flex items-center gap-2">
            <AlertTriangle className="size-4 text-amber-200" />
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-amber-100">Valuation risk {verdict.valuationRiskScore}</span>
          </div>
          <p className="mt-2 text-amber-50">{data.report.valuation.expensiveOrCheapVsPeers}</p>
        </div>
        <p className="text-zinc-400">{data.report.valuation.relativeValuation}</p>
      </div>
    </Card>
  );
}

export function ThemeExposureCard({ data }: Readonly<{ data: DashboardData }>) {
  return (
    <Card>
      <CardHeader eyebrow="Theme exposure" title="Mapped market themes" />
      <div className="space-y-3 p-4">
        {data.report.themeExposure.map((theme) => (
          <div key={theme.theme} className="rounded-md border border-white/10 bg-black/25 p-3">
            <div className="flex items-start justify-between gap-3">
              <p className="text-sm font-medium text-white">{theme.theme}</p>
              <StatusPill tone={severityTone(theme.exposureLevel)}>{theme.exposureLevel}</StatusPill>
            </div>
            <p className="mt-2 text-sm leading-5 text-zinc-400">{theme.reason}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function CatalystsCard({ data }: Readonly<{ data: DashboardData }>) {
  return (
    <Card>
      <CardHeader eyebrow="Catalysts" title="What to monitor next" />
      <div className="space-y-3 p-4">
        {data.report.catalysts.map((catalyst) => (
          <div key={catalyst.catalyst} className="rounded-md border border-white/10 bg-black/25 p-3">
            <p className="text-sm font-medium text-white">{catalyst.catalyst}</p>
            <p className="mt-1 font-mono text-xs text-cyan-200">{catalyst.timeframe}</p>
            <p className="mt-2 text-sm leading-5 text-zinc-400">{catalyst.whyItMatters}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
