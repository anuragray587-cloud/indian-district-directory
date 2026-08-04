import { HeroSearch } from "@/components/home/hero/HeroSearch";
import { DirectoryHeroStats } from "./DirectoryHeroStats";

type StateDirectoryHeroProps = {
  search: string;
  onSearchChange: (value: string) => void;
  onSearch: () => void;
};

export function StateDirectoryHero({
  search,
  onSearchChange,
  onSearch,
}: StateDirectoryHeroProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-gradient-to-br from-white via-blue-50/60 to-orange-50/60 px-6 py-8 shadow-sm md:px-10 md:pb-8 md:pt-10">
      <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 shadow-sm">
          🇮🇳 India Directory
        </span>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
          Explore India's States &amp; Union Territories
        </h1>

        <p className="mx-auto mt-5 max-w-[720px] text-lg leading-8 text-slate-600">
          Discover all 28 States and 8 Union Territories through interactive
          maps, comprehensive information, and district directories.
        </p>

        <div className="mx-auto mt-7 max-w-4xl">
        <HeroSearch
  placeholder="Search a State, UT, Capital or District..."
  buttonText="Explore"
  value={search}
  onChange={onSearchChange}
  onSearch={onSearch}
/>
        </div>

        <DirectoryHeroStats />
      </div>
    </section>
  );
}
