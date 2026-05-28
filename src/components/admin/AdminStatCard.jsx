function AdminStatCard({ title, value, description, icon: Icon, accent = "cyan" }) {
  const accents = {
    cyan: "border-cyan-300/30 bg-cyan-300/10 text-cyan-200",
    violet: "border-violet-300/30 bg-violet-300/10 text-violet-200",
    pink: "border-pink-300/30 bg-pink-300/10 text-pink-200",
  };

  return (
    <article className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-5 shadow-xl shadow-slate-950/20">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-400">{title}</p>
          <p className="mt-3 text-3xl font-semibold tracking-tight text-white">
            {value}
          </p>
        </div>
        <div
          className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl border ${accents[accent]}`}
        >
          <Icon size={20} />
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-400">{description}</p>
    </article>
  );
}

export default AdminStatCard;
