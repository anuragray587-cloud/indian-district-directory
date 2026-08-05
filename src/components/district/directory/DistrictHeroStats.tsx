export function DistrictHeroStats() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="text-3xl">🏙️</div>
        <div className="mt-2 text-3xl font-bold text-slate-900">
          790+
        </div>
        <p className="mt-1 text-sm text-slate-600">
          Districts
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="text-3xl">🗺️</div>
        <div className="mt-2 text-3xl font-bold text-slate-900">
          28
        </div>
        <p className="mt-1 text-sm text-slate-600">
          States
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="text-3xl">🏛️</div>
        <div className="mt-2 text-3xl font-bold text-slate-900">
          8
        </div>
        <p className="mt-1 text-sm text-slate-600">
          Union Territories
        </p>
      </div>
    </div>
  );
}
