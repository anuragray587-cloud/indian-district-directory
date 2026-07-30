export function HeroContent() {
  return (
    <div className="max-w-2xl">
      <span className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-xs font-semibold text-green-700 shadow-sm">
        🇮🇳 India&apos;s Most Trusted District Information Portal
      </span>

      <h1 className="mt-8 text-5xl font-extrabold leading-[0.92] tracking-tight text-slate-900 md:text-7xl">
        Explore Every
        <br />
        <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 bg-clip-text text-transparent">
          District of India
        </span>
      </h1>

      <p className="mt-8 max-w-lg text-lg leading-7 text-slate-600 md:text-xl md:leading-8">
        Discover verified information about every State, Union Territory and
        District of India — including geography, history, administration,
        demographics, tourism, economy, transport, education and much more.
      </p>
    </div>
  );
}
