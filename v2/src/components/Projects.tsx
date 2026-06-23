import Image from "next/image";
import Link from "next/link";
import { Eye, Code, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { projects } from "@/content/projects";
import { asset } from "@/lib/asset";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-28 md:px-10">
      <div className="mx-auto max-w-[1200px]">
        <SectionTitle>Projects</SectionTitle>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.06}>
              <article className="glass-card flex h-full flex-col overflow-hidden p-6">
                <Link href={`/projects/${project.slug}`} className="group block">
                  <div className="overflow-hidden rounded-xl">
                    <Image
                      src={asset(project.image)}
                      alt={project.name}
                      width={600}
                      height={340}
                      className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>

                <div className="mt-5 flex flex-1 flex-col">
                  <div className="mb-2 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[var(--color-glass-border)] px-2.5 py-0.5 text-xs text-[var(--color-secondary)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-[var(--color-pink)]">
                    {project.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-[var(--color-text-muted)]">
                    {project.desc}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="btn-glow !px-4 !py-2 text-sm"
                    >
                      Case Study <ArrowRight size={16} />
                    </Link>
                    {project.links.view && (
                      <a
                        href={project.links.view}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-secondary)]"
                      >
                        <Eye size={16} /> View
                      </a>
                    )}
                    {project.links.code && (
                      <a
                        href={project.links.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-secondary)]"
                      >
                        <Code size={16} /> Code
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
