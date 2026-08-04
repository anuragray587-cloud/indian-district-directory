"use client";

import { useState } from "react";

import { getAllRegions } from "@/lib/data";
import type { RegionFilter, SortOrder } from "./hooks";
import { StateFilterBar } from "./StateFilterBar";
import { StateGrid } from "./StateGrid";

type StateListingSectionProps = {
  search: string;
};

export function StateListingSection({
  search,
}: StateListingSectionProps) {
  const [filter, setFilter] = useState<RegionFilter>("all");
  const [sort, setSort] = useState<SortOrder>("asc");

  return (
    <section
  id="state-listing"
  className="mt-8"
>
    <StateFilterBar
  total={getAllRegions().length}
  filter={filter}
  onFilterChange={setFilter}
  sort={sort}
  onSortChange={setSort}
/>

<StateGrid
  filter={filter}
  search={search}
  sort={sort}
/>
    </section>
  );
}
