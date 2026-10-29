"use client";

import Link from "next/link";
import { CONVERSATIONS } from "./data";

type Props = {
    open: boolean;
    onClose: () => void;
    activeId: string;
    onSelect: (id: string) => void;
};

export default function Sidebar({ open, onClose, activeId, onSelect }: Props) {
    return (
        <>
            {/* Mobile scrim */}
            {open && (
                <div
                    onClick={onClose}
                    className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden"
                />
            )}

            <aside
                className={`fixed inset-y-0 left-0 z-40 flex w-[272px] flex-col border-r border-line bg-card/70 backdrop-blur-xl transition-transform lg:static lg:translate-x-0 ${
                    open ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-4 pt-4">
                    <Link href="/" className="flex items-center gap-2.5">
                        <span
                            className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-brand to-brand-2"
                            aria-hidden
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                className="h-4 w-4"
                            >
                                <circle cx="12" cy="12" r="3.2" fill="white" />
                                <path
                                    d="M12 3v3m0 12v3M3 12h3m12 0h3"
                                    stroke="white"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </span>
                        <span className="text-[15px] font-semibold tracking-tight">
                            Lumen
                        </span>
                    </Link>
                    <button
                        onClick={onClose}
                        className="grid h-8 w-8 place-items-center rounded-lg text-muted hover:bg-line/50 hover:text-foreground lg:hidden"
                        aria-label="Close sidebar"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            className="h-4.5 w-4.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                d="M6 6l12 12M18 6L6 18"
                                strokeLinecap="round"
                            />
                        </svg>
                    </button>
                </div>

                {/* New chat */}
                <div className="px-4 pt-4">
                    <button
                        onClick={() => onSelect("new")}
                        className="flex w-full items-center gap-2 rounded-xl border border-line bg-background/50 px-3 py-2.5 text-sm text-foreground transition-colors hover:border-brand/40 hover:bg-brand/10"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            className="h-4 w-4 text-brand"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                        </svg>
                        New chat
                        <kbd className="ml-auto rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-muted">
                            ⌘K
                        </kbd>
                    </button>
                </div>

                {/* Search */}
                <div className="px-4 pt-3">
                    <div className="flex items-center gap-2 rounded-xl bg-background/40 px-3 py-2 text-sm">
                        <svg
                            viewBox="0 0 24 24"
                            className="h-4 w-4 shrink-0 text-muted"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <circle cx="11" cy="11" r="7" />
                            <path d="M20 20l-3-3" strokeLinecap="round" />
                        </svg>
                        <input
                            placeholder="Search chats"
                            className="w-full bg-transparent text-foreground placeholder:text-muted focus:outline-none"
                        />
                    </div>
                </div>

                {/* History */}
                <nav className="mt-4 flex-1 overflow-y-auto px-3 pb-4">
                    {CONVERSATIONS.map((group) => (
                        <div key={group.group} className="mb-5">
                            <p className="px-2 pb-2 text-[11px] font-medium uppercase tracking-wider text-muted">
                                {group.group}
                            </p>
                            <ul className="space-y-0.5">
                                {group.items.map((item) => {
                                    const active = activeId === item.id;
                                    return (
                                        <li key={item.id}>
                                            <button
                                                onClick={() =>
                                                    onSelect(item.id)
                                                }
                                                className={`group flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left text-[13.5px] transition-colors ${
                                                    active
                                                        ? "bg-brand/15 text-foreground"
                                                        : "text-muted hover:bg-line/40 hover:text-foreground"
                                                }`}
                                            >
                                                <span
                                                    className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                                                        active
                                                            ? "bg-brand-2"
                                                            : "bg-line group-hover:bg-muted"
                                                    }`}
                                                />
                                                <span className="truncate">
                                                    {item.title}
                                                </span>
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))}
                </nav>

                {/* Upgrade card */}
                {/* <div className="mx-3 mb-3 rounded-xl border border-line bg-gradient-to-br from-brand/15 to-transparent p-4">
                    <p className="text-[13px] font-medium">Upgrade to Pro</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted">
                        Unlimited messages, all integrations, and workspace
                        memory.
                    </p>
                    <Link
                        href="/#pricing"
                        className="mt-3 block rounded-full bg-foreground px-3 py-1.5 text-center text-xs font-medium text-background transition-transform hover:scale-[1.02]"
                    >
                        View plans
                    </Link>
                </div> */}

                {/* User */}
                <div className="flex items-center gap-3 border-t border-line px-4 py-3">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-2 text-[11px] font-medium text-white">
                        AR
                    </span>
                    <div className="min-w-0 flex-1">
                        <p className="truncate text-[13px] font-medium">
                            Alex Rivera
                        </p>
                        <p className="truncate text-[11px] text-muted">
                            Pro workspace
                        </p>
                    </div>
                    <button
                        className="grid h-8 w-8 place-items-center rounded-lg text-muted hover:bg-line/50 hover:text-foreground"
                        aria-label="Account menu"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <circle cx="12" cy="5" r="1.5" />
                            <circle cx="12" cy="12" r="1.5" />
                            <circle cx="12" cy="19" r="1.5" />
                        </svg>
                    </button>
                </div>
            </aside>
        </>
    );
}
