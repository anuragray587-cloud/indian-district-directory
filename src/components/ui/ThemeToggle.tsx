"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

/**
 * Light/dark toggle. Renders a neutral placeholder until mounted so the
 * server-rendered markup never has to guess the user's theme (avoids a
 * hydration mismatch with next-themes).
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <span
        aria-hidden="true"
        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-rule dark:border-rule-dark"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-rule text-ink-soft transition-colors hover:border-gold-500 hover:text-gold-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 dark:border-rule-dark dark:text-ink-invert-soft dark:hover:border-gold-400 dark:hover:text-gold-400"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
