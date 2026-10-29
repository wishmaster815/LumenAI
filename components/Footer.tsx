import { Logo } from "./Logo";

const COLUMNS = [
  {
    title: "Product",
    links: ["Features", "Integrations", "Pricing", "Changelog", "Roadmap"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Press", "Contact"],
  },
  {
    title: "Resources",
    links: ["Documentation", "API reference", "Community", "Status", "Security"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "DPA", "Sub-processors"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-card/30">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-6">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <Logo className="h-7 w-7" />
              <span className="text-lg font-semibold tracking-tight">Lumen</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              The AI copilot that reasons over your entire workspace.
            </p>
            <div className="mt-5 flex gap-2">
              {["Twitter", "LinkedIn", "GitHub"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-lg border border-line text-muted transition-colors hover:text-foreground"
                  aria-label={s}
                >
                  <span className="text-[10px] font-medium">{s.slice(0, 2)}</span>
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-medium">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-muted transition-colors hover:text-foreground">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row">
          <p>© 2026 Lumen Labs, Inc. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-2" />
            All systems operational
          </p>
        </div>
      </div>
    </footer>
  );
}
