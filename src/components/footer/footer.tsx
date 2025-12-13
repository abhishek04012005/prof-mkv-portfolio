'use client';
import Link from 'next/link';
import styles from './footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '#about' },
    { label: 'Research', href: '#research' },
    { label: 'Publications', href: '#publications' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const researchAreas = [
    { label: 'Cloud Computing', href: '#' },
    { label: 'Distributed Systems', href: '#' },
    { label: 'IoT Security', href: '#' },
    { label: 'Blockchain', href: '#' },
    { label: 'Big Data', href: '#' },
    { label: 'Machine Learning', href: '#' },
  ];

  const socialLinks = [
    { icon: '🔗', label: 'LinkedIn', href: 'https://linkedin.com', color: 'linkedin' },
    { icon: '𝕏', label: 'Twitter', href: 'https://twitter.com', color: 'twitter' },
    { icon: '📊', label: 'Research Gate', href: 'https://researchgate.net', color: 'research' },
    { icon: '🎓', label: 'Google Scholar', href: 'https://scholar.google.com', color: 'scholar' },
    { icon: '💼', label: 'GitHub', href: 'https://github.com', color: 'github' },
    { icon: '📧', label: 'Email', href: 'mailto:contact@example.com', color: 'email' },
  ];

  const footerLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Disclaimer', href: '#' },
  ];

  return (
    <footer className={styles.footer}>
      {/* Decorative Top Border */}
      <div className={styles.topBorder}></div>

      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={styles.mainContent}>
          {/* Column 1 - Brand */}
          <div className={styles.column}>
            <div className={styles.brandSection}>
              <h3 className={styles.brandName}>Prof. Manish K. Verma</h3>
              <p className={styles.brandTitle}>Computer Science & Engineering</p>
              <p className={styles.brandDesc}>
                Passionate about advancing technology through research, innovation, and education.
              </p>

              {/* Social Links */}
              <div className={styles.socialLinksContainer}>
                <p className={styles.socialLabel}>Follow</p>
                <div className={styles.socialLinks}>
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      title={social.label}
                      className={`${styles.socialLink} ${styles[`social-${social.color}`]}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${social.label}`}
                    >
                      <span className={styles.socialIcon}>{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Research Areas */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Research Areas</h4>
            <ul className={styles.linkList}>
              {researchAreas.map((area) => (
                <li key={area.label}>
                  <Link href={area.href} className={styles.link}>
                    {area.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Institution Info */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Institution</h4>
            <div className={styles.institutionInfo}>
              <p className={styles.infoItem}>
                <span className={styles.infoIcon}>🏢</span>
                <span>Indian Institute of Technology, Delhi</span>
              </p>
              <p className={styles.infoItem}>
                <span className={styles.infoIcon}>🏛️</span>
                <span>Department of Computer Science</span>
              </p>
              <p className={styles.infoItem}>
                <span className={styles.infoIcon}>📍</span>
                <span>New Delhi, India</span>
              </p>
              <p className={styles.infoItem}>
                <span className={styles.infoIcon}>🌐</span>
                <span>
                  <a href="https://iitd.ac.in" className={styles.instLink} target="_blank" rel="noopener noreferrer">
                    www.iitd.ac.in
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className={styles.newsletterSection}>
          <div className={styles.newsletterContent}>
            <div>
              <h4 className={styles.newsletterTitle}>📬 Stay Updated</h4>
              <p className={styles.newsletterDesc}>
                Subscribe to get latest research updates and announcements
              </p>
            </div>
            <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.newsletterInput}
                required
              />
              <button type="submit" className={styles.newsletterBtn}>
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <div className={styles.copyright}>
            <p className={styles.copyrightText}>
              © {currentYear} Prof. Manish K. Verma. All rights reserved.
            </p>
          </div>

          <div className={styles.footerLinksBottom}>
            {footerLinks.map((link) => (
              <Link key={link.label} href={link.href} className={styles.footerLink}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className={styles.madeBy}>
            <p className={styles.madeByText}>
              Designed & Developed with ❤️
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Element */}
      <div className={styles.bottomDecor}></div>
    </footer>
  );
}