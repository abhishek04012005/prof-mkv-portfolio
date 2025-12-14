# SEO Maintenance & Enhancement Guide

## Quick Reference: SEO Files Location

```
project-root/
├── public/
│   ├── sitemap.xml          # Search engine sitemap
│   ├── robots.txt           # Crawler directives
│   └── site.webmanifest     # PWA manifest
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with metadata
│   │   └── page.tsx         # Home page with schema
│   └── utils/
│       └── seo.ts          # SEO utility functions
├── next.config.ts          # Next.js config with headers
└── SEO_*.md                 # Documentation files
```

---

## How to Add New Content & Maintain SEO

### 1. Adding a New Publication

When adding a new publication to `src/data/publication.ts`:

```typescript
{
  // REQUIRED for SEO
  id: "unique-slug", // Use lowercase, hyphens
  title: "Publication Title Here",
  authors: "Author Name(s)",
  year: 2025,
  
  // RECOMMENDED for SEO
  abstract: "50-160 character description for search results",
  keywords: ["keyword1", "keyword2", "keyword3"],
  
  // OPTIONAL but HELPFUL
  journal: "Journal or Publisher Name",
  doi: "10.xxxx/xxxxx",
  url: "https://full-url-to-publication",
  
  // SEO BENEFIT: Helps with rich snippets
  journal_or_book: "Publication venue",
  type: "article|chapter|book|review"
}
```

**SEO Impact**: Each publication appears in sitemap and search results with proper schema markup.

---

### 2. Adding Research Projects

When adding to `src/data/research.ts`:

```typescript
{
  // REQUIRED
  id: "unique-project-id",
  title: "Project Title",
  authors: "Prof. Manish K. Verma",
  year: 2025,
  
  // SEO IMPORTANT
  abstract: "Brief 1-2 sentence summary",
  description: "Detailed project description (100-300 words)",
  keywords: ["keyword1", "keyword2", "keyword3", "keyword4"],
  
  // SEO BONUS
  fundingAgency: "Funding Organization",
  status: "completed|ongoing|planned"
}
```

**Pro Tip**: Keywords help with internal search and featured snippets.

---

### 3. Updating the Sitemap

When you add new pages or categories, **manually update**:

```xml
<!-- public/sitemap.xml -->
<url>
  <loc>https://prof-manish-k-verma.com/path/to/page</loc>
  <lastmod>2025-12-14</lastmod>
  <changefreq>monthly|weekly|yearly</changefreq>
  <priority>0.8</priority> <!-- 0-1.0 -->
</url>
```

**Frequency Values**:
- `always`: Content changes constantly
- `hourly`: Daily updates
- `daily`: Several times a week
- `weekly`: Weekly updates
- `monthly`: Monthly updates
- `yearly`: Rarely changes

---

### 4. Meta Tags for Category Pages

Edit the explore page components for custom metadata:

```tsx
export const metadata: Metadata = {
  title: "Category Name | Prof. Manish K. Verma",
  description: "50-160 character description of this category",
  keywords: ["keyword1", "keyword2", "keyword3"],
};
```

---

## SEO Best Practices Going Forward

### Content Creation
1. **Use Descriptive Titles**: "Environmental Sociology in Rural Development" (not "Article 1")
2. **Write Real Abstracts**: Avoid placeholder text, write 50-160 characters
3. **Add Keywords Naturally**: 3-5 keywords per item, 1-2% density
4. **Link Internally**: Reference related publications/research

### Image Management
1. **Descriptive Alt Text**: `alt="Prof. Manish K. Verma presenting at environmental sociology conference"`
2. **Meaningful File Names**: Use `professor-photo.png` not `IMG123.png`
3. **Proper Formats**: Use WebP when possible
4. **Optimize Size**: Images <200KB when possible

### URL Structure
- ✅ Good: `/publications/articles/environmental-sociology-2025`
- ❌ Bad: `/pub/art/123456789`

Use lowercase, hyphens, descriptive keywords.

---

## Monitoring SEO Performance

### Monthly Checklist

**Week 1:**
- [ ] Check Google Search Console for new errors
- [ ] Review top 10 performing pages
- [ ] Check mobile usability issues
- [ ] Monitor crawl stats

**Week 2:**
- [ ] Analyze organic traffic (GA4)
- [ ] Check keyword rankings for top keywords
- [ ] Review top landing pages
- [ ] Check bounce rate trends

**Week 3:**
- [ ] Audit recent content for ranking potential
- [ ] Check for new indexation issues
- [ ] Review internal links
- [ ] Check for duplicate content

**Week 4:**
- [ ] Generate traffic report
- [ ] Analyze search query performance
- [ ] Plan content optimization
- [ ] Check competitor activity

---

## Common SEO Improvement Tasks

### Task 1: Improve Page Ranking

1. **Check Current Performance**
   ```bash
   Google Search Console → Performance → Your page
   ```

2. **Optimize Title & Description**
   - Title: 50-60 characters, include main keyword
   - Description: 150-160 characters, compelling CTA

3. **Improve Content**
   - Add 100+ more words if under 300 words
   - Add internal links (3-5 relevant)
   - Add keywords naturally (1-2%)

4. **Update Metadata**
   - Add/improve abstracts
   - Add keywords
   - Add proper schema markup

### Task 2: Fix Crawl Errors

1. **Check Errors** → Google Search Console → Coverage
2. **Common Issues**:
   - Missing canonical tag
   - Redirect chains
   - 404 errors on internal links

3. **Fix Process**:
   - Redirect 404s (301)
   - Add missing canonicals
   - Fix broken links

### Task 3: Increase Click-Through Rate (CTR)

1. **Analyze CTR** → Google Search Console → Performance
2. **Improve Title**:
   - Add power words: "Guide", "Comprehensive", "Ultimate"
   - Include numbers: "10 Best", "2025"
   - Clear benefit: "Learn How To"

3. **Improve Snippet**:
   - First 120 chars should hook reader
   - Include main keyword
   - Include benefit or promise

### Task 4: Add New Keywords

1. **Research Keywords**
   - Google Search Console (related searches)
   - Google Keyword Planner
   - Academic keyword databases

2. **Implement Keywords**
   - Title tag: 1 main keyword
   - Meta description: 1-2 keywords
   - H1 tag: Main keyword
   - Body: 1-2% keyword density
   - Keywords field: 3-5 related terms

---

## Tools for SEO Monitoring

### Free Tools
- **Google Search Console**: Search performance, index status
- **Google Analytics 4**: Traffic, user behavior
- **Google PageSpeed Insights**: Performance metrics
- **Mobile-Friendly Test**: Mobile optimization

### Recommended Tools (Paid)
- **Ahrefs**: Competitor analysis, keyword research
- **SEMrush**: Keyword research, rank tracking
- **Screaming Frog**: Technical SEO audit
- **Moz Pro**: Rank tracking, link analysis

---

## Handling SEO Issues

### Issue: Page Not Indexed
**Solution**:
1. Check robots.txt (should allow the page)
2. Verify sitemap includes the page
3. Submit in Google Search Console
4. Check for noindex meta tag
5. Wait 2-4 weeks

### Issue: Low Click-Through Rate
**Solution**:
1. Improve title tag (add power words)
2. Improve meta description (more compelling)
3. Add schema markup (for rich snippets)
4. Fix position #10+ (improve ranking)

### Issue: High Bounce Rate
**Solution**:
1. Check page load speed
2. Improve page quality/relevance
3. Better meta description match
4. Improve internal linking
5. Better CTA

### Issue: Losing Rankings
**Solution**:
1. Check for algorithm updates (Google Blog)
2. Analyze competitor changes
3. Improve content quality/freshness
4. Add more internal links
5. Improve user engagement signals

---

## Schema Markup Templates

### For New Publication

```typescript
// In ItemDetail component or page
const schema = {
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  headline: item.title,
  author: { "@type": "Person", name: item.authors },
  datePublished: `${item.year}-01-01`,
  journal: item.journal,
  description: item.abstract,
  keywords: item.keywords?.join(", "),
  url: `https://prof-manish-k-verma.com/publications/${item.id}`
};
```

### For New Research Project

```typescript
const schema = {
  "@context": "https://schema.org",
  "@type": "ResearchProject",
  name: item.title,
  description: item.description,
  startDate: item.startYear,
  endDate: item.endYear,
  projectStatus: item.status,
  principalInvestigator: { "@type": "Person", name: "Prof. Manish K. Verma" },
  funding: { "@type": "Grant", name: item.fundingAgency }
};
```

---

## SEO Optimization Workflow

```
1. ADD CONTENT
   ↓
2. FILL METADATA
   (title, description, keywords, abstract)
   ↓
3. UPDATE SITEMAP
   (add URL with proper priority/frequency)
   ↓
4. INTERNAL LINKING
   (link from related pages)
   ↓
5. WAIT FOR INDEXING
   (typically 2-7 days)
   ↓
6. MONITOR PERFORMANCE
   (GSC → Performance tab)
   ↓
7. OPTIMIZE IF NEEDED
   (improve title/description if low CTR)
```

---

## Mobile-First Indexing Checklist

- ✅ Responsive design (mobile-first)
- ✅ Readable text (no small fonts)
- ✅ Clickable links (proper spacing)
- ✅ Loading speed (optimized images)
- ✅ No pop-ups (mobile-friendly)
- ✅ Proper viewports (meta viewport set)

---

## Annual SEO Review

**Quarterly Review Checklist:**

- [ ] Search traffic: +/- 20%?
- [ ] Keyword rankings: Improvement?
- [ ] New indexing errors?
- [ ] Top pages: Still relevant?
- [ ] Competitor activity: Changed?
- [ ] Content freshness: Updated recent content?
- [ ] Link profile: Any lost backlinks?
- [ ] Core Web Vitals: Still good?

---

## Key Contacts & References

### Search Engine Platforms
- **Google Search Console**: https://search.google.com/search-console
- **Bing Webmaster Tools**: https://www.bing.com/webmasters
- **Google Analytics**: https://analytics.google.com

### SEO Communities
- **Google Search Central Blog**: https://developers.google.com/search/blog
- **Schema.org**: https://schema.org
- **Webmaster Guidelines**: https://developers.google.com/search/docs

---

## Summary

Your site is now **comprehensively optimized for SEO**. To maintain and improve performance:

1. **Add new content regularly** with proper metadata
2. **Monitor performance** in Search Console monthly
3. **Update sitemap** when adding new pages
4. **Maintain quality** - avoid thin content
5. **Stay current** - follow SEO updates from Google

**Happy optimizing! 🚀**

---

Last Updated: December 14, 2025
