import Clients from "./sections/clients";
import Contact from "./sections/contact";
import Hero from "./sections/hero";
import How from "./sections/how";
import Projects from "./sections/projects";
import Services from "./sections/services";
import Values from "./sections/values";

export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <Services />
      <Projects />
      <How />
      <Values />
      <Contact />
    </main>
  );
}
