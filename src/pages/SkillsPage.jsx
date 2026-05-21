import { Code, Database, Palette, Server } from "lucide-react";
import Badge from "../components/ui/Badge.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";

const skillGroups = [
  { title: "Frontend", text: "React, JavaScript, Tailwind CSS y UI responsive.", icon: Code },
  { title: "Backend", text: "APIs, datos, lógica de servidor y estructura Full Stack.", icon: Server },
  { title: "Datos", text: "Modelado básico, consumo de API y gestión de estados.", icon: Database },
  { title: "Diseño UI", text: "Figma, jerarquía visual, componentes y criterio de producto.", icon: Palette },
];

function SkillsPage() {
  return (
    <main className="px-5 py-16 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <Badge variant="violet">Habilidades</Badge>
        <SectionHeader
          title="Stack técnico con foco en producto"
          description="Una visión equilibrada entre implementación, estructura, diseño y comunicación técnica."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article
                key={group.title}
                className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6"
              >
                <Icon size={26} className="text-cyan-300" />
                <h2 className="mt-5 text-xl font-semibold text-white">
                  {group.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {group.text}
                </p>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default SkillsPage;
