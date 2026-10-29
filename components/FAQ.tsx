"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "How is Lumen different from just using ChatGPT?",
    a: "General chat models only know what you paste in. Lumen is connected to your workspace — it retrieves from your docs, tickets, and code with live permissions, cites every source, and can take actions like filing a ticket or drafting a reply.",
  },
  {
    q: "Is my data used to train models?",
    a: "Never. Your content is encrypted in transit and at rest, isolated per workspace, and excluded from any training. Enterprise plans can also enable zero-retention endpoints so prompts are never logged.",
  },
  {
    q: "Which integrations are supported?",
    a: "Over 40 including Slack, Notion, Google Drive, Confluence, Jira, Linear, GitHub, Zendesk, Salesforce, and HubSpot. Anything else can be added via our API or MCP connector.",
  },
  {
    q: "Can I control who sees what?",
    a: "Yes. Retrieval is permissions-aware — Lumen only surfaces content a given user already has access to in the source system. Admins can also exclude specific spaces from indexing entirely.",
  },
  {
    q: "What happens after the free trial?",
    a: "You keep access to the free Starter tier with 200 messages a month. Nothing is deleted, and you can upgrade back to Pro at any time.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand">FAQ</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Questions, answered
          </h2>
        </div>

        <div className="mt-12 divide-y divide-line border-y border-line">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] font-medium">{f.q}</span>
                  <svg
                    viewBox="0 0 24 24"
                    className={`h-5 w-5 shrink-0 text-muted transition-transform ${isOpen ? "rotate-45" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                  </svg>
                </button>
                {isOpen && (
                  <p className="pb-5 pr-8 text-sm leading-relaxed text-muted">{f.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
