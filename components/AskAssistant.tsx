"use client";

import { FormEvent, useState } from "react";
import { MessageCircleQuestion, X } from "lucide-react";
import { ASK_MAX_CHARS, localAnswer } from "@/lib/knowledge";

export function AskAssistant() {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [busy, setBusy] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const q = question.trim();
    if (!q) return;
    setBusy(true);
    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ question: q }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        answer?: string;
        error?: string;
      };
      if (res.ok) {
        setAnswer(data.answer || localAnswer(q));
      } else if (res.status === 429 || res.status === 503) {
        setAnswer(data.error || "The assistant is temporarily unavailable.");
      } else {
        setAnswer(localAnswer(q));
      }
    } catch {
      setAnswer(localAnswer(q));
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="pointer-events-none fixed right-4 bottom-[5.5rem] z-40 sm:right-6">
      {open ? (
        <div className="pointer-events-auto mb-3 w-[min(22rem,calc(100vw-2rem))] rounded-3xl border border-black/10 bg-white p-4 shadow-xl">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-sm font-semibold text-neutral-900">
                Ask about my work
              </p>
              <p className="text-xs text-muted">
                Answers from published case studies only.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full border border-black/10 p-1.5"
              aria-label="Close assistant"
            >
              <X className="size-4" />
            </button>
          </div>
          <form onSubmit={onSubmit} className="mt-3 space-y-2">
            <label className="sr-only" htmlFor="ask-q">
              Question
            </label>
            <input
              id="ask-q"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              maxLength={ASK_MAX_CHARS}
              placeholder="HIMBA, ZAHA, booking…"
              className="h-10 w-full rounded-full border border-black/10 px-3 text-sm"
            />
            <button
              type="submit"
              disabled={busy}
              className="h-10 w-full rounded-full bg-[#004741] text-sm font-semibold text-[#F0EDE4] disabled:opacity-60"
            >
              {busy ? "Thinking…" : "Ask"}
            </button>
          </form>
          {answer ? (
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">{answer}</p>
          ) : null}
        </div>
      ) : null}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="pointer-events-auto inline-flex size-12 items-center justify-center rounded-full bg-[#004741] text-[#F0EDE4] shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#004741]"
        aria-expanded={open}
        aria-label="Ask about my work"
      >
        <MessageCircleQuestion className="size-5" />
      </button>
    </div>
  );
}
