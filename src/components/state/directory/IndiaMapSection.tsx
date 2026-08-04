"use client";

import { getRegionBySlug } from "@/lib/data";
import { useState } from "react";
import { InteractiveIndiaMap } from "./InteractiveIndiaMap";
import { StatePreviewCard } from "./StatePreviewCard";
const sampleState = {
  name: "Bihar",
  region: "Eastern India",
  code: "BR",
  capital: "Patna",
  districts: 38,
  population: "12.7 Cr",
  area: "94,163 km²",
  language: "Hindi",
  popularDistricts: [
    "Patna",
    "Begusarai",
    "Gaya",
    "Muzaffarpur",
  ],
};
export function IndiaMapSection() {
const [selectedSlug, setSelectedSlug] = useState("bihar");
const selectedState = getRegionBySlug(selectedSlug);
  return (
    <section className="mt-16">
      <div className="text-center">
        <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
          Interactive Map
        </span>

        <h2 className="mt-4 text-3xl font-bold text-slate-900">
          Explore India Interactively
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          Hover over a state to preview key information and click to explore
          detailed state data.
        </p>
      </div>
     <div className="mt-12 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-5">
     <div className="lg:col-span-3">
  <InteractiveIndiaMap
  selectedSlug={selectedSlug}
  onSelectState={setSelectedSlug}
/>
</div>

<div className="lg:col-span-2">
{selectedState && (
  <StatePreviewCard state={selectedState} />
)}
</div>
</div>
    </section>
  );
}
