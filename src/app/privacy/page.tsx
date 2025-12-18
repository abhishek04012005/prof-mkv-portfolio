'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './privacy-policy.module.css';
import { ArrowBack as BackIcon, ExpandMore as ExpandIcon } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { professorDetails } from '@/data/professorDetails';

export default function PrivacyPolicyPage() {
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
      content: `This Privacy Policy ("Policy") describes how Prof. Manish K. Verma's academic portfolio website (the "Site") collects, uses, and protects your personal information. We are committed to maintaining the privacy and security of your data in accordance with applicable privacy laws and regulations.`,
    },
    {
      id: 'information-collection',
      title: 'Information We Collect',
      subsections: [
        {
          subtitle: 'Personal Information',
          content: 'We collect information you voluntarily provide through contact forms, inquiry submissions, and other interactive features on our Site. This may include your name, email address, phone number, institution, and message content.',
        },
        {
          subtitle: 'Automatically Collected Information',
          content: 'We automatically collect certain information about your visit, including your IP address, browser type, operating system, referring URL, pages visited, time spent on pages, and clicks. This information helps us improve our Site and user experience.',
        },
        {
          subtitle: 'Cookies and Tracking Technologies',
          content: 'We use cookies, web beacons, and similar tracking technologies to enhance functionality, remember preferences, and analyze Site usage. Please refer to our Cookie Policy for detailed information.',
        },
      ],
    },
    {
      id: 'information-use',
      title: 'How We Use Your Information',
      content: `We use the information we collect for the following purposes:
        
• Responding to your inquiries and providing requested information
• Sending you academic announcements, research updates, and event notifications
• Improving Site functionality, design, and user experience
• Analyzing usage patterns to enhance content and services
• Complying with legal obligations and defending our rights
• Preventing fraud and ensuring Site security`,
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing and Disclosure',
      subsections: [
        {
          subtitle: 'Third-Party Service Providers',
          content: 'We may share your information with trusted third-party service providers who assist in website hosting, analytics, email delivery, and security. These providers are contractually obligated to maintain confidentiality.',
        },
        {
          subtitle: 'Legal Requirements',
          content: 'We may disclose your information when required by law, court order, or government authority, or when necessary to protect our rights, privacy, safety, or property.',
        },
        {
          subtitle: 'No Sale of Information',
          content: 'We do not sell, trade, or rent your personal information to third parties for marketing purposes.',
        },
      ],
    },
    {
      id: 'data-security',
      title: 'Data Security',
      content: `We implement comprehensive security measures including:

• SSL/TLS encryption for data transmission
• Secure servers and firewalls
• Regular security audits and updates
• Limited employee access to personal information

However, no internet transmission is completely secure. We cannot guarantee absolute security of your information. You acknowledge the inherent risks in online communication.`,
    },
    {
      id: 'user-rights',
      title: 'Your Privacy Rights',
      subsections: [
        {
          subtitle: 'Access and Correction',
          content: 'You have the right to access, review, and request correction of your personal information that we maintain.',
        },
        {
          subtitle: 'Data Deletion',
          content: 'You may request deletion of your personal information, subject to our legal obligations to retain certain data.',
        },
        {
          subtitle: 'Opt-Out',
          content: 'You may opt-out of receiving promotional emails and notifications by clicking the unsubscribe link or contacting us directly.',
        },
        {
          subtitle: 'Data Portability',
          content: 'You have the right to request a copy of your personal information in a portable format.',
        },
      ],
    },
    {
      id: 'children-privacy',
      title: 'Children\'s Privacy',
      content: `Our Site is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will promptly delete it. Parents or guardians who believe their child's information has been collected should contact us immediately.`,
    },
    {
      id: 'cookies-tracking',
      title: 'Cookies and Tracking',
      content: `Our Site uses cookies to enhance user experience and gather analytics. You can control cookie settings through your browser. However, disabling cookies may limit certain Site features. See our Cookie Policy for more information.`,
    },
    {
      id: 'third-party-links',
      title: 'Third-Party Links and External Sites',
      content: `Our Site may contain links to third-party websites and external resources. We are not responsible for the privacy practices or content of external websites. We encourage you to review the privacy policies of any third-party sites before providing your information.`,
    },
    {
      id: 'policy-updates',
      title: 'Policy Updates',
      content: `We may update this Privacy Policy periodically to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of significant changes by posting an updated version on our Site. Your continued use of the Site following such modifications constitutes your acceptance of the updated Privacy Policy.`,
    },
    {
      id: 'contact-us',
      title: 'Contact Us',
      content: `If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:

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
          <h1 className={styles.title}>Privacy Policy</h1>
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
                By using our Site, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
              </p>
              <div className={styles.relatedLinks}>
                <Link href="/terms" className={styles.relatedLink}>
                  Terms of Service
                </Link>
                <span className={styles.divider}>•</span>
                <Link href="/cookies" className={styles.relatedLink}>
                  Cookie Policy
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
