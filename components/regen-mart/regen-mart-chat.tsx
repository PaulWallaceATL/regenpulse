"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ChatMessage = { role: "user" | "assistant"; content: string };

export function RegenMartChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo(0, listRef.current.scrollHeight);
  }, [messages]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    const userMsg: ChatMessage = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/regen-mart-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMsg].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Request failed");
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.message },
      ]);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const clearError = () => setError(null);

  return (
    <>
      {/* White bubble so it’s visible on dark/blue backgrounds */}
      <Button
        type="button"
        size="icon"
        className="fixed bottom-6 left-6 z-50 h-12 w-12 rounded-full border-2 border-white/30 bg-white text-gray-800 shadow-xl hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-white/50"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? (
          <X className="h-5 w-5" />
        ) : (
          <MessageCircle className="h-5 w-5" />
        )}
      </Button>

      {open && (
        <div
          className="fixed bottom-24 left-6 z-50 flex w-full max-w-sm flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl"
          role="dialog"
          aria-label="Regen Mart assistant"
        >
          <div className="border-b border-gray-200 bg-gray-50 px-4 py-3">
            <h3 className="font-semibold text-gray-900">
              Regen Mart Assistant
            </h3>
            <p className="text-xs text-gray-600">
              Ask about equipment, recovery, or products. I can point you to the
              right categories and brands.
            </p>
          </div>
          <div
            ref={listRef}
            className="flex max-h-[280px] min-h-[200px] flex-col gap-3 overflow-y-auto bg-white p-4"
          >
            {messages.length === 0 && (
              <p className="text-sm text-gray-500">
                e.g. &quot;What do you have for recovery after workouts?&quot; or
                &quot;Tell me about Storz Medical.&quot;
              </p>
            )}
            {messages.map((m, i) => (
              <div
                key={i}
                className={cn(
                  "max-w-[85%] rounded-lg px-3 py-2 text-sm",
                  m.role === "user"
                    ? "ml-auto bg-[#5B9BD5] text-white"
                    : "bg-gray-100 text-gray-900"
                )}
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Loader2 className="h-4 w-4 animate-spin" />
                Thinking…
              </div>
            )}
            {error && (
              <div className="space-y-2">
                <p className="text-sm text-red-600">{error}</p>
                <p className="text-xs text-gray-500">
                  {error.includes("Too many requests") || error.includes("429")
                    ? "Our AI provider is rate-limiting. Wait a minute and try again."
                    : "You can try again in a moment."}
                </p>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="border-gray-300 text-gray-700"
                  onClick={clearError}
                >
                  Dismiss
                </Button>
              </div>
            )}
          </div>
          <form
            className="flex gap-2 border-t border-gray-200 bg-white p-3"
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question…"
              className="flex-1 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-500 focus:border-[#5B9BD5] focus:outline-none focus:ring-2 focus:ring-[#5B9BD5]/30 disabled:cursor-not-allowed disabled:opacity-50"
              disabled={loading}
            />
            <Button
              type="submit"
              size="icon"
              disabled={loading || !input.trim()}
              className="bg-[#5B9BD5] text-white hover:bg-[#4a8ac4]"
            >
              <Send className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </div>
      )}
    </>
  );
}
