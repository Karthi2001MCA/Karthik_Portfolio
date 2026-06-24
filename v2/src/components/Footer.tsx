import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/content/profile";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper-2">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <a href="#home" className="text-lg font-extrabold tracking-tight text-ink">
            Karthik Babu<span className="text-accent">.</span>
          </a>
          <p className="mt-1 text-sm text-muted">
            AI &amp; Data Scientist · {profile.location}
          </p>
        </div>

        <div className="flex gap-3">
          <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="icon-btn">
            <Linkedin size={18} />
          </a>
          <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="icon-btn">
            <Github size={18} />
          </a>
          <a href={profile.socials.email} aria-label="Email" className="icon-btn">
            <Mail size={18} />
          </a>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-6 py-5 text-center text-sm text-muted">
          &copy; {new Date().getFullYear()} Karthik Babu. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
