import Reveal from "./Reveal";

export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <Reveal>
      <h2 className="text-gradient mb-14 text-center text-4xl font-extrabold md:text-5xl [text-shadow:0_0_20px_rgba(157,0,255,0.3)]">
        {children}
      </h2>
    </Reveal>
  );
}
