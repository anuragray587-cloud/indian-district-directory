"use client";

import { getAllDistricts } from "@/lib/data";
import { useEffect, useRef, useState } from "react";
import { HeroSearch } from "@/components/home/hero/HeroSearch";
import { DistrictHeroStats } from "./DistrictHeroStats";

type DistrictDirectoryHeroProps = {
  search: string;
  onSearchChange: (value: string) => void;
};
export function DistrictDirectoryHero({
  search,
  onSearchChange,
}: DistrictDirectoryHeroProps) {
const [showSuggestions, setShowSuggestions] = useState(false);
const searchRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  function handleClickOutside(event: MouseEvent) {
    if (
      searchRef.current &&
      !searchRef.current.contains(event.target as Node)
    ) {
      setShowSuggestions(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener(
      "mousedown",
      handleClickOutside
    );
  };
}, []);
const suggestions =
  search.trim() === ""
    ? []
    : getAllDistricts()
        .filter((district) =>
          district.name
            .toLowerCase()
            .includes(search.toLowerCase())
        )
        .slice(0, 8)
        .map((district) => district.name);
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-gradient-to-br from-white via-blue-50/60 to-orange-50/60 px-6 py-10 shadow-sm md:px-10 md:py-14">
      <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-5xl text-center">
        <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 shadow-sm">
          🏙️ District Directory
        </span>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
          Explore India&apos;s Districts
        </h1>

        <p className="mx-auto mt-5 max-w-[760px] text-lg leading-8 text-slate-600">
          Discover districts across India with detailed administrative,
          geographical, demographic and historical information.
        </p>
        <div
  ref={searchRef}
  className="mx-auto mt-7 max-w-4xl"
>
  <HeroSearch
  placeholder="Search District, State or Headquarters..."
  buttonText="Explore"
  value={search}
  onChange={(value) => {
  onSearchChange(value);
  setShowSuggestions(true);
}}
  suggestions={suggestions}
  showSuggestions={
  showSuggestions &&
  search.trim().length > 0
}
  onSuggestionClick={(value) => {
  onSearchChange(value);
  setShowSuggestions(false);
}}
onFocus={() => {
  if (search.trim() !== "") {
    setShowSuggestions(true);
  }
}}
onEscape={() => {
  setShowSuggestions(false);
}}

onEnterSuggestion={(value) => {
  onSearchChange(value);
  setShowSuggestions(false);
}}
/>
</div>
  <DistrictHeroStats />    
  </div>
    </section>
  );
}
