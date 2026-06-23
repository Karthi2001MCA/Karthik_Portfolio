"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#demo", label: "Live Demo" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(
      Boolean
    ) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive("#" + entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed left-1/2 top-4 z-50 flex w-[92%] max-w-[1200px] -translate-x-1/2 items-center justify-between rounded-full border border-[var(--color-glass-border)] bg-[rgba(2,2,12,0.7)] px-6 py-3 backdrop-blur-xl md:px-8">
      <a href="#home" className="flex items-center gap-2 text-xl font-extrabold md:text-2xl">
        <span className="text-secondary">◈</span> Karthik Babu
      </a>

      <nav className="hidden md:block">
        <ul className="flex gap-7">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm font-medium transition hover:text-[var(--color-text)] ${
                  active === l.href
                    ? "text-[var(--color-text)] [text-shadow:0_0_10px_var(--color-secondary)]"
                    : "text-[var(--color-text-muted)]"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        className="text-2xl md:hidden"
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        {open ? <X /> : <Menu />}
      </button>

      {open && (
        <nav className="absolute left-0 top-full mt-3 w-full rounded-3xl border border-[var(--color-glass-border)] bg-[rgba(2,2,12,0.95)] p-6 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col items-center gap-5">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
