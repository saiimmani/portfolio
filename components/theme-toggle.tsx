"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  const current = theme === "system" ? resolvedTheme : theme;

  if (!mounted) return null;

  const isDark = current === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/60 px-3 py-2 text-sm font-medium text-neutral-800 shadow-soft backdrop-blur-glass transition hover:-translate-y-0.5 hover:shadow-lg dark:border-white/10 dark:bg-white/10 dark:text-neutral-100"
      aria-label="Toggle theme"
    >
      <span className="relative flex h-5 w-5 items-center justify-center overflow-hidden rounded-full bg-white/70 shadow-inner dark:bg-white/5">
        <Sun className="absolute h-4 w-4 text-amber-500 opacity-100 transition duration-300 ease-out group-hover:scale-110 dark:opacity-0" />
        <Moon className="absolute h-4 w-4 text-sky-200 opacity-0 transition duration-300 ease-out group-hover:scale-110 dark:opacity-100" />
      </span>
      <span className="hidden sm:inline">{isDark ? "Light" : "Dark"} mode</span>
    </button>
  );
}
