import SectionHeading from "../components/SectionHeading";

const metrics = [
  { label: "Avg. retention", value: "92%" },
  { label: "Personal plans launched", value: "310" },
  { label: "Cities served", value: "18" },
];

const programs = [
  {
    title: "Strength Lab",
    desc: "Periodized lifting templates with form coaching and video critiques.",
  },
  {
    title: "Conditioning Club",
    desc: "Hybrid cardio intervals with live data overlays and heart-rate cues.",
  },
  {
    title: "Reset Studio",
    desc: "Mobility + breathwork sequences to recover between pushes.",
  },
];

const trainers = [
  { name: "Rowan Lee", focus: "Olympic lifting", slots: "Tue • Thu" },
  { name: "Mina Patel", focus: "Mobility / Breathwork", slots: "Daily" },
  { name: "Kai Carter", focus: "Hybrid conditioning", slots: "Mon • Fri" },
];

const schedule = [
  { time: "06:30", className: "Power Circuit", duration: "45 min", coach: "Rowan" },
  { time: "09:00", className: "Mindful Mobility", duration: "30 min", coach: "Mina" },
  { time: "12:15", className: "Interval Run Club", duration: "40 min", coach: "Kai" },
  { time: "18:00", className: "Strength Lab Live", duration: "50 min", coach: "Rowan" },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <main id="main" className="px-6 py-16 space-y-24 max-w-6xl mx-auto">
        <header className="space-y-10">
          <nav className="flex items-center justify-between" aria-label="Primary">
            <div className="font-semibold text-xl">Horizon Fitness</div>
            <div className="flex items-center gap-3 text-sm">
              <a className="hidden md:inline-flex border border-slate-200 px-4 py-2 rounded-full focus-ring" href="/blueprint">
                View blueprint
              </a>
              <a className="inline-flex px-5 py-2 rounded-full bg-red-600 text-white focus-ring" href="#programs">
                Join now
              </a>
            </div>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="space-y-6">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-rose-500">
                Live + virtual training suite
              </p>
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                Intentional fitness journeys with thoughtful product design.
              </h1>
              <p className="text-lg text-slate-600">
                This case study shows how I translate strategy into high-fidelity UI, documentation, and handoff-ready specs for a hybrid fitness brand. Explore the blueprint route for wireframes, session flows, and grid rules.
              </p>
              <div className="flex flex-wrap gap-4">
                <a className="rounded-full bg-red-600 px-6 py-3 text-white font-medium focus-ring" href="/blueprint">
                  Explore the system
                </a>
                <a className="rounded-full border border-slate-200 px-6 py-3 font-medium focus-ring" href="#schedule">
                  View schedule
                </a>
              </div>
            </div>
            <div className="card-surface p-6 space-y-4" role="img" aria-label="Preview of dashboard and workout timeline">
              <p className="text-sm text-slate-500">Program overview</p>
              <div className="rounded-2xl bg-gradient-to-r from-rose-400 via-red-500 to-red-600 h-40" aria-hidden />
              <ul className="space-y-3 text-sm">
                {schedule.slice(0, 3).map((entry) => (
                  <li key={entry.className} className="flex items-center justify-between">
                    <span className="font-medium">{entry.className}</span>
                    <span className="text-slate-500">{entry.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <dl className="grid gap-6 sm:grid-cols-3 text-center">
            {metrics.map((item) => (
              <div key={item.label} className="card-surface px-6 py-8">
                <dt className="text-sm text-slate-500">{item.label}</dt>
                <dd className="text-3xl font-semibold mt-2">{item.value}</dd>
              </div>
            ))}
          </dl>
        </header>

        <section id="programs" className="space-y-12">
          <SectionHeading
            eyebrow="Programs"
            title="Three experience pillars"
            description="Every pillar has mobile-first wireframes + motion cues documented at /blueprint for engineers."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {programs.map((program) => (
              <article key={program.title} className="card-surface p-6 space-y-3">
                <h3 className="text-lg font-semibold">{program.title}</h3>
                <p className="text-sm text-slate-600">{program.desc}</p>
                <button className="mt-2 text-sm font-medium text-red-600 focus-ring" aria-label={`Open the ${program.title} plan`}>
                  View plan →
                </button>
              </article>
            ))}
          </div>
        </section>

        <section id="schedule" className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <SectionHeading
              align="left"
              eyebrow="Experience architecture"
              title="Flows optimized for hybrid participation"
              description="App screens show how in-studio and remote members navigate onboarding, programming, and progress tracking."
            />
            <ul className="space-y-4 text-sm text-slate-600">
              <li>• Session booking lives above the fold with sticky CTA.</li>
              <li>• Heat-map calendar mirrors watchOS complications.</li>
              <li>• Trainers module reflows into a carousel on devices under 768px.</li>
            </ul>
          </div>
          <div className="card-surface p-6">
            <div className="flex items-center justify-between text-sm text-slate-500">
              <span>Daily schedule</span>
              <a href="/blueprint" className="text-red-600 font-medium">
                Blueprint →
              </a>
            </div>
            <ul className="mt-6 divide-y divide-slate-200">
              {schedule.map((entry) => (
                <li key={entry.time} className="py-4 flex items-center justify-between text-sm">
                  <div>
                    <p className="font-semibold">{entry.className}</p>
                    <p className="text-slate-500">{entry.duration}</p>
                  </div>
                  <div className="text-right">
                    <p>{entry.time}</p>
                    <p className="text-slate-500">{entry.coach}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {trainers.map((coach) => (
            <article key={coach.name} className="card-surface p-6 space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] text-rose-400">Coach</p>
              <h3 className="text-xl font-semibold">{coach.name}</h3>
              <p className="text-sm text-slate-500">{coach.focus}</p>
              <p className="text-sm font-medium">Slots: {coach.slots}</p>
            </article>
          ))}
        </section>

        <section className="space-y-8" id="testimonials">
          <SectionHeading
            eyebrow="Community"
            title="Member stories inform the design"
            description="Testimonials highlight usability wins that shipped from research sessions."
          />
          <div className="grid gap-6 md:grid-cols-2">
            <article className="card-surface p-6 space-y-3">
              <p className="text-lg">“The hybrid calendar and trainer cards made it seamless to balance office travel with workouts.”</p>
              <p className="text-sm text-slate-500">Alicia M. · Product Strategist</p>
            </article>
            <article className="card-surface p-6 space-y-3">
              <p className="text-lg">“Being able to review the blueprint route reassured our devs that the design system was ready.”</p>
              <p className="text-sm text-slate-500">Sam M. · Engineering Lead</p>
            </article>
          </div>
        </section>

        <section className="card-surface px-6 py-12 text-center space-y-6">
          <SectionHeading
            title="Deploy-ready with docs + blueprint"
            description="The README covers setup while docs/ design how tokens map to product UI."
          />
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a className="rounded-full bg-red-600 px-6 py-3 text-white font-medium focus-ring" href="mailto:design@gamemaker.dev">
              Start a project call
            </a>
            <a className="rounded-full border border-slate-200 px-6 py-3 font-medium focus-ring" href="/blueprint">
              Inspect blueprint
            </a>
          </div>
        </section>

        <footer className="text-sm text-slate-500 text-center">
          Documented for the “Web Designer — Horizon Fitness” concept brief.
        </footer>
      </main>
    </>
  );
}
