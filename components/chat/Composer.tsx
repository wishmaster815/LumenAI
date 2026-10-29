"use client";

import { useEffect, useRef, useState } from "react";
import { MODELS } from "./data";

type Props = {
    value: string;
    onChange: (v: string) => void;
    onSend: () => void;
    busy: boolean;
};

export default function Composer({ value, onChange, onSend, busy }: Props) {
    const ref = useRef<HTMLTextAreaElement>(null);
    const [model, setModel] = useState(MODELS[0]);
    const [menuOpen, setMenuOpen] = useState(false);
    const [attached, setAttached] = useState<string[]>([]);
    const canSend = value.trim().length > 0 && !busy;

    // Auto-grow the textarea
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        el.style.height = "0px";
        el.style.height = Math.min(el.scrollHeight, 180) + "px";
    }, [value]);

    const submit = () => {
        if (!canSend) return;
        onSend();
    };

    return (
        <div className="px-4 pb-5">
            <div className="mx-auto w-full max-w-3xl">
                {attached.length > 0 && (
                    <div className="mb-2 flex flex-wrap gap-2">
                        {attached.map((a) => (
                            <span
                                key={a}
                                className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-card px-2.5 py-1.5 text-xs text-muted"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-3.5 w-3.5 text-brand-2"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        d="M14 3v5h5M7 3h7l5 5v13H7z"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                {a}
                                <button
                                    onClick={() =>
                                        setAttached((p) =>
                                            p.filter((x) => x !== a),
                                        )
                                    }
                                    className="ml-0.5 text-muted hover:text-foreground"
                                    aria-label={`Remove ${a}`}
                                >
                                    ×
                                </button>
                            </span>
                        ))}
                    </div>
                )}

                <div className="rounded-2xl border border-line bg-card/80 p-2 shadow-2xl shadow-brand/5 backdrop-blur-xl focus-within:border-brand/40">
                    <textarea
                        ref={ref}
                        value={value}
                        rows={1}
                        onChange={(e) => onChange(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault();
                                submit();
                            }
                        }}
                        placeholder="Ask Lumen anything…"
                        className="max-h-[180px] w-full resize-none bg-transparent px-2.5 py-2 text-[15px] leading-relaxed text-foreground placeholder:text-muted focus:outline-none"
                    />

                    <div className="flex items-center gap-1.5 pt-1">
                        {/* Attach */}
                        <button
                            onClick={() =>
                                setAttached((p) => [
                                    ...p,
                                    `file-${p.length + 1}.pdf`,
                                ])
                            }
                            className="grid h-9 w-9 place-items-center rounded-lg text-muted transition-colors hover:bg-line/50 hover:text-foreground"
                            aria-label="Attach file"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                className="h-4.5 w-4.5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                            >
                                <path
                                    d="M21 11l-8.5 8.5a5 5 0 01-7-7L14 4a3.5 3.5 0 015 5l-8.5 8.5a2 2 0 01-3-3L15 6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>

                        {/* Web search toggle */}
                        <button
                            className="hidden h-9 items-center gap-1.5 rounded-lg px-2.5 text-xs text-muted transition-colors hover:bg-line/50 hover:text-foreground sm:flex"
                            aria-label="Toggle web search"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                className="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                            >
                                <circle cx="12" cy="12" r="9" />
                                <path d="M3 12h18M12 3c2.5 2.5 3.8 5.6 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.6-3.8-9S9.5 5.5 12 3z" />
                            </svg>
                            Search
                        </button>

                        <div className="relative">
                            <button
                                onClick={() => setMenuOpen((v) => !v)}
                                className="flex h-9 items-center gap-1.5 rounded-lg px-2.5 text-xs text-muted transition-colors hover:bg-line/50 hover:text-foreground"
                            >
                                <span className="h-1.5 w-1.5 rounded-full bg-brand-2" />
                                {model.name}
                                <svg
                                    viewBox="0 0 24 24"
                                    className={`h-3.5 w-3.5 transition-transform ${menuOpen ? "rotate-180" : ""}`}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        d="M6 9l6 6 6-6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>

                            {menuOpen && (
                                <>
                                    <div
                                        className="fixed inset-0 z-10"
                                        onClick={() => setMenuOpen(false)}
                                    />
                                    <div className="absolute bottom-11 left-0 z-20 w-64 overflow-hidden rounded-xl border border-line bg-card shadow-2xl shadow-black/40">
                                        {MODELS.map((m) => (
                                            <button
                                                key={m.id}
                                                onClick={() => {
                                                    setModel(m);
                                                    setMenuOpen(false);
                                                }}
                                                className={`flex w-full items-start gap-2.5 px-3 py-2.5 text-left transition-colors hover:bg-line/40 ${
                                                    m.id === model.id
                                                        ? "bg-brand/10"
                                                        : ""
                                                }`}
                                            >
                                                <span
                                                    className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${
                                                        m.id === model.id
                                                            ? "bg-brand-2"
                                                            : "bg-line"
                                                    }`}
                                                />
                                                <span className="min-w-0">
                                                    <span className="block text-[13px] font-medium text-foreground">
                                                        {m.name}
                                                    </span>
                                                    <span className="block text-xs text-muted">
                                                        {m.desc}
                                                    </span>
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="ml-auto flex items-center gap-2">
                            <span className="hidden text-[11px] text-muted md:block">
                                <kbd className="font-mono">↵</kbd> send ·{" "}
                                <kbd className="font-mono">⇧↵</kbd> newline
                            </span>
                            <button
                                onClick={submit}
                                disabled={!canSend}
                                className={`grid h-9 w-9 place-items-center rounded-full transition-all ${
                                    canSend
                                        ? "bg-gradient-to-r from-brand to-brand-2 text-white shadow-lg shadow-brand/30 hover:scale-105"
                                        : "bg-line/60 text-muted"
                                }`}
                                aria-label="Send message"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-4 w-4"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.2"
                                >
                                    <path
                                        d="M12 19V5M5 12l7-7 7 7"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <p className="mt-2.5 text-center text-[11px] text-muted">
                    Lumen can make mistakes. Verify important information.
                </p>
            </div>
        </div>
    );
}
