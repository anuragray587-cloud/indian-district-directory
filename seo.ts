export const SITE_NAME = "Indian District Directory";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://your-domain.com";

export const SITE_DESCRIPTION =
  "A complete, searchable index of every State, Union Territory and district in India.";

/** Builds an absolute canonical URL from a site-relative path like "/kerala". */
export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Builds a schema.org BreadcrumbList object for the given trail.
 * Pass the same items you give to <Breadcrumbs />; the last item is
 * treated as the current page.
 */
export function breadcrumbJsonLd(items: { label: string; href?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? absoluteUrl(item.href) : undefined,
    })),
  };
}
