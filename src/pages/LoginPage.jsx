import { useState } from "react";
import { LockKeyhole, LogIn, ShieldCheck } from "lucide-react";
import { Navigate, useLocation, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext.jsx";
import Badge from "../components/ui/Badge.jsx";

const isValidEmail = (value) => /\S+@\S+\.\S+/.test(value);

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { isAuthenticated, login } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const redirectTo = location.state?.from?.pathname ?? "/admin";

  if (isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isValidEmail(email)) {
      setError("Introduce un email válido para el acceso demo.");
      return;
    }

    if (!password.trim()) {
      setError("Introduce una contraseña para continuar.");
      return;
    }

    login({ email: email.trim() });
    navigate(redirectTo, { replace: true });
  };

  return (
    <main className="px-5 py-14 lg:px-8 lg:py-16">
      <section className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <Badge variant="cyan">Acceso demo local</Badge>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Acceso privado del portfolio
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
            Esta autenticación es simulada y funciona solo en frontend. Sirve
            para preparar rutas protegidas antes de implementar el panel de
            gestión de artículos y categorías.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4 text-sm text-cyan-100">
              <ShieldCheck size={20} />
              <p className="mt-3 leading-6">
                La sesión se guarda en localStorage sin contraseñas ni datos
                sensibles.
              </p>
            </div>
            <div className="rounded-2xl border border-violet-300/20 bg-violet-300/10 p-4 text-sm text-violet-100">
              <LockKeyhole size={20} />
              <p className="mt-3 leading-6">
                Usa un email ficticio válido y cualquier contraseña no vacía.
              </p>
            </div>
          </div>
        </div>

        <form
          className="rounded-3xl border border-slate-700/70 bg-slate-900/75 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur sm:p-8"
          onSubmit={handleSubmit}
        >
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Entrar al panel
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Credenciales demo sugeridas: demo@portfolio.dev
            </p>
          </div>

          <div className="mt-7 space-y-5">
            <label className="block">
              <span className="text-sm font-medium text-slate-200">Email</span>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="demo@portfolio.dev"
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70 focus:ring-2 focus:ring-cyan-300/20"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-200">
                Contraseña
              </span>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Contraseña demo"
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70 focus:ring-2 focus:ring-cyan-300/20"
              />
            </label>
          </div>

          {error ? (
            <p className="mt-5 rounded-2xl border border-pink-300/20 bg-pink-300/10 px-4 py-3 text-sm text-pink-100">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 text-sm font-semibold text-[#081020] shadow-lg shadow-cyan-950/30 transition hover:-translate-y-0.5 hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-[#081020]"
          >
            Entrar al panel
            <LogIn size={16} />
          </button>
        </form>
      </section>
    </main>
  );
}

export default LoginPage;
