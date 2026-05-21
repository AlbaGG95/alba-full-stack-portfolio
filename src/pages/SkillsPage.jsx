import { Code, Database, GitBranch, Palette, Server } from "lucide-react";
import SkillCard from "../components/portfolio/SkillCard.jsx";
import Badge from "../components/ui/Badge.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import { skillGroups } from "../data/skills.js";

const skillIcons = {
  Frontend: Code,
  Backend: Server,
  Tools: GitBranch,
  Design: Palette,
  "Soft skills": Database,
};

function SkillsPage() {
  return (
    <main className="px-5 py-16 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <Badge variant="violet">Habilidades</Badge>
        <SectionHeader
          title="Stack técnico con foco en producto"
          description="Una visión equilibrada entre implementación, estructura, diseño, herramientas y colaboración."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <SkillCard
              key={group.category}
              group={group}
              icon={skillIcons[group.category] ?? Code}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default SkillsPage;
