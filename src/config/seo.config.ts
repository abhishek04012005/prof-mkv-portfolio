// SEO Configuration and Analytics Setup Guide
// This file documents the comprehensive SEO implementation for Prof. Manish K. Verma's portfolio

export const SEO_CONFIG = {
  // Site-wide SEO configuration
  site: {
    name: 'Prof. Manish K. Verma - Academic Portfolio',
    url: 'https://prof-manish-k-verma.com',
    author: 'Prof. Manish K. Verma',
    description: 'Distinguished sociologist with 25+ years of research in environmental sociology, sustainable development, and social change. PhD advisor, published researcher, and thought leader.',
    locale: 'en_IN',
    language: 'en',
  },

  // Primary Keywords
  keywords: {
    primary: [
      'Prof. Manish K. Verma',
      'Sociology',
      'Environmental Sociology',
      'Sustainable Development',
      'Social Research',
      'Academic Leadership',
    ],
    secondary: [
      'PhD Supervision',
      'Research Publications',
      'Social Justice',
      'Policy Research',
      'Environmental Justice',
      'Development Studies',
      'IIT Delhi',
      'Computer Science',
    ],
  },

  // Category-specific SEO
  categories: {
    publications: {
      title: 'Publications | Prof. Manish K. Verma',
      description: 'Browse published books, edited volumes, articles, and book reviews by Prof. Manish K. Verma on environmental sociology and sustainable development.',
      keywords: ['publications', 'books', 'research articles', 'scholarly work', 'Prof. Manish K. Verma'],
      schema: 'ScholarlyArticle',
    },
    research: {
      title: 'Research Projects & Interests | Prof. Manish K. Verma',
      description: 'Explore completed and ongoing research projects, research interests, and research outputs in environmental sociology and sustainable development.',
      keywords: ['research', 'research projects', 'research interests', 'research outputs', 'Prof. Manish K. Verma'],
      schema: 'ResearchProject',
    },
    supervision: {
      title: 'PhD & Student Supervision | Prof. Manish K. Verma',
      description: 'Details about PhD students supervised, dissertation guidance, and academic mentoring by Prof. Manish K. Verma.',
      keywords: ['supervision', 'PhD students', 'academic mentoring', 'dissertation', 'Prof. Manish K. Verma'],
      schema: 'EducationalOccupationalCredential',
    },
    events: {
      title: 'Events & Workshops | Prof. Manish K. Verma',
      description: 'Conferences, workshops, seminars, and public engagement events organized or coordinated by Prof. Manish K. Verma.',
      keywords: ['events', 'conferences', 'workshops', 'seminars', 'Prof. Manish K. Verma'],
      schema: 'Event',
    },
    media: {
      title: 'Media & Publications Hub | Prof. Manish K. Verma',
      description: 'Comprehensive media collection including books, articles, projects, presentations, and events from Prof. Manish K. Verma.',
      keywords: ['media', 'publications', 'presentations', 'projects', 'Prof. Manish K. Verma'],
      schema: 'CreativeWork',
    },
  },

  // Open Graph Configuration
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteTitle: 'Prof. Manish K. Verma - Academic Portfolio',
    imageUrl: 'https://prof-manish-k-verma.com/assets/professor.png',
    imageWidth: 1200,
    imageHeight: 630,
  },

  // Twitter Card Configuration
  twitter: {
    handle: '@manishkverma', // Update with actual handle if available
    site: '@manishkverma',
    card: 'summary_large_image',
  },

  // Structured Data (Schema.org)
  schema: {
    organization: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Prof. Manish K. Verma',
      url: 'https://prof-manish-k-verma.com',
      logo: 'https://prof-manish-k-verma.com/assets/logo.png',
      sameAs: [
        'https://orcid.org/0000-0000-0000-0000', // Add actual ORCID
        'https://scholar.google.com/citations?user=YOUR_ID',
        'https://www.linkedin.com/in/YOUR_ID',
        'https://twitter.com/manishkverma',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-011-XXXX-XXXX',
        contactType: 'Academic Inquiry',
        email: 'manish@iitd.ac.in', // Update with actual email
      },
      affiliation: {
        '@type': 'EducationalOrganization',
        name: 'Indian Institute of Technology, Delhi',
        url: 'https://iitd.ac.in',
        department: 'Department of Computer Science',
      },
    },

    person: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Prof. Manish K. Verma',
      jobTitle: 'Professor of Sociology',
      email: 'manish@iitd.ac.in',
      worksFor: {
        '@type': 'EducationalOrganization',
        name: 'Indian Institute of Technology, Delhi',
      },
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'University Name', // Add actual university
      },
      knowsAbout: [
        'Environmental Sociology',
        'Sustainable Development',
        'Social Research',
        'Academic Leadership',
        'Social Justice',
        'Policy Research',
      ],
      sameAs: [
        'https://scholar.google.com/citations?user=YOUR_ID',
        'https://www.linkedin.com/in/YOUR_ID',
      ],
    },
  },

  // Sitemap Configuration
  sitemap: {
    baseUrl: 'https://prof-manish-k-verma.com',
    routes: [
      { path: '/', priority: 1.0, changefreq: 'weekly' },
      { path: '/publications/books-published', priority: 0.9, changefreq: 'monthly' },
      { path: '/publications/books-edited', priority: 0.9, changefreq: 'monthly' },
      { path: '/publications/articles', priority: 0.9, changefreq: 'monthly' },
      { path: '/publications/book-reviews', priority: 0.8, changefreq: 'monthly' },
      { path: '/research/completed-projects', priority: 0.9, changefreq: 'monthly' },
      { path: '/research/ongoing-projects', priority: 0.9, changefreq: 'monthly' },
      { path: '/research/interests', priority: 0.8, changefreq: 'monthly' },
      { path: '/research/outputs', priority: 0.8, changefreq: 'monthly' },
      { path: '/supervision/phd', priority: 0.9, changefreq: 'monthly' },
      { path: '/supervision/mphil', priority: 0.8, changefreq: 'monthly' },
      { path: '/events', priority: 0.8, changefreq: 'biweekly' },
      { path: '/media', priority: 0.8, changefreq: 'monthly' },
    ],
  },

  // Analytics & Verification
  analytics: {
    google: {
      trackingId: 'G-XXXXXXXXXX', // Add actual Google Analytics ID
      tagManager: 'GTM-XXXXXXX', // Add actual GTM ID
    },
    verification: {
      google: 'google-site-verification-code',
      bing: 'bing-site-verification-code',
    },
  },

  // Robots & Crawling Configuration
  robots: {
    index: true,
    follow: true,
    maxImagePreview: 'large',
    maxSnippet: -1,
    maxVideoPreview: -1,
  },

  // Performance & SEO Best Practices
  performance: {
    targetLCP: 2.5, // Largest Contentful Paint (seconds)
    targetFID: 100, // First Input Delay (milliseconds)
    targetCLS: 0.1, // Cumulative Layout Shift
  },

  // Content Strategy
  contentStrategy: {
    publication: {
      metaLength: { title: 60, description: 160 },
      updateFrequency: 'monthly',
      requiredFields: ['title', 'year', 'authors', 'keywords'],
    },
    research: {
      metaLength: { title: 60, description: 160 },
      updateFrequency: 'monthly',
      requiredFields: ['title', 'year', 'description', 'keywords'],
    },
    supervision: {
      metaLength: { title: 60, description: 160 },
      updateFrequency: 'quarterly',
      requiredFields: ['studentName', 'year', 'researchArea'],
    },
  },
};

// Rich Snippet Recommendations
export const RICH_SNIPPETS = {
  article: {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    headline: 'Article Title',
    author: {
      '@type': 'Person',
      name: 'Prof. Manish K. Verma',
    },
    datePublished: '2024-01-01',
    description: 'Article description',
    keywords: 'keyword1, keyword2',
    publisher: {
      '@type': 'Organization',
      name: 'Journal/Publisher Name',
    },
  },

  event: {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Event Name',
    startDate: '2024-01-01T10:00:00',
    endDate: '2024-01-01T16:00:00',
    eventLocation: {
      '@type': 'Place',
      name: 'Venue Name',
      address: 'Address',
    },
    description: 'Event description',
    organizer: {
      '@type': 'Person',
      name: 'Prof. Manish K. Verma',
    },
  },

  breadcrumb: {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://prof-manish-k-verma.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Category',
        item: 'https://prof-manish-k-verma.com/category',
      },
    ],
  },
};

// SEO Checklist
export const SEO_CHECKLIST = [
  // On-Page SEO
  { category: 'On-Page', item: 'Unique title tags (50-60 characters)', status: '✅' },
  { category: 'On-Page', item: 'Meta descriptions (150-160 characters)', status: '✅' },
  { category: 'On-Page', item: 'H1 tags per page', status: '✅' },
  { category: 'On-Page', item: 'Internal linking strategy', status: '⚠️' },
  { category: 'On-Page', item: 'Image alt text', status: '⚠️' },

  // Technical SEO
  { category: 'Technical', item: 'Responsive design', status: '✅' },
  { category: 'Technical', item: 'Fast page load (< 3s)', status: '✅' },
  { category: 'Technical', item: 'Mobile-friendly', status: '✅' },
  { category: 'Technical', item: 'XML sitemap', status: '✅' },
  { category: 'Technical', item: 'Robots.txt', status: '✅' },
  { category: 'Technical', item: 'Canonical URLs', status: '⚠️' },
  { category: 'Technical', item: 'HTTPS enabled', status: '✅' },

  // Structured Data
  { category: 'Structured Data', item: 'Schema.org markup', status: '✅' },
  { category: 'Structured Data', item: 'Rich snippets', status: '⚠️' },
  { category: 'Structured Data', item: 'Open Graph tags', status: '✅' },
  { category: 'Structured Data', item: 'Twitter Card tags', status: '✅' },

  // Content Strategy
  { category: 'Content', item: 'Keyword research', status: '✅' },
  { category: 'Content', item: 'Long-form content', status: '✅' },
  { category: 'Content', item: 'Regular updates', status: '⚠️' },
  { category: 'Content', item: 'Internal linking', status: '⚠️' },

  // Link Building
  { category: 'Links', item: 'Backlinks from authority sites', status: '⚠️' },
  { category: 'Links', item: 'Directory listings', status: '⚠️' },
  { category: 'Links', item: 'Academic directories', status: '⚠️' },

  // Analytics & Monitoring
  { category: 'Analytics', item: 'Google Analytics 4 setup', status: '⚠️' },
  { category: 'Analytics', item: 'Google Search Console', status: '⚠️' },
  { category: 'Analytics', item: 'Core Web Vitals monitoring', status: '⚠️' },
];

// SEO Recommendations for Next Steps
export const SEO_RECOMMENDATIONS = [
  {
    priority: 'HIGH',
    category: 'Technical',
    issue: 'Missing Google Analytics & GTM',
    solution: 'Add Google Analytics 4 and Google Tag Manager IDs to the site',
    impact: 'Track user behavior and conversions',
  },
  {
    priority: 'HIGH',
    category: 'Technical',
    issue: 'Missing Google Search Console verification',
    solution: 'Verify domain in Google Search Console and Bing Webmaster Tools',
    impact: 'Monitor indexing and search performance',
  },
  {
    priority: 'MEDIUM',
    category: 'Content',
    issue: 'Limited internal linking',
    solution: 'Add contextual links between related publications, research, and supervision items',
    impact: 'Improve crawlability and distribute page authority',
  },
  {
    priority: 'MEDIUM',
    category: 'Content',
    issue: 'Image alt text optimization',
    solution: 'Add descriptive alt text to all images',
    impact: 'Better accessibility and image search visibility',
  },
  {
    priority: 'MEDIUM',
    category: 'Link Building',
    issue: 'Limited academic directory listings',
    solution: 'List on ResearchGate, ORCID, Google Scholar, academic directories',
    impact: 'Authority and discoverability',
  },
  {
    priority: 'LOW',
    category: 'Content',
    issue: 'Frequent content updates',
    solution: 'Update blog/news section regularly with research updates',
    impact: 'Increased crawl frequency and engagement',
  },
];

export default SEO_CONFIG;
