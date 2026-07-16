import Link from "next/link";
import { Compass } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/75 dark:border-rule-dark dark:bg-night/90 dark:supports-[backdrop-filter]:bg-night/75">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2.5 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-rule bg-paper-card text-gold-600 transition-colors group-hover:border-gold-500 dark:border-rule-dark dark:bg-night-card dark:text-gold-400">
            <Compass className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
          </span>
          <span className="font-serif text-[17px] font-semibold leading-none tracking-tight text-ink dark:text-ink-invert">
            <span className="hidden sm:inline">Indian </span>
            District Directory
          </span>
        </Link>

        <nav aria-label="Primary" className="flex items-center gap-4">
          <Link
            href="/"
            className="hidden font-mono text-xs uppercase tracking-wide text-ink-soft transition-colors hover:text-gold-600 sm:inline dark:text-ink-invert-soft dark:hover:text-gold-400"
          >
            All States &amp; UTs
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
