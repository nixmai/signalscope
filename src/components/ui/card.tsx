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
        "rounded-lg border border-violet-300/10 bg-[#0c0714]/86 shadow-[0_12px_44px_rgba(0,0,0,0.28)] backdrop-blur",
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
    <div className="flex items-start justify-between gap-4 border-b border-violet-300/10 px-4 py-3">
      <div>
        {eyebrow ? (
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-violet-200/65">{eyebrow}</p>
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
    positive: "border-violet-300/30 bg-violet-400/10 text-violet-100",
    negative: "border-rose-400/30 bg-rose-400/10 text-rose-200",
    warning: "border-fuchsia-300/30 bg-fuchsia-400/10 text-fuchsia-100",
    neutral: "border-violet-300/25 bg-violet-400/10 text-violet-100",
  };

  return (
    <span className={cn("rounded-full border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.16em]", tones[tone])}>
      {children}
    </span>
  );
}
