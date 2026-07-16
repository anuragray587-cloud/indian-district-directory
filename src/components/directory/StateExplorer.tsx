"use client";

import { useMemo, useState } from "react";
import { SearchInput } from "@/components/ui/SearchInput";
import { DistrictCard } from "@/components/directory/DistrictCard";
import { pluralize } from "@/lib/utils";
import type { District } from "@/types";

export function StateExplorer({
  districts,
  stateSlug,
  stateName,
}: {
  districts: District[];
  stateSlug: string;
  stateName: string;
}) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length === 0) return districts;
    return districts.filter((d) => d.name.toLowerCase().includes(q));
  }, [districts, query]);

  // Group alphabetically -- a real index into an ordered list, not decoration.
  const groups = useMemo(() => {
    const map = new Map<string, District[]>();
    for (const d of results) {
      const letter = d.name[0]?.toUpperCase() ?? "#";
      if (!map.has(letter)) map.set(letter, []);
      map.get(letter)!.push(d);
    }
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [results]);

  return (
    <div>
      <SearchInput
        value={query}
        onChange={setQuery}
        label={`Search districts of ${stateName}`}
        placeholder={`Search districts of ${stateName}...`}
      />

      <div className="mt-4 flex items-center justify-between">
        <span className="font-mono text-xs text-ink-soft dark:text-ink-invert-soft">
          {pluralize(results.length, "district")}
        </span>
      </div>

      {groups.length > 0 ? (
        <div className="mt-6 animate-fade-up space-y-8">
          {groups.map(([letter, items]) => (
            <section key={letter} aria-labelledby={`letter-${letter}`}>
              <div className="mb-3 flex items-center gap-3">
                <h2
                  id={`letter-${letter}`}
                  className="font-serif text-sm font-semibold text-gold-600 dark:text-gold-400"
                >
                  {letter}
                </h2>
                <div className="h-px flex-1 bg-rule dark:bg-rule-dark" />
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((district) => (
                  <DistrictCard key={district.slug} district={district} stateSlug={stateSlug} />
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-md border border-dashed border-rule px-6 py-12 text-center dark:border-rule-dark">
          <p className="font-serif text-lg text-ink dark:text-ink-invert">
            No match for &ldquo;{query}&rdquo;
          </p>
          <p className="mt-1.5 text-sm text-ink-soft dark:text-ink-invert-soft">
            Check the spelling, or clear the search to see all {pluralize(districts.length, "district")}.
          </p>
          <button
            type="button"
            onClick={() => setQuery("")}
            className="mt-4 font-mono text-xs uppercase tracking-wide text-gold-600 underline decoration-dotted underline-offset-4 hover:text-gold-700 dark:text-gold-400 dark:hover:text-gold-300"
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  );
}
