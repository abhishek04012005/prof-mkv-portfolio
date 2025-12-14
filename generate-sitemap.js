const fs = require('fs');
const path = require('path');

// Import data
const { publicationData } = require('./src/data/publication.ts');
const { researchData } = require('./src/data/research.ts');
const { supervisionData } = require('./src/data/supervision.ts');
const { eventsData } = require('./src/data/events.ts');

const baseUrl = 'https://prof-manish-k-verma.com';

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <!-- Home Page -->
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>2025-12-14</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

`;

// Publications
xml += `  <!-- Publications Categories and Items -->
`;
publicationData.forEach((category) => {
  xml += `  <url>
    <loc>${baseUrl}/publications/${category.id}</loc>
    <lastmod>2025-12-14</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`;
  
  category.publications.forEach((pub) => {
    xml += `  <url>
    <loc>${baseUrl}/publications/${category.id}/${pub.id}</loc>
    <lastmod>2025-12-14</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>
`;
  });
});

// Research
xml += `
  <!-- Research Categories and Items -->
`;
researchData.forEach((category) => {
  xml += `  <url>
    <loc>${baseUrl}/research/${category.id}</loc>
    <lastmod>2025-12-14</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`;
  
  category.research.forEach((item) => {
    xml += `  <url>
    <loc>${baseUrl}/research/${category.id}/${item.id}</loc>
    <lastmod>2025-12-14</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>
`;
  });
});

// Supervision
xml += `
  <!-- Supervision Categories and Items -->
`;
supervisionData.forEach((category) => {
  xml += `  <url>
    <loc>${baseUrl}/supervision/${category.id}</loc>
    <lastmod>2025-12-14</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
  
  category.supervision.forEach((item) => {
    xml += `  <url>
    <loc>${baseUrl}/supervision/${category.id}/${item.id}</loc>
    <lastmod>2025-12-14</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>
`;
  });
});

// Events
xml += `
  <!-- Events Categories and Items -->
`;
eventsData.forEach((category) => {
  xml += `  <url>
    <loc>${baseUrl}/events/${category.id}</loc>
    <lastmod>2025-12-14</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
`;
  
  category.events.forEach((item) => {
    xml += `  <url>
    <loc>${baseUrl}/events/${category.id}/${item.id}</loc>
    <lastmod>2025-12-14</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
`;
  });
});

// Image sitemap
xml += `
  <!-- Image Sitemaps -->
  <url>
    <loc>${baseUrl}/</loc>
    <image:image>
      <image:loc>${baseUrl}/assets/professor.png</image:loc>
      <image:title>Prof. Manish K. Verma</image:title>
      <image:caption>Portrait of Prof. Manish K. Verma, Sociologist</image:caption>
    </image:image>
  </url>
</urlset>
`;

fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), xml);
console.log('Sitemap generated successfully!');
