# SignalScope Architecture

This document explains the current code structure and how data flows through the app.

## Framework

SignalScope is a Next.js App Router project with TypeScript.

Top-level app routes are under `src/app`.

Shared components are under `src/components`.

Data and mocked/curated datasets are under `src/data`.

Server-side public quote fetching is under `src/lib/api`.

Shared types are under `src/types`.

## Route Architecture

### `/`

File: `src/app/page.tsx`

Uses:

- `Navbar`
- `HomeTerminal`
- `FooterDisclaimer`

Purpose:

- landing page
- terminal-style search
- suggested tickers
- theme/search entry point

### `/ticker/[symbol]`

File: `src/app/ticker/[symbol]/page.tsx`

This is the main stock research dashboard.

Data flow:

```text
params.symbol
  -> getDashboardData(symbol)
  -> getMockDashboard(symbol)
  -> fetchFreePriceData(ticker)
  -> overlay quote/chart/market cap/sector/industry if public data succeeds
  -> render dashboard cards
```

Main components:

- `StockHeader`
- `BusinessBriefCard`
- `ExecutiveSummaryCard`
- `PriceChartCard`
- `FinancialMetricsGrid`
- `RevenueMarginChart`
- `MarketHeatmaps`
- `BullBearCaseCard`
- `CompanySnapshotCard`
- `ValuationCard`
- `SectorExplorer`
- `RiskScoreCard`
- `PartnershipsCard`
- `CatalystsCard`
- `ThemeExposureCard`
- `CompetitorMap`
- `NewsFeedCard`
- `FilingsCard`

### `/heatmaps`

File: `src/app/heatmaps/page.tsx`

Search param:

- `map=sp500`
- `map=nasdaq`
- `map=russell-2000`
- `map=dow-jones`
- `map=sector-etfs`

Purpose:

- dedicated heatmap page inspired by the user-provided reference screenshot
- top nav `Heatmaps` points here
- uses `StockHeatmap`

### `/sectors`

File: `src/app/sectors/page.tsx`

Purpose:

- overview of all curated sectors
- uses `SectorPage` without active sector

### `/sector/[slug]`

File: `src/app/sector/[slug]/page.tsx`

Purpose:

- sector-specific list of prominent stocks
- each stock links to `/ticker/[symbol]`
- uses SSG via `generateStaticParams`

### Placeholders

- `/compare`
- `/watchlist`
- `/reports`

These are currently styled placeholder routes.

## Data Types

File: `src/types/stock.ts`

Important types:

- `DashboardData`
- `CompanyProfile`
- `PricePoint`
- `FinancialMetric`
- `RevenueMarginPoint`
- `Competitor`
- `Partnership`
- `NewsArticle`
- `Filing`
- `Risk`
- `ThemeExposure`
- `Catalyst`
- `ResearchReport`
- `ResearchVerdict`

## Dashboard Data

File: `src/data/mock-dashboard.ts`

Important exports:

- `suggestedTickers`
- `trendingThemes`
- `mockDashboard`
- `getMockDashboard(symbol)`
- `getDashboardData(symbol)`

`getMockDashboard(symbol)` creates ticker-specific mock research content. It does not fetch external data.

`getDashboardData(symbol)` overlays free public quote data when available.

Known curated ticker profiles:

- NVDA
- AMD
- CRDO
- PLAB
- OKLO
- MRVL
- CRWV

## Public Market Data Client

File: `src/lib/api/free-market-data.ts`

Main export:

- `fetchFreePriceData(symbol)`

Current provider order:

1. Nasdaq public quote/chart/summary endpoints
2. Stooq daily CSV only if `STOOQ_API_KEY` is configured

Nasdaq endpoints used:

- `https://api.nasdaq.com/api/quote/{SYMBOL}/info?assetclass=stocks`
- `https://api.nasdaq.com/api/quote/{SYMBOL}/chart?assetclass=stocks`
- `https://api.nasdaq.com/api/quote/{SYMBOL}/summary?assetclass=stocks`

Headers include a browser-like user agent and referer because Nasdaq public endpoints often reject plain requests.

Returned fields include:

- price
- change
- changePercent
- marketCap
- exchange
- sector
- industry
- previousClose
- volume
- fiftyTwoWeekRange
- lastTradingDate
- history
- source
- sourceUrl

Important caveat: this is a public endpoint, not a contracted/licensed market data feed. It may rate-limit or change. Always show data caveats.

## Market Map Data

File: `src/data/market-map.ts`

Important exports:

- `sectors`
- `sectorExpansions`
- `indexHeatmaps`
- `etfHeatmaps`
- `heatmapTabs`
- `getSectorBySlug(slug)`
- `sectorSlug(name)`
- `getHeatmapGroup(slug)`
- `getHeatmapSectorGroups(slug)`

This is curated/static data for navigation and UI. It is not a licensed constituent database.

## Theme System

Files:

- `src/app/globals.css`
- `src/components/layout/ThemeToggle.tsx`
- `src/app/layout.tsx`

Mechanism:

- `ThemeToggle` stores `signalscope-theme` in `localStorage`.
- Root layout injects a small script to set `document.documentElement.dataset.theme` before hydration.
- CSS uses `html[data-theme="light"]` selectors for light-mode overrides.

If light mode breaks, inspect arbitrary Tailwind classes such as `bg-[#...]`, `bg-black/...`, `text-white`, and `text-zinc-*`. They may need additional light-mode overrides.

## UI Primitives

Files:

- `src/components/ui/card.tsx`
- `src/components/ui/button.tsx`

There is no full shadcn generated component set. These are simple local primitives inspired by shadcn usage.

## Styling

Primary dark theme:

- black / near-black shell
- violet and fuchsia accents
- red/green heatmap cells
- dense terminal/dashboard UI

Light mode:

- lavender/white shell
- same violet brand identity
- still needs more design polish

## Known Technical Debt

- Mock data and public market data are mixed in `src/data/mock-dashboard.ts`; eventually split into:
  - `providers/`
  - `normalizers/`
  - `mock/`
  - `research/`
- Heatmap is CSS-grid approximated, not a true treemap.
- Financial metrics are mocked and may be stale or inaccurate.
- Partnerships are manually curated.
- Sector and heatmap memberships are manually curated.
- No database yet.
- No AI generation yet.
- No SEC filings fetch/summarization yet.
- No auth/watchlist persistence yet.
- No compare implementation yet.

## Development Rules

- Use `rg` for search.
- Use `apply_patch` for manual file edits.
- Run `npm run lint` and `npm run build` after substantial changes.
- Do not expose API keys to the client.
- Keep legal disclaimer.
- Do not give investment advice.
