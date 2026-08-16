"use client";

import { FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { ImagePlus, Send } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { QuickLinks } from "@/components/SocialIconBar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-data";

type GuestbookEntry = {
  id: string;
  name: string;
  message: string;
  image?: string;
  createdAt: string;
};

const STORAGE_KEY = "arafat-guestbook";

export function Contact() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setEntries(JSON.parse(raw) as GuestbookEntry[]);
    } catch {
      // ignore corrupt storage
    }
  }, []);

  function persist(next: GuestbookEntry[]) {
    setEntries(next);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }

  function onContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email client…");
    form.reset();
  }

  function onGuestbookSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("guestName") || "").trim() || "Anonymous";
    const message = String(data.get("guestMessage") || "").trim();
    if (!message) {
      toast.error("Write a message first");
      return;
    }

    const entry: GuestbookEntry = {
      id: crypto.randomUUID(),
      name,
      message,
      image: preview ?? undefined,
      createdAt: new Date().toISOString(),
    };

    persist([entry, ...entries].slice(0, 30));
    setPreview(null);
    form.reset();
    toast.success("Thanks for signing the guestbook!");
  }

  function onImageChange(fileList: FileList | null) {
    const file = fileList?.[0];
    if (!file) return;
    if (file.size > 1_500_000) {
      toast.error("Image must be under 1.5MB");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setPreview(String(reader.result));
    reader.readAsDataURL(file);
  }

  return (
    <section id="contact" className="relative px-4 py-20 sm:px-6 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-purple-300">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Let&apos;s build something.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <form
              onSubmit={onContactSubmit}
              className="glass space-y-4 rounded-3xl p-6"
            >
              <h3 className="text-lg font-semibold text-white">Hubungi Saya</h3>
              <p className="text-sm text-muted">
                Send a message — opens your email client to reach me at{" "}
                {siteConfig.email}.
              </p>
              <label className="block space-y-2 text-sm">
                <span className="text-muted">Name</span>
                <Input
                  name="name"
                  required
                  placeholder="Your name"
                  className="border-white/10 bg-black/30"
                />
              </label>
              <label className="block space-y-2 text-sm">
                <span className="text-muted">Email</span>
                <Input
                  name="email"
                  type="email"
                  required
                  placeholder="you@domain.com"
                  className="border-white/10 bg-black/30"
                />
              </label>
              <label className="block space-y-2 text-sm">
                <span className="text-muted">Message</span>
                <Textarea
                  name="message"
                  required
                  placeholder="Tell me about your project…"
                  className="border-white/10 bg-black/30"
                />
              </label>
              <Button
                type="submit"
                className="h-11 rounded-full bg-purple-500 px-5 text-white hover:bg-purple-400"
              >
                Send Message
                <Send className="size-3.5" />
              </Button>
            </form>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass space-y-4 rounded-3xl p-6">
              <h3 className="text-lg font-semibold text-white">
                Comments / Guestbook
              </h3>
              <form onSubmit={onGuestbookSubmit} className="space-y-3">
                <Input
                  name="guestName"
                  placeholder="Name (optional)"
                  className="border-white/10 bg-black/30"
                />
                <Textarea
                  name="guestMessage"
                  placeholder="Leave a thought…"
                  required
                  className="min-h-[90px] border-white/10 bg-black/30"
                />
                <div className="flex flex-wrap items-center gap-3">
                  <label className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs text-muted hover:text-white">
                    <ImagePlus className="size-3.5" />
                    Optional image
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => onImageChange(e.target.files)}
                    />
                  </label>
                  <Button
                    type="submit"
                    className="h-10 rounded-full bg-white/10 px-4 text-white hover:bg-white/15"
                  >
                    Post Comment
                  </Button>
                </div>
                {preview ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={preview}
                    alt="Upload preview"
                    className="h-20 w-20 rounded-xl object-cover"
                  />
                ) : null}
              </form>

              <div className="max-h-64 space-y-3 overflow-y-auto pr-1">
                {entries.length === 0 ? (
                  <p className="text-sm text-muted">
                    No comments yet — be the first.
                  </p>
                ) : (
                  entries.map((entry) => (
                    <article
                      key={entry.id}
                      className="rounded-2xl border border-white/10 bg-black/25 p-3"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-sm font-medium text-white">
                          {entry.name}
                        </p>
                        <p className="font-mono text-[10px] text-muted">
                          {new Date(entry.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      <p className="mt-1 text-sm text-muted">{entry.message}</p>
                      {entry.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={entry.image}
                          alt=""
                          className="mt-2 h-16 w-16 rounded-lg object-cover"
                        />
                      ) : null}
                    </article>
                  ))
                )}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-8">
            <QuickLinks />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
