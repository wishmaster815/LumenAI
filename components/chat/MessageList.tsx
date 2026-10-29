import type { Message } from "./data";

const SUGGESTION_ICONS: Record<string, string> = {
    doc: "M7 4h7l5 5v11a1 1 0 01-1 1H7a1 1 0 01-1-1V5a1 1 0 011-1zM14 4v5h5",
    mail: "M3 7l9 6 9-6M4 6h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1z",
    chart: "M4 19V5m0 14h16M8 15V9m4 6V7m4 8v-4",
    search: "M11 4a7 7 0 100 14 7 7 0 000-14zM20 20l-3.5-3.5",
};

function AssistantMark() {
    return (
        <span
            className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-brand to-brand-2"
            aria-hidden
        >
            <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
                <circle cx="12" cy="12" r="3.2" fill="white" />
                <path
                    d="M12 3v3m0 12v3M3 12h3m12 0h3"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                />
            </svg>
        </span>
    );
}

export function EmptyState({ onPick }: { onPick: (text: string) => void }) {
    const suggestions = [
        {
            icon: "doc",
            title: "Summarize a doc",
            body: "Give me the key points from our Q3 board memo",
        },
        {
            icon: "mail",
            title: "Draft an email",
            body: "Write a follow-up to the Acme renewal thread",
        },
        {
            icon: "chart",
            title: "Analyze data",
            body: "What drove the churn increase in June?",
        },
        {
            icon: "search",
            title: "Find anything",
            body: "Where did we decide to drop annual-only pricing?",
        },
    ];

    return (
        <div className="flex flex-1 flex-col items-center justify-center px-5 text-center">
            <span
                className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-2 shadow-lg shadow-brand/30"
                aria-hidden
            >
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                    <circle cx="12" cy="12" r="3.2" fill="white" />
                    <path
                        d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1m0-12.8-2.1 2.1M7.7 16.3l-2.1 2.1"
                        stroke="white"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                    />
                </svg>
            </span>
            <h1 className="mt-5 text-2xl font-semibold tracking-tight">
                What can I help with?
            </h1>
            <p className="mt-2 max-w-sm text-sm text-muted">
                Ask about your docs, tickets, and data — Lumen answers with
                sources you can trust.
            </p>

            <div className="mt-8 grid w-full max-w-2xl gap-3 sm:grid-cols-2">
                {suggestions.map((s) => (
                    <button
                        key={s.title}
                        onClick={() => onPick(s.body)}
                        className="group rounded-xl border border-line bg-card/50 p-4 text-left transition-colors hover:border-brand/40 hover:bg-brand/5"
                    >
                        <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand/15 text-brand group-hover:bg-brand/25">
                            <svg
                                viewBox="0 0 24 24"
                                className="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                            >
                                <path
                                    d={SUGGESTION_ICONS[s.icon]}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>
                        <p className="mt-3 text-[13px] font-medium">
                            {s.title}
                        </p>
                        <p className="mt-1 text-[13px] leading-relaxed text-muted">
                            {s.body}
                        </p>
                    </button>
                ))}
            </div>
        </div>
    );
}

export function TypingIndicator() {
    return (
        <div className="flex gap-3 px-1 py-3">
            <AssistantMark />
            <div className="flex items-center gap-1.5">
                {[0, 1, 2].map((i) => (
                    <span
                        key={i}
                        className="h-1.5 w-1.5 rounded-full bg-muted"
                        style={{
                            animation: `floaty 1.2s ease-in-out ${i * 0.15}s infinite`,
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export function MessageBubble({ message }: { message: Message }) {
    const isUser = message.role === "user";

    if (isUser) {
        return (
            <div className="flex justify-end py-3">
                <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-brand/90 px-4 py-3 text-[15px] leading-relaxed text-white">
                    {message.content}
                </div>
            </div>
        );
    }

    return (
        <div className="flex gap-3 py-3">
            <AssistantMark />
            <div className="min-w-0 flex-1">
                <div className="text-[15px] leading-7 text-foreground [&>p]:my-2 [&>ul]:my-2 [&>ul]:space-y-1.5">
                    {message.content.split("\n").map((line, i) => {
                        if (!line.trim()) return null;
                        if (line.startsWith("•")) {
                            return (
                                <div key={i} className="flex gap-2.5">
                                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-brand-2" />
                                    <span>{line.replace(/^•\s*/, "")}</span>
                                </div>
                            );
                        }
                        return <p key={i}>{line}</p>;
                    })}
                </div>

                {message.sources && message.sources.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                        {message.sources.map((s) => (
                            <span
                                key={s.title}
                                className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-card/60 px-2.5 py-1.5 text-xs text-muted transition-colors hover:border-brand/40 hover:text-foreground"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-3.5 w-3.5 text-brand-2"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        d="M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1"
                                        strokeLinecap="round"
                                    />
                                </svg>
                                {s.title}
                                <span className="text-muted/60">
                                    · {s.kind}
                                </span>
                            </span>
                        ))}
                    </div>
                )}

                <div className="mt-3 flex items-center gap-1">
                    {[
                        {
                            label: "Copy",
                            d: "M9 9V5a1 1 0 011-1h8a1 1 0 011 1v8a1 1 0 01-1 1h-4M5 9h8a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1v-8a1 1 0 011-1z",
                        },
                        {
                            label: "Good",
                            d: "M7 11v9H4v-9h3zm0 0l4-7a2 2 0 013 2l-1 5h5a2 2 0 012 2.4l-1.2 6A2 2 0 0116.8 21H7",
                        },
                        {
                            label: "Bad",
                            d: "M17 13V4h3v9h-3zm0 0l-4 7a2 2 0 01-3-2l1-5H6a2 2 0 01-2-2.4l1.2-6A2 2 0 017.2 3H17",
                        },
                    ].map((a) => (
                        <button
                            key={a.label}
                            className="grid h-8 w-8 place-items-center rounded-lg text-muted transition-colors hover:bg-line/50 hover:text-foreground"
                            aria-label={a.label}
                        >
                            <svg
                                viewBox="0 0 24 24"
                                className="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                            >
                                <path
                                    d={a.d}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    ))}
                    {message.meta && (
                        <span className="ml-1.5 text-[11px] text-muted">
                            {message.meta}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
