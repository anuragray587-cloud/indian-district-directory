import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { breadcrumbJsonLd } from "@/lib/seo";

export interface Crumb {
  label: string;
  href?: string;
}

/**
 * Home > State > District trail. Renders visible breadcrumbs plus a
 * matching BreadcrumbList JSON-LD block for search engines.
 */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonLd = breadcrumbJsonLd(items);

  return (
    <nav aria-label="Breadcrumb" className="mb-6 md:mb-8">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 font-mono text-xs uppercase tracking-wide text-ink-soft dark:text-ink-invert-soft">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-1.5">
              {i > 0 && (
                <ChevronRight className="h-3 w-3 shrink-0 opacity-50" aria-hidden="true" />
              )}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 rounded-sm transition-colors hover:text-gold-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 dark:hover:text-gold-400"
                >
                  {i === 0 && <Home className="h-3 w-3" aria-hidden="true" />}
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={isLast ? "text-ink dark:text-ink-invert" : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
