import { Mail } from "lucide-react";
import Badge from "../components/ui/Badge.jsx";
import Button from "../components/ui/Button.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";

function ContactPage() {
  return (
    <main className="px-5 py-16 lg:px-8">
      <section className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <Badge variant="cyan">Contacto</Badge>
          <SectionHeader
            title="Hablemos de proyectos, colaboración y oportunidades"
            description="Esta sección centralizará vías de contacto, CV y perfiles profesionales en próximas fases."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="primary" icon={Mail}>
              Contactar
            </Button>
            <Button variant="secondary">Descargar CV</Button>
          </div>
        </div>
        <article className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6">
          <h2 className="text-xl font-semibold text-white">
            Perfil disponible
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            Bloque preparado para enlaces profesionales, email y futuras vías
            de contacto.
          </p>
        </article>
      </section>
    </main>
  );
}

export default ContactPage;
