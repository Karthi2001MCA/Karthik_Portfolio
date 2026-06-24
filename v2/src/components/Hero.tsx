"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";
import { profile } from "@/content/profile";
import { asset } from "@/lib/asset";

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const speed = deleting ? 35 : 70;

    const timeout = setTimeout(() => {
      const next = deleting
        ? current.slice(0, text.length - 1)
        : current.slice(0, text.length + 1);
      setText(next);

      if (!deleting && next === current) {
        setTimeout(() => setDeleting(true), 1400);
      } else if (deleting && next === "") {
        setDeleting(false);
        setWordIndex((i) => i + 1);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter([...profile.roles]);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-paper-2 px-6 pt-32 pb-20 md:px-10 md:pt-40 md:pb-28"
    >
      {/* soft accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-accent-soft blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="eyebrow mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Available for opportunities
          </span>

          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl">
            Karthik Babu
          </h1>

          <h2 className="mt-4 text-xl font-semibold text-body md:text-2xl">
            I&apos;m a{" "}
            <span className="text-accent">{typed}</span>
            <span className="ml-0.5 inline-block w-0.5 animate-pulse bg-accent align-middle" style={{ height: "1.1em" }} />
          </h2>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {profile.about}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <Download size={18} /> Download Resume
            </a>
          </div>

          <div className="mt-8 flex gap-3">
            <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="icon-btn">
              <Linkedin size={20} />
            </a>
            <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="icon-btn">
              <Github size={20} />
            </a>
            <a href={profile.socials.email} aria-label="Email" className="icon-btn">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Portrait */}
        <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
          <div className="absolute inset-0 -rotate-3 rounded-[2rem] bg-accent/10" aria-hidden />
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-paper shadow-[0_30px_60px_-30px_rgba(15,23,42,0.3)]">
            <Image
              src={asset(profile.profileImage)}
              alt={profile.name}
              width={520}
              height={620}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
