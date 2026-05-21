import { Code, Layers, Palette } from "lucide-react";
import Badge from "../components/ui/Badge.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import { profile } from "../data/profile.js";

const profileHighlights = [
  { label: "Frontend", value: "React, JavaScript y UI responsive", icon: Code },
  { label: "Full Stack", value: "APIs, datos y lógica de aplicación", icon: Layers },
  { label: "Diseño", value: "Figma, jerarquía visual y producto", icon: Palette },
];

function AboutPage() {
  return (
    <main className="px-5 py-14 lg:px-8 lg:py-16">
      <section className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Badge variant="cyan">Sobre mí</Badge>
          <SectionHeader
            title="Desarrollo con visión técnica y sensibilidad visual"
            description="Un perfil en evolución que conecta implementación, diseño, comunicación y pensamiento de producto."
          />
        </div>
        <article className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/30 lg:p-7">
          <div className="grid h-12 w-12 place-items-center rounded-xl border border-pink-300/30 bg-pink-300/10 text-pink-200">
            <Palette size={24} />
          </div>
          <h2 className="mt-6 text-2xl font-semibold text-white">
            {profile.role} en formación avanzada
          </h2>
          <div className="mt-4 space-y-4 leading-7 text-slate-400">
            {profile.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      </section>

      <section className="mx-auto mt-10 grid max-w-7xl gap-5 md:grid-cols-3">
        {profileHighlights.map((highlight) => {
          const Icon = highlight.icon;

          return (
            <article
              key={highlight.label}
              className="h-full rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/20 transition duration-200 hover:-translate-y-1 hover:border-cyan-300/30"
            >
              <Icon size={24} className="text-cyan-300" />
              <h2 className="mt-5 text-lg font-semibold text-white">
                {highlight.label}
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {highlight.value}
              </p>
            </article>
          );
        })}
      </section>
    </main>
  );
}

export default AboutPage;
