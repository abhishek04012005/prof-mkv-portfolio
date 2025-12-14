import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/navbar";
import Footer from "@/components/footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prof. Manish K. Verma | Sociology Researcher, Academic Excellence",
  description: "Explore the academic portfolio of Prof. Manish K. Verma - distinguished sociologist with 25+ years of research in environmental sociology, sustainable development, and social change. PhD advisor, published researcher, and thought leader.",
  keywords: [
    "Prof. Manish K. Verma",
    "Sociology",
    "Environmental Sociology",
    "Sustainable Development",
    "Research",
    "Academia",
    "Publications",
    "PhD Supervision",
    "Social Justice",
    "Policy Research",
  ],
  authors: [{ name: "Prof. Manish K. Verma" }],
  creator: "Prof. Manish K. Verma",
  publisher: "Prof. Manish K. Verma",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://prof-manish-k-verma.com",
    siteName: "Prof. Manish K. Verma - Academic Portfolio",
    title: "Prof. Manish K. Verma | Sociology Researcher",
    description: "Distinguished sociologist with expertise in environmental sociology, sustainable development, and social policy research.",
    images: [
      {
        url: "https://prof-manish-k-verma.com/assets/professor.png",
        width: 1200,
        height: 630,
        alt: "Prof. Manish K. Verma",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prof. Manish K. Verma | Sociology Researcher",
    description: "Distinguished sociologist with expertise in environmental sociology and sustainable development.",
    images: ["https://prof-manish-k-verma.com/assets/professor.png"],
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://prof-manish-k-verma.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="x-ua-compatible" content="IE=edge" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://prof-manish-k-verma.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* JSON-LD Schema for Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Prof. Manish K. Verma",
              jobTitle: "Professor of Sociology",
              affiliation: {
                "@type": "Organization",
                name: "Babasaheb Bhimrao Ambedkar University",
                url: "https://www.bbau.ac.in",
              },
              email: "contact@prof-manish-k-verma.com",
              knowsAbout: [
                "Environmental Sociology",
                "Sustainable Development",
                "Social Policy",
                "Rural Sociology",
                "Development Studies",
              ],
              url: "https://prof-manish-k-verma.com",
              sameAs: [
                "https://orcid.org",
                "https://scholar.google.com",
                "https://linkedin.com",
                "https://twitter.com",
              ],
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
