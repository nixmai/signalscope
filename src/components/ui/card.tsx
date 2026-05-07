import { cn } from "@/lib/utils/cn";

export function Card({
  className,
  children,
}: Readonly<{
  className?: string;
  children: React.ReactNode;
}>) {
  return (
    <section
      className={cn(
        "rounded-lg border border-white/10 bg-[#0b0f18]/80 shadow-[0_10px_40px_rgba(0,0,0,0.22)] backdrop-blur",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function CardHeader({
  eyebrow,
  title,
  action,
}: Readonly<{
  eyebrow?: string;
  title: string;
  action?: React.ReactNode;
}>) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-white/10 px-4 py-3">
      <div>
        {eyebrow ? (
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-200/65">{eyebrow}</p>
        ) : null}
        <h2 className="mt-1 text-sm font-medium text-zinc-100">{title}</h2>
      </div>
      {action}
    </div>
  );
}

export function StatusPill({
  tone = "neutral",
  children,
}: Readonly<{
  tone?: "positive" | "negative" | "neutral" | "warning";
  children: React.ReactNode;
}>) {
  const tones = {
    positive: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
    negative: "border-rose-400/30 bg-rose-400/10 text-rose-200",
    warning: "border-amber-300/30 bg-amber-300/10 text-amber-100",
    neutral: "border-cyan-300/25 bg-cyan-300/10 text-cyan-100",
  };

  return (
    <span className={cn("rounded-full border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.16em]", tones[tone])}>
      {children}
    </span>
  );
}
