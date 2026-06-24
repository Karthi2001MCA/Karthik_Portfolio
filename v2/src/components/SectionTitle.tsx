import Reveal from "./Reveal";

export default function SectionTitle({
  eyebrow,
  children,
  subtitle,
}: {
  eyebrow?: string;
  children: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      {eyebrow && <span className="eyebrow mb-3">{eyebrow}</span>}
      <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">{children}</h2>
      {subtitle && <p className="mt-4 text-base text-muted md:text-lg">{subtitle}</p>}
    </Reveal>
  );
}
