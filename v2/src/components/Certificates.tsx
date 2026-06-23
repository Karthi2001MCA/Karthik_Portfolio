import SectionTitle from "./SectionTitle";
import { certificates } from "@/content/certificates";

const encode = (file: string) => `/images/certificates/${encodeURIComponent(file)}`;

function Row({ reverse }: { reverse?: boolean }) {
  // duplicate the list so the marquee loops seamlessly
  const items = [...certificates, ...certificates];
  return (
    <div
      className={`flex w-max gap-6 ${
        reverse ? "animate-[marquee-reverse_50s_linear_infinite]" : "animate-[marquee_50s_linear_infinite]"
      }`}
    >
      {items.map((cert, i) => (
        <div
          key={`${cert.id}-${i}`}
          className="group relative h-[200px] w-[300px] shrink-0 overflow-hidden rounded-xl border border-[var(--color-glass-border)] shadow-[0_5px_15px_rgba(0,0,0,0.3)]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={encode(cert.image)}
            alt={cert.name}
            loading="lazy"
            className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 px-3 text-center text-sm font-semibold opacity-0 transition group-hover:opacity-100">
            {cert.name}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Certificates() {
  return (
    <section id="certificates" className="py-28">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <SectionTitle>Certifications</SectionTitle>
      </div>
      <div className="flex flex-col gap-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <Row />
        <Row reverse />
      </div>
    </section>
  );
}
