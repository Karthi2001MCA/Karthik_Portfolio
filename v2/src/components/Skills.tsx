import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { skills } from "@/content/skills";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-28 md:px-10">
      <div className="mx-auto max-w-[1200px]">
        <SectionTitle>Skills</SectionTitle>
        <div className="flex flex-col gap-12">
          {Object.entries(skills).map(([category, items], idx) => (
            <Reveal key={category} delay={idx * 0.05}>
              <div>
                <h3 className="mb-6 border-l-4 border-[var(--color-pink)] pl-3 text-xl font-bold text-[var(--color-pink)]">
                  {category}
                </h3>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
                  {items.map((skill) => (
                    <div
                      key={skill.name}
                      className="glass-card flex flex-col items-center justify-center gap-3 p-5 text-center"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        width={48}
                        height={48}
                        loading="lazy"
                        className="h-12 w-12 object-contain drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]"
                      />
                      <span className="text-sm">{skill.name}</span>
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
