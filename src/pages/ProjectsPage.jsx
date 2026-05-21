import { Search } from "lucide-react";
import ProjectCard from "../components/portfolio/ProjectCard.jsx";
import Badge from "../components/ui/Badge.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import { projects } from "../data/projects.js";

const categories = ["Todos", "Portfolio", "Frontend", "Full Stack"];

function ProjectsPage() {
  return (
    <main className="px-5 py-16 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <Badge variant="cyan">Proyectos</Badge>
            <SectionHeader
              title="Proyectos con enfoque Full Stack"
              description="Selección local de proyectos que combinan estructura frontend, criterio visual, diseño UI y fundamentos backend."
            />
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm text-slate-500 lg:w-80">
            <Search size={16} />
            <span>Buscar proyectos...</span>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <span
              key={category}
              className={`rounded-full border px-3 py-1 text-xs font-semibold ${
                index === 0
                  ? "border-cyan-300 bg-cyan-300 text-[#081020]"
                  : "border-slate-700 bg-slate-950/60 text-slate-300"
              }`}
            >
              {category}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default ProjectsPage;
