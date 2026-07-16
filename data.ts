import rawData from "@/data/states.json";
import type { District, StateOrUT } from "@/types";

// The JSON is the single source of truth. Casting once here means every
// caller elsewhere in the app gets full type safety for free.
const regions = rawData as StateOrUT[];

/**
 * All States and Union Territories, alphabetically sorted by name.
 * (The JSON is already generated in this order, but we sort defensively
 * here so the guarantee doesn't silently depend on the data file.)
 */
export function getAllRegions(): StateOrUT[] {
  return [...regions].sort((a, b) => a.name.localeCompare(b.name));
}

export function getStates(): StateOrUT[] {
  return getAllRegions().filter((r) => r.type === "state");
}

export function getUnionTerritories(): StateOrUT[] {
  return getAllRegions().filter((r) => r.type === "ut");
}

export function getRegionBySlug(slug: string): StateOrUT | undefined {
  return regions.find((r) => r.slug === slug);
}

export function getDistrictBySlug(
  stateSlug: string,
  districtSlug: string
): { region: StateOrUT; district: District } | undefined {
  const region = getRegionBySlug(stateSlug);
  if (!region) return undefined;
  const district = region.districts.find((d) => d.slug === districtSlug);
  if (!district) return undefined;
  return { region, district };
}

export function getTotalDistrictCount(): number {
  return regions.reduce((sum, r) => sum + r.districtCount, 0);
}

/** Every (stateSlug, districtSlug) pair in the dataset, for generateStaticParams. */
export function getAllDistrictParams(): { state: string; district: string }[] {
  return regions.flatMap((r) =>
    r.districts.map((d) => ({ state: r.slug, district: d.slug }))
  );
}

/** Every state/UT slug in the dataset, for generateStaticParams. */
export function getAllRegionSlugs(): { state: string }[] {
  return regions.map((r) => ({ state: r.slug }));
}
