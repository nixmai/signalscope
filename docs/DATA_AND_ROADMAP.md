# Data Sources, Current Truth, and Roadmap

This file explains what data is currently real, what is mocked, and how to make SignalScope production-grade.

## Current Truth

SignalScope is a hybrid prototype:

- Free public market quote/stat data is attempted first.
- Research/fundamental/report data is mostly mocked/curated.
- UI is production-style but data integrity is not yet production-grade.

## Currently Real-ish Public Data

File:

- `src/lib/api/free-market-data.ts`

Provider:

- Nasdaq public quote/chart/summary endpoints.

Fields currently overlaid onto dashboard:

- last available price
- net change
- percent change
- chart points
- market cap
- exchange
- sector
- industry

Fields parsed and available in the client:

- previous close
- volume
- 52-week high/low range

Potential next UI use:

- show previous close
- show volume
- show 52-week range
- show data timestamp/freshness more prominently

Important caveat:

Nasdaq public endpoints are not guaranteed stable. This is acceptable for a free prototype, not a production-grade feed.

## Currently Mocked or Curated

The following are not live source-backed yet:

- revenue
- margins
- cash/debt
- P/S, P/E, EV/Sales
- FCF
- income statement
- balance sheet
- cash flow
- competitors
- news
- SEC filing summaries
- earnings call summaries
- bull/bear case
- risks/catalysts
- AI scores
- partnerships except some manually source-linked examples
- heatmap constituents/weights/changes
- sector stock lists
- ETF holdings/weights

## Environment Variables

File:

- `.env.example`

Current variables:

```text
NEXT_PUBLIC_APP_URL=http://localhost:3000
OPENAI_API_KEY=
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
SUPABASE_ANON_KEY=
FMP_API_KEY=
FINNHUB_API_KEY=
POLYGON_API_KEY=
STOOQ_API_KEY=
SEC_USER_AGENT="SignalScope contact@example.com"
```

Do not commit `.env.local`.

## Recommended Data Roadmap

### Phase 1: Free Public Data Hardening

Goal: make the current free-data layer more useful without paid keys.

Tasks:

- Add SEC EDGAR company facts client.
- Add SEC submissions client.
- Normalize CIK lookup.
- Pull:
  - company facts
  - 10-K/10-Q/8-K filing metadata
  - recent filings links
  - financial statement facts where possible
- Add better public quote fallback handling:
  - Nasdaq public endpoint
  - optional Stooq key
  - optional Alpha Vantage daily fallback if user adds key
- Add clear freshness badges:
  - public delayed
  - end-of-day
  - mocked
  - unavailable

### Phase 2: Provider Clients

Create typed provider clients under `src/lib/api/`:

- `sec.ts`
- `fmp.ts`
- `finnhub.ts`
- `polygon.ts`
- `nasdaq.ts` or keep in `free-market-data.ts`

Provider priorities:

- SEC EDGAR for filings and fundamental facts, free and official.
- Finnhub for profile/news/peers if key exists.
- FMP for statements/metrics/transcripts if key exists.
- Polygon/Massive for market data if key exists.
- Nasdaq public as no-key best effort.

Rules:

- Server-only provider calls.
- Never expose keys to client.
- Log provider failures in server logs.
- Fall back gracefully to mock data.

### Phase 3: Normalized Dashboard Shape

Create normalizers:

- `src/lib/normalizers/company.ts`
- `src/lib/normalizers/financials.ts`
- `src/lib/normalizers/market-data.ts`
- `src/lib/normalizers/news.ts`
- `src/lib/normalizers/filings.ts`

Goal:

Every provider maps into `DashboardData` or a successor type.

### Phase 4: Database

Recommended database:

- Supabase Postgres

Tables from original plan:

- companies
- financial_statements
- financial_metrics
- price_history
- competitors
- news_articles
- filings
- earnings_transcripts
- research_reports
- report_sections
- user_watchlists
- saved_reports

Do not build auth/watchlists before research dashboard data quality improves.

### Phase 5: AI Report Generation

Use OpenAI API server-side only.

Report must use structured JSON output matching the schema from the original product plan:

- executive summary
- business overview
- financial snapshot
- valuation
- competitors
- recent developments
- bull case
- bear case
- risks
- catalysts
- theme exposure
- research verdict with scores
- questions to research further

Rules:

- Do not invent facts.
- Acknowledge missing data.
- Separate facts from interpretation.
- No buy/sell/personalized advice.
- Highlight uncertainty and stale data.

### Phase 6: Heatmap Productionization

Current heatmap is curated/static. To improve:

- Add true treemap layout using a squarify algorithm or `d3-hierarchy`.
- Add real index constituent data if provider/terms allow.
- Add ETF holdings from provider/issuer data if available.
- Use market cap/weight to size tiles.
- Use real daily percent change to color.
- Add tabs/filters:
  - market cap
  - daily change
  - weekly/monthly performance
  - sector
  - industry
  - theme
  - ETF/index selection

### Phase 7: Partnerships / Business Relationships

Current partnerships are manually curated.

Future extraction sources:

- company 10-K customer concentration disclosures
- 8-K partnership announcements
- press releases
- investor presentations
- earnings transcripts
- news APIs

Possible schema:

```ts
type Partnership = {
  ticker?: string;
  name: string;
  relationship: "customer" | "supplier" | "partner" | "competitor" | "investor" | "ecosystem";
  description: string;
  importance: "low" | "medium" | "high";
  evidence: Array<{
    sourceType: "filing" | "press_release" | "news" | "transcript";
    title: string;
    url?: string;
    date?: string;
  }>;
};
```

### Phase 8: Compare Page

Build `/compare?symbols=NVDA,AMD,MRVL`.

Features:

- compare 2-5 tickers
- side-by-side metrics
- revenue growth
- gross/operating margins
- valuation
- market cap
- price performance
- balance sheet strength
- AI relative analysis

### Phase 9: Export

Add print/PDF export after dashboard content stabilizes.

## Free Data Caveats

Free public data is fragile:

- endpoints can rate-limit
- endpoints can change
- some data may be delayed or end-of-day
- exchange licensing affects quote availability
- ETF/index constituents and weights are often licensed

Always label freshness and source.

## Quality Bar

Before claiming “real data”:

- show source
- show timestamp
- show stale/missing flags
- distinguish mocked vs provider data
- avoid mixing mocked financial metrics with real price without labels

## Immediate Next Best Step

The best next engineering task is:

Add SEC EDGAR integration for free fundamentals and filings, then label the dashboard:

- Market data: Nasdaq public quote
- Filings: SEC EDGAR
- Financial facts: SEC company facts
- Report: mocked or AI generated

This will dramatically reduce the amount of mocked content while staying free.
