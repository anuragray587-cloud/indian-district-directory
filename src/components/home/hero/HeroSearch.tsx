export function HeroSearch() {
  return (
    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-3">
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
          placeholder="Search any State, District, PIN Code or Capital..."
          className="h-[60px] w-full rounded-2xl border border-slate-300 bg-white pl-14 pr-5 text-base shadow-md outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        />
      </div>

      <button className="h-[60px] rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-10 font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl active:scale-[0.98]">
        Search
      </button>
    </div>
  );
}
