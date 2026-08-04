import Link from "next/link";
import type { StateOrUT } from "@/types";

type StateCardProps = {
  state: StateOrUT;
};

export function StateCard({ state }: StateCardProps) {
  return (
    <Link
      href={`/${state.slug}`}
      className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
    >
      <div className="flex items-start justify-between">
          <div>
  <span
    className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-bold tracking-wider ${
      state.type === "state"
        ? "bg-emerald-100 text-emerald-700"
        : "bg-purple-100 text-purple-700"
    }`}
  >
    {state.type === "state" ? "STATE" : "UT"}
  </span>

  <h3 className="mt-3 text-xl font-bold text-slate-900">
    {state.name}
  </h3>

          <p className="mt-1 text-sm text-slate-500">
            {state.capital}
          </p>
        </div>

        <span className="rounded-lg bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
          {state.code}
        </span>
      </div>

      <div className="mt-6 flex items-center justify-between text-sm">
        <span className="text-slate-600">
          {state.districtCount} Districts
        </span>

        <span className="font-semibold text-blue-600 group-hover:translate-x-1 transition-transform">
          Explore →
        </span>
      </div>
    </Link>
  );
}
