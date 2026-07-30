type StateCardProps = {
  state: {
    name: string;
    code: string;
    capital: string;
    districtCount: number;
    slug: string;
  };
};

export function StateCard({ state }: StateCardProps) {
return (
  <div
  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-blue-300 hover:shadow-2xl"
>
  {/* Top Accent */}
  <div className="h-2 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500" />

  {/* Premium Thumbnail */}
<div className="m-6 mb-6 flex h-28 flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100">
      <span className="text-4xl font-bold tracking-wider text-blue-700">
        {state.code}
      </span>
      <span className="mt-2 text-sm text-slate-600">
        State of India
      </span>
    </div>

    {/* State Info */}
    <div>
  <h3 className="text-3xl font-bold text-slate-900">
    {state.name}
  </h3>

  <div className="mt-2 flex items-center justify-between">
    <p className="text-sm text-slate-500">
      🏛️ Capital • {state.capital}
    </p>

    <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
      {state.code}
    </span>
  </div>
</div>

    {/* Divider */}
    <div className="my-6 h-px bg-slate-200" />

    {/* Stats */}
<div className="mt-6 grid grid-cols-3 gap-2">

  <div className="rounded-xl border border-slate-100 bg-slate-50 p-2.5 text-center transition-colors duration-300 hover:bg-blue-50">
    <div className="text-lg">🏛️</div>
    <div className="mt-1.5 text-sm font-bold text-slate-900">
      {state.districtCount}
    </div>
    <div className="mt-1 text-[11px] font-medium uppercase tracking-wide text-slate-500">
      Districts
    </div>
  </div>

  <div className="rounded-xl border border-slate-100 bg-slate-50 p-2.5 text-center transition-colors duration-300 hover:bg-blue-50">
    <div className="text-lg">👥</div>
    <div className="mt-1.5 text-sm font-bold text-slate-900">
      —
    </div>
    <div className="mt-1 text-[11px] font-medium uppercase tracking-wide text-slate-500">
      Population
    </div>
  </div>

  <div className="rounded-xl border border-slate-100 bg-slate-50 p-2.5 text-center transition-colors duration-300 hover:bg-blue-50">
    <div className="text-lg">📐</div>
    <div className="mt-1.5 text-sm font-bold text-slate-900">
      —
    </div>
    <div className="mt-1 text-[11px] font-medium uppercase tracking-wide text-slate-500">
      Area
    </div>
  </div>

</div>

    {/* Divider */}
<div className="my-5 border-t border-slate-200" />

{/* Footer */}
<div className="mt-2 flex justify-end">
  <button className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 px-4 py-1.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 group-hover:translate-x-1">
    Explore {state.name} →
  </button>
</div>
  </div>
);
}
