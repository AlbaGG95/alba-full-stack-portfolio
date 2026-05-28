import { FileText, FilePenLine, Plus, Trash2 } from "lucide-react";
import Badge from "../components/ui/Badge.jsx";

const plannedCapabilities = [
  { label: "Crear categoría", icon: Plus },
  { label: "Editar categoría", icon: FilePenLine },
  { label: "Eliminar categoría", icon: Trash2 },
  { label: "Asociar artículos", icon: FileText },
];

function ManageCategoriesPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-slate-700/70 bg-slate-900/75 p-6 shadow-2xl shadow-slate-950/30 sm:p-8">
        <Badge variant="pink">Categorías</Badge>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Gestión de categorías
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
          Placeholder privado para preparar la futura organización editorial de
          los artículos del blog.
        </p>
      </section>

      <section className="rounded-3xl border border-pink-300/20 bg-pink-300/10 p-6 shadow-xl shadow-pink-950/10 sm:p-8">
        <h2 className="text-2xl font-semibold text-white">
          CRUD pendiente de implementación
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-pink-100">
          Esta vista solo prepara la estructura visual. La gestión real de
          categorías se conectará a la capa API cuando corresponda.
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
              <div className="grid h-11 w-11 place-items-center rounded-xl border border-pink-300/30 bg-pink-300/10 text-pink-200">
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

export default ManageCategoriesPage;
