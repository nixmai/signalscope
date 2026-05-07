# SignalScope Fresh Chat Handoff

This is the primary context file for any fresh Codex/chat session taking over this repo. Read this file first, then read the linked docs in `docs/`.

## Project Identity

Project name: `SignalScope`

Repository: `https://github.com/nixmai/signalscope`

Local workspace used during initial build:
`/Users/nimaikasibatla/Documents/Codex/2026-05-06/stock-research-terminal-full-build-plan`

Current branch: `main`

Current project state as of May 7, 2026: working MVP/prototype with a polished frontend, free public delayed quote/chart/stat overlay, mocked research content, sector navigation, heatmaps, partnership cards, and dark/light theme support.

## Product Goal

SignalScope is a stock research terminal web app. The user enters a ticker and receives an institutional-style research dashboard.

The app should answer:

- What does this company do?
- How does it make money?
- What sector/theme does it belong to?
- What are the key financials?
- Is revenue/profit/cash flow improving or worsening?
- Who are the competitors?
- What recent news, filings, analyst notes, or earnings calls matter?
- What are the bull and bear cases?
- What valuation metrics matter?
- What risks should I know before buying or avoiding it?
- What similar stocks should I compare it against?
- What partnerships, customers, suppliers, and ecosystem relationships matter?
- What does the broader sector/index/ETF heatmap look like?

Important product constraint: this app must not give direct financial advice such as “buy” or “sell.” It should produce research, risk summaries, comparisons, context, and confidence-scored analysis. Keep the disclaimer visible.

Current recommended product name is `SignalScope`.

## Tech Stack

Implemented stack:

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Recharts
- Framer Motion
- Lucide React
- shadcn-style local UI primitives, not full shadcn install

Installed dependencies are in `package.json`.

Important scripts:

```bash
npm run dev
npm run lint
npm run build
```

The dev server normally runs at `http://localhost:3000`. If port 3000 is already occupied by a previous Next process, Next may choose another port or refuse to start.

## Current Routes

- `/` landing page with terminal-style ticker search and suggested tickers.
- `/ticker/[symbol]` full stock dashboard.
- `/heatmaps?map=sp500` full-page heatmap view.
- `/heatmaps?map=nasdaq`
- `/heatmaps?map=russell-2000`
- `/heatmaps?map=dow-jones`
- `/heatmaps?map=sector-etfs`
- `/sectors` sector explorer page.
- `/sector/[slug]` sector detail page with many clickable stocks.
- `/compare` placeholder planned route.
- `/watchlist` placeholder planned route.
- `/reports` placeholder planned route.

## Current Data Reality

This is critical: only some market data is pulled from free public endpoints. Much of the research content is still mocked/curated.

Live-ish/free public data currently attempted:

- Source: Nasdaq public quote/info/chart/summary API endpoints.
- Implemented in `src/lib/api/free-market-data.ts`.
- Used for:
  - last available price
  - daily/intraday chart points depending on Nasdaq response
  - net change
  - percent change
  - market cap
  - exchange
  - sector
  - industry
  - previous close, volume, 52-week range internally available from the client type

The app labels this as `Free public market data` and `Nasdaq public quote / delayed`.

Mock/curated data still used for:

- business overview/report text
- financial metrics such as revenue, margins, FCF, P/S, P/E
- competitors/peers except curated list
- news
- SEC filings summaries
- bull/bear case
- risks/catalysts
- AI score
- partnerships unless manually curated
- heatmap memberships, weights, and changes
- sector constituents and ETF/index compositions

Fallback behavior:

- `getDashboardData(symbol)` in `src/data/mock-dashboard.ts` starts with ticker-specific mock data.
- It calls `fetchFreePriceData(ticker)`.
- If public data succeeds, it overlays quote/chart/market cap/sector/industry/exchange.
- If public data fails, it falls back to ticker-specific demo data and shows `Demo fallback active`.

Optional Stooq fallback:

- `src/lib/api/free-market-data.ts` contains optional Stooq daily CSV support.
- Stooq now requires an API key. `.env.example` includes `STOOQ_API_KEY=`.

## Legal and Data Copy

Footer disclaimer:

`This platform is for informational and research purposes only. It does not provide financial, investment, tax, or legal advice. Market data may be delayed or incomplete. Always verify information with original filings and professional sources before making investment decisions.`

Keep this or a stronger version visible.

## Current Design Direction

The user wants:

- dark theme that “pops out” more
- black and purple look
- light mode too
- heatmap page similar to the screenshot they provided: large white/clean “Stock Heatmap” title, toolbar-like filters, sector grouped weighted red/green rectangles, large tiles for big weights, many small tiles for smaller names

Implemented visual system:

- `src/app/globals.css` defines the shell backgrounds, dark/light CSS overrides, scrollbars, and selection.
- Main shell class is `app-shell`.
- Cards are in `src/components/ui/card.tsx`.
- Buttons are in `src/components/ui/button.tsx`.
- Theme toggle is in `src/components/layout/ThemeToggle.tsx`.
- Navbar is in `src/components/layout/Navbar.tsx`.

Theme notes:

- `ThemeToggle` stores `signalscope-theme` in localStorage.
- `src/app/layout.tsx` includes an inline script that sets `document.documentElement.dataset.theme` before hydration.
- Light-mode CSS uses attribute selector `html[data-theme="light"]`.
- If light mode is still visually incomplete, improve CSS variables and reduce arbitrary Tailwind colors that override theme styles.

## Key Files

Core app:

- `src/app/layout.tsx`
- `src/app/globals.css`
- `src/app/page.tsx`
- `src/app/ticker/[symbol]/page.tsx`
- `src/app/heatmaps/page.tsx`
- `src/app/sectors/page.tsx`
- `src/app/sector/[slug]/page.tsx`

Data:

- `src/data/mock-dashboard.ts`
- `src/data/market-map.ts`
- `src/data/peer-groups.json`
- `src/data/theme-taxonomy.json`
- `src/lib/api/free-market-data.ts`
- `src/types/stock.ts`

Components:

- `src/components/layout/Navbar.tsx`
- `src/components/layout/ThemeToggle.tsx`
- `src/components/stock/TickerSearchBar.tsx`
- `src/components/stock/StockHeader.tsx`
- `src/components/stock/DashboardCards.tsx`
- `src/components/stock/Charts.tsx`
- `src/components/market/StockHeatmap.tsx`
- `src/components/market/MarketHeatmaps.tsx`
- `src/components/market/SectorExplorer.tsx`
- `src/components/market/SectorPage.tsx`
- `src/components/ui/card.tsx`
- `src/components/ui/button.tsx`

## Implemented Ticker Examples

Ticker-specific curated profiles in `src/data/mock-dashboard.ts`:

- `NVDA`
- `AMD`
- `CRDO`
- `PLAB`
- `OKLO`
- `MRVL`
- `CRWV`
- generic fallback for unknown tickers

Suggested tickers include:

- `NVDA`
- `AMD`
- `CRWV`
- `PLAB`
- `CRDO`
- `MRVL`
- `OKLO`
- `AAOI`
- `SMCI`

## Partnerships / Business Relationships

Partnerships are modeled in `DashboardData.partnerships`.

The user specifically asked for examples like CoreWeave (`CRWV`) partnerships with NVIDIA and others.

Current curated CRWV relationships:

- NVIDIA
  - Strategic infrastructure collaboration
  - Source link: NVIDIA Newsroom Jan 26, 2026
  - `https://nvidianews.nvidia.com/news/nvidia-and-coreweave-strengthen-collaboration-to-accelerate-buildout-of-ai-factories`
- OpenAI
  - AI compute customer
  - Source link: CoreWeave investor release Sep 25, 2025
  - `https://investors.coreweave.com/news/news-details/2025/CoreWeave-Expands-Agreement-with-OpenAI-by-up-to-6-5B/default.aspx`
- Poolside
  - AI cloud services partnership
  - Source link: CoreWeave release Oct 15, 2025
  - `https://www.coreweave.com/news/coreweave-announces-partnership-with-foundation-model-company-poolside-to-deliver-ai-cloud-services`

Other ticker partnership cards are curated placeholders and should eventually come from filings/news/company releases.

## Sector System

Sector data lives in `src/data/market-map.ts`.

Primary sector structures:

- `sectors`
- `SectorGroup`
- `SectorStock`
- `sectorExpansions`
- `sectorSlug(name)`
- `getSectorBySlug(slug)`

Implemented sector pages:

- `/sectors`
- `/sector/technology`
- `/sector/communication-services`
- `/sector/consumer-discretionary`
- `/sector/financials`
- `/sector/energy`
- `/sector/health-care`
- `/sector/consumer-staples`

Current sectors contain curated large lists; especially Technology has many names such as:

- NVDA
- MSFT
- AAPL
- AVGO
- AMD
- CRWV
- ORCL
- CRM
- NOW
- ADBE
- CSCO
- MU
- INTC
- QCOM
- ANET
- DELL
- SMCI
- LITE
- AAOI
- PLAB
- MRVL
- CRDO

## Heatmap System

Heatmap data and helpers live in `src/data/market-map.ts`.

Structures:

- `HeatMapTile`
- `HeatMapGroup`
- `indexHeatmaps`
- `etfHeatmaps`
- `heatmapTabs`
- `getHeatmapGroup(slug)`
- `getHeatmapSectorGroups(slug)`

Routes:

- `/heatmaps?map=sp500`
- `/heatmaps?map=nasdaq`
- `/heatmaps?map=russell-2000`
- `/heatmaps?map=dow-jones`
- `/heatmaps?map=sector-etfs`

Primary component:

- `src/components/market/StockHeatmap.tsx`

Legacy/smaller dashboard heatmaps:

- `src/components/market/MarketHeatmaps.tsx`

The big heatmap page uses a CSS grid with weighted cells:

- large cells for large weights and early list positions
- green for positive changes
- red for negative changes
- sector blocks similar to the reference screenshot

Known limitation: this is not a true treemap algorithm yet. It is a weighted CSS-grid approximation. A future improvement should use a real treemap layout, possibly with `d3-hierarchy` or a lightweight custom squarify function.

## User Preferences Learned

The user wants:

- this built like a real product, not a school project
- premium terminal / Bloomberg / modern AI dashboard feel
- black and purple visual identity
- dark theme that pops more
- light mode
- ticker search should actually change the ticker data
- free delayed/public data is acceptable, even more delayed than 15 minutes
- market cap and key public stats should be up to date when possible
- sector lists should be larger and clickable
- top nav tab for all heatmaps
- heatmap should resemble the provided screenshot
- partnerships/customer/supplier ecosystem should be visible
- brief company description should appear right after searching

## Recent Git History

Recent commits:

- `bbbfb41 Fix theme toggle and add full heatmaps view`
- `0f0fecc Add sector navigation heatmaps partnerships and theme toggle`
- `95113f2 Refresh public market stats and polish purple theme`
- `fad5125 Add free delayed public price data fallback`
- `c4ffe0a Clean up dashboard UI and diversify mock ticker data`
- `cdd8c15 Build SignalScope MVP dashboard with mocked research data`
- `dc682bd Build SignalScope mock dashboard scaffold`
- `2361c4e Initial commit from Create Next App`

## Verification Commands

Run these after changes:

```bash
npm run lint
npm run build
```

Useful route checks:

```bash
curl -s -o /tmp/nvda.html http://localhost:3000/ticker/NVDA
curl -s -o /tmp/crwv.html http://localhost:3000/ticker/CRWV
curl -s -o /tmp/heatmaps.html 'http://localhost:3000/heatmaps?map=sp500'
curl -s -o /tmp/tech.html http://localhost:3000/sector/technology
```

Search output examples:

```bash
rg -o "Stock Heatmap|S&P 500 Index|Nasdaq 100|Russell 2000|ETF Heatmap|NVDA|AAPL" /tmp/heatmaps.html
rg -o "CoreWeave|NVIDIA|OpenAI|Business relationships|Company brief" /tmp/crwv.html
```

## Next Best Work

Most important next work:

1. Make light mode visually excellent, not just functional.
2. Improve the heatmap layout with a real treemap algorithm.
3. Expand sector membership to all 11 GICS sectors:
   - Technology
   - Communication Services
   - Consumer Discretionary
   - Financials
   - Energy
   - Health Care
   - Consumer Staples
   - Industrials
   - Materials
   - Utilities
   - Real Estate
4. Add a real data provider layer for fundamentals:
   - SEC company facts
   - Nasdaq public stats where useful
   - optional Alpha Vantage/Finnhub/FMP if keys are provided
5. Replace mocked financial metrics/report text with normalized real data.
6. Add SEC filing summaries from EDGAR.
7. Add OpenAI structured JSON report generation server-side.
8. Add compare page functionality.
9. Add PDF export.
10. Add watchlist/save reports after MVP research flow is strong.

## Fresh Chat Instruction

If you are a fresh Codex/chat taking over:

1. Read `docs/FRESH_CHAT_HANDOFF.md`.
2. Read `docs/ARCHITECTURE.md`.
3. Read `docs/DATA_AND_ROADMAP.md`.
4. Run `git status --short`.
5. Run `npm run lint` and `npm run build` before major edits if you need a baseline.
6. Prefer preserving the existing visual/product direction unless the user asks to change it.
7. Never remove the financial disclaimer or imply buy/sell advice.
