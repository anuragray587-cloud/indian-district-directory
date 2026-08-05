import fs from "fs";
import path from "path";

import states from "../src/data/states.json";

type StateData = {
  name: string;
  slug: string;
  districts: {
    name: string;
    slug: string;
  }[];
};

const allStates = states as StateData[];
const districtIndex = allStates.flatMap((state) =>
  state.districts.map((district) => ({
    state: state.name,
    stateSlug: state.slug,
    name: district.name,
    slug: district.slug,

    basicInformation: {},
    history: {},
    geography: {},
    demographics: {},
    administration: {},
    economy: {},
    agriculture: {},
    infrastructure: {},
    education: {},
    healthcare: {},
    culture: {},
    tourism: {},
    sports: {},
    banking: {},
    governance: {},
    lawAndOrder: {},
    environment: {},
    media: {},
    rankings: {},
    miscellaneous: {},
  }))
);
const outputPath = path.join(
  process.cwd(),
  "src",
  "data",
  "districts.json"
);

fs.writeFileSync(
  outputPath,
  JSON.stringify(districtIndex, null, 2),
  "utf8"
);

console.log(
  `✅ Generated ${districtIndex.length} districts successfully.`
);
