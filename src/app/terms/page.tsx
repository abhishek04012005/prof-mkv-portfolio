'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './terms-of-service.module.css';
import { ArrowBack as BackIcon, ExpandMore as ExpandIcon } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { professorDetails } from '@/data/professorDetails';

export default function TermsOfServicePage() {
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
      id: 'agreement',
      title: 'Agreement to Terms',
      content: `By accessing and using this website (the "Site") operated by ${personalInfo.title} ${personalInfo.firstName} ${personalInfo.lastName}, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Site. We reserve the right to modify these Terms at any time, and your continued use of the Site constitutes acceptance of any modifications.`,
    },
    {
      id: 'use-license',
      title: 'License and Use of Content',
      subsections: [
        {
          subtitle: 'Grant of License',
          content: 'We grant you a limited, non-exclusive, non-transferable license to view and print materials on this Site for personal, non-commercial academic purposes only.',
        },
        {
          subtitle: 'Restrictions',
          content: 'You may not: (1) modify, adapt, or translate the Site content; (2) reverse engineer, disassemble, or decompile any software; (3) remove copyright or proprietary notices; (4) use automated tools to access the Site; (5) rent, sell, or lease the Site or its content; (6) use the Site for commercial purposes without explicit permission.',
        },
        {
          subtitle: 'Intellectual Property Rights',
          content: `All content on the Site, including text, images, graphics, logos, and software, is the exclusive property of ${personalInfo.title} ${personalInfo.firstName} ${personalInfo.lastName} or licensed to us. Unauthorized use or reproduction is prohibited.`,
        },
      ],
    },
    {
      id: 'user-content',
      title: 'User-Submitted Content',
      subsections: [
        {
          subtitle: 'Your Responsibilities',
          content: 'You are solely responsible for any content you submit through contact forms, inquiries, or other interactive features. You warrant that your content does not infringe on any third-party rights.',
        },
        {
          subtitle: 'License Grant',
          content: 'By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, modify, and display your content for operational and improvement purposes.',
        },
        {
          subtitle: 'Prohibited Content',
          content: 'You may not submit content that is: illegal, threatening, harassing, defamatory, abusive, obscene, or violates any laws or third-party rights.',
        },
      ],
    },
    {
      id: 'disclaimers',
      title: 'Disclaimers',
      subsections: [
        {
          subtitle: 'As-Is Basis',
          content: 'The Site and all content are provided "as-is" without warranties of any kind, either express or implied. We do not warrant that the Site will be uninterrupted, error-free, or secure.',
        },
        {
          subtitle: 'Accuracy Disclaimer',
          content: 'While we strive to maintain accurate information, we do not guarantee the completeness, accuracy, or timeliness of all content. We are not liable for errors or omissions.',
        },
        {
          subtitle: 'External Links',
          content: 'We are not responsible for the content, accuracy, or practices of external websites linked to our Site. Access external links at your own risk.',
        },
      ],
    },
    {
      id: 'limitation-liability',
      title: 'Limitation of Liability',
      content: `To the maximum extent permitted by law, in no event shall ${personalInfo.title} ${personalInfo.firstName} ${personalInfo.lastName}, the Site operators, or their affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities, even if advised of the possibility of such damages. Your sole remedy is discontinuation of Site use.`,
    },
    {
      id: 'indemnification',
      title: 'Indemnification',
      content: `You agree to indemnify, defend, and hold harmless ${personalInfo.title} ${personalInfo.firstName} ${personalInfo.lastName}, the Site, and their respective officers, directors, employees, and agents from any claims, damages, losses, or expenses (including attorney's fees) arising from: (1) your use of the Site; (2) your violation of these Terms; (3) your violation of any law or third-party rights; or (4) your user-submitted content.`,
    },
    {
      id: 'prohibited-uses',
      title: 'Prohibited Uses',
      content: `You agree not to use the Site:

• To harass, threaten, defame, or abuse others
• To transmit viruses, malware, or harmful code
• To engage in unauthorized access or hacking
• To spam or send unsolicited communications
• To impersonate others or provide false information
• To violate any applicable laws or regulations
• To interfere with Site operation or security
• For commercial purposes without permission`,
    },
    {
      id: 'termination',
      title: 'Termination',
      content: `We reserve the right to terminate or suspend your access to the Site at any time, without notice or cause, if we believe you have violated these Terms or engaged in prohibited activities. Upon termination, your rights under these Terms cease immediately.`,
    },
    {
      id: 'third-party-content',
      title: 'Third-Party Content and Services',
      content: `Our Site may contain links to third-party websites, services, and content. We do not endorse, warrant, or control external content. Use third-party services at your own risk. We are not responsible for third-party content, privacy practices, or availability.`,
    },
    {
      id: 'cookies-technologies',
      title: 'Cookies and Tracking Technologies',
      content: `We use cookies and tracking technologies to enhance functionality and analyze usage. By using the Site, you consent to our use of these technologies. See our Cookie Policy for details.`,
    },
    {
      id: 'governing-law',
      title: 'Governing Law and Jurisdiction',
      content: `These Terms are governed by and construed in accordance with the laws of India, without regard to conflict of law principles. You consent to the exclusive jurisdiction of the courts located in India for resolution of any disputes.`,
    },
    {
      id: 'dispute-resolution',
      title: 'Dispute Resolution',
      subsections: [
        {
          subtitle: 'Informal Resolution',
          content: 'Before initiating formal proceedings, both parties agree to attempt informal resolution of disputes.',
        },
        {
          subtitle: 'Arbitration',
          content: 'Any disputes that cannot be resolved informally shall be resolved through binding arbitration in accordance with applicable laws.',
        },
      ],
    },
    {
      id: 'severability',
      title: 'Severability',
      content: `If any provision of these Terms is found invalid or unenforceable, such provision shall be severed, and the remaining provisions shall remain in full force and effect.`,
    },
    {
      id: 'entire-agreement',
      title: 'Entire Agreement',
      content: `These Terms, along with our Privacy Policy and Cookie Policy, constitute the entire agreement between you and us regarding the Site and supersede all prior understandings and agreements.`,
    },
    {
      id: 'contact',
      title: 'Contact Information',
      content: `For questions or concerns regarding these Terms, please contact:

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
          <h1 className={styles.title}>Terms of Service</h1>
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
                By using our Site, you acknowledge that you have read and understood these Terms of Service and agree to be bound by them.
              </p>
              <div className={styles.relatedLinks}>
                <Link href="/privacy" className={styles.relatedLink}>
                  Privacy Policy
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
