"use client";

import { useState } from "react";
import { Send, Github, Linkedin, Mail, CheckCircle, AlertCircle } from "lucide-react";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { profile } from "@/content/profile";

type Status = "idle" | "sending" | "ok" | "error";

// Optional: paste a Formspree form endpoint (https://formspree.io/f/xxxx) to
// receive messages in-page. While empty, the form opens the visitor's mail
// client pre-filled — which works on a fully static host like GitHub Pages.
const FORMSPREE_ENDPOINT = "";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as {
      name: string;
      email: string;
      message: string;
    };

    // No backend configured → fall back to a mailto: draft.
    if (!FORMSPREE_ENDPOINT) {
      const subject = encodeURIComponent(`Portfolio message from ${data.name}`);
      const body = encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})`);
      window.location.href = `${profile.socials.email}?subject=${subject}&body=${body}`;
      setStatus("ok");
      form.reset();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-lg border border-[var(--color-glass-border)] bg-white/5 p-4 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)] focus:outline-none";

  return (
    <section id="contact" className="px-6 py-28 md:px-10">
      <div className="mx-auto max-w-[1200px]">
        <SectionTitle>Contact Me</SectionTitle>
        <Reveal>
          <div className="glass-card mx-auto max-w-xl p-8 md:p-10">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input name="name" required placeholder="Name" className={inputClass} />
              <input
                name="email"
                type="email"
                required
                placeholder="Email"
                className={inputClass}
              />
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Message"
                className={inputClass}
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-glow justify-center disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>

              {status === "ok" && (
                <p className="flex items-center gap-2 text-sm text-green-400">
                  <CheckCircle size={16} /> Thanks! Your message was sent.
                </p>
              )}
              {status === "error" && (
                <p className="flex items-center gap-2 text-sm text-red-400">
                  <AlertCircle size={16} /> Something went wrong. Email me directly below.
                </p>
              )}
            </form>

            <div className="mt-8 text-center">
              <p>
                Email:{" "}
                <a
                  href={profile.socials.email}
                  className="text-[var(--color-primary)] hover:underline"
                >
                  {profile.email}
                </a>
              </p>
              <div className="mt-4 flex justify-center gap-4">
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-glass-border)] bg-[var(--color-glass)] transition hover:-translate-y-1 hover:bg-[var(--color-primary)] hover:text-white"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-glass-border)] bg-[var(--color-glass)] transition hover:-translate-y-1 hover:bg-[var(--color-primary)] hover:text-white"
                >
                  <Github size={20} />
                </a>
                <a
                  href={profile.socials.email}
                  aria-label="Email"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-glass-border)] bg-[var(--color-glass)] transition hover:-translate-y-1 hover:bg-[var(--color-primary)] hover:text-white"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
