import { FooterDisclaimer, Navbar } from "@/components/layout/Navbar";
import { Card, CardHeader, StatusPill } from "@/components/ui/card";

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-[#05070d] text-zinc-100">
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 py-12">
        <Card>
          <CardHeader eyebrow="Phase 2" title="Compare stocks" action={<StatusPill tone="warning">Planned</StatusPill>} />
          <div className="p-5 text-sm leading-6 text-zinc-300">
            The MVP dashboard is built first. This route is reserved for side-by-side peer analysis across revenue growth,
            margins, valuation, balance sheet strength, price performance, and AI-generated relative research.
          </div>
        </Card>
      </main>
      <FooterDisclaimer />
    </div>
  );
}
