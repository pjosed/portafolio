import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />

      <div className="h-px w-1/2 mx-auto bg-white/10 my-10" />

      <About />

      <div className="h-px w-1/2 mx-auto bg-white/10 my-10" />

      <Projects />

      <div className="h-px w-1/2 mx-auto bg-white/10 my-10" />

      <Skills />

      <div className="h-px w-1/2 mx-auto bg-white/10 my-10" />

      <Contact />
    </main>
  );
}