const QUOTES = [
  {
    quote:
      "We killed three internal tools the week we rolled out Lumen. Support resolution time dropped 41% because agents stop digging through docs.",
    name: "Priya Nair",
    role: "VP Support, Northwind",
    initials: "PN",
  },
  {
    quote:
      "The citations are the killer feature. Every answer links to the exact Notion page or Slack thread, so nobody has to trust a black box.",
    name: "Marcus Chen",
    role: "Head of Eng, Basalt",
    initials: "MC",
  },
  {
    quote:
      "Onboarding a new hire used to take a month of Slack archaeology. Now they ask Lumen and get the context on day two.",
    name: "Elena Rossi",
    role: "COO, Monogram",
    initials: "ER",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand">Testimonials</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Teams don&rsquo;t go back
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {QUOTES.map((q) => (
            <figure
              key={q.name}
              className="flex flex-col justify-between rounded-2xl border border-line bg-card/50 p-6"
            >
              <div>
                <div className="flex gap-0.5 text-brand-2" aria-hidden>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
                      <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mt-4 text-[15px] leading-relaxed text-foreground">
                  &ldquo;{q.quote}&rdquo;
                </blockquote>
              </div>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-2 text-xs font-medium text-white">
                  {q.initials}
                </span>
                <span>
                  <span className="block text-sm font-medium">{q.name}</span>
                  <span className="block text-xs text-muted">{q.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
