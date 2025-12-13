import About from "@/components/about/about";
import Contact from "@/components/contact/contact";
import EventsPage from "@/components/events/events";
import Gallery from "@/components/gallery/gallery";
import Hero from "@/components/hero/hero";
import Publication from "@/components/publication/publication";
import Research from "@/components/research/research";
import SupervisionPage from "@/components/supervision/supervision";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Publication />
      <Research />
      <SupervisionPage />
      <EventsPage />
      <Gallery />
      <Contact />
    </>
  );
}
