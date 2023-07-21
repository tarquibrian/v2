import Clients from "./sections/clients";
import Hero from "./sections/hero";
import Services from "./sections/services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <Services />
    </main>
  );
}
