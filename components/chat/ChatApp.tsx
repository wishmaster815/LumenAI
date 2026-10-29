"use client";

import { useEffect, useRef, useState } from "react";
import Sidebar from "./Sidebar";
import Composer from "./Composer";
import { EmptyState, MessageBubble, TypingIndicator } from "./MessageList";
import { SEED_MESSAGES, type Message } from "./data";
import { aiResponse } from "@/app/actions/aiActions";

let idCounter = 0;
const nextId = () => `m${++idCounter}`;

export default function ChatApp() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeId, setActiveId] = useState("c1");
    const [messages, setMessages] = useState<Message[]>(SEED_MESSAGES);
    const [input, setInput] = useState("");
    const [busy, setBusy] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Keep the thread pinned to the newest message
    useEffect(() => {
        const el = scrollRef.current;
        if (el) el.scrollTop = el.scrollHeight;
    }, [messages, busy]);

    const send = async (text?: string) => {
        const content = (text ?? input).trim();
        if (!content || busy) return;

        setInput("");
        setMessages((m) => [...m, { id: nextId(), role: "user", content }]);
        setBusy(true);

        try {
            const reply = await aiResponse(content);
            setMessages((m) => [
                ...m,
                {
                    id: nextId(),
                    role: "assistant",
                    content: reply,
                    meta: "Gemini 3.5 Flash",
                },
            ]);
        } catch {
            setMessages((m) => [
                ...m,
                {
                    id: nextId(),
                    role: "assistant",
                    content:
                        "Something went wrong reaching the model. Please try again.",
                },
            ]);
        } finally {
            setBusy(false);
        }
    };

    const startNewChat = () => {
        setMessages([]);
        setInput("");
        setActiveId("new");
        setSidebarOpen(false);
    };

    const handleSelect = (id: string) => {
        if (id === "new") return startNewChat();
        setActiveId(id);
        setSidebarOpen(false);
    };

    return (
        <div className="flex h-dvh overflow-hidden bg-background">
            <Sidebar
                open={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
                activeId={activeId}
                onSelect={handleSelect}
            />

            <div className="flex min-w-0 flex-1 flex-col">
                {/* Top bar */}

                {/* Thread */}
                <div ref={scrollRef} className="flex-1 overflow-y-auto">
                    {messages.length === 0 ? (
                        <EmptyState onPick={(t) => send(t)} />
                    ) : (
                        <div className="mx-auto w-full max-w-3xl px-4 py-6">
                            {messages.map((m) => (
                                <MessageBubble key={m.id} message={m} />
                            ))}
                            {busy && <TypingIndicator />}
                            <div className="h-4" />
                        </div>
                    )}
                </div>

                {/* Composer */}
                <Composer
                    value={input}
                    onChange={setInput}
                    onSend={() => send()}
                    busy={busy}
                />
            </div>
        </div>
    );
}
