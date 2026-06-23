import Image from "next/image";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { profile } from "@/content/profile";

export default function About() {
  const facts = [
    { label: "Email", value: profile.email },
    { label: "Phone", value: profile.phone },
    { label: "Location", value: profile.location },
    { label: "Degree", value: profile.degree },
  ];

  return (
    <section id="about" className="px-6 py-28 md:px-10">
      <div className="mx-auto max-w-[1200px]">
        <SectionTitle>About Me</SectionTitle>
        <Reveal>
          <div className="glass-card flex flex-col items-center gap-10 p-8 md:flex-row md:p-10">
            <div className="w-full max-w-xs shrink-0 overflow-hidden rounded-2xl shadow-[0_0_25px_rgba(0,170,255,0.2)]">
              <Image
                src={profile.profileImage}
                alt={profile.name}
                width={400}
                height={500}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-[var(--color-pink)]">
                Aspiring AI Engineer from Kerala, India
              </h3>
              <p className="mt-5 text-[var(--color-text-muted)]">{profile.about}</p>
              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {facts.map((f) => (
                  <div key={f.label}>
                    <strong>{f.label}:</strong>{" "}
                    <span className="text-[var(--color-text-muted)]">{f.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
