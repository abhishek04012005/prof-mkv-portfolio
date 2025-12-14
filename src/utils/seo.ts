// SEO utility functions for schema.org structured data

export const generatePersonSchema = (data: {
  name: string;
  title: string;
  department: string;
  university: string;
  email: string;
  bio: string;
  image: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: data.name,
  jobTitle: data.title,
  affiliation: {
    "@type": "Organization",
    name: data.university,
    department: data.department,
  },
  email: data.email,
  image: data.image,
  url: data.url,
  description: data.bio,
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Academic Institutions",
  },
  knowsAbout: [
    "Environmental Sociology",
    "Sustainable Development",
    "Social Policy",
    "Rural Sociology",
    "Development Studies",
    "Gender Studies",
    "Urban Sociology",
  ],
});

export const generatePublicationSchema = (data: {
  title: string;
  authors: string;
  datePublished: string;
  publisher?: string;
  journal?: string;
  url?: string;
  abstract?: string;
  doi?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  headline: data.title,
  author: {
    "@type": "Person",
    name: data.authors,
  },
  datePublished: data.datePublished,
  publisher: data.publisher
    ? {
        "@type": "Organization",
        name: data.publisher,
      }
    : undefined,
  journalName: data.journal,
  url: data.url,
  description: data.abstract,
  identifier: data.doi
    ? {
        "@type": "PropertyValue",
        propertyID: "doi",
        value: data.doi,
      }
    : undefined,
});

export const generateBreadcrumbSchema = (items: Array<{
  name: string;
  url: string;
}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const generateResearchProjectSchema = (data: {
  name: string;
  description: string;
  startDate?: string;
  endDate?: string;
  status: string;
  principal: string;
  funding?: string;
  url?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "ResearchProject",
  name: data.name,
  description: data.description,
  startDate: data.startDate,
  endDate: data.endDate,
  projectStatus: data.status,
  principalInvestigator: {
    "@type": "Person",
    name: data.principal,
  },
  funding: data.funding
    ? {
        "@type": "Grant",
        name: data.funding,
      }
    : undefined,
  url: data.url,
});

export const generateEducationSchema = (data: {
  degree: string;
  field: string;
  university: string;
  year: number;
}) => ({
  "@context": "https://schema.org",
  "@type": "EducationalOccupationalCredential",
  credentialCategory: data.degree,
  name: `${data.degree} in ${data.field}`,
  educationalLevel: data.degree,
  recognizedBy: {
    "@type": "EducationalOrganization",
    name: data.university,
  },
  dateCreated: `${data.year}`,
});

// Breadcrumb helper
export const generateBreadcrumbs = (pathname: string) => {
  const paths = pathname.split("/").filter((p) => p);

  const breadcrumbs = [
    { name: "Home", url: "/" },
    ...paths.map((path, index) => {
      const url = "/" + paths.slice(0, index + 1).join("/");
      const name = path
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      return { name, url };
    }),
  ];

  return breadcrumbs;
};

// Meta tags generator
export const generateMetaTags = (data: {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
}) => ({
  title: data.title,
  description: data.description,
  keywords: data.keywords?.join(", "),
  openGraph: {
    title: data.title,
    description: data.description,
    image: data.image,
    url: data.url,
    type: data.type || "website",
  },
  twitter: {
    card: "summary_large_image",
    title: data.title,
    description: data.description,
    image: data.image,
  },
});
