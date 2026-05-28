import { CheckCircle2, FileText, FolderOpen, ListTodo, RadioTower } from "lucide-react";
import AdminStatCard from "../components/admin/AdminStatCard.jsx";
import Badge from "../components/ui/Badge.jsx";

const stats = [
  {
    title: "Artículos",
    value: "Próximo",
    description: "La gestión completa se conectará al servicio de posts en otra fase.",
    icon: FileText,
    accent: "cyan",
  },
  {
    title: "Categorías",
    value: "Próximo",
    description: "Estructura preparada para clasificar artículos técnicos.",
    icon: FolderOpen,
    accent: "violet",
  },
  {
    title: "Estado del blog",
    value: "Lectura",
    description: "El blog público ya puede leer desde API con fallback local.",
    icon: RadioTower,
    accent: "pink",
  },
  {
    title: "Próximas tareas",
    value: "3",
    description: "CRUD, validaciones y revisión de estados de API.",
    icon: ListTodo,
    accent: "cyan",
  },
];

const recentActivity = [
  "Autenticación frontend simulada creada.",
  "Ruta privada /admin protegida.",
  "Base visual del panel preparada para futuras gestiones.",
];

const nextSteps = [
  "Conectar CRUD de artículos.",
  "Conectar CRUD de categorías.",
  "Revisar estados de API.",
];

function AdminPage() {
  return (
    <div className="space-y-6">
      <section className="overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-900/75 p-6 shadow-2xl shadow-slate-950/30 sm:p-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <Badge variant="cyan">Área privada</Badge>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Panel privado
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
              Área de administración del portfolio para preparar la gestión de
              artículos y categorías del blog técnico.
            </p>
          </div>
          <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-5 py-4 text-sm leading-6 text-cyan-100">
            Base estructural lista. Sin CRUD real en esta fase.
          </div>
        </div>
      </section>

      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <AdminStatCard key={stat.title} {...stat} />
        ))}
      </section>

      <section className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
        <article className="rounded-3xl border border-slate-700/70 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/20">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-xl border border-violet-300/30 bg-violet-300/10 text-violet-200">
              <CheckCircle2 size={21} />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">
                Actividad reciente
              </h2>
              <p className="text-sm text-slate-500">Datos estáticos seguros</p>
            </div>
          </div>
          <div className="mt-6 space-y-3">
            {recentActivity.map((activity) => (
              <div
                key={activity}
                className="rounded-2xl border border-slate-800 bg-slate-950/40 px-4 py-3 text-sm leading-6 text-slate-300"
              >
                {activity}
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-3xl border border-slate-700/70 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/20">
          <div>
            <h2 className="text-xl font-semibold text-white">
              Siguientes pasos
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Orden recomendado para avanzar sin mezclar fases.
            </p>
          </div>
          <div className="mt-6 grid gap-3">
            {nextSteps.map((step, index) => (
              <div
                key={step}
                className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950/40 px-4 py-3"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full bg-cyan-300 text-sm font-bold text-[#081020]">
                  {index + 1}
                </span>
                <span className="text-sm font-medium text-slate-200">{step}</span>
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}

export default AdminPage;
