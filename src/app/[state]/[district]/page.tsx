import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, FileClock } from "lucide-react";
import { getAllDistrictParams, getDistrictBySlug } from "@/lib/data";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { IndexBadge } from "@/components/ui/IndexBadge";

interface PageProps {
  params: { state: string; district: string };
}

export function generateStaticParams() {
  return getAllDistrictParams();
}

export function generateMetadata({ params }: PageProps): Metadata {
  const found = getDistrictBySlug(params.state, params.district);
  if (!found) return {};
  const { region, district } = found;

  const title = `${district.name}, ${region.name}`;
  const description = `${district.name} is a district in ${region.name}, India. Detailed information about ${district.name} is being compiled and will be published here soon.`;

  return {
    title,
    description,
    alternates: { canonical: `/${region.slug}/${district.slug}` },
    openGraph: { title, description, url: `/${region.slug}/${district.slug}` },
  };
}

export default function DistrictPage({ params }: PageProps) {
  const found = getDistrictBySlug(params.state, params.district);
  if (!found) notFound();
  const { region, district } = found;

  return (
    <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: region.name, href: `/${region.slug}` },
          { label: district.name },
        ]}
      />

      <header className="flex items-start gap-4">
        <IndexBadge code={region.code} type={region.type} className="mt-1.5" />
        <div>
          <h1 className="font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl dark:text-ink-invert">
            {district.name}
          </h1>
          <p className="mt-2 text-ink-soft dark:text-ink-invert-soft">
            A district of{" "}
            <Link
              href={`/${region.slug}`}
              className="text-gold-700 underline decoration-dotted underline-offset-4 transition-colors hover:text-gold-600 dark:text-gold-400 dark:hover:text-gold-300"
            >
              {region.name}
            </Link>
            , India.
          </p>
        </div>
      </header>

      <div className="mt-10 flex flex-col items-center rounded-md border border-dashed border-rule bg-paper-card px-6 py-14 text-center dark:border-rule-dark dark:bg-night-card">
        <FileClock className="h-7 w-7 text-gold-600 dark:text-gold-400" strokeWidth={1.5} aria-hidden="true" />
        <h2 className="mt-4 font-serif text-xl font-semibold text-ink dark:text-ink-invert">
          Content Coming Soon
        </h2>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-soft dark:text-ink-invert-soft">
          This page is reserved for {district.name}&rsquo;s full profile &mdash;
          geography, administration, population and points of interest. It hasn&rsquo;t
          been published yet.
        </p>
      </div>

      <Link
        href={`/${region.slug}`}
        className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-ink-soft transition-colors hover:text-gold-600 dark:text-ink-invert-soft dark:hover:text-gold-400"
      >
        <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
        Back to {region.name} districts
      </Link>
    </section>
  );
}
