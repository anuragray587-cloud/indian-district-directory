"use client";

import { useRouter } from "next/navigation";
import type { StateOrUT } from "@/types";

type StatePreviewProps = {
  region: StateOrUT | null;
};

export function StatePreview({ region }: StatePreviewProps) {
  const router = useRouter();

  if (!region) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-slate-900">
          Select a State
        </h3>

        <p className="mt-3 text-slate-600 leading-relaxed">
          Click on any state in the interactive map to instantly view its
          overview and explore detailed information.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">

      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600">
            India
          </p>

          <h2 className="mt-2 text-4xl font-bold text-slate-900">
            {region.name}
          </h2>
        </div>

        <span className="rounded-full bg-blue-100 px-4 py-1 text-xs font-bold uppercase tracking-wide text-blue-700">
          {region.type === "state" ? "State" : "UT"}
        </span>
      </div>

      {/* Description */}
      <p className="mt-5 text-slate-600 leading-7">
        Explore districts, administration, geography, demographics,
        infrastructure, history and many more official details of{" "}
        <span className="font-semibold">{region.name}</span>.
      </p>

      {/* Info Cards */}
      <div className="mt-8 grid grid-cols-2 gap-4">

        <div className="rounded-2xl border border-slate-200 p-5">
          <p className="text-xs uppercase tracking-wide text-slate-500">
            Capital
          </p>

          <p className="mt-2 text-lg font-semibold">
            📍 {region.capital}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 p-5">
          <p className="text-xs uppercase tracking-wide text-slate-500">
            Districts
          </p>

          <p className="mt-2 text-lg font-semibold">
            🗺 {region.districtCount}
          </p>
        </div>

        <div className="col-span-2 rounded-2xl border border-slate-200 p-5">
          <p className="text-xs uppercase tracking-wide text-slate-500">
            Type
          </p>

          <p className="mt-2 text-lg font-semibold">
            🏛 {region.type === "state" ? "State" : "Union Territory"}
          </p>
        </div>

      </div>

      {/* Button */}
      <button
        onClick={() => router.push(`/${region.slug}`)}
        className="mt-8 w-full rounded-2xl bg-blue-600 py-4 text-lg font-semibold text-white transition duration-300 hover:bg-blue-700"
      >
        Explore {region.name} →
      </button>

    </div>
  );
}
