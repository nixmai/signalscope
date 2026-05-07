# SignalScope

SignalScope is a dark, terminal-inspired stock research dashboard built with Next.js App Router, TypeScript, Tailwind CSS, Recharts, Framer Motion, and Lucide React.

SignalScope is currently a polished MVP/prototype with free public delayed market data where available, curated/mock research content, sector navigation, heatmaps, partnerships, and dark/light theme support.

## Fresh Chat Handoff

If a new Codex/chat session takes over this repo, read these files first:

1. [`docs/FRESH_CHAT_HANDOFF.md`](docs/FRESH_CHAT_HANDOFF.md)
2. [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)
3. [`docs/DATA_AND_ROADMAP.md`](docs/DATA_AND_ROADMAP.md)
4. [`docs/CHANGELOG_CONTEXT.md`](docs/CHANGELOG_CONTEXT.md)

Those files are intentionally detailed and include product goals, architecture, current data truth, known limitations, user preferences, route map, and next steps.

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000), then search for `NVDA` or visit [http://localhost:3000/ticker/NVDA](http://localhost:3000/ticker/NVDA).

## Current MVP Surface

- Landing page with terminal-style ticker search
- `/ticker/[symbol]` research dashboard route
- Free public delayed quote/chart/stat overlay from Nasdaq where available
- Mocked/curated financial metrics, competitors, news, filings, valuation, theme exposure, catalysts, bull case, bear case, risks, and partnerships
- `/heatmaps` full-page index/ETF heatmap view
- `/sectors` and `/sector/[slug]` sector navigation
- Loading skeleton and error state for ticker dashboards
- Seed peer groups and theme taxonomy
- Legal/research disclaimer in the app footer

## Environment

Copy `.env.example` to `.env.local` when backend integrations begin. Do not expose provider keys to the client.

```bash
cp .env.example .env.local
```

## Next Milestones

1. Add typed provider clients for SEC EDGAR, Financial Modeling Prep, Finnhub, and Polygon/Massive.
2. Normalize provider data into the dashboard shape and add cache freshness logic.
3. Add server-only OpenAI structured JSON report generation.
4. Add Supabase persistence if configured, with mock fallback when keys are missing.
5. Build compare and PDF export flows after the dashboard/data path is stable.

## Scripts

- `npm run dev` starts the local dev server.
- `npm run build` creates a production build.
- `npm run lint` runs ESLint.
