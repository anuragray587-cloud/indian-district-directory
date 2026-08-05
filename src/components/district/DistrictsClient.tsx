"use client";

import { useState } from "react";
import { DistrictDirectoryHero } from "./directory/DistrictDirectoryHero";
import { DistrictListingSection } from "./listing/DistrictListingSection";

export function DistrictsClient() {
const [search, setSearch] = useState("");

  return (
    <>
      <DistrictDirectoryHero
        search={search}
        onSearchChange={setSearch}
      />

      <DistrictListingSection
  search={search}
  onSearchChange={setSearch}
/>
    </>
  );
}
