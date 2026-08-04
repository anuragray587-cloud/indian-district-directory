import type { StateOrUT } from "@/types";

type StatePreviewCardProps = {
  state: StateOrUT;
};
export function StatePreviewCard({
  state,
}: StatePreviewCardProps) {
  return (
    <div className="flex h-[500px] flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}
      <div>
        <h3 className="text-3xl font-bold tracking-tight text-slate-900">
          📍 {state.name}
        </h3>

        <div className="mt-2 flex items-center justify-between text-sm text-slate-600">
          <span>🌏 {state.type === "state" ? "State" : "Union Territory"}</span>
          <span className="rounded-md bg-slate-100 px-2 py-1 font-semibold text-slate-700">
            {state.code}
          </span>
        </div>
      </div>

      {/* State Outline */}
      <div className="my-8 flex flex-1 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50">
        <span className="text-slate-400">
          {state.name} Outline
        </span>
      </div>

      {/* Quick Facts */}
      <div className="space-y-3">

        <div className="flex justify-between">
          <span className="text-slate-500">🏛 Capital</span>
          <span className="font-semibold">{state.capital}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-500">🏘 Districts</span>
          <span className="font-semibold">{state.districtCount}</span>
        </div>


      </div>

      {/* Popular Districts */}

      <div className="mt-8">

        <p className="mb-3 text-sm font-semibold text-slate-700">
          Popular Districts
        </p>

        <div className="flex flex-wrap gap-2">

        {state.districts.slice(0, 6).map((district) => (
  <span
    key={district.slug}
    className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700"
  >
    {district.name}
  </span>
))}

        </div>

      </div>

      {/* CTA */}

      <button className="mt-8 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
        Explore {state.name} →
      </button>

    </div>
  );
}
