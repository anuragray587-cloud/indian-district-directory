"use client";

import { useEffect, useRef } from "react";
import { ReactSVG } from "react-svg";

type IndiaSvgProps = {
  selectedSlug?: string;
  onSelectState?: (slug: string) => void;
  onHoverState?: (slug: string) => void;
  className?: string;
};

export function IndiaSvg({
  selectedSlug,
  onSelectState,
  onHoverState,
  className,
}: IndiaSvgProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);

  // Update selected state
  useEffect(() => {
    if (!svgRef.current) return;

    const paths = svgRef.current.querySelectorAll<SVGPathElement>("path[id]");

    paths.forEach((path) => {
console.log(
  "Effect:",
  path.getAttribute("id"),
  selectedSlug
);
const slug = path.getAttribute("id") ?? undefined;

      path.classList.remove("selected-state");

      if (slug === selectedSlug) {
        path.classList.add("selected-state");
      }
    });
  }, [selectedSlug]);

  return (
      <div
  className={`india-map flex h-full w-full items-center justify-center overflow-hidden ${className ?? ""}`}
>
      <ReactSVG
        src="/maps/india.svg"
        className="w-full h-full [&>div]:flex [&>div]:h-full [&>div]:w-full [&>div]:items-center [&>div]:justify-center [&_svg]:h-full [&_svg]:w-full [&_svg]:max-h-none"
        afterInjection={(svg) => {
          svgRef.current = svg;

          // Inject CSS
          const style = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "style"
          );

          style.textContent = `
path[id]{
fill:#e2e8f0;
cursor:pointer;
transition:all .25s ease;
}

path[id].selected-state{
fill:#2563eb !important;
}

path[id]:hover:not(.selected-state){
fill:#60a5fa;
}
          `;

          svg.prepend(style);

          const paths = svg.querySelectorAll<SVGPathElement>("path[id]");

paths.forEach((path) => {
const slug = path.getAttribute("id") ?? undefined;

  if (!slug) return;

  // Initial selected state
  if (slug === selectedSlug) {
    path.classList.add("selected-state");
  }

path.addEventListener("mouseenter", () => {
  onHoverState?.(slug);
}); 
path.addEventListener("click", () => {
  console.log("Clicked:", slug);
  onSelectState?.(slug);
});
});
        }}
      />
    </div>
  );
}
