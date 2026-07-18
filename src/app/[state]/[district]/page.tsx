import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, FileClock } from "lucide-react";
import {
  getAllDistrictParams,
  getDistrictBySlug,
  getDistrictData,
} from "@/lib/data";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { IndexBadge } from "@/components/ui/IndexBadge";
import DistrictAccordion from "@/components/district/DistrictAccordion";

interface PageProps {
  params: Promise<{
    state: string;
    district: string;
  }>;
}

export function generateStaticParams() {
  return getAllDistrictParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
const { state, district: districtSlug } = await params;
  const found = getDistrictBySlug(state, districtSlug);
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

export default async function DistrictPage({ params }: PageProps) {
const { state, district: districtSlug } = await params;
const found = getDistrictBySlug(state, districtSlug);
if (!found) notFound();
const { region, district } = found;
const districtData = getDistrictData(state, districtSlug);

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

      <DistrictAccordion districtData={districtData} /> 

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
