"use client";

import { useEffect, useState } from "react";

const SCRIPT = [
  { role: "user", text: "Summarize our Q3 revenue report in 3 bullet points." },
  {
    role: "ai",
    text: "Revenue grew 24% QoQ to $1.8M. Enterprise seats drove 62% of new ARR. Churn dropped to 1.9% after the onboarding revamp.",
  },
];

const ROLES = ["Product", "Marketing", "Data"];

// Cumulative start offset of each message within the full script.
const STARTS = SCRIPT.reduce<number[]>((acc, msg, i) => {
  acc.push(i === 0 ? 0 : acc[i - 1] + SCRIPT[i - 1].text.length);
  return acc;
}, []);
const TOTAL = SCRIPT.reduce((n, m) => n + m.text.length, 0);

export default function ChatDemo() {
  const [chars, setChars] = useState(TOTAL);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let n = 0;
    let holdUntil = 0;

    const id = setInterval(() => {
      const now = Date.now();
      if (now < holdUntil) return;

      n += 2;
      setChars(n);

      if (n >= TOTAL) {
        holdUntil = now + 2600;
        n = 0;
      }
    }, 30);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="floaty mx-auto w-full max-w-xl rounded-2xl border border-line bg-card/80 p-3 shadow-2xl shadow-brand/10 backdrop-blur-xl">
      <div className="flex items-center gap-1.5 px-2 pb-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-[11px] text-muted">lumen.app / workspace</span>
      </div>

      <div className="space-y-3 rounded-xl bg-background/60 p-4">
        {SCRIPT.map((msg, i) => {
          const shown = Array.from(msg.text)
            .slice(0, Math.max(0, chars - STARTS[i]))
            .join("");
          if (!shown) return null;

          const isUser = msg.role === "user";
          const done = shown.length >= msg.text.length;

          return (
            <div
              key={msg.text}
              className={`flex ${isUser ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13.5px] leading-relaxed ${
                  isUser
                    ? "rounded-br-sm bg-brand/90 text-white"
                    : "rounded-bl-sm border border-line bg-card text-foreground"
                }`}
              >
                {shown}
                {!done && (
                  <span className="caret ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 bg-brand-2" />
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-2 px-2 pt-3">
        <div className="flex flex-1 items-center gap-2 rounded-full border border-line bg-background/60 px-3.5 py-2 text-[13px] text-muted">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
          </svg>
          Ask Lumen anything…
        </div>
        <div className="hidden gap-1.5 lg:flex">
          {ROLES.map((r) => (
            <span key={r} className="rounded-full border border-line px-2.5 py-1 text-[11px] text-muted">
              {r}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
