import { Outlet } from "react-router";
import { useAuth } from "../../context/AuthContext.jsx";
import AdminSidebar from "./AdminSidebar.jsx";

function AdminLayout() {
  const { user } = useAuth();

  return (
    <main className="px-5 py-8 lg:px-8 lg:py-10">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[280px_1fr]">
        <AdminSidebar />
        <section className="min-w-0">
          <div className="mb-6 rounded-3xl border border-slate-700/70 bg-slate-900/60 px-5 py-4 shadow-xl shadow-slate-950/20 sm:px-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  Administración
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  Sesión demo activa: {user?.email}
                </p>
              </div>
              <div className="w-fit rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1.5 text-xs font-semibold text-slate-300">
                Modo local
              </div>
            </div>
          </div>
          <Outlet />
        </section>
      </div>
    </main>
  );
}

export default AdminLayout;
