import Link from "next/link";
import type { DistrictIndex } from "@/lib/data";

type DistrictCardProps = {
  district: DistrictIndex;
};

export function DistrictCard({
  district,
}: DistrictCardProps) {
  return (
    <Link
      href={`/${district.stateSlug}/${district.slug}`}
      className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
    >

      <h3 className="text-[1.75rem] font-bold leading-tight text-slate-900">
        {district.name}
      </h3>

      <div className="mt-2 flex items-center justify-between">
      <div className="flex items-center gap-2">
  <span className="h-2 w-2 rounded-full bg-blue-600" />

  <p className="text-sm text-slate-500">
    Administrative District
  </p>
</div>

  <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-slate-700 shadow-sm">
    {district.state}
  </span>
</div>

      <div className="mt-6 border-t border-slate-100 pt-5 space-y-3 text-sm">

        <div className="flex justify-between">
          <span className="text-slate-500">
            Headquarters
          </span>

          <span className="font-medium text-slate-800">
            Coming Soon
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-500">
            Population
          </span>

          <span className="font-medium text-slate-800">
            Coming Soon
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-500">
            Area
          </span>

          <span className="font-medium text-slate-800">
            Coming Soon
          </span>
        </div>

      </div>

      <div className="mt-5 border-t border-slate-100 pt-4">
  <div className="flex items-center justify-end pr-1">
    <span className="flex items-center gap-2 text-[15px] font-semibold text-blue-600 transition-all duration-300 group-hover:gap-3">
      Explore District
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </span>
  </div>
</div>
    </Link>
  );
}
