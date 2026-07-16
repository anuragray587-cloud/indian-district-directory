// Run with: npm run validate-data
// Sanity-checks src/data/states.json after a manual edit -- catches the
// mistakes that are easy to make by hand (duplicate slugs, empty names,
// wrong "type" values) before they ship as broken routes.
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.join(__dirname, "..", "src", "data", "states.json");

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function fail(message) {
  console.error(`\u2718 ${message}`);
  process.exitCode = 1;
}

function main() {
  let raw;
  try {
    raw = readFileSync(dataPath, "utf-8");
  } catch {
    fail(`Could not read ${dataPath}`);
    return;
  }

  let data;
  try {
    data = JSON.parse(raw);
  } catch (err) {
    fail(`states.json is not valid JSON: ${err.message}`);
    return;
  }

  if (!Array.isArray(data)) {
    fail("states.json must be an array of state/UT objects.");
    return;
  }

  const stateSlugs = new Set();
  let stateCount = 0;
  let utCount = 0;
  let districtTotal = 0;

  for (const region of data) {
    const where = region?.name || "(unnamed entry)";

    if (!region.name || typeof region.name !== "string") fail(`${where}: missing "name"`);
    if (!region.slug || !SLUG_PATTERN.test(region.slug)) fail(`${where}: invalid "slug" (${region.slug})`);
    if (region.type !== "state" && region.type !== "ut") fail(`${where}: "type" must be "state" or "ut"`);
    if (!region.capital) fail(`${where}: missing "capital"`);
    if (!region.code) fail(`${where}: missing "code"`);
    if (!Array.isArray(region.districts) || region.districts.length === 0) {
      fail(`${where}: "districts" must be a non-empty array`);
      continue;
    }
    if (region.districtCount !== region.districts.length) {
      fail(`${where}: districtCount (${region.districtCount}) does not match districts.length (${region.districts.length})`);
    }

    if (stateSlugs.has(region.slug)) fail(`Duplicate state/UT slug: ${region.slug}`);
    stateSlugs.add(region.slug);

    if (region.type === "state") stateCount += 1;
    if (region.type === "ut") utCount += 1;

    const districtSlugs = new Set();
    for (const district of region.districts) {
      const dwhere = `${where} > ${district?.name || "(unnamed district)"}`;
      if (!district.name || typeof district.name !== "string") fail(`${dwhere}: missing "name"`);
      if (!district.slug || !SLUG_PATTERN.test(district.slug)) fail(`${dwhere}: invalid "slug" (${district.slug})`);
      if (districtSlugs.has(district.slug)) fail(`${dwhere}: duplicate district slug within ${where}`);
      districtSlugs.add(district.slug);
    }
    districtTotal += region.districts.length;
  }

  console.log(`States: ${stateCount}  |  UTs: ${utCount}  |  Districts: ${districtTotal}`);

  if (process.exitCode === 1) {
    console.error("\nValidation failed -- fix the issues above before deploying.");
  } else {
    console.log("\u2713 states.json looks good.");
  }
}

main();
