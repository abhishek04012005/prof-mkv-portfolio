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
  title: "Prof. (Dr.) Manish K. Verma | Sociology Researcher & Academic Leader",
  description: "Welcome to the academic portfolio of Prof. (Dr.) Manish K. Verma - Distinguished sociologist with 25+ years of expertise in environmental sociology, sustainable development, policy research, and academic leadership. Explore publications, research projects, and student supervision achievements.",
  keywords: [
    "Prof. (Dr.) Manish K. Verma",
    "Sociology",
    "Environmental Sociology",
    "Sustainable Development",
    "Research",
    "Academic Excellence",
    "Publications",
    "Ph.D Supervision",
    "Social Justice",
    "Policy Research",
  ],
  openGraph: {
    title: "Prof. (Dr.) Manish K. Verma | Sociology Researcher & Academic Leader",
    description: "Distinguished sociologist with 25+ years of research expertise in environmental sociology and sustainable development. Explore publications, research, and academic leadership.",
    url: "https://manishkverma.in",
    type: "website",
    locale: "en_IN",
    siteName: "Prof. (Dr.) Manish K. Verma - Academic Portfolio",
    images: [
      {
        url: "https://manishkverma.in/assets/hero.png",
        width: 1200,
        height: 630,
        alt: "Prof. (Dr.) Manish K. Verma - Sociology Researcher",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prof. (Dr.) Manish K. Verma | Sociology Researcher",
    description: "Distinguished sociologist with expertise in environmental sociology and sustainable development.",
    images: ["https://manishkverma.in/assets/hero.png"],
  },
  alternates: {
    canonical: "https://manishkverma.in",
  },
};

export default function Home() {
  return (
    <>
      <Head>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Prof. (Dr.) Manish K. Verma's Academic Portfolio",
              url: "https://manishkverma.in",
              logo: "https://manishkverma.in/assets/logo.png",
              description: "Academic portfolio of Prof. (Dr.) Manish K. Verma - Distinguished sociologist with expertise in environmental sociology and sustainable development",
              sameAs: [
                "https://scholar.google.com",
                "https://linkedin.com/in/prof-manish-k-verma",
                "https://twitter.com/manishkverma",
                "https://orcid.org",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91",
                contactType: "Academic Inquiry",
              },
              affiliation: {
                "@type": "EducationalOrganization",
                name: "Indian Institute of Technology, Delhi",
                url: "https://iitd.ac.in",
              },
            }),
          }}
        />

        {/* Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Prof. (Dr.) Manish K. Verma",
              jobTitle: "Professor of Sociology",
              url: "https://manishkverma.in",
              description: "Distinguished sociologist with 25+ years of research in environmental sociology, sustainable development, and social change",
              image: "https://manishkverma.in/assets/professor.png",
              worksFor: {
                "@type": "EducationalOrganization",
                name: "Indian Institute of Technology, Delhi",
                url: "https://iitd.ac.in",
              },
              knowsAbout: [
                "Environmental Sociology",
                "Sustainable Development",
                "Social Research",
                "Academic Leadership",
                "Social Justice",
                "Policy Research",
              ],
              sameAs: [
                "https://scholar.google.com",
                "https://linkedin.com",
                "https://twitter.com",
              ],
            }),
          }}
        />

        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Prof. (Dr.) Manish K. Verma - Academic Portfolio",
              url: "https://manishkverma.in",
              description: "Comprehensive academic portfolio showcasing publications, research projects, student supervision, and professional achievements",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://manishkverma.in/search?q={search_term_string}",
                },
                query_input: "required name=search_term_string",
              },
            }),
          }}
        />

        {/* BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://manishkverma.in",
                },
              ],
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
