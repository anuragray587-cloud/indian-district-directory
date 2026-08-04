const stats = [
  {
    value: "28",
    label: "States",
    icon: "🇮🇳",
  },
  {
    value: "8",
    label: "Union Territories",
    icon: "🏛️",
  },
  {
    value: "788+",
    label: "Districts",
    icon: "📍",
  },
];

export function DirectoryHeroStats() {
  return (
    <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-slate-200/80 bg-white/90 px-8 py-2.5 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-xl"
        >
          <div className="text-lg">{stat.icon}</div>

          <div className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
            {stat.value}
          </div>

          <div className="mt-0 text-sm font-semibold tracking-wide text-slate-700">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
