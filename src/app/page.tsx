import Clients from "./sections/clients";
import Hero from "./sections/hero";
import How from "./sections/how";
import Projects from "./sections/projects";
import Services from "./sections/services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <Services />
      <Projects />
      <How />
    </main>
  );
}
