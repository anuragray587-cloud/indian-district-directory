"use client";

import { StateCTA } from "./listing/StateCTA";
import { StateFAQ } from "./listing/StateFAQ";
import { BrowseByRegion } from "./listing/BrowseByRegion";
import { useState } from "react";
import { StateDirectoryHero } from "./directory/StateDirectoryHero";
import { StateListingSection } from "./listing/StateListingSection";

export function StatesClient() {
  const [search, setSearch] = useState("");
  const handleSearch = () => {
  document
    .getElementById("state-listing")
    ?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
};

   return (
  <>
    <StateDirectoryHero
  search={search}
  onSearchChange={setSearch}
  onSearch={handleSearch}
/>

    <StateListingSection
      search={search}
    />
    <BrowseByRegion />
    <StateFAQ />
    <StateCTA />
  </>
);
}
