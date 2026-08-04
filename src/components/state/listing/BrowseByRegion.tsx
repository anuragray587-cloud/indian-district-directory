export function BrowseByRegion() {
  const regions = [
    {
      emoji: "🏔️",
      title: "Northern India",
      description: "Jammu & Kashmir, Ladakh, Himachal Pradesh, Punjab, Haryana, Delhi, Uttarakhand",
    },
    {
      emoji: "🌊",
      title: "Southern India",
      description: "Andhra Pradesh, Karnataka, Kerala, Tamil Nadu, Telangana",
    },
    {
      emoji: "🏜️",
      title: "Western India",
      description: "Rajasthan, Gujarat, Goa, Maharashtra",
    },
    {
      emoji: "🌾",
      title: "Eastern India",
      description: "Bihar, Jharkhand, Odisha, West Bengal",
    },
    {
      emoji: "🌳",
      title: "Central India",
      description: "Madhya Pradesh, Chhattisgarh",
    },
    {
      emoji: "🌿",
      title: "North-East India",
      description: "Assam, Arunachal Pradesh, Manipur, Meghalaya, Mizoram, Nagaland, Sikkim, Tripura",
    },
  ];

  return (
    <section className="mt-20">
      <div className="text-center">
        <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-semibold text-blue-700">
          Browse by Region
        </span>

        <h2 className="mt-4 text-3xl font-bold text-slate-900">
          Explore India Region-wise
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          Browse Indian States grouped by geographical regions for quicker exploration.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {regions.map((region) => (
          <div
            key={region.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
          >
            <div className="text-4xl">
              {region.emoji}
            </div>

            <h3 className="mt-4 text-xl font-semibold text-slate-900">
              {region.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              {region.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
