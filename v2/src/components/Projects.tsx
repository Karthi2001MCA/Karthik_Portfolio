import Image from "next/image";
import Link from "next/link";
import { Eye, Code, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { projects } from "@/content/projects";
import { asset } from "@/lib/asset";

export default function Projects() {
  return (
    <section id="projects" className="bg-paper px-6 py-24 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Work" subtitle="Selected projects and case studies.">
          Featured projects
        </SectionTitle>

        <div className="grid gap-7 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.06}>
              <article className="card card-hover flex h-full flex-col overflow-hidden">
                <Link href={`/projects/${project.slug}`} className="group block overflow-hidden">
                  <Image
                    src={asset(project.image)}
                    alt={project.name}
                    width={600}
                    height={340}
                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </Link>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg font-bold">{project.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.desc}</p>

                  <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-line pt-4">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:gap-2.5"
                    >
                      Case study <ArrowRight size={15} className="transition-all" />
                    </Link>
                    {project.links.view && (
                      <a
                        href={project.links.view}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink"
                      >
                        <Eye size={15} /> Live
                      </a>
                    )}
                    {project.links.code && (
                      <a
                        href={project.links.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink"
                      >
                        <Code size={15} /> Code
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
