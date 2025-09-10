import Link from "next/link";

export default function page() {
  return (
    <main className="min-h-screen bg-[#0f0f10] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FE7F26]/15 via-[#FE7F26]/5 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <span className="block h-2 w-2 rounded-full bg-[#FE7F26]" />
            BuildFlow — manage on-site work effortlessly
          </span>
          <h1 className="mt-6 text-4xl leading-tight font-semibold max-md:text-3xl md:text-6xl">
            Orchestrate Tasks. Empower Workers. Deliver Faster.
          </h1>
          <p className="mt-5 max-w-2xl text-white/70 text-lg">
            A focused dashboard to assign, track and resolve issues across your
            projects. Clear priorities, real-time status, and the right person on
            every task.
          </p>
          <div className="mt-8 flex gap-4 max-md:flex-col">
            <Link
              href="/dashboard/tasks"
              className="inline-flex items-center justify-center rounded-xl bg-[#FE7F26] px-5 py-3 font-medium text-[#141414] hover:opacity-90"
            >
              Get Started
            </Link>
            <Link
              href="/dashboard/problems"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10"
            >
              View Issues
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10"
            >
              Sign In
            </Link>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 h-9 w-9 rounded-lg bg-[#FE7F26]/20 flex items-center justify-center">
                <span className="h-2 w-2 rounded-full bg-[#FE7F26]" />
              </div>
              <h3 className="text-lg font-semibold">Prioritized Task Board</h3>
              <p className="mt-2 text-sm text-white/70">
                Kanban-style columns keep everything moving — Ready, Ongoing,
                Finished, and Problems.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 h-9 w-9 rounded-lg bg-[#FE7F26]/20 flex items-center justify-center">
                <span className="h-2 w-2 rounded-full bg-[#FE7F26]" />
              </div>
              <h3 className="text-lg font-semibold">Smart Assignments</h3>
              <p className="mt-2 text-sm text-white/70">
                Match tasks to available, best-fit workers in a click.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 h-9 w-9 rounded-lg bg-[#FE7F26]/20 flex items-center justify-center">
                <span className="h-2 w-2 rounded-full bg-[#FE7F26]" />
              </div>
              <h3 className="text-lg font-semibold">Real-time Updates</h3>
              <p className="mt-2 text-sm text-white/70">
                Stay on top of progress and unblock issues instantly.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#FE7F26]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#FE7F26]/10 blur-3xl" />
      </section>

      {/* How it works */}
      <section className="border-t border-white/10 bg-[#0c0c0d]">
        <div className="max-w-7xl mx-auto px-6 py-16 grid gap-8 md:grid-cols-3">
          <div>
            <h2 className="text-2xl font-semibold">How it works</h2>
            <p className="mt-3 text-white/70">
              Simple steps to keep your site organized and productive.
            </p>
          </div>
          <ol className="space-y-6 md:col-span-2">
            <li className="flex gap-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm">1</span>
              <div>
                <h3 className="font-medium">Create tasks with priorities</h3>
                <p className="text-sm text-white/70">Capture what needs doing and mark urgency.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm">2</span>
              <div>
                <h3 className="font-medium">Assign to the right workers</h3>
                <p className="text-sm text-white/70">Balance skill, availability, and workload.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm">3</span>
              <div>
                <h3 className="font-medium">Track and resolve problems</h3>
                <p className="text-sm text-white/70">Identify blockers early and keep momentum.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-semibold max-md:text-2xl">
            Ready to streamline your workflow?
          </h2>
          <p className="mt-3 text-white/70">
            Start with a clean board and add your first tasks in seconds.
          </p>
          <div className="mt-7 flex items-center justify-center gap-4 max-md:flex-col">
            <Link
              href="/dashboard/tasks"
              className="inline-flex items-center justify-center rounded-xl bg-[#FE7F26] px-6 py-3 font-medium text-[#141414] hover:opacity-90"
            >
              Go to Dashboard
            </Link>
            <Link
              href="/dashboard/employers"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white hover:bg-white/10"
            >
              Manage Workers
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} BuildFlow. All rights reserved.
      </footer>
    </main>
  );
}
