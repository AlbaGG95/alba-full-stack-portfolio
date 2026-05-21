import { Palette } from "lucide-react";
import Badge from "../components/ui/Badge.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";

function AboutPage() {
  return (
    <main className="px-5 py-16 lg:px-8">
      <section className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Badge variant="cyan">Sobre mí</Badge>
          <SectionHeader
            title="Desarrollo con visión técnica y sensibilidad visual"
            description="Alba combina aprendizaje Full Stack, pensamiento de producto y diseño de interfaces para construir experiencias web claras, cuidadas y funcionales."
          />
        </div>
        <article className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/30">
          <div className="grid h-12 w-12 place-items-center rounded-xl border border-pink-300/30 bg-pink-300/10 text-pink-200">
            <Palette size={24} />
          </div>
          <h2 className="mt-6 text-2xl font-semibold text-white">
            Perfil profesional en construcción
          </h2>
          <p className="mt-4 leading-7 text-slate-400">
            Esta sección presentará trayectoria, motivación, forma de trabajo y
            conexión entre frontend, backend, Figma y experiencia de usuario.
          </p>
        </article>
      </section>
    </main>
  );
}

export default AboutPage;
