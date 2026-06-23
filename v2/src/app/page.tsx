import QuantumBackground from "@/components/QuantumBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import ExperienceEducation from "@/components/ExperienceEducation";
import Projects from "@/components/Projects";
import MLDemo from "@/components/MLDemo";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <QuantumBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <MLDemo />
        <ExperienceEducation />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
