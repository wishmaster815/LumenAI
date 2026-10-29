const COMPANIES = ["Northwind", "Acme Corp", "Vercel-ish", "Basalt", "Monogram", "Ridgeline"];

export default function Logos() {
  return (
    <section className="border-y border-line bg-card/30 py-10">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted">
          Trusted by fast-moving teams
        </p>
        <div className="mt-7 grid grid-cols-2 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
          {COMPANIES.map((c) => (
            <div
              key={c}
              className="flex items-center justify-center text-sm font-semibold tracking-tight text-muted/70"
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
