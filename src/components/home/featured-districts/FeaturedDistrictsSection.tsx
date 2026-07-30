import Link from "next/link";
import { DistrictCard } from "./DistrictCard";
import {
  featuredDistricts,
  getFeaturedDistricts,
} from "./featuredDistricts";

export function FeaturedDistrictsSection() {
  const districts = getFeaturedDistricts(featuredDistricts, 6);

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-emerald-50 to-teal-50"></div>
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-emerald-200/20 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-teal-200/20 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
<div className="rounded-[36px] border border-slate-200 bg-white/20 backdrop-blur-sm p-8 md:p-10 shadow-2xl">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
            ⭐ Today's Featured Districts
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Discover India's Districts
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Explore detailed information about India's districts,
            refreshed daily and selected from across the country.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {districts.map((district) => (
            <DistrictCard
              key={district.code}
              name={district.name}
              state={district.state}
              code={district.code}
              population={district.population}
              area={district.area}
              headquarters={district.headquarters}
            />
          ))}
        </div>

        {/* Bottom Action */}
        <div className="mt-12 flex items-center justify-between border-t border-slate-200/80 pt-8">
          <p className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-slate-700">
            <span className="font-bold text-emerald-700">
              788+ Districts
            </span>
            {" • "}
            Updated Regularly
          </p>

<Link
  href="/districts"
  className="group inline-flex items-center rounded-full bg-gradient-to-r from-emerald-600 to-emerald-700 px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/25"
>
  Explore All Districts
  <span className="ml-2 transition-all duration-300 group-hover:translate-x-1">
    →
  </span>
</Link>
        </div>

      </div>
      </div>
    </section>
  );
}
