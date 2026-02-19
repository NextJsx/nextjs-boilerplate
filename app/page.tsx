const sidebarItems = [
  "Home",
  "Analytics",
  "Projects",
  "Messages",
  "Settings",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100 p-4 font-sans text-slate-900 dark:bg-slate-950 dark:text-slate-100 sm:p-6">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-6xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900 sm:min-h-[calc(100vh-3rem)]">
        <aside className="hidden w-64 flex-col border-r border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/70 md:flex">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              Home Preview
            </p>
            <h1 className="mt-2 text-2xl font-bold">Dashboard</h1>
          </div>

          <nav className="mt-10 space-y-2">
            {sidebarItems.map((item, index) => (
              <button
                key={item}
                type="button"
                className={`w-full rounded-lg px-4 py-2 text-left text-sm font-medium transition ${
                  index === 0
                    ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
                    : "text-slate-700 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-800"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="mt-auto rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
            You are viewing a static sidebar preview for the home page.
          </div>
        </aside>

        <main className="flex flex-1 flex-col p-6 sm:p-8">
          <header className="flex items-start justify-between gap-4 border-b border-slate-200 pb-6 dark:border-slate-800">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Overview</p>
              <h2 className="mt-1 text-3xl font-semibold">Welcome back</h2>
            </div>
            <button
              type="button"
              className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300"
            >
              New Project
            </button>
          </header>

          <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {["Total Users", "Active Projects", "Open Tasks"].map((metric, index) => (
              <article
                key={metric}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-800/60"
              >
                <p className="text-sm text-slate-500 dark:text-slate-400">{metric}</p>
                <p className="mt-2 text-2xl font-bold">{["12,430", "18", "47"][index]}</p>
              </article>
            ))}
          </section>

          <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-800/60">
            <h3 className="text-lg font-semibold">Recent activity</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <li>• Mia added a new design brief to Marketing Website.</li>
              <li>• You closed 3 tasks in Mobile App Sprint.</li>
              <li>• Team sync scheduled for Friday at 10:00 AM.</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}
