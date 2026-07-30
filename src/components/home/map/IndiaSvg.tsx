"use client";

import { useEffect, useRef } from "react";
import { ReactSVG } from "react-svg";
import { stateSlugMap } from "./stateSlugMap";

type IndiaSvgProps = {
  selectedSlug: string;
  onSelectState: (slug: string) => void;
};

export function IndiaSvg({
  selectedSlug,
  onSelectState,
}: IndiaSvgProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);

  // Update selected state
  useEffect(() => {
    if (!svgRef.current) return;

    const paths = svgRef.current.querySelectorAll<SVGPathElement>("path[name]");

    paths.forEach((path) => {
      const stateName = path.getAttribute("name");
      const slug = stateName ? stateSlugMap[stateName] : undefined;

      path.classList.remove("selected-state");

      if (slug === selectedSlug) {
        path.classList.add("selected-state");
      }
    });
  }, [selectedSlug]);

  return (
    <div className="india-map flex h-full w-full items-center justify-center overflow-hidden">
      <ReactSVG
        src="/maps/india.svg"
        className="w-full h-full [&>div]:flex [&>div]:h-full [&>div]:w-full [&>div]:items-center [&>div]:justify-center [&_svg]:h-[96%] [&_svg]:w-[96%]"
        afterInjection={(svg) => {
          svgRef.current = svg;

          // Inject CSS
          const style = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "style"
          );

          style.textContent = `
            path[name]{
  fill:#6f9c76;
  cursor:pointer;
  transition:fill .25s ease, filter .25s ease;
}

path[name].selected-state{
  fill:#2563eb !important;
  filter:none;
}

path[name]:hover:not(.selected-state){
  fill:#3b82f6;
  filter:none;
}
          `;

          svg.prepend(style);

          const paths = svg.querySelectorAll<SVGPathElement>("path[name]");

paths.forEach((path) => {
  const stateName = path.getAttribute("name");
  const slug = stateName ? stateSlugMap[stateName] : undefined;

  if (!slug) return;

  // Initial selected state
  if (slug === selectedSlug) {
    path.classList.add("selected-state");
  }

  path.addEventListener("click", () => {
    // Remove old selection
    paths.forEach((p) => p.classList.remove("selected-state"));

    // Highlight clicked state
    path.classList.add("selected-state");

    onSelectState(slug);
  });
});
        }}
      />
    </div>
  );
}
