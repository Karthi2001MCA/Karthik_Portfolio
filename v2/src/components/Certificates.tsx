import { FileText, ExternalLink } from "lucide-react";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { certificates } from "@/content/certificates";
import { asset } from "@/lib/asset";

export default function Certificates() {
  return (
    <section id="certificates" className="px-6 py-24 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Credentials" subtitle="Verified certificates and degrees — click any card to view the full document.">
          Certifications
        </SectionTitle>

        <div className="grid gap-6 md:grid-cols-3">
          {certificates.map((cert, i) => {
            const href = asset(cert.file);
            return (
              <Reveal key={cert.file} delay={i * 0.07}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card card-hover group flex h-full flex-col overflow-hidden"
                >
                  {/* Live PDF preview (falls back to an icon where inline PDF isn't supported) */}
                  <div className="relative h-52 overflow-hidden border-b border-line bg-paper-2">
                    <object
                      data={`${href}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                      type="application/pdf"
                      aria-label={cert.title}
                      className="pointer-events-none absolute inset-0 h-full w-full"
                    >
                      <div className="flex h-full w-full items-center justify-center bg-accent-soft">
                        <FileText size={40} className="text-accent" />
                      </div>
                    </object>
                    <span className="absolute right-3 top-3 rounded-full bg-paper/90 p-2 text-accent shadow-sm backdrop-blur">
                      <ExternalLink size={16} />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-base font-bold leading-snug">{cert.title}</h3>
                    <p className="mt-1.5 flex-1 text-sm text-muted">{cert.issuer}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                      View certificate
                      <ExternalLink size={15} className="transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
