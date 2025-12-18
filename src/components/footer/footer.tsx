'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './footer.module.css';
import {
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  Email as EmailIcon,
  GitHub as GitHubIcon,
  School as SchoolIcon,
  Public as PublicIcon,
  X as XIcon,
  YouTube as YouTubeIcon,
  Facebook
} from '@mui/icons-material';



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
        { label: 'PhD Supervision', href: '/supervision/phd-supervision' },
        { label: 'MPhil Supervision', href: '/supervision/mphil-supervision' },
        { label: 'Post Doctorate (PDF)', href: '/supervision/post-doctorate-supervision' },
      ],
    },
    {
      title: 'Events',
      links: [
        { label: 'Organized Events', href: '/events/organized-events'},
        { label: 'Workshops', href: '/outreach/workshops' },
        { label: 'Lectures', href: '/outreach/lectures' },
        { label: 'Presentations', href: '/outreach/presentations' },
      ],
    },
  ];

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/#about' },
  ];

  const socialLinks = [
    { icon: LinkedInIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/manish-kumar-verma-418a892a4/', id: 'linkedin' },
    { icon: XIcon, label: 'X', href: 'https://twitter.com', id: 'twitter' },
    { icon: YouTubeIcon, label: 'YouTube', href: 'https://researchgate.net', id: 'research' },
    { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/manish.k.verma.712/', id: 'facebook' },

  ];

  return (
    <footer className={styles.footer}>
      {/* Top Border - Matching Navbar */}
      <div className={styles.topBorder}></div>

      <div className={styles.container}>
        {/* Brand & Social Section */}
        <div className={styles.brandColumn}>
          <div className={styles.brandContent}>
            <h3 className={styles.brandName}>Prof. (Dr.) Manish K. Verma</h3>
            <p className={styles.brandSubtitle}>Sociology</p>
            <p className={styles.brandDesc}>
              Strengthening sociology through analysis, collaboration, and awareness
            </p>
          </div>

          {/* Social Links */}
          <div className={styles.socialContainer}>
            <div className={styles.socialLinks}>
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.id}
                    href={social.href}
                    title={social.label}
                    className={styles.socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${social.label}`}
                  >
                    <IconComponent className={styles.socialIcon} />
                  </a>
                );
              })}
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
                      className={`${styles.footerNavLink} ${isLinkActive(link.href) ? styles.active : ''
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
              © {currentYear} Prof. (Dr.) Manish K. Verma. All rights reserved.
            </p>
          </div>

          <div>
            <p className={styles.currentPage}>
              Powered by <a target='_blank' href="https://technologies.ditvi.org/">Ditvi Technologies</a>
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