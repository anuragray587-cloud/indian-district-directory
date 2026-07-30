"use client";

import { useState } from "react";
import { IndiaSvg } from "./IndiaSvg";
import { StatePreview } from "./StatePreview";
import { getRegionBySlug } from "@/lib/data";

export function IndiaMapSection() {
  const [selectedSlug, setSelectedSlug] = useState("bihar");

  const region = getRegionBySlug(selectedSlug) ?? null;

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
        <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold tracking-wide text-blue-700 shadow-sm">
          🇮🇳 India&apos;s Interactive Explorer
          </span>
          <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl">
           Explore Every State &<br />
           Union Territory of India
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
           Navigate through India&apos;s states and union territories using the
           interactive map. Instantly preview key information and explore
           detailed district-level data with a single click.
          </p>
        </div>
        <div className="mb-6 flex justify-center">
  <div className="rounded-2xl border border-slate-200 bg-white/80 px-5 py-3 shadow-sm backdrop-blur">
    <p className="text-sm font-medium text-slate-700">
      🖱️ Click any <span className="text-blue-600">State</span> or
      <span className="text-blue-600"> Union Territory</span> to preview its information.
    </p>
  </div>
</div>
        {/* Main Layout */}
        <div className="grid items-stretch gap-10 lg:grid-cols-[1.4fr_0.6fr]">
          {/* India Map */}
          <div className="relative overflow-hidden rounded-[36px] border border-slate-200/80 bg-white/90 p-10 shadow-2xl backdrop-blur-sm">
            <div className="relative flex h-[700px] items-center justify-center overflow-hidden rounded-[28px] bg-gradient-to-br from-blue-50 via-white to-slate-100">
             <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/40 blur-3xl" />
             <div className="relative z-10 flex h-full w-full items-center justify-center">  
            <IndiaSvg
                selectedSlug={selectedSlug}
                onSelectState={setSelectedSlug}
              />
            </div>
          </div>
          </div>
          {/* State Preview */}
          <StatePreview region={region} />
        </div>
      </div>
    </section>
  );
}
