import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router";

const navigationItems = [
  { label: "Inicio", to: "/" },
  { label: "Sobre mí", to: "/about" },
  { label: "Habilidades", to: "/skills" },
  { label: "Proyectos", to: "/projects" },
  { label: "Experiencia", to: "/experience" },
  { label: "Blog", to: "/blog" },
  { label: "Contacto", to: "/contact" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getLinkClassName = ({ isActive }) =>
    [
      "relative rounded-full px-3 py-2 text-sm font-medium transition",
      isActive
        ? "text-cyan-300 after:absolute after:inset-x-3 after:-bottom-1 after:h-px after:bg-cyan-300"
        : "text-slate-300 hover:text-white",
    ].join(" ");

  return (
    <header className="sticky top-0 z-50 border-b border-slate-700/50 bg-[#081020]/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <NavLink
          to="/"
          className="flex items-center gap-3"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-cyan-300/30 bg-slate-900/80 text-lg font-black text-cyan-300 shadow-lg shadow-cyan-950/40">
            A
          </span>
          <span className="text-sm font-semibold tracking-tight text-white sm:text-base">
            Alba Full Stack Portfolio
          </span>
        </NavLink>

        <div className="hidden items-center gap-2 lg:flex">
          {navigationItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={getLinkClassName}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="rounded-full border border-slate-700 bg-slate-950/70 p-1 text-xs font-semibold">
            <span className="rounded-full bg-cyan-300 px-2 py-1 text-[#081020]">
              ES
            </span>
            <span className="px-2 py-1 text-slate-400">EN</span>
          </div>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-xl border border-slate-700 bg-slate-900/80 text-slate-100 transition hover:border-cyan-300/60 hover:text-cyan-300 lg:hidden"
          aria-label={isMenuOpen ? "Cerrar navegación" : "Abrir navegación"}
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isMenuOpen ? (
        <div className="border-t border-slate-800 bg-[#081020]/95 px-5 pb-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 pt-3">
            {navigationItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={getLinkClassName}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <div className="mt-3 w-fit rounded-full border border-slate-700 bg-slate-950/70 p-1 text-xs font-semibold">
              <span className="rounded-full bg-cyan-300 px-2 py-1 text-[#081020]">
                ES
              </span>
              <span className="px-2 py-1 text-slate-400">EN</span>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Header;
