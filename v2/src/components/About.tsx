import { Mail, Phone, MapPin, GraduationCap } from "lucide-react";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { profile } from "@/content/profile";

export default function About() {
  const facts = [
    { icon: Mail, label: "Email", value: profile.email },
    { icon: Phone, label: "Phone", value: profile.phone },
    { icon: MapPin, label: "Location", value: profile.location },
    { icon: GraduationCap, label: "Degree", value: profile.degree },
  ];

  const stats = [
    { value: "2", label: "Internships" },
    { value: "4+", label: "ML Projects" },
    { value: "MCA", label: "Postgraduate" },
  ];

  return (
    <section id="about" className="bg-paper px-6 py-24 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="About" subtitle="Turning data into decisions.">
          A bit about me
        </SectionTitle>

        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <div className="card h-full p-8">
              <h3 className="text-xl font-bold">Aspiring AI Engineer from Kerala, India</h3>
              <p className="mt-4 leading-relaxed text-muted">{profile.about}</p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {facts.map((f) => (
                  <div key={f.label} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                      <f.icon size={17} />
                    </span>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold uppercase tracking-wide text-muted">
                        {f.label}
                      </div>
                      <div className="truncate text-sm font-medium text-ink">{f.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid h-full grid-cols-3 gap-4 lg:grid-cols-1">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="card flex flex-col items-center justify-center p-6 text-center lg:flex-1"
                >
                  <div className="text-3xl font-extrabold text-accent">{s.value}</div>
                  <div className="mt-1 text-sm text-muted">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
