import { FilePenLine, Filter, Plus, Trash2 } from "lucide-react";
import Badge from "../components/ui/Badge.jsx";

const plannedCapabilities = [
  { label: "Crear artículo", icon: Plus },
  { label: "Editar artículo", icon: FilePenLine },
  { label: "Eliminar artículo", icon: Trash2 },
  { label: "Filtrar por categoría", icon: Filter },
];

function ManagePostsPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-slate-700/70 bg-slate-900/75 p-6 shadow-2xl shadow-slate-950/30 sm:p-8">
        <Badge variant="violet">Artículos</Badge>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Gestión de artículos
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
          Placeholder privado para preparar la futura administración de posts
          del blog técnico.
        </p>
      </section>

      <section className="rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-6 shadow-xl shadow-cyan-950/10 sm:p-8">
        <h2 className="text-2xl font-semibold text-white">
          CRUD pendiente de implementación
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-cyan-100">
          Esta vista define la base visual. La creación, edición, eliminación y
          lectura administrativa se conectarán a los servicios API en una fase
          posterior.
        </p>
      </section>

      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {plannedCapabilities.map((capability) => {
          const Icon = capability.icon;

          return (
            <article
              key={capability.label}
              className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-5 shadow-xl shadow-slate-950/20"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl border border-violet-300/30 bg-violet-300/10 text-violet-200">
                <Icon size={20} />
              </div>
              <h2 className="mt-5 text-lg font-semibold text-white">
                {capability.label}
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Capacidad prevista para la fase CRUD.
              </p>
            </article>
          );
        })}
      </section>
    </div>
  );
}

export default ManagePostsPage;
