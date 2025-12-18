'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './cookie-policy.module.css';
import { ArrowBack as BackIcon, ExpandMore as ExpandIcon } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { professorDetails } from '@/data/professorDetails';

export default function CookiePolicyPage() {
  const router = useRouter();
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const { personalInfo } = professorDetails;
  const currentYear = new Date().getFullYear();

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      content: `This Cookie Policy explains how ${personalInfo.title} ${personalInfo.firstName} ${personalInfo.lastName}'s academic portfolio website (the "Site") uses cookies and similar tracking technologies. We use these technologies to enhance user experience, analyze Site usage, and deliver personalized content. By using our Site, you consent to our use of cookies as described in this policy.`,
    },
    {
      id: 'what-are-cookies',
      title: 'What Are Cookies?',
      content: `Cookies are small text files stored on your device (computer, smartphone, tablet) when you visit a website. They contain information about your browsing activities and preferences. Cookies help websites recognize you, remember your settings, and enhance functionality.

Types of cookies include:
• Session cookies: Deleted after your browser closes
• Persistent cookies: Remain on your device for a set period
• First-party cookies: Set by our Site
• Third-party cookies: Set by external services we use`,
    },
    {
      id: 'cookies-we-use',
      title: 'Cookies We Use',
      subsections: [
        {
          subtitle: 'Essential/Necessary Cookies',
          content: 'These cookies are necessary for the Site to function properly. They include authentication cookies, security cookies, and functionality cookies that enable core features like navigation and form submission.',
        },
        {
          subtitle: 'Performance/Analytical Cookies',
          content: 'We use Google Analytics and similar tools to collect anonymous information about how visitors use our Site, including pages visited, time spent, and user flows. This helps us improve Site performance and content.',
        },
        {
          subtitle: 'Preference/Functionality Cookies',
          content: 'These cookies remember your preferences, such as language selection, display settings, and accessibility options, to enhance your future visits.',
        },
        {
          subtitle: 'Marketing/Advertising Cookies',
          content: 'We use limited marketing cookies to track campaign performance and serve relevant academic content. We do not use cookies for targeted behavioral advertising.',
        },
      ],
    },
    {
      id: 'tracking-technologies',
      title: 'Other Tracking Technologies',
      subsections: [
        {
          subtitle: 'Web Beacons',
          content: 'Web beacons (pixels) are tiny, invisible images used to track page views and user engagement. We use them to measure campaign effectiveness.',
        },
        {
          subtitle: 'Local Storage',
          content: 'We may use browser local storage to enhance functionality and remember user preferences without cookies.',
        },
        {
          subtitle: 'Server Logs',
          content: 'Our servers automatically log information such as IP addresses, browser type, and pages accessed to monitor Site performance.',
        },
      ],
    },
    {
      id: 'third-party-cookies',
      title: 'Third-Party Cookies',
      content: `Our Site may include content from third-party services such as Google Analytics, content delivery networks, and social media platforms. These third parties may set their own cookies:

• Google Analytics: Analyzes Site traffic and user behavior
• Content Delivery Networks (CDNs): Optimize Site speed and performance
• Social Media Platforms: Enable sharing and social features

These third parties have their own privacy policies and cookie practices. We encourage you to review their policies directly.`,
    },
    {
      id: 'how-to-manage',
      title: 'How to Manage Cookies',
      subsections: [
        {
          subtitle: 'Browser Settings',
          content: 'You can control cookies through your browser settings. Most browsers allow you to: (1) view cookies stored; (2) delete all or specific cookies; (3) block new cookies; (4) alert you when cookies are set. However, disabling cookies may limit Site functionality.',
        },
        {
          subtitle: 'Cookie Consent Preferences',
          content: 'You can adjust your cookie preferences on our Site using our cookie consent banner. Visit your browser\'s cookie settings or contact us for more information.',
        },
        {
          subtitle: 'Opt-Out of Analytics',
          content: 'You can opt-out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on or using browser privacy modes.',
        },
        {
          subtitle: 'Do Not Track',
          content: 'Some browsers include Do Not Track (DNT) features. While we recognize DNT preferences, we cannot guarantee all third parties will honor them.',
        },
      ],
    },
    {
      id: 'data-retention',
      title: 'Cookie Data Retention',
      content: `Cookies have varying retention periods:

• Session cookies: Automatically deleted when you close your browser
• Persistent cookies: Retained for 12 months from last use, depending on type
• Analytics data: Retained for up to 26 months
• Marketing data: Retained for 12 months

You can request deletion of your cookie data at any time by clearing your browser cookies or contacting us.`,
    },
    {
      id: 'children-cookies',
      title: 'Children\'s Privacy',
      content: `Our Site is not intended for children under 13 years of age. We do not knowingly set cookies for children under 13. If you are a parent or guardian concerned about cookies set on your child's device, please contact us immediately.`,
    },
    {
      id: 'international-compliance',
      title: 'International Privacy Compliance',
      subsections: [
        {
          subtitle: 'GDPR (EU)',
          content: 'For users in the European Union, we comply with the General Data Protection Regulation (GDPR). We obtain explicit consent for non-essential cookies and provide easy opt-out options.',
        },
        {
          subtitle: 'CCPA (California, USA)',
          content: 'For California residents, we comply with the California Consumer Privacy Act (CCPA), which grants rights to access, delete, and opt-out of data sales.',
        },
        {
          subtitle: 'India Compliance',
          content: 'We comply with Indian data protection regulations and guidelines from regulatory authorities.',
        },
      ],
    },
    {
      id: 'cookie-table',
      title: 'Cookie Details Table',
      content: `Below is a detailed table of cookies we use:

COOKIE NAME | PURPOSE | TYPE | DURATION
---|---|---|---
_ga | Google Analytics tracking | Analytics | 2 years
_gat | Google Analytics throttling | Analytics | 1 minute
Session ID | User session management | Essential | Session
Preferences | User preferences | Functionality | 1 year
Language | Language selection | Functionality | 1 year
Theme | Display theme | Functionality | 1 year
Analytics | Performance tracking | Performance | 13 months
GDPR Consent | Cookie consent | Essential | 2 years

Note: This table is representative. Additional cookies may be set by third-party services.`,
    },
    {
      id: 'security',
      title: 'Cookie Security',
      content: `We implement security measures to protect cookie data:

• Cookies are marked as HttpOnly to prevent JavaScript access
• Secure flag ensures transmission only over HTTPS
• Same-Site attribute prevents cross-site cookie transmission
• Regular security audits and updates
• No sensitive personal information stored in cookies

However, no online transmission is completely secure. We cannot guarantee absolute protection against unauthorized access.`,
    },
    {
      id: 'updates',
      title: 'Policy Updates',
      content: `We may update this Cookie Policy to reflect changes in technology, our practices, or legal requirements. We will notify you of significant changes by posting an updated version on our Site. Your continued use of the Site following modifications constitutes acceptance of the updated policy.`,
    },
    {
      id: 'contact',
      title: 'Contact Us',
      content: `For questions about cookies, privacy practices, or to exercise your cookie preferences, please contact:

${personalInfo.title} ${personalInfo.firstName} ${personalInfo.lastName}
${personalInfo.designation}
${personalInfo.university}
Email: ${personalInfo.email}
Phone: ${personalInfo.phone}

We will respond to your inquiry within 10 business days.`,
    },
  ];

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>Cookie Policy</h1>
          <p className={styles.subtitle}>
            Last Updated: {currentYear}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          {/* Quick Links */}
          <nav className={styles.quickNav}>
            <h3 className={styles.navTitle}>Quick Links</h3>
            <ul className={styles.navList}>
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className={styles.navLink}>
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Policy Sections */}
          <article className={styles.policyContent}>
            {sections.map((section) => (
              <section key={section.id} id={section.id} className={styles.section}>
                <button
                  className={styles.sectionHeader}
                  onClick={() => toggleSection(section.id)}
                >
                  <h2 className={styles.sectionTitle}>{section.title}</h2>
                  <ExpandIcon
                    className={`${styles.expandIcon} ${
                      expandedSections.includes(section.id) ? styles.expanded : ''
                    }`}
                  />
                </button>

                <div
                  className={`${styles.sectionContent} ${
                    expandedSections.includes(section.id) ? styles.visible : ''
                  }`}
                >
                  {section.content && (
                    <p className={styles.sectionText}>{section.content}</p>
                  )}

                  {section.subsections && (
                    <div className={styles.subsectionsContainer}>
                      {section.subsections.map((subsection, idx) => (
                        <div key={idx} className={styles.subsection}>
                          <h3 className={styles.subsectionTitle}>
                            {subsection.subtitle}
                          </h3>
                          <p className={styles.subsectionText}>
                            {subsection.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </section>
            ))}

            {/* Footer Note */}
            <div className={styles.footerNote}>
              <p>
                By using our Site, you acknowledge that you have read and understood this Cookie Policy and consent to our use of cookies.
              </p>
              <div className={styles.relatedLinks}>
                <Link href="/privacy" className={styles.relatedLink}>
                  Privacy Policy
                </Link>
                <span className={styles.divider}>•</span>
                <Link href="/terms" className={styles.relatedLink}>
                  Terms of Service
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
