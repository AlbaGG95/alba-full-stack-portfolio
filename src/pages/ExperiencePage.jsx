import ExperienceItem from "../components/portfolio/ExperienceItem.jsx";
import Badge from "../components/ui/Badge.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import { experienceItems } from "../data/experience.js";

function ExperiencePage() {
  return (
    <main className="px-5 py-16 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <Badge variant="pink">Experiencia</Badge>
        <SectionHeader
          title="Experiencia, formación y evolución técnica"
          description="Una línea de aprendizaje aplicada a proyectos, diseño de interfaces, fundamentos backend y flujo profesional con Git."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {experienceItems.map((item) => (
            <ExperienceItem key={item.title} item={item} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default ExperiencePage;
