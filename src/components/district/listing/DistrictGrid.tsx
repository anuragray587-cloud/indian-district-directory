"use client";

import { useEffect, useState } from "react";
import { getAllDistricts } from "@/lib/data";
import { DistrictCard } from "./DistrictCard";

import type { SortOrder } from "./hooks";

type DistrictGridProps = {
  search: string;
  sort: SortOrder;
  onClearSearch: () => void;
};

export function DistrictGrid({
  search,
  sort,
  onClearSearch,
}: DistrictGridProps) {
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
  setCurrentPage(1);
}, [search]);
  const ITEMS_PER_PAGE = 24;

  const query = search.trim().toLowerCase();

  const districts = getAllDistricts()
  .filter((district) => {
    return (
      query === "" ||
      district.name.toLowerCase().includes(query) ||
      district.state.toLowerCase().includes(query)
    );
  })
  .sort((a, b) => {
    if (sort === "asc") {
      return a.name.localeCompare(b.name);
    }

    if (sort === "desc") {
      return b.name.localeCompare(a.name);
    }

    return 0;
  });

  const totalPages = Math.ceil(
    districts.length / ITEMS_PER_PAGE
  );

  const paginatedDistricts = districts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const startItem =
    districts.length === 0
      ? 0
      : (currentPage - 1) * ITEMS_PER_PAGE + 1;

  const endItem = Math.min(
    currentPage * ITEMS_PER_PAGE,
    districts.length
  );
function getVisiblePages() {
  const pages: (number | "...")[] = [];

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  // First pages
  if (currentPage <= 4) {
    pages.push(1, 2, 3, 4, 5, "...", totalPages);
    return pages;
  }

  // Last pages
  if (currentPage >= totalPages - 3) {
    pages.push(
      1,
      "...",
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages
    );
    return pages;
  }

  // Middle pages
  pages.push(
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages
  );

  return pages;
}

const visiblePages = getVisiblePages();
  return (
    <section className="mt-8">
      {districts.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-8 py-16 text-center">

  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
    <span className="text-3xl">🔍</span>
  </div>

  <h3 className="mt-6 text-2xl font-bold text-slate-900">
    No District Found
  </h3>

  <p className="mx-auto mt-3 max-w-md text-slate-500">
    We couldn&apos;t find any district matching your search.
    Try searching with a different district or state name.
  </p>

  <button
    type="button"
    onClick={onClearSearch}
    className="mt-8 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
  >
    Clear Search
  </button>

</div>
      ) : (
        <>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {paginatedDistricts.map((district) => (
              <DistrictCard
                key={`${district.stateSlug}-${district.slug}`}
                district={district}
              />
            ))}
          </div>

          {totalPages > 1 && (
          <div className="mt-10 mb-4 text-center text-sm text-slate-600">
            Showing{" "}
            <span className="font-semibold">
              {startItem}–{endItem}
            </span>{" "}
            of{" "}
            <span className="font-semibold">
              {districts.length}
            </span>{" "}
            districts
          </div>
          )}
            {totalPages > 1 && (
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-2">

<button
  type="button"
  aria-label="Previous page" 
 disabled={currentPage === 1}
  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
  className={`flex h-11 items-center gap-2 rounded-full px-5 text-sm font-semibold transition-all duration-200 active:scale-95 ${
    currentPage === 1
      ? "cursor-not-allowed bg-slate-100 text-slate-400"
      : "bg-blue-600 text-white shadow-md hover:bg-blue-700"
  }`}
>
  <span>◀</span>
  <span>Previous</span>
</button>
            {visiblePages.map((page, index) =>
  page === "..." ? (
    <span
      key={`dots-${index}`}
      className="px-2 text-slate-500"
    >
      ...
    </span>
  ) : (
    <button
      key={page}
      aria-current={
  currentPage === page ? "page" : undefined
}
      onClick={() => setCurrentPage(page)}
      className={`h-10 min-w-[40px] rounded-lg border text-sm font-medium transition ${
        currentPage === page
          ? "border-blue-600 bg-blue-600 text-white"
          : "border-slate-300 bg-white hover:border-blue-300 hover:text-blue-600"
      }`}
    >
      {page}
    </button>
  )
)}

<button
  type="button"
  aria-label="Next page"
  disabled={currentPage === totalPages}
  onClick={() =>
    setCurrentPage((p) => Math.min(totalPages, p + 1))
  }
  className={`flex h-11 items-center gap-2 rounded-full px-5 text-sm font-semibold transition-all duration-200 active:scale-95 ${
    currentPage === totalPages
      ? "cursor-not-allowed bg-slate-100 text-slate-400"
      : "bg-blue-600 text-white shadow-md hover:bg-blue-700"
  }`}
>
  <span>Next</span>
  <span>▶</span>
</button>

          </div>
         )}
        </>
      )}
    </section>
  );
}
