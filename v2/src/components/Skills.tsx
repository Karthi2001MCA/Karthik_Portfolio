import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { skills } from "@/content/skills";

export default function Skills() {
  return (
    <section id="skills" className="bg-paper-2 px-6 py-24 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Skills" subtitle="Tools and techniques I work with.">
          Technical toolkit
        </SectionTitle>

        <div className="flex flex-col gap-10">
          {Object.entries(skills).map(([category, items], idx) => (
            <Reveal key={category} delay={idx * 0.05}>
              <div>
                <h3 className="mb-5 text-sm font-bold uppercase tracking-wide text-muted">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <div
                      key={skill.name}
                      className="card card-hover flex items-center gap-3 px-4 py-3"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={skill.icon}
                        alt=""
                        width={28}
                        height={28}
                        loading="lazy"
                        className="h-7 w-7 object-contain"
                      />
                      <span className="text-sm font-medium text-ink">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
