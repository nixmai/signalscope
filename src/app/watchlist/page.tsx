import { FooterDisclaimer, Navbar } from "@/components/layout/Navbar";
import { Card, CardHeader, StatusPill } from "@/components/ui/card";

export default function WatchlistPage() {
  return (
    <div className="min-h-screen bg-[#05070d] text-zinc-100">
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 py-12">
        <Card>
          <CardHeader eyebrow="Post-MVP" title="Watchlist" action={<StatusPill tone="warning">Planned</StatusPill>} />
          <div className="p-5 text-sm leading-6 text-zinc-300">
            Watchlists, auth, saved tickers, earnings dates, and daily change summaries are intentionally deferred until the research dashboard is excellent.
          </div>
        </Card>
      </main>
      <FooterDisclaimer />
    </div>
  );
}
