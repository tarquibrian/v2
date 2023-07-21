import Clients from "./sections/clients";
import Hero from "./sections/hero";
import Projects from "./sections/projects";
import Services from "./sections/services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <Services />
      <Projects />
    </main>
  );
}
