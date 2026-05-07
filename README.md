# SignalScope

SignalScope is a dark, terminal-inspired stock research dashboard built with Next.js App Router, TypeScript, Tailwind CSS, Recharts, Framer Motion, and Lucide React.

Phase 1 is frontend-only and uses high-quality mocked data. Real provider clients, Supabase persistence, OpenAI report generation, compare workflows, watchlists, and PDF export are intentionally staged for later milestones.

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
- Mocked company profile, price chart, financial metrics, competitors, news, filings, valuation, theme exposure, catalysts, bull case, bear case, and risk dashboard
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
