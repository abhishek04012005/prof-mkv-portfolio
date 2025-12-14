'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './footer.module.css';

export default function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  // Check if a link is active
  const isLinkActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  // Get current page label for breadcrumb
  const getCurrentPageLabel = () => {
    if (pathname === '/') return 'Home';
    if (pathname.startsWith('/research')) return 'Research';
    if (pathname.startsWith('/publications')) return 'Publications';
    if (pathname.startsWith('/supervision')) return 'Supervision';
    if (pathname.startsWith('/events')) return 'Events';
    if (pathname.startsWith('/admin')) return 'Admin';
    if (pathname.startsWith('/privacy')) return 'Privacy Policy';
    if (pathname.startsWith('/terms')) return 'Terms of Service';
    if (pathname.startsWith('/cookies')) return 'Cookie Policy';
    if (pathname.startsWith('/disclaimer')) return 'Disclaimer';
    return pathname;
  };

  // Navigation sections matching navbar structure
  const footerSections = [
    {
      title: 'Publications',
      links: [
        { label: 'Books Published', href: '/publications/books-published' },
        { label: 'Books Edited', href: '/publications/books-edited' },
        { label: 'Articles', href: '/publications/articles' },
        { label: 'Book Reviews', href: '/publications/book-reviews' },
      ],
    },
    {
      title: 'Research',
      links: [
        { label: 'Completed Projects', href: '/research/completed-projects' },
        { label: 'Ongoing Projects', href: '/research/ongoing-projects' },
        { label: 'Research Interests', href: '/research/interests' },
        { label: 'Research Outputs', href: '/research/outputs' },
      ],
    },
    {
      title: 'Supervision',
      links: [
        { label: 'PhD Supervision', href: '/supervision/phd' },
        { label: 'MPhil Supervision', href: '/supervision/mphil' },
        { label: 'PG Dissertation', href: '/supervision/pg-dissertation' },
        { label: 'Organizing Roles', href: '/supervision/organizing-roles' },
      ],
    },
    {
      title: 'Events',
      links: [
        { label: 'Organized Events', href: '/outreach/organized' },
        { label: 'ISS Events', href: '/outreach/iss' },
        { label: 'Workshops', href: '/outreach/workshops' },
        { label: 'Lectures', href: '/outreach/lectures' },
      ],
    },
  ];

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/#about' },
  ];

  const socialLinks = [
    { symbol: '💼', label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
    { symbol: '𝕏', label: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
    { symbol: '📊', label: 'Research Gate', href: 'https://researchgate.net', icon: 'research' },
    { symbol: '🎓', label: 'Google Scholar', href: 'https://scholar.google.com', icon: 'scholar' },
    { symbol: '🔗', label: 'GitHub', href: 'https://github.com', icon: 'github' },
    { symbol: '✉️', label: 'Email', href: 'mailto:contact@example.com', icon: 'email' },
  ];

  return (
    <footer className={styles.footer}>
      {/* Top Border - Matching Navbar */}
      <div className={styles.topBorder}></div>

      <div className={styles.container}>
        {/* Brand & Social Section */}
        <div className={styles.brandColumn}>
          <div className={styles.brandContent}>
            <h3 className={styles.brandName}>Prof. Manish K. Verma</h3>
            <p className={styles.brandSubtitle}>Computer Science & Engineering</p>
            <p className={styles.brandDesc}>
              Advancing technology through research, innovation, and education
            </p>
          </div>

          {/* Social Links */}
          <div className={styles.socialContainer}>
            <div className={styles.socialLinks}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  title={social.label}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${social.label}`}
                >
                  <span className={styles.socialSymbol}>{social.symbol}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Sections - Matching Navbar Structure */}
        <div className={styles.navSections}>
          {footerSections.map((section) => (
            <div key={section.title} className={styles.section}>
              <h4 className={styles.sectionTitle}>{section.title}</h4>
              <ul className={styles.sectionLinks}>
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`${styles.footerNavLink} ${
                        isLinkActive(link.href) ? styles.active : ''
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomContainer}>
          <div className={styles.copyrightSection}>
            <p className={styles.copyright}>
              © {currentYear} Prof. Manish K. Verma. All rights reserved.
            </p>
          </div>

          <div className={styles.bottomLinks}>
            <Link href="/privacy" className={styles.bottomLink}>
              Privacy Policy
            </Link>
            <span className={styles.separator}>·</span>
            <Link href="/terms" className={styles.bottomLink}>
              Terms of Service
            </Link>
            <span className={styles.separator}>·</span>
            <Link href="/cookies" className={styles.bottomLink}>
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}