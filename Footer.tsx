import Link from "next/link";
import { Compass } from "lucide-react";
import { getStates, getUnionTerritories, getTotalDistrictCount } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  const stateCount = getStates().length;
  const utCount = getUnionTerritories().length;
  const districtCount = getTotalDistrictCount();

  return (
    <footer className="border-t border-rule bg-paper-card/50 dark:border-rule-dark dark:bg-night-card/30">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <Compass className="h-4 w-4 text-gold-600 dark:text-gold-400" strokeWidth={1.75} aria-hidden="true" />
              <span className="font-serif text-base font-semibold text-ink dark:text-ink-invert">
                Indian District Directory
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft dark:text-ink-invert-soft">
              A complete index of {stateCount} States, {utCount} Union Territories and{" "}
              {districtCount.toLocaleString("en-IN")} districts &mdash; built for quick lookup,
              not affiliated with any government body.
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <h2 className="font-mono text-xs uppercase tracking-wide text-ink-soft dark:text-ink-invert-soft">
                Directory
              </h2>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-ink transition-colors hover:text-gold-600 dark:text-ink-invert dark:hover:text-gold-400"
                  >
                    All States &amp; UTs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-rule pt-6 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between dark:border-rule-dark dark:text-ink-invert-soft">
          <p>&copy; {year} Indian District Directory. Unofficial, informational use only.</p>
          <p>District data is periodically reorganised by state governments &mdash; verify critical details independently.</p>
        </div>
      </div>
    </footer>
  );
}
