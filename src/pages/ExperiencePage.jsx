import { Briefcase } from "lucide-react";
import Badge from "../components/ui/Badge.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";

function ExperiencePage() {
  return (
    <main className="px-5 py-16 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <Badge variant="pink">Experiencia</Badge>
        <SectionHeader
          title="Experiencia y evolución profesional"
          description="Esta página recogerá experiencia, formación, hitos del bootcamp y evolución como desarrolladora Full Stack."
        />
        <article className="mt-10 rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6">
          <div className="grid h-12 w-12 place-items-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
            <Briefcase size={24} />
          </div>
          <h2 className="mt-5 text-xl font-semibold text-white">
            Línea temporal profesional
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
            Se añadirá una línea temporal clara con roles, aprendizaje,
            responsabilidades y resultados destacados.
          </p>
        </article>
      </section>
    </main>
  );
}

export default ExperiencePage;
