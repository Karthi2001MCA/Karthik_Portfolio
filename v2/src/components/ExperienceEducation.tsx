import Image from "next/image";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { experience, education } from "@/content/experience";

export default function ExperienceEducation() {
  return (
    <section id="experience" className="px-6 py-28 md:px-10">
      <div className="mx-auto max-w-[1200px]">
        <SectionTitle>Experience &amp; Education</SectionTitle>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Experience */}
          <div>
            <h3 className="mb-6 text-2xl font-bold text-[var(--color-secondary)]">
              Experience
            </h3>
            <div className="relative flex flex-col gap-6 border-l border-[var(--color-glass-border)] pl-6">
              {experience.map((exp, i) => (
                <Reveal key={exp.role + exp.company} delay={i * 0.08}>
                  <div className="glass-card p-6">
                    <span className="text-sm font-medium text-[var(--color-secondary)]">
                      {exp.period}
                    </span>
                    <h4 className="mt-2 text-lg font-bold">{exp.role}</h4>
                    <p className="text-[var(--color-text-muted)]">{exp.company}</p>
                    {exp.description && (
                      <p className="mt-3 text-sm text-[var(--color-text-muted)]">
                        {exp.description}
                      </p>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="mb-6 text-2xl font-bold text-[var(--color-secondary)]">
              Education
            </h3>
            <div className="flex flex-col gap-6">
              {education.map((edu, i) => (
                <Reveal key={edu.degree} delay={i * 0.08}>
                  <div className="glass-card flex items-center gap-5 p-6">
                    <Image
                      src={edu.image}
                      alt={edu.institution}
                      width={64}
                      height={64}
                      className="h-16 w-16 shrink-0 rounded-xl object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-[var(--color-pink)]">{edu.degree}</h4>
                      <p className="text-sm text-[var(--color-text-muted)]">
                        {edu.institution}
                      </p>
                      <p className="mt-1 text-sm font-semibold">{edu.detail}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
