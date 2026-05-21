import {
  ArrowRight,
  BookOpen,
  Code,
  Database,
  Layers,
  Palette,
  PenTool,
  Network,
  Server,
} from "lucide-react";
import Badge from "../components/ui/Badge.jsx";
import Button from "../components/ui/Button.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";

const technologies = [
  { name: "React", icon: Code },
  { name: "JavaScript", icon: Code },
  { name: "Node.js", icon: Server },
  { name: "PostgreSQL", icon: Database },
  { name: "Tailwind CSS", icon: Layers },
  { name: "Figma", icon: PenTool },
  { name: "GitHub", icon: Network },
];

const focusAreas = [
  {
    title: "Frontend cuidado",
    description:
      "Interfaces limpias, responsivas y accesibles con React, Tailwind y criterio visual.",
    icon: Code,
  },
  {
    title: "Base Full Stack",
    description:
      "Comprensión de APIs, datos, lógica backend y flujos completos de producto.",
    icon: Server,
  },
  {
    title: "Diseño UI y Figma",
    description:
      "Sensibilidad por jerarquía, composición, sistemas visuales y experiencia de usuario.",
    icon: Palette,
  },
];

const featuredProjects = [
  {
    title: "Portfolio Full Stack",
    description: "Base profesional para proyectos, experiencia y blog técnico.",
    tags: ["React", "Tailwind", "Router"],
  },
  {
    title: "Blog técnico",
    description: "Espacio editorial para explicar decisiones, aprendizajes y arquitectura.",
    tags: ["UI", "Contenido", "Frontend"],
  },
  {
    title: "Panel administrable",
    description: "Área prevista para gestionar artículos y categorías en próximas fases.",
    tags: ["Admin", "CRUD", "API"],
  },
];

function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden px-5 py-16 lg:px-8 lg:py-24">
        <div className="absolute left-1/2 top-20 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl"></div>
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Badge variant="pink">Desarrolladora Full Stack</Badge>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              Hola, soy Alba. Construyo productos web con sensibilidad por el{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300 bg-clip-text text-transparent">
                diseño.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Portfolio profesional y blog técnico donde conecto frontend,
              backend, experiencia de usuario y criterio visual para crear
              interfaces limpias, funcionales y escalables.
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

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-8 rounded-full border border-cyan-300/25 shadow-[0_0_80px_rgba(34,211,238,0.22)]"></div>
            <div className="absolute -right-2 top-12 rounded-2xl border border-violet-300/30 bg-slate-950/80 p-4 text-violet-200 shadow-xl shadow-violet-950/30">
              <Code size={28} />
            </div>
            <div className="absolute -left-3 top-28 rounded-2xl border border-cyan-300/30 bg-slate-950/80 p-4 text-cyan-200 shadow-xl shadow-cyan-950/30">
              <PenTool size={28} />
            </div>
            <div className="absolute bottom-16 right-4 rounded-2xl border border-pink-300/30 bg-slate-950/80 p-4 text-pink-200 shadow-xl shadow-pink-950/30">
              <Database size={28} />
            </div>
            <div className="relative rounded-[2rem] border border-slate-700/80 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20 backdrop-blur">
              <div className="rounded-[1.5rem] border border-cyan-300/20 bg-gradient-to-br from-slate-950 via-slate-900 to-[#161E2E] p-8">
                <div className="grid aspect-[4/5] place-items-center rounded-[1.25rem] border border-slate-700 bg-[radial-gradient(circle_at_35%_25%,rgba(34,211,238,0.22),transparent_30%),radial-gradient(circle_at_70%_65%,rgba(251,113,133,0.22),transparent_32%),#0f172a]">
                  <div className="text-center">
                    <p className="text-7xl font-black tracking-tight text-white">
                      A
                    </p>
                    <p className="mt-3 text-sm font-medium text-cyan-200">
                      Frontend · Backend · UI
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Tecnologías y herramientas
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
            {technologies.map((technology) => {
              const Icon = technology.icon;

              return (
                <div
                  key={technology.name}
                  className="flex items-center gap-3 rounded-xl border border-slate-700/70 bg-slate-900/70 px-4 py-3 text-sm text-slate-300"
                >
                  <Icon size={18} className="text-cyan-300" />
                  <span>{technology.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Enfoque profesional"
            title="Una base Full Stack con criterio de producto"
            description="La interfaz debe comunicar capacidad técnica y sensibilidad visual desde el primer contacto."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {focusAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.title}
                  className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/30"
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

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <SectionHeader
              eyebrow="Portfolio"
              title="Proyectos destacados"
              description="Bloques iniciales para validar la estructura visual antes de conectar datos reales."
            />
            <Button to="/projects" variant="secondary" icon={ArrowRight}>
              Ver detalle
            </Button>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/70 shadow-xl shadow-slate-950/30 transition hover:-translate-y-1 hover:border-cyan-300/40"
              >
                <div className="h-36 bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.24),transparent_32%),radial-gradient(circle_at_70%_70%,rgba(167,139,250,0.22),transparent_34%),#111827]"></div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
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
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
