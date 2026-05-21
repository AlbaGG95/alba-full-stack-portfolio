import { FileText, Mail, Network, Send } from "lucide-react";
import Badge from "../components/ui/Badge.jsx";
import Button from "../components/ui/Button.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import { profile } from "../data/profile.js";

const contactIcons = {
  Email: Mail,
  CV: FileText,
  GitHub: Network,
  LinkedIn: Send,
};

function ContactPage() {
  return (
    <main className="px-5 py-14 lg:px-8 lg:py-16">
      <section className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <Badge variant="cyan">Contacto</Badge>
          <SectionHeader
            title="Hablemos de proyectos, colaboración y oportunidades"
            description={profile.contactIntro}
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="primary" icon={Mail}>
              Contactar
            </Button>
            <Button variant="secondary" icon={FileText}>
              Descargar CV
            </Button>
          </div>
        </div>
        <article className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/20 lg:p-7">
          <h2 className="text-xl font-semibold text-white">
            Canales profesionales
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            Accesos visuales preparados para conectar email, CV y perfiles
            profesionales cuando existan URLs definitivas.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {profile.contactOptions.map((option) => {
              const Icon = contactIcons[option.label] ?? Mail;

              return (
                <div
                  key={option.label}
                  className="rounded-xl border border-slate-700 bg-slate-950/50 p-4 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-300/30"
                >
                  <Icon size={20} className="text-cyan-300" />
                  <p className="mt-3 font-semibold text-white">
                    {option.label}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    {option.value}
                  </p>
                </div>
              );
            })}
          </div>
        </article>
      </section>
    </main>
  );
}

export default ContactPage;
