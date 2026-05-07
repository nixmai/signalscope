import { BarChart3, FileText, Layers3, Orbit, Settings, Star } from "lucide-react";
import Link from "next/link";

import { TickerSearchBar } from "@/components/stock/TickerSearchBar";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

const links = [
  { href: "/compare?symbols=NVDA,AMD,MRVL", label: "Compare", icon: BarChart3 },
  { href: "/sectors", label: "Sectors", icon: Layers3 },
  { href: "/watchlist", label: "Watchlist", icon: Star },
  { href: "/reports", label: "Reports", icon: FileText },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-violet-300/10 bg-[#05030a]/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1500px] items-center gap-4 px-4 py-3">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="grid size-9 place-items-center rounded-md border border-violet-300/35 bg-violet-400/10 text-violet-100 shadow-[0_0_24px_rgba(139,92,246,0.18)]">
            <Orbit className="size-5" />
          </span>
          <span>
            <span className="block text-sm font-semibold text-white">SignalScope</span>
            <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-violet-300/45">Research terminal</span>
          </span>
        </Link>
        <div className="hidden flex-1 md:block">
          <TickerSearchBar compact />
        </div>
        <nav className="ml-auto hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex h-10 items-center gap-2 rounded-md px-3 text-sm text-zinc-300 transition hover:bg-violet-400/10 hover:text-violet-50"
              >
                <Icon className="size-4" />
                {link.label}
              </Link>
            );
          })}
          <button className="grid size-10 place-items-center rounded-md text-zinc-400 transition hover:bg-violet-400/10 hover:text-violet-50" title="Settings">
            <Settings className="size-4" />
          </button>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

export function FooterDisclaimer() {
  return (
    <footer className="border-t border-violet-300/10 px-4 py-6 text-center text-xs leading-6 text-zinc-500">
      This platform is for informational and research purposes only. It does not provide financial, investment, tax, or legal advice.
      Market data may be delayed or incomplete. Always verify information with original filings and professional sources before making
      investment decisions.
    </footer>
  );
}
