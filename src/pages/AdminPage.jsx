import { FileText, FolderOpen, LogOut, Settings } from "lucide-react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext.jsx";
import Badge from "../components/ui/Badge.jsx";

const adminCards = [
  {
    title: "Artículos",
    description: "Preparado para gestionar posts del blog en una fase posterior.",
    icon: FileText,
  },
  {
    title: "Categorías",
    description: "Espacio reservado para clasificar y mantener categorías.",
    icon: FolderOpen,
  },
  {
    title: "Configuración",
    description: "Base privada para futuras opciones del panel.",
    icon: Settings,
  },
];

function AdminPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <main className="px-5 py-14 lg:px-8 lg:py-16">
      <section className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 rounded-3xl border border-slate-700/70 bg-slate-900/75 p-6 shadow-2xl shadow-slate-950/30 sm:p-8 lg:flex-row lg:items-end">
          <div>
            <Badge variant="cyan">Área privada</Badge>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Panel privado
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
              Base protegida del portfolio. El CRUD de posts y categorías se
              implementará en fases posteriores.
            </p>
            <p className="mt-4 text-sm text-slate-500">
              Sesión demo activa: {user?.email}
            </p>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-violet-400/40 bg-slate-950/50 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-cyan-300/60 hover:bg-slate-900/70 hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-[#081020]"
          >
            Cerrar sesión
            <LogOut size={16} />
          </button>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {adminCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/20"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
                  <Icon size={22} />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-white">
                  {card.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {card.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default AdminPage;
