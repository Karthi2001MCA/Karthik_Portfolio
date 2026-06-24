import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, Eye, Code, CheckCircle2 } from "lucide-react";
import { projects } from "@/content/projects";
import { asset } from "@/lib/asset";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.name,
    description: project.tagline,
    openGraph: { title: project.name, description: project.tagline, images: [project.image] },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const cs = project.caseStudy;

  return (
    <article className="mx-auto max-w-3xl px-6 py-20 md:px-10">
      <Link
        href="/#projects"
        className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-accent"
      >
        <ArrowLeft size={16} /> Back to projects
      </Link>

      <div className="mb-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="chip">
            {tag}
          </span>
        ))}
      </div>

      <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">{project.name}</h1>
      <p className="mt-3 text-lg text-muted">{project.tagline}</p>

      <div className="mt-8 overflow-hidden rounded-2xl border border-line">
        <Image
          src={asset(project.image)}
          alt={project.name}
          width={900}
          height={500}
          className="w-full object-cover"
        />
      </div>

      {cs && (
        <div className="mt-12 flex flex-col gap-12">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {cs.metrics.map((m) => (
              <div key={m.label} className="card p-6 text-center">
                <div className="text-lg font-bold text-accent">{m.value}</div>
                <div className="mt-1 text-sm text-muted">{m.label}</div>
              </div>
            ))}
          </div>

          <Block title="The Problem">
            <p className="leading-relaxed text-muted">{cs.problem}</p>
          </Block>

          <Block title="My Approach">
            <ul className="flex flex-col gap-3">
              {cs.approach.map((step) => (
                <li key={step} className="flex gap-3 text-muted">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-accent" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </Block>

          <Block title="Tech Stack">
            <div className="flex flex-wrap gap-2">
              {cs.stack.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </Block>

          <Block title="Outcome">
            <p className="leading-relaxed text-muted">{cs.outcome}</p>
          </Block>
        </div>
      )}

      <div className="mt-12 flex flex-wrap gap-4">
        {project.links.view && (
          <a href={project.links.view} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <Eye size={18} /> View Live
          </a>
        )}
        {project.links.code && (
          <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <Code size={18} /> Source Code
          </a>
        )}
      </div>
    </article>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold">{title}</h2>
      {children}
    </section>
  );
}
