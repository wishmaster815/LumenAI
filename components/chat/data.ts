export type Source = { title: string; kind: string };

export type Message = {
    id: string;
    role: "user" | "assistant";
    content: string;
    sources?: Source[];
    meta?: string;
};

export const MODELS = [
    {
        id: "lumen-2",
        name: "Lumen 2.0",
        desc: "Best balance of speed and reasoning",
    },
    {
        id: "lumen-2-pro",
        name: "Lumen 2.0 Pro",
        desc: "Deeper reasoning for hard tasks",
    },
    {
        id: "lumen-fast",
        name: "Lumen Fast",
        desc: "Instant answers, lightweight",
    },
];

export const CONVERSATIONS = [
    {
        group: "Today",
        items: [
            { id: "c1", title: "Q3 revenue summary", active: true },
            { id: "c2", title: "Draft reply to Acme renewal" },
            { id: "c3", title: "Onboarding checklist for new SDRs" },
        ],
    },
    {
        group: "Yesterday",
        items: [
            { id: "c4", title: "Compare Q2 vs Q3 churn drivers" },
            { id: "c5", title: "Summarize Zendesk ticket themes" },
        ],
    },
    {
        group: "Previous 7 days",
        items: [
            { id: "c6", title: "Rewrite pricing page headline" },
            { id: "c7", title: "Extract action items from sync" },
            { id: "c8", title: "Why did enterprise ARR spike?" },
        ],
    },
];

export const SUGGESTIONS = [
    {
        title: "Summarize a doc",
        body: "Give me the key points from our Q3 board memo",
        icon: "doc",
    },
    {
        title: "Draft an email",
        body: "Write a follow-up to the Acme renewal thread",
        icon: "mail",
    },
    {
        title: "Analyze data",
        body: "What drove the churn increase in June?",
        icon: "chart",
    },
    {
        title: "Find anything",
        body: "Where did we decide to drop the annual-only plan?",
        icon: "search",
    },
];

export const SEED_MESSAGES: Message[] = [
    {
        id: "m1",
        role: "user",
        content: "Summarize our Q3 revenue report in 3 bullet points.",
    },
];
