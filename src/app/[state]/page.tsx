import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllRegionSlugs, getRegionBySlug } from "@/lib/data";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StateExplorer } from "@/components/directory/StateExplorer";
import StateTabs from "@/components/state/StateTabs";
import StateInfo from "@/components/state/StateInfo";
import StateStats from "@/components/state/StateStats";
import StateMap from "@/components/state/StateMap";
import { pluralize } from "@/lib/utils";

interface PageProps {
  params: Promise<{
    state: string;
  }>;
}

export function generateStaticParams() {
  return getAllRegionSlugs();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state } = await params;
  const region = getRegionBySlug(state);
  if (!region) return {};

  const kind = region.type === "state" ? "State" : "Union Territory";
  const title = `${region.name} District List (${pluralize(region.districtCount, "District")})`;
  const description = `Browse all ${region.districtCount} districts of ${region.name}, the ${kind.toLowerCase()} of India with capital ${region.capital}, listed alphabetically and searchable.`;

  return {
    title,
    description,
    alternates: { canonical: `/${region.slug}` },
    openGraph: { title, description, url: `/${region.slug}` },
  };
}

export default async function StatePage({ params }: PageProps) {
  const { state } = await params;
const region = getRegionBySlug(state);
  if (!region) notFound();

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: region.name }]} />

      <header className="mb-8 border-b border-rule pb-8 dark:border-rule-dark">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-600 dark:text-gold-400">
          {region.type === "state" ? "State" : "Union Territory"} &middot; Capital: {region.capital}
        </p>
        <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl dark:text-ink-invert">
          {region.name}
        </h1>
        <p className="mt-3 text-ink-soft dark:text-ink-invert-soft">
          {pluralize(region.districtCount, "district")}, listed alphabetically.
        </p>
      </header>

      <StateTabs
  info={<StateInfo  />}
  districts={
    <>
      <StateStats region={region} />
      <StateMap region={region} />
      <StateExplorer
        districts={region.districts}
        stateSlug={region.slug}
        stateName={region.name}
      />
    </>
   }
/>
    </section>
  );
}
