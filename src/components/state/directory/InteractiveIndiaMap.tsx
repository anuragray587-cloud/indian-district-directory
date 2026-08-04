"use client";

import { IndiaSvg } from "@/components/home/map/IndiaSvg";

type InteractiveIndiaMapProps = {
  selectedSlug: string;
  onSelectState: (slug: string) => void;
  onHoverState?: (slug: string) => void;
};

export function InteractiveIndiaMap({
  selectedSlug,
  onSelectState,
  onHoverState,
}: InteractiveIndiaMapProps) {
  return (
    <div className="h-[420px] rounded-3xl border border-slate-200 bg-white p-2 shadow-sm">
      <IndiaSvg
        selectedSlug={selectedSlug}
        onSelectState={onSelectState}
        onHoverState={onHoverState}
      />
    </div>
  );
}
