"use server";

import { GoogleGenAI } from "@google/genai";

const MODEL = "gemini-3.5-flash";

let client: GoogleGenAI | null = null;

function getClient(): GoogleGenAI {
    const apiKey = process.env.GOOGLE_GEMINI_API_KEY;
    if (!apiKey) {
        throw new Error("GOOGLE_GEMINI_API_KEY is not set in the environment.");
    }
    if (!client) client = new GoogleGenAI({ apiKey });
    return client;
}

export async function aiResponse(prompt: string): Promise<string> {
    const trimmed = prompt?.trim();
    if (!trimmed) return "No prompt provided.";

    try {
        const interaction = await getClient().interactions.create({
            model: MODEL,
            input: trimmed,
        });

        const text = interaction.output_text;
        return text?.trim() || "No output generated";
    } catch (err) {
        console.error("[aiResponse] Gemini request failed:", err);
        return "I couldn't reach the model right now. Please try again.";
    }
}
