import type { Metadata } from "next";
import ChatApp from "@/components/chat/ChatApp";

export const metadata: Metadata = {
  title: "Lumen — Chat",
  description: "Ask Lumen anything about your workspace.",
};

export default function ChatPage() {
  return <ChatApp />;
}
