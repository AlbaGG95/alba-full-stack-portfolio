import {
  ArrowRight,
  BookOpen,
  Code,
  Layers,
  Network,
  Palette,
  PenTool,
  Server,
} from "lucide-react";
import ProfileVisual from "../components/portfolio/ProfileVisual.jsx";
import ProjectCard from "../components/portfolio/ProjectCard.jsx";
import Badge from "../components/ui/Badge.jsx";
import Button from "../components/ui/Button.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import { profile } from "../data/profile.js";
import { projects } from "../data/projects.js";
import { featuredTechnologies } from "../data/skills.js";

const technologyIcons = {
  React: Code,
  JavaScript: Code,
  "Node.js": Server,
  "APIs REST": Network,
  "Tailwind CSS": Layers,
  Figma: PenTool,
  GitHub: Network,
};

const focusIcons = [Code, Server, Palette];

function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <main>
      <section className="relative overflow-hidden px-5 py-14 sm:py-16 lg:px-8 lg:py-20">
        <div className="absolute left-1/2 top-16 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl"></div>
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-14">
          <div className="max-w-3xl">
            <Badge variant="pink">{profile.role}</Badge>
            <h1 className="mt-6 text-[2.45rem] font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.04]">
              Hola, soy {profile.name}. {profile.headline.split("diseño.")[0]}
              <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300 bg-clip-text text-transparent">
                diseño.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              {profile.summary}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/projects" icon={ArrowRight}>
                Ver proyectos
              </Button>
              <Button to="/blog" variant="secondary" icon={BookOpen}>
                Leer blog
              </Button>
            </div>
          </div>

          <ProfileVisual />
        </div>
      </section>

      <section className="px-5 pb-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Tecnologías y herramientas
          </p>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-7">
            {featuredTechnologies.map((technology) => {
              const Icon = technologyIcons[technology] ?? Code;

              return (
                <div
                  key={technology}
                  className="flex items-center gap-3 rounded-xl border border-slate-700/70 bg-slate-900/70 px-4 py-3 text-sm text-slate-300 shadow-lg shadow-slate-950/15 transition hover:border-cyan-300/30 hover:text-white"
                >
                  <Icon size={18} className="text-cyan-300" />
                  <span>{technology}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Enfoque profesional"
            title="Una base Full Stack con criterio de producto"
            description="La interfaz comunica capacidad técnica, sensibilidad visual y una forma de trabajo orientada a construir productos claros."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {profile.focusAreas.map((area, index) => {
              const Icon = focusIcons[index] ?? Code;

              return (
                <article
                  key={area.title}
                  className="h-full rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/30 transition duration-200 hover:-translate-y-1 hover:border-cyan-300/30"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {area.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <SectionHeader
              eyebrow="Portfolio"
              title="Proyectos destacados"
              description="Selección inicial de proyectos locales que muestran frontend, Full Stack, UI y estructura de producto."
            />
            <Button to="/projects" variant="secondary" icon={ArrowRight}>
              Ver detalle
            </Button>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
