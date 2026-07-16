import type { MetadataRoute } from "next";
import { getAllRegions } from "@/lib/data";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const regions = getAllRegions();
  const now = new Date();

  const homeEntry: MetadataRoute.Sitemap[number] = {
    url: SITE_URL,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 1,
  };

  const stateEntries: MetadataRoute.Sitemap = regions.map((region) => ({
    url: `${SITE_URL}/${region.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const districtEntries: MetadataRoute.Sitemap = regions.flatMap((region) =>
    region.districts.map((district) => ({
      url: `${SITE_URL}/${region.slug}/${district.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    }))
  );

  return [homeEntry, ...stateEntries, ...districtEntries];
}
