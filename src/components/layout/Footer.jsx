import { Code, Mail, Network } from "lucide-react";
import { Link } from "react-router";

const footerLinks = [
  { label: "Proyectos", to: "/projects" },
  { label: "Blog", to: "/blog" },
  { label: "Contacto", to: "/contact" },
];

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#081020]">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1fr_auto] lg:px-8 lg:py-12">
        <div className="max-w-xl">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-cyan-300/30 bg-slate-900 text-lg font-black text-cyan-300 shadow-lg shadow-cyan-950/30">
              A
            </span>
            <p className="font-semibold text-white">Alba Full Stack Portfolio</p>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-400">
            Portfolio profesional y blog técnico sobre frontend, backend,
            producto digital, diseño UI y aprendizaje Full Stack.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <div className="flex flex-wrap gap-4 text-sm text-slate-300">
            {footerLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="rounded-lg transition hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/70 focus:ring-offset-2 focus:ring-offset-[#081020]"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex gap-2 text-slate-400">
            {[Mail, Code, Network].map((Icon, index) => (
              <span
                key={index}
                className="grid h-9 w-9 place-items-center rounded-lg border border-slate-700 bg-slate-900/70 shadow-lg shadow-slate-950/20"
              >
                <Icon size={16} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
