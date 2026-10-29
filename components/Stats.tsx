const STATS = [
  { v: "12M+", l: "Questions answered weekly" },
  { v: "40+", l: "Native integrations" },
  { v: "8.4 hrs", l: "Saved per employee weekly" },
  { v: "99.99%", l: "Uptime last 12 months" },
];

export default function Stats() {
  return (
    <section className="border-y border-line bg-gradient-to-b from-card/40 to-transparent py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 lg:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.l} className="text-center">
            <div className="text-3xl font-semibold tracking-tight sm:text-4xl">{s.v}</div>
            <div className="mt-1.5 text-sm text-muted">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
