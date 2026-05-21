function App() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-12 text-zinc-50">
      <section className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-4xl flex-col justify-center gap-8">
        <div className="space-y-4">
          <p className="text-sm font-medium uppercase tracking-wider text-cyan-300">
            React + Vite + Tailwind CSS
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            Alba Full Stack Portfolio
          </h1>
          <p className="max-w-2xl text-lg text-zinc-300">
            Professional portfolio and technical blog
          </p>
        </div>

        <div className="grid max-w-xl grid-cols-[auto_1fr] items-center gap-4 rounded-lg border border-cyan-300/30 bg-zinc-900 p-5 shadow-xl shadow-cyan-950/30">
          <div className="h-12 w-12 rounded-md bg-cyan-300"></div>
          <div>
            <p className="font-medium text-zinc-100">Tailwind is ready</p>
            <p className="text-sm text-zinc-400">
              Clean frontend base for the portfolio project.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
