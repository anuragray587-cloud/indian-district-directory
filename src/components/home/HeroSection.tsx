"use client";

import { HeroContent } from "@/components/home/hero/HeroContent";
import { HeroSearch } from "@/components/home/hero/HeroSearch";
import { HeroImage } from "@/components/home/hero/HeroImage";
import { HeroStats } from "@/components/home/hero/HeroStats";
import { HeroChips } from "@/components/home/hero/HeroChips";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-slate-200/70 bg-gradient-to-br from-white via-blue-50/60 to-orange-50/60 px-6 pt-10 pb-6 sm:px-8 lg:pt-16 lg:pb-10">

      {/* Background Glow */}
      <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />

      <div className="relative grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">

        {/* Left Content */}
        <div className="space-y-8">
          <HeroContent />
          <HeroSearch />
          <HeroChips />
        </div>

        {/* Right Image */}
        <div className="relative mx-auto w-full max-w-[540px]">
          <HeroImage />
          <HeroStats />
        </div>

      </div>
    </section>
  );
}
