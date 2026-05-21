import Badge from "../ui/Badge.jsx";

function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/70 shadow-xl shadow-slate-950/30 transition hover:-translate-y-1 hover:border-cyan-300/40">
      <div className={`h-40 ${project.imageStyle}`}>
        <div className="flex h-full items-end p-4">
          <Badge variant={project.featured ? "cyan" : "violet"}>
            {project.status}
          </Badge>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              {project.category}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-white">
              {project.title}
            </h3>
          </div>
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-700 bg-slate-950/60 px-3 py-1 text-xs text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <ul className="mt-5 space-y-2">
          {project.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex gap-2 text-xs leading-5 text-slate-400"
            >
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300"></span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ProjectCard;
