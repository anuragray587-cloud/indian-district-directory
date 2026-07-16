import { getAllRegions, getStates, getUnionTerritories, getTotalDistrictCount } from "@/lib/data";
import { HomeExplorer } from "@/components/directory/HomeExplorer";

export default function HomePage() {
  const regions = getAllRegions();
  const stateCount = getStates().length;
  const utCount = getUnionTerritories().length;
  const districtCount = getTotalDistrictCount();

  return (
    <>
      <section className="relative overflow-hidden border-b border-rule dark:border-rule-dark">
        <div
          className="absolute inset-0 bg-grid-lines bg-grid opacity-70 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-600 dark:text-gold-400">
            {stateCount} States &middot; {utCount} Union Territories &middot;{" "}
            {districtCount.toLocaleString("en-IN")} Districts
          </p>
          <h1 className="mt-4 max-w-2xl font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-ink sm:text-5xl dark:text-ink-invert">
            Every district of India, indexed.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg dark:text-ink-invert-soft">
            Search by state, union territory, or capital city &mdash; or browse the
            full list below and drill down to any district.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <HomeExplorer regions={regions} />
      </section>
    </>
  );
}
