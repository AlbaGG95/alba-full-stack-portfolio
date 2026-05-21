function ExperienceItem({ item }) {
  return (
    <article className="relative h-full rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/20 transition duration-200 hover:-translate-y-1 hover:border-cyan-300/30">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
            {item.type}
          </p>
          <h2 className="mt-2 text-xl font-semibold text-white">
            {item.title}
          </h2>
        </div>
        <span className="w-fit rounded-full border border-violet-300/30 bg-violet-300/10 px-3 py-1 text-xs font-semibold text-violet-200">
          {item.period}
        </span>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-400">
        {item.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {item.highlights.map((highlight) => (
          <span
            key={highlight}
            className="rounded-full border border-slate-700 bg-slate-950/60 px-3 py-1 text-xs text-slate-300"
          >
            {highlight}
          </span>
        ))}
      </div>
    </article>
  );
}

export default ExperienceItem;
