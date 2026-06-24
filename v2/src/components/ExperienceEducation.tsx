import Image from "next/image";
import { Briefcase } from "lucide-react";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { experience, education } from "@/content/experience";
import { asset } from "@/lib/asset";

export default function ExperienceEducation() {
  return (
    <section id="experience" className="bg-paper-2/70 px-6 py-24 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Journey" subtitle="Where I've worked and studied.">
          Experience &amp; Education
        </SectionTitle>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Experience timeline */}
          <div>
            <h3 className="mb-6 text-lg font-bold">Experience</h3>
            <div className="relative flex flex-col gap-5 pl-6">
              <span className="absolute left-[5px] top-2 bottom-2 w-px bg-line" aria-hidden />
              {experience.map((exp, i) => (
                <Reveal key={exp.role + exp.company} delay={i * 0.08}>
                  <div className="relative">
                    <span className="absolute -left-[23px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-paper" aria-hidden />
                    <div className="card p-6">
                      <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                        {exp.period}
                      </span>
                      <h4 className="mt-1.5 text-base font-bold">{exp.role}</h4>
                      <p className="flex items-center gap-1.5 text-sm text-muted">
                        <Briefcase size={14} /> {exp.company}
                      </p>
                      {exp.description && (
                        <p className="mt-3 text-sm leading-relaxed text-muted">{exp.description}</p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="mb-6 text-lg font-bold">Education</h3>
            <div className="flex flex-col gap-5">
              {education.map((edu, i) => (
                <Reveal key={edu.degree} delay={i * 0.08}>
                  <div className="card flex items-center gap-4 p-5">
                    <Image
                      src={asset(edu.image)}
                      alt={edu.institution}
                      width={56}
                      height={56}
                      className="h-14 w-14 shrink-0 rounded-xl border border-line object-cover"
                    />
                    <div className="min-w-0">
                      <h4 className="text-sm font-bold leading-snug">{edu.degree}</h4>
                      <p className="text-sm text-muted">{edu.institution}</p>
                      <p className="mt-1 text-xs font-semibold text-accent">{edu.detail}</p>
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
