"use client";

import { useMemo, useState } from "react";
import { SearchInput } from "@/components/ui/SearchInput";
import { StateCard } from "@/components/directory/StateCard";
import { cn, pluralize } from "@/lib/utils";
import type { StateOrUT } from "@/types";

type Filter = "all" | "state" | "ut";

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "state", label: "States" },
  { id: "ut", label: "Union Territories" },
];

export function HomeExplorer({ regions }: { regions: StateOrUT[] }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return regions.filter((r) => {
      const matchesFilter = filter === "all" || r.type === filter;
      const matchesQuery =
        q.length === 0 ||
        r.name.toLowerCase().includes(q) ||
        r.code.toLowerCase().includes(q) ||
        r.capital.toLowerCase().includes(q);
      return matchesFilter && matchesQuery;
    });
  }, [regions, query, filter]);

  return (
    <div>
      <SearchInput
        value={query}
        onChange={setQuery}
        label="Search States and Union Territories"
        placeholder="Search by state, UT, or capital..."
      />

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            aria-pressed={filter === f.id}
            className={cn(
              "rounded-full border px-3.5 py-1.5 font-mono text-xs uppercase tracking-wide transition-colors",
              filter === f.id
                ? "border-gold-500 bg-gold-50 text-gold-700 dark:border-gold-400 dark:bg-gold-500/10 dark:text-gold-400"
                : "border-rule text-ink-soft hover:border-gold-500/60 hover:text-gold-700 dark:border-rule-dark dark:text-ink-invert-soft dark:hover:text-gold-400"
            )}
          >
            {f.label}
          </button>
        ))}
        <span className="ml-auto font-mono text-xs text-ink-soft dark:text-ink-invert-soft">
          {pluralize(results.length, "result")}
        </span>
      </div>

      {results.length > 0 ? (
        <div className="mt-6 grid animate-fade-up grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((region) => (
            <StateCard key={region.slug} region={region} />
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-md border border-dashed border-rule px-6 py-12 text-center dark:border-rule-dark">
          <p className="font-serif text-lg text-ink dark:text-ink-invert">
            No match for &ldquo;{query}&rdquo;
          </p>
          <p className="mt-1.5 text-sm text-ink-soft dark:text-ink-invert-soft">
            Try a different spelling, or search by capital city instead.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setFilter("all");
            }}
            className="mt-4 font-mono text-xs uppercase tracking-wide text-gold-600 underline decoration-dotted underline-offset-4 hover:text-gold-700 dark:text-gold-400 dark:hover:text-gold-300"
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  );
}
