import { Metadata } from "next";
import Head from "next/head";
import About from "@/components/about/about";
import Contact from "@/components/contact/contact";
import EventsPage from "@/components/events/events";
import Gallery from "@/components/gallery/gallery";
import Hero from "@/components/hero/hero";
import Publication from "@/components/publication/publication";
import Research from "@/components/research/research";
import SupervisionPage from "@/components/supervision/supervision";

export const metadata: Metadata = {
  title: "Prof. Manish K. Verma | Sociology Researcher & Academic Leader",
  description: "Welcome to the academic portfolio of Prof. Manish K. Verma - Distinguished sociologist with 25+ years of expertise in environmental sociology, sustainable development, policy research, and academic leadership. Explore publications, research projects, and student supervision achievements.",
  openGraph: {
    title: "Prof. Manish K. Verma | Sociology Researcher",
    description: "Distinguished sociologist specializing in environmental sociology and sustainable development policy research.",
    url: "https://prof-manish-k-verma.com",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Prof. Manish K. Verma's Academic Portfolio",
              url: "https://prof-manish-k-verma.com",
              logo: "https://prof-manish-k-verma.com/assets/logo.png",
              description: "Academic portfolio showcasing research, publications, and educational leadership",
              sameAs: [
                "https://orcid.org",
                "https://scholar.google.com",
                "https://linkedin.com",
                "https://twitter.com",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91",
                contactType: "Academic Inquiry",
              },
            }),
          }}
        />
      </Head>
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
