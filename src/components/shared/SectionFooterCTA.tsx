import Link from "next/link";

type StatItem = {
  value: string;
  label: string;
};

type SectionFooterCTAProps = {
  theme: "blue" | "emerald";
  badge: string;
  title: string;
  description: string;
  stats: StatItem[];
  buttonText: string;
  href: string;
  footerText?: string;
};

export function SectionFooterCTA({
  theme,
  badge,
  title,
  description,
  stats,
  buttonText,
  href,
  footerText = "Verified information • Regularly updated • Easy to explore",
}: SectionFooterCTAProps) {
  const styles =
    theme === "blue"
      ? {
          badge:
            "border-blue-200 bg-blue-50 text-blue-700",
          card:
"bg-gradient-to-br from-white via-slate-50 to-blue-50",
          blob1: "bg-blue-200/30",
          blob2: "bg-sky-200/30",
          button:
            "from-blue-600 to-blue-700 hover:shadow-blue-500/30",
          stat:
            "border-blue-100 bg-white",
          statValue: "text-blue-700",
        }
      : {
          badge:
            "border-emerald-200 bg-emerald-50 text-emerald-700",
          card:
"bg-gradient-to-br from-white via-emerald-50 to-teal-50",
          blob1: "bg-emerald-200/30",
          blob2: "bg-teal-200/30",
          button:
            "from-emerald-600 to-emerald-700 hover:shadow-emerald-500/30",
          stat:
            "border-emerald-100 bg-white",
          statValue: "text-emerald-700",
        };

  return (
    <div
      className="relative overflow-hidden bg-transparent px-8 py-14" 
    >
      <div
        className={`absolute -left-24 -top-24 h-72 w-72 rounded-full blur-3xl ${styles.blob1}`}
      />

      <div
        className={`absolute -right-24 -bottom-24 h-72 w-72 rounded-full blur-3xl ${styles.blob2}`}
      />

      <div className="relative z-10 text-center">

        <span
          className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold ${styles.badge}`}
        >
          {badge}
        </span>

        <h3 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          {title}
        </h3>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          {description}
        </p>
                <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.label}
              className={`rounded-2xl border p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1 ${styles.stat}`}
            >
              <div className={`text-2xl font-bold ${styles.statValue}`}>
                {item.value}
              </div>

              <div className="mt-1 text-sm text-slate-500">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <Link
          href={href}
          className={`group mt-10 inline-flex items-center rounded-full bg-gradient-to-r px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${styles.button}`}
        >
          {buttonText}

          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>

        <p className="mt-6 text-sm text-slate-500">
          {footerText}
        </p>
      </div>
    </div>
  );
}
