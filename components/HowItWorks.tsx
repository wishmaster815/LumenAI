const STEPS = [
  {
    n: "01",
    title: "Connect your stack",
    desc: "One-click integrations for Slack, Notion, Google Drive, GitHub, Zendesk, and 40+ more.",
  },
  {
    n: "02",
    title: "Lumen indexes everything",
    desc: "Permissions-aware retrieval means every answer respects who can see what — down to the row.",
  },
  {
    n: "03",
    title: "Ask, in natural language",
    desc: "From any channel or the browser sidebar. Get cited answers, drafts, and actions in seconds.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-24">
      <div className="glow left-[-100px] top-1/3 h-[300px] w-[300px] bg-brand opacity-15" />
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand">How it works</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Live in your team in under 10 minutes
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <div key={s.n} className="relative">
              {i < STEPS.length - 1 && (
                <div className="absolute left-[calc(50%+28px)] top-7 hidden h-px w-[calc(100%-56px)] bg-gradient-to-r from-brand/50 to-transparent md:block" />
              )}
              <div className="flex flex-col items-center text-center">
                <div className="grid h-14 w-14 place-items-center rounded-2xl border border-line bg-card font-mono text-sm text-brand">
                  {s.n}
                </div>
                <h3 className="mt-5 text-lg font-medium">{s.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
