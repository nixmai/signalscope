"use client";

import { ArrowRight, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";

export function TickerSearchBar({
  compact = false,
  examples = ["NVDA", "PLAB", "CRDO", "OKLO"],
}: Readonly<{
  compact?: boolean;
  examples?: string[];
}>) {
  const router = useRouter();
  const [ticker, setTicker] = useState("");
  const exampleText = examples.join(", ");
  const placeholder = useMemo(
    () => (compact ? "Enter ticker..." : "Enter ticker..."),
    [compact],
  );

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const normalized = ticker.trim().toUpperCase().replace(/[^A-Z.]/g, "");
    if (!normalized) return;
    router.push(`/ticker/${normalized}`);
  }

  return (
    <form
      onSubmit={submit}
      className={cn(
        "group flex items-center gap-2 rounded-lg border border-violet-300/25 bg-black/45 p-1 shadow-[0_0_40px_rgba(139,92,246,0.1)] transition focus-within:border-violet-200/60",
        compact ? "mx-auto max-w-xl" : "w-full max-w-3xl",
      )}
    >
      <div className="grid size-10 place-items-center text-violet-200">
        <Search className="size-4" />
      </div>
      <input
        value={ticker}
        onChange={(event) => setTicker(event.target.value)}
        placeholder={placeholder}
        title={`Examples: ${exampleText}`}
        aria-label="Ticker symbol"
        className={cn(
          "min-w-0 flex-1 bg-transparent font-mono uppercase text-white outline-none placeholder:text-zinc-600",
          compact ? "h-10 text-sm" : "h-14 text-lg sm:text-xl",
        )}
      />
      <Button type="submit" className={cn(compact ? "h-9 px-3" : "h-12 px-4")}>
        <span className="hidden sm:inline">Research</span>
        <ArrowRight className="size-4" />
      </Button>
    </form>
  );
}
