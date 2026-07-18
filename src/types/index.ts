/**
 * Shared data types for the Indian District Directory.
 * These mirror the shape of src/data/states.json exactly, so the JSON
 * can be imported and used as typed data anywhere in the app.
 */

export interface District {
  /** Display name */
  name: string;

  /** URL slug */
  slug: string;

  /** District information (master data) */
  data?: Record<string, unknown>;
}

export type RegionType = "state" | "ut";

export interface StateOrUT {
  /** Display name, e.g. "Kerala" */
  name: string;
  /** URL-safe slug, unique across the whole dataset, e.g. "kerala" */
  slug: string;
  /** Whether this is one of the 28 States or one of the 8 Union Territories */
  type: RegionType;
  /** Capital city */
  capital: string;
  /** Short index code shown on cards, e.g. "KL" */
  code: string;
  /** Convenience count, equal to districts.length */
  districtCount: number;
  /** Districts, sorted alphabetically */
  districts: District[];
}
