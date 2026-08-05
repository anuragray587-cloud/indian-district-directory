"use client";

import { getAllDistricts } from "@/lib/data";
import { DistrictGrid } from "./DistrictGrid";
import { DistrictFilterBar } from "./DistrictFilterBar";
import { useState } from "react";
import type { SortOrder } from "./hooks";

type DistrictListingSectionProps = {
  search: string;
  onSearchChange: (value: string) => void;
};

export function DistrictListingSection({
  search,
  onSearchChange,
}: DistrictListingSectionProps) {
const [sort, setSort] = useState<SortOrder>("asc");
const totalDistricts = getAllDistricts().filter((district) => {
  const query = search.trim().toLowerCase();

  return (
    query === "" ||
    district.name.toLowerCase().includes(query) ||
    district.state.toLowerCase().includes(query)
  );
}).length;
  return (
    <section className="mt-12">
      <div className="text-center">
        <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-semibold text-blue-700">
          Browse Districts
        </span>

        <h2 className="mt-4 text-3xl font-bold text-slate-900">
          Find Any District
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          Browse all districts of India. Search instantly, filter results and
          explore detailed information about every district.
        </p>
      </div>

  <DistrictFilterBar
  total={totalDistricts}
  sort={sort}
  onSortChange={setSort}
/>

      <DistrictGrid
  search={search}
  sort={sort}
  onClearSearch={() => onSearchChange("")}
/>
    </section>
  );
}
