import { AlertTriangle, ArrowDownRight, ArrowUpRight, Building2, CircleDollarSign, FileText, Newspaper, ShieldAlert, Sparkles, Target } from "lucide-react";
import Link from "next/link";

import { Card, CardHeader, StatusPill } from "@/components/ui/card";
import { sectorSlug } from "@/data/market-map";
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
              <Sparkles className="mt-1 size-4 shrink-0 text-violet-200" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="grid gap-3">
          <div className="rounded-md border border-violet-300/20 bg-violet-300/10 p-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-violet-200/70">Biggest bull point</p>
            <p className="mt-2 text-sm leading-5 text-violet-50">{data.report.biggestBullPoint}</p>
          </div>
          <div className="rounded-md border border-fuchsia-300/20 bg-fuchsia-300/10 p-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-fuchsia-200/70">Biggest bear point</p>
            <p className="mt-2 text-sm leading-5 text-fuchsia-50">{data.report.biggestBearPoint}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export function BusinessBriefCard({ data }: Readonly<{ data: DashboardData }>) {
  const overview = data.report.businessOverview;

  return (
    <Card className="overflow-hidden border-violet-300/20 bg-violet-400/[0.075]">
      <div className="grid gap-4 p-4 lg:grid-cols-[1fr_320px]">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-violet-200/75">Company brief</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">{data.company.name}</h2>
          <p className="mt-3 max-w-4xl text-sm leading-6 text-zinc-300">{overview.whatTheyDo}</p>
          <p className="mt-3 max-w-4xl text-sm leading-6 text-zinc-400">{overview.howTheyMakeMoney}</p>
        </div>
        <div className="rounded-md border border-violet-300/10 bg-black/25 p-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">Classification</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Link href={`/sector/${sectorSlug(data.company.sector)}`}>
              <StatusPill tone="positive">{data.company.sector}</StatusPill>
            </Link>
            <StatusPill>{data.company.industry}</StatusPill>
            {overview.mainSegments.slice(0, 3).map((segment) => (
              <StatusPill key={segment}>{segment}</StatusPill>
            ))}
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
      <CardHeader eyebrow="Company snapshot" title="Business model" action={<Building2 className="size-4 text-violet-200" />} />
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
      <CardHeader eyebrow="Financial metrics" title="Key operating and valuation metrics" action={<CircleDollarSign className="size-4 text-violet-200" />} />
      <div className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-5">
        {data.financialMetrics.map((metric) => {
          const Icon = metric.status === "up" ? ArrowUpRight : metric.status === "down" ? ArrowDownRight : Target;
          return (
            <div key={metric.label} className="rounded-md border border-white/10 bg-black/25 p-3">
              <div className="flex items-center justify-between gap-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">{metric.label}</p>
                <Icon className={cn("size-4", metric.status === "up" && "text-violet-300", metric.status === "down" && "text-fuchsia-300", metric.status === "flat" && "text-violet-200")} />
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
                <Link href={`/ticker/${peer.ticker}`} className="font-mono text-lg font-semibold text-white hover:text-violet-200">{peer.ticker}</Link>
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

export function PartnershipsCard({ data }: Readonly<{ data: DashboardData }>) {
  return (
    <Card>
      <CardHeader eyebrow="Business relationships" title="Partnerships and customer ecosystem" />
      <div className="space-y-3 p-4">
        {data.partnerships.map((partner) => (
          <div key={`${partner.name}-${partner.relationship}`} className="rounded-md border border-violet-300/10 bg-black/25 p-3">
            <div className="flex items-start justify-between gap-3">
              <div>
                {partner.ticker ? (
                  <Link href={`/ticker/${partner.ticker}`} className="font-mono text-base font-semibold text-white hover:text-violet-200">
                    {partner.ticker}
                  </Link>
                ) : null}
                <p className="text-sm font-medium text-zinc-100">{partner.name}</p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-violet-200/70">{partner.relationship}</p>
              </div>
              <StatusPill tone={partner.importance === "high" ? "positive" : "neutral"}>{partner.importance}</StatusPill>
            </div>
            <p className="mt-3 text-sm leading-5 text-zinc-400">{partner.description}</p>
            {partner.sourceUrl ? (
              <a href={partner.sourceUrl} className="mt-3 inline-block text-xs text-violet-200 hover:text-violet-100" target="_blank" rel="noreferrer">
                {partner.sourceLabel ?? "Source"}
              </a>
            ) : (
              <p className="mt-3 text-xs text-zinc-500">{partner.sourceLabel}</p>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
}

export function NewsFeedCard({ data }: Readonly<{ data: DashboardData }>) {
  return (
    <Card>
      <CardHeader eyebrow="Recent developments" title="News that matters" action={<Newspaper className="size-4 text-violet-200" />} />
      <div className="space-y-3 p-4">
        {data.news.map((article) => (
          <a key={article.title} href={article.url} className="block rounded-md border border-white/10 bg-black/25 p-3 transition hover:border-violet-300/30">
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
      <CardHeader eyebrow="SEC filings" title="Latest source documents" action={<FileText className="size-4 text-violet-200" />} />
      <div className="space-y-3 p-4">
        {data.filings.map((filing) => (
          <a key={`${filing.formType}-${filing.filedAt}`} href={filing.url} className="block rounded-md border border-white/10 bg-black/25 p-3 transition hover:border-violet-300/30">
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
        <div className="rounded-md border border-violet-300/20 bg-violet-300/10 p-4">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-violet-200/70">Bull case</p>
          <ul className="mt-3 space-y-3">
            {data.report.bullCase.map((item) => <li key={item} className="text-sm leading-6 text-violet-50">{item}</li>)}
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
      <CardHeader eyebrow="Risk dashboard" title="Top risk flags" action={<ShieldAlert className="size-4 text-fuchsia-200" />} />
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
        <div className="rounded-md border border-fuchsia-300/20 bg-fuchsia-300/10 p-3">
          <div className="flex items-center gap-2">
            <AlertTriangle className="size-4 text-fuchsia-200" />
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-fuchsia-100">Valuation risk {verdict.valuationRiskScore}</span>
          </div>
          <p className="mt-2 text-fuchsia-50">{data.report.valuation.expensiveOrCheapVsPeers}</p>
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
            <p className="mt-1 font-mono text-xs text-violet-200">{catalyst.timeframe}</p>
            <p className="mt-2 text-sm leading-5 text-zinc-400">{catalyst.whyItMatters}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
