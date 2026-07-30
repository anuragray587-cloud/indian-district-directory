import Link from "next/link";
import states from "@/data/states.json";
import { StateCard } from "./StateCard";
function getFeaturedStates<T>(items: T[], count: number): T[] {
  const DAY_MS = 24 * 60 * 60 * 1000;
  const cycleSize = Math.ceil(items.length / count);

  // Day number since Unix epoch
  const day = Math.floor(Date.now() / DAY_MS);

  // Current cycle
  const cycle = Math.floor(day / cycleSize);

  // Seeded shuffle
  const shuffled = [...items];

  let seed = cycle + 1;

  for (let i = shuffled.length - 1; i > 0; i--) {
    seed = (seed * 9301 + 49297) % 233280;
    const j = Math.floor((seed / 233280) * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Which group of 4 today
  const index = day % cycleSize;

  return shuffled.slice(index * count, index * count + count);
}
export function FeaturedStatesSection() {
const featuredStates = getFeaturedStates(states, 4);
  return (
    <section className="relative overflow-hidden py-24">
     {/* Background */}
<div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-indigo-50"></div>

<div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-200/20 blur-3xl"></div>

<div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-indigo-200/20 blur-3xl"></div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">

        {/* Section Header */}
        <div className="rounded-[36px] border border-slate-200 bg-white/20 p-5 shadow-2xl backdrop-blur-sm md:p-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            ⭐ Today's Featured States
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Browse India's States & Union Territories
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Explore India's diverse States and Union Territories with detailed
            district-level information. Start with today's featured selections
            or browse the complete directory.
          </p>
        </div>

        {/* Featured Cards */}
        <div className="mt-16">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
  {featuredStates.map((state) => (
  <StateCard
    key={state.slug}
    state={state}
  />
))}
</div>
</div>
{/* Bottom Action */}
<div className="mt-12 flex flex-col gap-6 border-t border-slate-200/80 pt-8 sm:flex-row sm:items-center sm:justify-between">
  <p className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-slate-700">
    <span className="font-bold text-blue-700">
      28 States • 8 Union Territories
    </span>
  </p>

  <Link
    href="/states"
    className="group inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/25"
  >
    Explore All States
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
