const accentClasses = {
  cyan: "border-cyan-300/30 bg-cyan-300/10 text-cyan-200",
  violet: "border-violet-300/30 bg-violet-300/10 text-violet-200",
  pink: "border-pink-300/30 bg-pink-300/10 text-pink-200",
};

function SkillCard({ group, icon: Icon }) {
  return (
    <article className="h-full rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/20 transition duration-200 hover:-translate-y-1 hover:border-cyan-300/30">
      <div
        className={`grid h-12 w-12 place-items-center rounded-xl border ${accentClasses[group.accent]}`}
      >
        <Icon size={24} />
      </div>
      <h2 className="mt-5 text-xl font-semibold text-white">
        {group.category}
      </h2>
      <p className="mt-3 text-sm leading-6 text-slate-400">
        {group.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-slate-700 bg-slate-950/60 px-3 py-1 text-xs text-slate-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}

export default SkillCard;
