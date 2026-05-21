import { BookOpen, Search } from "lucide-react";
import Badge from "../components/ui/Badge.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";

const posts = [
  "Cómo estructuro mis proyectos Full Stack",
  "Buenas prácticas con React y componentes reutilizables",
  "Diseño UI en Figma: de la idea al componente",
];

function BlogPage() {
  return (
    <main className="px-5 py-16 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <Badge variant="violet">Blog</Badge>
            <SectionHeader
              title="Notas técnicas sobre desarrollo, diseño y producto"
              description="Un espacio para explicar decisiones, aprendizajes y procesos de construcción de software."
            />
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm text-slate-500 lg:w-80">
            <Search size={16} />
            <span>Buscar artículos...</span>
          </div>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post}
              className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-5"
            >
              <div className="grid h-32 place-items-center rounded-xl bg-[radial-gradient(circle_at_30%_30%,rgba(167,139,250,0.24),transparent_34%),#111827] text-cyan-300">
                <BookOpen size={30} />
              </div>
              <h2 className="mt-5 text-lg font-semibold text-white">{post}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Artículo placeholder preparado para la fase de blog con datos.
              </p>
              <p className="mt-4 text-xs text-slate-500">Lectura · 6 min</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default BlogPage;
