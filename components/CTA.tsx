export default function CTA() {
  return (
    <section className="px-5 pb-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-brand/20 via-card to-brand-2/10 px-6 py-16 text-center sm:py-20">
        <div className="glow left-1/2 top-[-60px] h-[200px] w-[320px] -translate-x-1/2 bg-brand" />
        <div className="relative">
          <h2 className="mx-auto max-w-xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Give your team an unfair advantage
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted">
            Set up in minutes. Free for 14 days. No credit card required.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#pricing"
              className="w-full rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.03] sm:w-auto"
            >
              Start free trial
            </a>
            <a
              href="#"
              className="w-full rounded-full border border-line px-6 py-3 text-sm font-medium transition-colors hover:bg-line/40 sm:w-auto"
            >
              Book a demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
