export function HeroStats() {
  return (
    <div className="absolute -bottom-10 left-1/2 w-[290px] -translate-x-1/2 rounded-[28px] border border-white/70 bg-white/90 p-5 shadow-[0_25px_70px_rgba(15,23,42,0.18)] backdrop-blur-xl lg:w-[340px]">

      <div className="grid grid-cols-2 gap-5">

        <div>
          <p className="text-2xl font-extrabold text-slate-900">785+</p>
          <p className="text-xs font-medium text-slate-600">
            Districts
          </p>
        </div>

        <div>
          <p className="text-2xl font-extrabold text-slate-900">28</p>
          <p className="text-xs font-medium text-slate-600">
            States
          </p>
        </div>

        <div>
          <p className="text-2xl font-extrabold text-slate-900">8</p>
          <p className="text-xs font-medium text-slate-600">
            Union Territories
          </p>
        </div>

        <div>
          <p className="text-2xl font-extrabold text-slate-900">1.4B+</p>
          <p className="text-xs font-medium text-slate-600">
            Population
          </p>
        </div>

      </div>

    </div>
  );
}
