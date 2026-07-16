import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { District } from "@/types";

export function DistrictCard({
  district,
  stateSlug,
}: {
  district: District;
  stateSlug: string;
}) {
  return (
    <Link
      href={`/${stateSlug}/${district.slug}`}
      className="group flex items-center justify-between gap-3 rounded-md border border-rule bg-paper-card px-4 py-3.5 transition-all duration-150 hover:-translate-y-0.5 hover:border-gold-500 hover:shadow-[0_4px_16px_-8px_rgba(27,35,64,0.25)] focus-visible:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 dark:border-rule-dark dark:bg-night-card dark:hover:border-gold-400"
    >
      <span className="font-serif text-[15px] font-medium leading-snug text-ink transition-colors group-hover:text-gold-700 dark:text-ink-invert dark:group-hover:text-gold-400">
        {district.name}
      </span>
      <ArrowUpRight
        className="h-3.5 w-3.5 shrink-0 text-ink-soft/60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold-600 dark:text-ink-invert-soft/60 dark:group-hover:text-gold-400"
        aria-hidden="true"
      />
    </Link>
  );
}
