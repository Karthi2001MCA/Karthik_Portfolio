"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { profile } from "@/content/profile";

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
        setTimeout(() => setDeleting(true), 1200);
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
      className="relative flex min-h-screen items-center px-6 pt-24 md:px-10"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
            Hello,
            <br />
            I&apos;m <span className="text-gradient">{profile.name}</span>
          </h1>

          <h2 className="mt-6 text-3xl font-bold md:text-4xl">
            I am a{" "}
            <span className="text-[var(--color-violet)]">{typed}</span>
            <span className="animate-pulse text-[var(--color-secondary)]">|</span>
          </h2>

          <p className="mt-6 text-lg text-[var(--color-text-muted)] md:text-xl">
            {profile.tagline}
          </p>

          <div className="mt-8 flex gap-4">
            <SocialIcon href={profile.socials.linkedin} label="LinkedIn">
              <Linkedin size={20} />
            </SocialIcon>
            <SocialIcon href={profile.socials.github} label="GitHub">
              <Github size={20} />
            </SocialIcon>
            <SocialIcon href={profile.socials.email} label="Email">
              <Mail size={20} />
            </SocialIcon>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="btn-glow">
              View My Work <ArrowDown size={18} />
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-glass-border)] bg-[var(--color-glass)] text-[var(--color-text)] transition hover:-translate-y-1 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white hover:shadow-[0_0_15px_var(--color-primary)]"
    >
      {children}
    </a>
  );
}
