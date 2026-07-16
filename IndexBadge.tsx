import { cn } from "@/lib/utils";
import type { RegionType } from "@/types";

/**
 * The small "index tab" showing a 2-3 letter code, styled after the
 * card-catalog / gazetteer motif used throughout the directory.
 * States get the gold accent; Union Territories get teal, so the two
 * categories stay visually distinguishable in a mixed grid.
 */
export function IndexBadge({
  code,
  type,
  className,
}: {
  code: string;
  type: RegionType;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-8 min-w-[2.75rem] items-center justify-center rounded-sm px-2 font-mono text-xs font-semibold tracking-wider",
        type === "state"
          ? "bg-gold-50 text-gold-700 dark:bg-gold-500/10 dark:text-gold-400"
          : "bg-teal-500/10 text-teal-600 dark:bg-teal-500/15 dark:text-teal-500",
        className
      )}
    >
      {code}
    </span>
  );
}
