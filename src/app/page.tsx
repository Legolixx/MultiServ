import About from "@/components/About";
import Hero from "@/components/Hero"
import Services from "@/components/ServicesIcons";
import Work from "@/components/ServicesList";

export default function Home() {
  return (
    <section>
      <Hero />
      <Services />
      <Work />
      <About />
    </section>
  );
}
