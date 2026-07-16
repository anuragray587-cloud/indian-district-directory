"use client";

import { useId } from "react";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label: string;
  className?: string;
}

/**
 * Card-catalog styled search field. Purely controlled: the parent owns
 * the query state and does the actual filtering, so this component stays
 * dumb and reusable on both the home page and state pages.
 */
export function SearchInput({
  value,
  onChange,
  placeholder = "Search...",
  label,
  className,
}: SearchInputProps) {
  const inputId = useId();

  return (
    <div className={cn("relative", className)}>
      <label htmlFor={inputId} className="sr-only">
        {label}
      </label>
      <Search
        className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft dark:text-ink-invert-soft"
        aria-hidden="true"
      />
      <input
        id={inputId}
        type="text"
        role="searchbox"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete="off"
        className={cn(
          "w-full rounded-md border border-rule bg-paper-card px-11 py-3.5 font-sans text-[15px] text-ink placeholder:text-ink-soft/70",
          "shadow-[0_1px_0_0_rgba(27,35,64,0.04)] outline-none transition-colors",
          "focus:border-gold-500 focus:ring-2 focus:ring-gold-500/25",
          "dark:border-rule-dark dark:bg-night-card dark:text-ink-invert dark:placeholder:text-ink-invert-soft/70",
          "dark:focus:border-gold-400 dark:focus:ring-gold-400/20"
        )}
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="absolute right-3.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-ink-soft transition-colors hover:bg-rule/60 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-500 dark:text-ink-invert-soft dark:hover:bg-rule-dark dark:hover:text-ink-invert"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      )}
    </div>
  );
}

