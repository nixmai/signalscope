"use client";

import { AlertTriangle } from "lucide-react";

import { FooterDisclaimer, Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: Readonly<{
  error: Error & { digest?: string };
  reset: () => void;
}>) {
  return (
    <div className="min-h-screen bg-[#05070d] text-zinc-100">
      <Navbar />
      <main className="mx-auto grid min-h-[70vh] max-w-3xl place-items-center px-4 py-16">
        <section className="rounded-lg border border-rose-300/20 bg-rose-300/10 p-6 text-center">
          <AlertTriangle className="mx-auto size-8 text-rose-200" />
          <h1 className="mt-4 text-2xl font-semibold text-white">Research dashboard failed to load</h1>
          <p className="mt-3 text-sm leading-6 text-rose-100/80">{error.message || "An unexpected dashboard error occurred."}</p>
          <Button onClick={reset} className="mt-5">Retry</Button>
        </section>
      </main>
      <FooterDisclaimer />
    </div>
  );
}
