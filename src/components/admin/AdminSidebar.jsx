import { BarChart3, FolderOpen, Home, LogOut, Newspaper } from "lucide-react";
import { NavLink, useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext.jsx";

const adminNavigation = [
  { label: "Resumen", to: "/admin", icon: BarChart3, end: true },
  { label: "Artículos", to: "/admin/posts", icon: Newspaper },
  { label: "Categorías", to: "/admin/categories", icon: FolderOpen },
];

function AdminSidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  const getLinkClassName = ({ isActive }) =>
    [
      "flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-cyan-300/70 focus:ring-offset-2 focus:ring-offset-[#081020]",
      isActive
        ? "border border-cyan-300/30 bg-cyan-300/10 text-cyan-200 shadow-lg shadow-cyan-950/20"
        : "border border-transparent text-slate-400 hover:border-slate-700 hover:bg-slate-950/50 hover:text-white",
    ].join(" ");

  return (
    <aside className="rounded-3xl border border-slate-700/70 bg-slate-900/75 p-4 shadow-2xl shadow-slate-950/25 lg:sticky lg:top-24 lg:h-[calc(100vh-7rem)]">
      <div className="mb-5 border-b border-slate-800 pb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
          Alba Admin
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          Panel privado del portfolio
        </p>
      </div>

      <nav className="grid gap-2">
        {adminNavigation.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={getLinkClassName}
            >
              <Icon size={18} />
              {item.label}
            </NavLink>
          );
        })}
      </nav>

      <div className="mt-6 border-t border-slate-800 pt-5 lg:absolute lg:inset-x-4 lg:bottom-4">
        <NavLink to="/" className={getLinkClassName}>
          <Home size={18} />
          Volver al portfolio
        </NavLink>
        <button
          type="button"
          onClick={handleLogout}
          className="mt-2 flex w-full items-center gap-3 rounded-xl border border-transparent px-3.5 py-3 text-left text-sm font-semibold text-slate-400 transition hover:border-pink-300/30 hover:bg-pink-300/10 hover:text-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-300/70 focus:ring-offset-2 focus:ring-offset-[#081020]"
        >
          <LogOut size={18} />
          Cerrar sesión
        </button>
      </div>
    </aside>
  );
}

export default AdminSidebar;
