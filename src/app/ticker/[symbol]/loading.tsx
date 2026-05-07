import { FooterDisclaimer, Navbar } from "@/components/layout/Navbar";

function SkeletonBlock({ className = "" }: Readonly<{ className?: string }>) {
  return <div className={`animate-pulse rounded-lg border border-white/10 bg-white/[0.055] ${className}`} />;
}

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#05070d] text-zinc-100">
      <Navbar />
      <main className="mx-auto max-w-[1500px] space-y-4 px-4 py-4">
        <SkeletonBlock className="h-44" />
        <div className="grid gap-4 xl:grid-cols-[330px_1fr_360px]">
          <div className="space-y-4">
            <SkeletonBlock className="h-72" />
            <SkeletonBlock className="h-64" />
          </div>
          <div className="space-y-4">
            <SkeletonBlock className="h-72" />
            <SkeletonBlock className="h-80" />
            <SkeletonBlock className="h-56" />
          </div>
          <div className="space-y-4">
            <SkeletonBlock className="h-64" />
            <SkeletonBlock className="h-64" />
            <SkeletonBlock className="h-80" />
          </div>
        </div>
      </main>
      <FooterDisclaimer />
    </div>
  );
}
