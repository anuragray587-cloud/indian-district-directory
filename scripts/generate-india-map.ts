import * as fs from "node:fs";
import * as path from "node:path";
import { stateSlugMap } from "../src/data/stateSlugMap";
import { geoMercator, geoPath } from "d3-geo";
import rewind from "@mapbox/geojson-rewind";

const INPUT = path.join(
  process.cwd(),
  "data",
  "geoboundaries",
  "india-adm1-optimized.geojson"
);

const OUTPUT = path.join(
  process.cwd(),
  "public",
  "maps",
  "india.svg"
);

type FeatureCollection = {
  type: "FeatureCollection";
  features: Feature[];
};

type Feature = {
  type: "Feature";
  properties: Record<string, any>;
  geometry: any;
};

function readGeoJSON(): FeatureCollection {
  const raw = fs.readFileSync(INPUT, "utf8");
  return JSON.parse(raw);
}

function slugify(name: string): string {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[()]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

const geojson = rewind(readGeoJSON() as any, true);

const projection = geoMercator().fitSize([800, 828], geojson as any);

const pathGenerator = geoPath(projection);

const paths = geojson.features
  .map((feature: any) => {
    const d = pathGenerator(feature as any);

    if (!d) return "";

    const name =
      feature.properties.shapeName ??
      feature.properties.name ??
      feature.properties.NAME_1 ??
      feature.properties.ADM1_NAME ??
      "unknown";

    const id =
  stateSlugMap[name] ??
  slugify(name);

    return `
  <path
    id="${id}"
    d="${d}"
    fill="#E5E7EB"
    stroke="#374151"
    stroke-width="1"
    vector-effect="non-scaling-stroke"
  />`;
  })
  .join("\n");

console.log(
  `Loaded ${geojson.features.length} state/UT features`
);
const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 800 828"
  fill="none"
>
${paths}
</svg>
`;

fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });

fs.writeFileSync(OUTPUT, svg, "utf8");

console.log(`✓ SVG written to ${OUTPUT}`);
