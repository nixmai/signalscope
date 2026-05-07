"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window === "undefined") return "dark";
    return (window.localStorage.getItem("signalscope-theme") as "dark" | "light" | null) ?? "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    window.localStorage.setItem("signalscope-theme", next);
    document.documentElement.dataset.theme = next;
  }

  const Icon = theme === "dark" ? Sun : Moon;

  return (
    <button
      className="grid size-10 place-items-center rounded-md text-zinc-400 transition hover:bg-violet-400/10 hover:text-violet-50"
      onClick={toggleTheme}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      type="button"
    >
      <Icon className="size-4" />
    </button>
  );
}
