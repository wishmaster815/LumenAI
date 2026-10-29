"use client";

import { useState } from "react";

const PLANS = [
  {
    name: "Starter",
    monthly: 0,
    blurb: "For individuals exploring what Lumen can do.",
    cta: "Start for free",
    features: [
      "200 messages / month",
      "2 workspace connections",
      "Web & mobile app",
      "Community support",
    ],
    featured: false,
  },
  {
    name: "Pro",
    monthly: 24,
    blurb: "For teams that want Lumen in every workflow.",
    cta: "Start 14-day trial",
    features: [
      "Unlimited messages",
      "All 40+ integrations",
      "Workspace memory & citations",
      "Agents & multi-step workflows",
      "Priority support",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    monthly: -1,
    blurb: "For orgs with advanced security needs.",
    cta: "Contact sales",
    features: [
      "Everything in Pro",
      "SSO / SCIM & audit logs",
      "Zero-retention endpoints",
      "Custom data residency",
      "Dedicated success manager",
    ],
    featured: false,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="relative py-24">
      <div className="glow left-1/2 top-10 h-[260px] w-[420px] -translate-x-1/2 bg-brand opacity-20" />
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand">Pricing</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Simple pricing that scales
          </h2>
          <p className="mt-4 text-lg text-muted">
            Start free. Upgrade when your whole team is hooked.
          </p>

          <div className="mt-8 inline-flex items-center gap-1 rounded-full border border-line bg-card/60 p-1">
            {(["Monthly", "Annual"] as const).map((label, i) => {
              const isAnnual = i === 1;
              const active = annual === isAnnual;
              return (
                <button
                  key={label}
                  onClick={() => setAnnual(isAnnual)}
                  className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                    active ? "bg-foreground text-background" : "text-muted hover:text-foreground"
                  }`}
                >
                  {label}
                  {isAnnual && (
                    <span className={`ml-1.5 text-xs ${active ? "text-brand" : "text-brand-2"}`}>
                      −20%
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-14 grid items-start gap-5 lg:grid-cols-3">
          {PLANS.map((p) => {
            const price =
              p.monthly < 0 ? "Custom" : annual ? p.monthly * 0.8 : p.monthly;
            return (
              <div
                key={p.name}
                className={`relative rounded-2xl border p-7 ${
                  p.featured
                    ? "border-brand/50 bg-gradient-to-b from-brand/12 to-card/60 lg:-mt-4 lg:pb-10"
                    : "border-line bg-card/40"
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand to-brand-2 px-3 py-1 text-[11px] font-medium text-white">
                    Most popular
                  </span>
                )}
                <h3 className="text-base font-medium">{p.name}</h3>
                <p className="mt-1.5 text-sm text-muted">{p.blurb}</p>

                <div className="mt-5 flex items-baseline gap-1">
                  {p.monthly < 0 ? (
                    <span className="text-4xl font-semibold tracking-tight">Custom</span>
                  ) : (
                    <>
                      <span className="text-4xl font-semibold tracking-tight">
                        ${typeof price === "number" ? price.toFixed(price % 1 ? 2 : 0) : price}
                      </span>
                      <span className="text-sm text-muted">/user/mo</span>
                    </>
                  )}
                </div>
                {p.monthly > 0 && annual && (
                  <p className="mt-1 text-xs text-brand-2">billed annually</p>
                )}

                <a
                  href="#"
                  className={`mt-6 block rounded-full px-5 py-2.5 text-center text-sm font-medium transition-transform hover:scale-[1.02] ${
                    p.featured
                      ? "bg-gradient-to-r from-brand to-brand-2 text-white shadow-lg shadow-brand/25"
                      : "border border-line text-foreground hover:bg-line/40"
                  }`}
                >
                  {p.cta}
                </a>

                <ul className="mt-7 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-muted">
                      <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-brand-2" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
