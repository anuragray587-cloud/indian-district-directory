import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { IndexBadge } from "@/components/ui/IndexBadge";
import { pluralize } from "@/lib/utils";
import type { StateOrUT } from "@/types";

export function StateCard({ region }: { region: StateOrUT }) {
  return (
    <Link
      href={`/${region.slug}`}
      className="group relative flex flex-col justify-between rounded-md border border-rule bg-paper-card p-5 transition-all duration-150 hover:-translate-y-0.5 hover:border-gold-500 hover:shadow-[0_6px_20px_-8px_rgba(27,35,64,0.25)] focus-visible:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 dark:border-rule-dark dark:bg-night-card dark:hover:border-gold-400 dark:hover:shadow-[0_6px_24px_-8px_rgba(0,0,0,0.5)]"
    >
      <div className="flex items-start justify-between gap-3">
        <IndexBadge code={region.code} type={region.type} />
        <span className="font-mono text-[10px] uppercase tracking-wider text-ink-soft/70 dark:text-ink-invert-soft/70">
          {region.type === "state" ? "State" : "Union Territory"}
        </span>
      </div>

      <div className="mt-4">
        <h3 className="font-serif text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-gold-700 dark:text-ink-invert dark:group-hover:text-gold-400">
          {region.name}
        </h3>
        <p className="mt-1 text-sm text-ink-soft dark:text-ink-invert-soft">
          Capital: {region.capital}
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-dashed border-rule pt-3 dark:border-rule-dark">
        <span className="font-mono text-xs text-ink-soft dark:text-ink-invert-soft">
          {pluralize(region.districtCount, "district")}
        </span>
        <ArrowUpRight
          className="h-3.5 w-3.5 text-ink-soft/60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold-600 dark:text-ink-invert-soft/60 dark:group-hover:text-gold-400"
          aria-hidden="true"
        />
      </div>
    </Link>
  );
}
