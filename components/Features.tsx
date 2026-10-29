type Feature = {
  title: string;
  desc: string;
  icon: React.ReactNode;
  wide?: boolean;
};

const Icon = ({ d }: { d: string }) => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d={d} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FEATURES: Feature[] = [
  {
    title: "Workspace memory",
    desc: "Lumen indexes your docs, tickets, and threads once — then answers with full context, citing the exact source it pulled from.",
    icon: <Icon d="M4 6a2 2 0 012-2h12a2 2 0 012 2v9a2 2 0 01-2 2H8l-4 4V6z" />,
    wide: true,
  },
  {
    title: "Multi-model routing",
    desc: "Automatically picks the best model per task to balance speed, quality, and cost.",
    icon: <Icon d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />,
  },
  {
    title: "Agents that act",
    desc: "Draft replies, file tickets, and run multi-step workflows from a single prompt.",
    icon: <Icon d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
  },
  {
    title: "Enterprise-grade security",
    desc: "SOC 2 Type II, SSO/SCIM, and zero-retention endpoints. Your data never trains our models.",
    icon: <Icon d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z" />,
  },
  {
    title: "Insights dashboard",
    desc: "See what your team asks most, where knowledge gaps exist, and how adoption grows.",
    icon: <Icon d="M4 19V5m0 14h16M8 15V9m4 6V7m4 8v-4" />,
    wide: true,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand">Features</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Everything a chatbot isn&rsquo;t
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            A chat box is easy. A reliable assistant needs memory, sources, and the
            ability to actually do work. That&rsquo;s what we built.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className={`group relative rounded-2xl border border-line bg-card/50 p-6 transition-colors hover:border-brand/40 ${
                f.wide ? "lg:col-span-2" : ""
              }`}
            >
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand/15 text-brand transition-colors group-hover:bg-brand/25">
                {f.icon}
              </div>
              <h3 className="mt-4 text-base font-medium">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
