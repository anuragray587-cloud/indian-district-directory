"use client";

import { useEffect, useRef, useState } from "react";
import type { SortOrder } from "./hooks";

type DistrictFilterBarProps = {
  total: number;
  sort: SortOrder;
  onSortChange: (sort: SortOrder) => void;
};

export function DistrictFilterBar({
  total,
  sort,
  onSortChange,
}: DistrictFilterBarProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  function handleClickOutside(event: MouseEvent) {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

  const sortLabel =
    sort === "asc"
      ? "A → Z"
      : sort === "desc"
      ? "Z → A"
      : sort === "population"
      ? "Most Population"
      : "Largest Area";

   const districtLabel =
  total === 1 ? "District" : "Districts";

  return (
    <section className="mt-12">
      <div className="relative flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div>
          <span className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white">
            All ({total} {districtLabel})
          </span>
        </div>

        <div
  ref={dropdownRef}
  className="relative"
>
          <button
            type="button"
            onClick={() => setOpen(!open)}
          className={`flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-semibold shadow-sm transition-all duration-200 ${
  open
    ? "border-blue-500 bg-blue-50 text-blue-700 shadow-md"
    : "border-slate-300 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50"
}`}
          >
            <span>Sort: {sortLabel}</span>

            <svg
              className={`h-4 w-4 transition-all duration-300 ${
  open ? "rotate-180 text-blue-600" : "text-slate-500"
}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {open && (
          <>
     <div className="absolute right-6 top-[-8px] h-4 w-4 rotate-45 border-l border-t border-slate-200 bg-white" />
  <div
    className="
      absolute right-0 z-20 mt-3 w-64
      overflow-hidden rounded-2xl
      border border-slate-200
      bg-white py-2 shadow-2xl
      transition-all duration-200
    "
  >
                          <button
                onClick={() => {
                  onSortChange("asc");
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between px-5 py-3 text-left text-sm transition-colors ${
  sort === "asc"
    ? "bg-blue-50 text-blue-700"
    : "hover:bg-slate-50"
}`}
              >
                <span>A → Z</span>
                {sort === "asc" && (
                  <span className="font-bold text-blue-600">✓</span>
                )}
              </button>

              <button
                onClick={() => {
                  onSortChange("desc");
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between px-5 py-3 text-left text-sm transition-colors ${
  sort === "desc"
    ? "bg-blue-50 text-blue-700"
    : "hover:bg-slate-50"
}`}
              >
                <span>Z → A</span>
                {sort === "desc" && (
                  <span className="font-bold text-blue-600">✓</span>
                )}
              </button>

              <div className="my-2 border-t border-slate-100" />

              <button
                disabled
                className="flex w-full items-center justify-between px-5 py-3 text-left text-sm text-slate-400"
              >
                <span>Most Population</span>

                <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-700">
                  Coming Soon
                </span>
              </button>

              <button
                disabled
                className="flex w-full items-center justify-between px-5 py-3 text-left text-sm text-slate-400"
              >
                <span>Largest Area</span>

                <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-700">
                  Coming Soon
                </span>
              </button>
            </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
