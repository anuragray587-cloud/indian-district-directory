import { useEffect, useState } from "react";

type HeroSearchProps = {
  placeholder?: string;
  buttonText?: string;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: () => void;
  suggestions?: string[];
onSuggestionClick?: (value: string) => void;
showSuggestions?: boolean;
  onFocus?: () => void;
  onEscape?: () => void;
onEnterSuggestion?: (value: string) => void;
};

export function HeroSearch({
  placeholder,
  buttonText,
  className,
  value = "",
  onChange,
  onSearch,
  suggestions = [],
onSuggestionClick,
showSuggestions = false,
onFocus,
  onEscape,
onEnterSuggestion,
}: HeroSearchProps) {
const [activeIndex, setActiveIndex] = useState(-1);

useEffect(() => {
  setActiveIndex(-1);
}, [suggestions]);
  return (
    <div className={`mt-8 flex flex-col gap-2 sm:flex-row sm:gap-1.5 ${className}`}>
      <div className="relative flex-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
          />
        </svg>

        <input
  type="text"
  aria-label="Search districts"
aria-autocomplete="list"
aria-controls="district-search-suggestions"
  value={value}
  onFocus={onFocus}
  onChange={(e) => onChange?.(e.target.value)}
  onKeyDown={(e) => {
  if (!showSuggestions || suggestions.length === 0) {
    if (e.key === "Enter") {
      onSearch?.();
    }
    return;
  }

  if (e.key === "ArrowDown") {
    e.preventDefault();
    setActiveIndex((prev) =>
      prev < suggestions.length - 1 ? prev + 1 : 0
    );
  }

  if (e.key === "ArrowUp") {
    e.preventDefault();
    setActiveIndex((prev) =>
      prev > 0 ? prev - 1 : suggestions.length - 1
    );
  }

  if (e.key === "Enter") {
    e.preventDefault();

    if (activeIndex >= 0) {
    const selectedSuggestion = suggestions[activeIndex];

if (selectedSuggestion) {
  onEnterSuggestion?.(selectedSuggestion);
}
    } else {
      onSearch?.();
    }
  }

  if (e.key === "Escape") {
    setActiveIndex(-1);
    onEscape?.();
  }
}} 
 placeholder={placeholder}
  className="h-[56px] w-full rounded-2xl border border-slate-300 bg-white pl-14 pr-5 text-base text-slate-900 shadow-md outline-none transition-all placeholder:text-slate-500 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
/>
{showSuggestions && suggestions.length > 0 && (
  <div
id="district-search-suggestions"
role="listbox"
 className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
    {suggestions.map((item) => (
      <button
        role="option"
aria-selected={false}
        key={item}
        type="button"
        onClick={() => onSuggestionClick?.(item)}
        className="flex w-full items-center gap-3 px-5 py-3 text-left text-sm text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-700"
      >
        <span className="text-slate-400">🔍</span>

        <span>{item}</span>
      </button>
    ))}
  </div>
)}
      </div>

      <button
  onClick={onSearch}
  aria-label="Search"
  className="h-[56px] rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-7 font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl active:scale-[0.98]"
>
        {buttonText}
      </button>
    </div>
  );
}
