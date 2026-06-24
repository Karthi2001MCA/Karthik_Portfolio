import { FileText, ExternalLink } from "lucide-react";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { certificates } from "@/content/certificates";
import { asset } from "@/lib/asset";

export default function Certificates() {
  return (
    <section id="certificates" className="px-6 py-24 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Credentials" subtitle="Verified certificates and degrees.">
          Certifications
        </SectionTitle>

        <div className="grid gap-6 md:grid-cols-3">
          {certificates.map((cert, i) => (
            <Reveal key={cert.file} delay={i * 0.07}>
              <a
                href={asset(cert.file)}
                target="_blank"
                rel="noopener noreferrer"
                className="card card-hover group flex h-full flex-col p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <FileText size={22} />
                </span>
                <h3 className="mt-5 text-base font-bold leading-snug">{cert.title}</h3>
                <p className="mt-1.5 flex-1 text-sm text-muted">{cert.issuer}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  View certificate
                  <ExternalLink size={15} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
