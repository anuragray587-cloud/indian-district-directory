import { getAllRegions } from "@/lib/data";
import type { RegionFilter, SortOrder } from "./hooks";

type StateFilterBarProps = {
  total: number;
  filter: RegionFilter;
  onFilterChange: (filter: RegionFilter) => void;

  sort: SortOrder;
  onSortChange: (sort: SortOrder) => void;
};

export function StateFilterBar({
  total,
  filter,
  onFilterChange,
  sort,
  onSortChange,
}: StateFilterBarProps) {
  const regions = getAllRegions();

  const stateCount = regions.filter((r) => r.type === "state").length;
  const utCount = regions.filter((r) => r.type === "ut").length;

  const showing =
    filter === "all"
      ? total
      : filter === "state"
      ? stateCount
      : utCount;

  return (
    <section className="mt-12">
      <div className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:flex-row md:items-center md:justify-between">

        <div className="flex flex-wrap gap-3">

          <button
            onClick={() => onFilterChange("all")}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              filter === "all"
                ? "bg-blue-600 text-white"
                : "border border-slate-300 text-slate-700 hover:border-blue-300 hover:text-blue-700"
            }`}
          >
            All ({total})
          </button>

          <button
            onClick={() => onFilterChange("state")}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              filter === "state"
                ? "bg-blue-600 text-white"
                : "border border-slate-300 text-slate-700 hover:border-blue-300 hover:text-blue-700"
            }`}
          >
            States ({stateCount})
          </button>

          <button
            onClick={() => onFilterChange("ut")}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              filter === "ut"
                ? "bg-blue-600 text-white"
                : "border border-slate-300 text-slate-700 hover:border-blue-300 hover:text-blue-700"
            }`}
          >
            Union Territories ({utCount})
          </button>

        </div>

        <div className="flex items-center justify-between gap-4 text-sm text-slate-600">
          <span>Showing {showing} Regions</span>

          <button
  onClick={() =>
    onSortChange(sort === "asc" ? "desc" : "asc")
  }
  className="rounded-lg border border-slate-300 px-4 py-2 transition hover:bg-slate-50"
>
  {sort === "asc" ? "A → Z" : "Z → A"}
</button>
        </div>

      </div>
    </section>
  );
}
