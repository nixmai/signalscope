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
    primary: "border-violet-300/45 bg-violet-400/15 text-violet-50 hover:bg-violet-400/25",
    secondary: "border-violet-300/10 bg-violet-400/5 text-zinc-100 hover:bg-violet-400/10",
    ghost: "border-transparent bg-transparent text-zinc-300 hover:bg-violet-400/10",
  };

  return (
    <button
      className={cn(
        "inline-flex h-10 items-center justify-center gap-2 rounded-md border px-3 text-sm font-medium transition",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
