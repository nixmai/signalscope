import { cn } from "@/lib/utils/cn";

export function Button({
  className,
  variant = "primary",
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
}) {
  const variants = {
    primary: "border-cyan-300/40 bg-cyan-300/15 text-cyan-50 hover:bg-cyan-300/25",
    secondary: "border-white/10 bg-white/5 text-zinc-100 hover:bg-white/10",
    ghost: "border-transparent bg-transparent text-zinc-300 hover:bg-white/10",
  };

  return (
    <button
      className={cn(
        "inline-flex h-10 items-center justify-center gap-2 rounded-md border px-3 text-sm font-medium transition",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
