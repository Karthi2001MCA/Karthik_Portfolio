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

  return (
    <section id="contact" className="bg-paper-2/70 px-6 py-24 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Contact" subtitle="Have a role or project in mind? Let's talk.">
          Get in touch
        </SectionTitle>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Left: direct details */}
          <Reveal>
            <div className="card flex h-full flex-col justify-center gap-6 p-8">
              <div>
                <h3 className="text-lg font-bold">Let&apos;s connect</h3>
                <p className="mt-2 text-sm text-muted">
                  I&apos;m open to data science and ML roles, internships, and collaborations.
                </p>
              </div>
              <a
                href={profile.socials.email}
                className="flex items-center gap-3 text-sm font-medium text-ink hover:text-accent"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <Mail size={18} />
                </span>
                {profile.email}
              </a>
              <div className="flex gap-3">
                <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="icon-btn">
                  <Linkedin size={18} />
                </a>
                <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="icon-btn">
                  <Github size={18} />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="card flex flex-col gap-4 p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <input name="name" required placeholder="Your name" className="field" />
                <input name="email" type="email" required placeholder="Your email" className="field" />
              </div>
              <textarea name="message" required rows={5} placeholder="Your message" className="field resize-none" />
              <button type="submit" disabled={status === "sending"} className="btn btn-primary w-full disabled:opacity-60">
                {status === "sending" ? "Sending..." : "Send Message"}
                <Send size={17} />
              </button>

              {status === "ok" && (
                <p className="flex items-center gap-2 text-sm text-emerald-600">
                  <CheckCircle size={16} /> Thanks! Your email draft is ready to send.
                </p>
              )}
              {status === "error" && (
                <p className="flex items-center gap-2 text-sm text-red-600">
                  <AlertCircle size={16} /> Something went wrong — email me directly above.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
