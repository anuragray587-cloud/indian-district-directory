export function HeroChips() {
  const chips = [
    " Bihar",
    " Maharashtra",
    " Uttar Pradesh",
    " Delhi",
    " Karnataka",
    " Tamil Nadu",
  ];

  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {chips.map((chip) => (
        <button
          key={chip}
          className="rounded-full border border-slate-200 bg-white/90 px-5 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700 hover:shadow-md" 
        >
          {chip}
        </button>
      ))}
    </div>
  );
}
