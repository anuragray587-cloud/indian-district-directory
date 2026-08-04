import { getAllRegions } from "@/lib/data";
import type { RegionFilter, SortOrder } from "./hooks";
import { StateCard } from "./StateCard";

type StateGridProps = {
  filter: RegionFilter;
  search: string;
  sort: SortOrder;
};

export function StateGrid({
  filter,
  search,
  sort,
}: StateGridProps) {
  const allRegions = getAllRegions();

  const query = search.trim().toLowerCase();

  const filteredRegions = allRegions
    .filter((region) => {
      const matchesFilter =
        filter === "all" || region.type === filter;

      const matchesSearch =
        query === "" ||
        region.name.toLowerCase().includes(query) ||
        region.capital.toLowerCase().includes(query) ||
        region.code.toLowerCase().includes(query);

      return matchesFilter && matchesSearch;
    })
    .sort((a, b) =>
      sort === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

  return (
    <section className="mt-8">
      {filteredRegions.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center">
          <h3 className="text-xl font-semibold text-slate-700">
            No matching region found
          </h3>

          <p className="mt-2 text-slate-500">
            Try searching by state name, capital or state code.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredRegions.map((region) => (
            <StateCard
              key={region.slug}
              state={region}
            />
          ))}
        </div>
      )}
    </section>
  );
}
