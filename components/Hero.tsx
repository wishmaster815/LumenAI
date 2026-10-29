import ChatDemo from "./ChatDemo";

const BADGES = ["No credit card", "Free 14-day trial", "SOC 2 Type II"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24">
      <div className="grid-bg absolute inset-0" />
      <div className="glow left-1/2 top-[-120px] h-[380px] w-[560px] -translate-x-1/2 bg-brand" />
      <div className="glow right-[-80px] top-40 h-[280px] w-[280px] bg-brand-2 opacity-20" />

      <div className="relative mx-auto max-w-6xl px-5 text-center">
        <a
          href="#features"
          className="inline-flex items-center gap-2 rounded-full border border-line bg-card/60 px-3.5 py-1.5 text-xs text-muted backdrop-blur transition-colors hover:text-foreground"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-2" />
          Lumen 2.0 — now with agents &amp; workspace memory
        </a>

        <h1 className="mx-auto mt-6 max-w-3xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          The AI copilot your <span className="gradient-text">whole team</span> actually uses
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted">
          Lumen turns scattered docs, tickets, and data into instant answers.
          One assistant that reasons over your entire workspace — not just a chat box.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="/chat"
            className="w-full rounded-full bg-gradient-to-r from-brand to-brand-2 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-brand/25 transition-transform hover:scale-[1.03] sm:w-auto"
          >
            Start free trial
          </a>
          <a
            href="#how"
            className="w-full rounded-full border border-line px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-line/40 sm:w-auto"
          >
            See how it works
          </a>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted">
          {BADGES.map((b) => (
            <span key={b} className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-brand-2" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {b}
            </span>
          ))}
        </div>

        <div className="mt-16">
          <ChatDemo />
        </div>
      </div>
    </section>
  );
}
