import { Search } from "lucide-react";
import Badge from "../components/ui/Badge.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";

const projects = ["Portfolio profesional", "Blog técnico", "Panel administrable"];

function ProjectsPage() {
  return (
    <main className="px-5 py-16 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <Badge variant="cyan">Proyectos</Badge>
            <SectionHeader
              title="Proyectos con enfoque Full Stack"
              description="Próximamente se mostrarán proyectos con contexto, tecnologías, decisiones técnicas y resultado visual."
            />
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm text-slate-500 lg:w-80">
            <Search size={16} />
            <span>Buscar proyectos...</span>
          </div>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project}
              className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-5"
            >
              <div className="mb-5 h-32 rounded-xl bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.24),transparent_34%),#111827]"></div>
              <h2 className="text-lg font-semibold text-white">{project}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Card placeholder preparada para contenido real en una fase
                posterior.
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default ProjectsPage;
