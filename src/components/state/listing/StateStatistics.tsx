export function StateStatistics() {
  const stats = [
    {
      value: "28",
      label: "States",
    },
    {
      value: "8",
      label: "Union Territories",
    },
    {
      value: "790",
      label: "Districts",
    },
    {
      value: "1.4B+",
      label: "Population",
    },
    {
      value: "3.28M km²",
      label: "Area",
    },
  ];

  return (
    <section className="mt-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900">
          India at a Glance
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          Quick facts about India's administrative divisions and geography.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-5">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-3xl font-bold text-blue-600">
              {item.value}
            </p>

            <p className="mt-2 text-sm font-medium text-slate-600">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
