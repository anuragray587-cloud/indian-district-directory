import { clsx, type ClassValue } from "clsx";

/**
 * Merge conditional class names. Thin wrapper around clsx so every
 * component can compose Tailwind classes the same way.
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

/**
 * Formats a district count for small labels, e.g. "75 districts" / "1 district".
 */
export function pluralize(count: number, noun: string): string {
  return `${count.toLocaleString("en-IN")} ${noun}${count === 1 ? "" : "s"}`;
}
