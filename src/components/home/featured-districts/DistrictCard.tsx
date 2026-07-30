import { MapPin, Users, Ruler, Building2 } from "lucide-react";
type DistrictCardProps = {
  name: string;
  state: string;
  code: string;
  population: string;
  area: string;
  headquarters: string;
};

export function DistrictCard({
  name,
  state,
  code,
  population,
  area,
  headquarters,
}: DistrictCardProps) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300
hover:-translate-y-2
hover:scale-[1.02]
hover:border-emerald-300
hover:shadow-2xl">

      {/* Top Accent */}
      <div className="h-2 w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500" />

      <div className="flex flex-1 flex-col p-6">

        {/* Header */}

        {/* Title */}
        <h3 className="text-3xl font-bold text-slate-900">
          {name}
        </h3>

        <div className="mt-2 flex items-center justify-between">

    <p className="flex items-center gap-1.5 text-sm font-medium text-slate-500">
  <MapPin className="h-4 w-4 text-emerald-600" />
  <span>{state}, India</span>
</p>

  <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
    {code}
  </span>

</div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-3 gap-2">

          <div className="rounded-xl border border-slate-100 bg-slate-50 p-2.5 text-center transition-colors duration-300 hover:bg-emerald-50">
            <Users className="mx-auto h-5 w-5 text-emerald-600" />
            <div className="mt-1.5 text-sm font-bold text-slate-900">
              {population}
            </div>
            <div className="mt-1 text-[11px] font-medium uppercase tracking-wide text-slate-500">
              Population
            </div>
          </div>

         <div className="rounded-xl border border-slate-100 bg-slate-50 p-2.5 text-center transition-colors duration-300 hover:bg-emerald-50">
            <Ruler className="mx-auto h-5 w-5 text-emerald-600" />
            <div className="mt-1.5 text-sm font-bold text-slate-900">
              {area}
            </div>
            <div className="mt-1 text-[11px] font-medium uppercase tracking-wide text-slate-500">
              Area
            </div>
          </div>

         <div className="rounded-xl border border-slate-100 bg-slate-50 p-2.5 text-center transition-colors duration-300 hover:bg-emerald-50">
            <Building2 className="mx-auto h-5 w-5 text-emerald-600" />
            <div className="mt-1.5 text-sm font-bold text-slate-900 truncate">
              {headquarters}
            </div>
            <div className="mt-1 text-[11px] font-medium uppercase tracking-wide text-slate-500">
              HQ
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="my-5 border-t border-slate-200" />

        {/* Footer */}
        <div className="mt-2 flex justify-end">


          <button className="rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 shadow-sm
 px-4 py-1.5 text-sm font-semibold text-white transition-all duration-300 
hover:shadow-lg hover:shadow-emerald-500/25
 group-hover:translate-x-1">
            Explore {name} →
          </button>

        </div>

      </div>
    </div>
  );
}
