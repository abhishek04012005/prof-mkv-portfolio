'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import Image from 'next/image';
import styles from './itemDetail.module.css';
import {
  Close as CloseIcon,
  OpenInNew as OpenNewIcon,
  Download as DownloadIcon,
  Share as ShareIcon,
  ContentCopy as CopyIcon,
  CheckCircle as CheckIcon,
  Info as InfoIcon,
  LocalOffer as TagIcon,
  Description as SummaryIcon,
  TrendingUp as InsightsIcon,
  Link as LinkIcon,
} from '@mui/icons-material';
import bookImage from '../../../public/assets/book-published/book1.png';

export interface DetailItem {
  id: string;
  title: string;
  abstract?: string;
  authors?: string | string[];
  year?: number | string;
  journal?: string;
  journal_or_book?: string;
  doi?: string;
  pages?: string;
  volume?: string;
  issue?: string;
  url?: string;
  pdfUrl?: string;
  downloadUrl?: string;
  keywords?: string[];
  fundingAgency?: string;
  fundingAmount?: string;
  coInvestigators?: string[];
  outcome?: string[];
  summary?: string;
  venue?: string;
  startDate?: string;
  endDate?: string;
  category?: string;
  studentName?: string;
  thesisTitle?: string;
  [key: string]: string | number | string[] | boolean | undefined;
}

interface DetailField {
  label: string;
  value: unknown;
  icon?: string;
}

interface ItemDetailProps {
  item: DetailItem;
  categoryTitle: string;
  onBack?: () => void;
  renderDetailFields?: (item: DetailItem) => DetailField[];
}

export default function ItemDetail({
  item,
  categoryTitle,
  onBack,
  renderDetailFields,
}: ItemDetailProps) {
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      router.back();
    }
  };

  const getImageSource = () => {
    return (item.image as string) || (item.thumbnail as string) || bookImage.src;
  };

  const getFields = (): DetailField[] => {
    if (renderDetailFields) {
      return renderDetailFields(item);
    }

    const fields: DetailField[] = [];

    if (item.authors) {
      fields.push({
        label: 'Authors',
        value: item.authors,
        icon: '👤',
      });
    }

    if (item.year) {
      fields.push({
        label: 'Published Year',
        value: String(item.year),
        icon: '📅',
      });
    }

    if (item.publisher) {
      fields.push({
        label: 'Publisher',
        value: item.publisher,
        icon: '🏢',
      });
    }

    if (item.journal) {
      fields.push({
        label: 'Journal',
        value: item.journal,
        icon: '📰',
      });
    }

    if (item.journal_or_book) {
      fields.push({
        label: 'Journal / Book',
        value: item.journal_or_book,
        icon: '📚',
      });
    }

    if (item.volume) {
      fields.push({
        label: 'Volume',
        value: item.volume,
        icon: '📊',
      });
    }

    if (item.issue) {
      fields.push({
        label: 'Issue',
        value: item.issue,
        icon: '🔢',
      });
    }

    if (item.pages) {
      fields.push({
        label: 'Pages',
        value: item.pages,
        icon: '📄',
      });
    }

    if (item.doi) {
      fields.push({
        label: 'DOI',
        value: item.doi,
        icon: '🔗',
      });
    }

    if (item.isbn) {
      fields.push({
        label: 'ISBN',
        value: item.isbn,
        icon: '📚',
      });
    }

    if (item.citations) {
      fields.push({
        label: 'Citations',
        value: String(item.citations),
        icon: '📈',
      });
    }

    if (item.type) {
      fields.push({
        label: 'Type',
        value: item.type,
        icon: '🏷️',
      });
    }

    if (item.bookTitle) {
      fields.push({
        label: 'Book Title',
        value: item.bookTitle,
        icon: '📖',
      });
    }

    if (item.bookAuthors) {
      fields.push({
        label: 'Book Authors',
        value: item.bookAuthors,
        icon: '✍️',
      });
    }

    if (item.bookPublisher) {
      fields.push({
        label: 'Book Publisher',
        value: item.bookPublisher,
        icon: '🏢',
      });
    }

    if (item.bookYear) {
      fields.push({
        label: 'Book Year',
        value: String(item.bookYear),
        icon: '📅',
      });
    }

    if (item.reviewer) {
      fields.push({
        label: 'Reviewer',
        value: item.reviewer,
        icon: '👤',
      });
    }

    if (item.fundingAgency) {
      fields.push({
        label: 'Funding Agency',
        value: item.fundingAgency,
        icon: '💰',
      });
    }

    if (item.fundingAmount) {
      fields.push({
        label: 'Funding Amount',
        value: item.fundingAmount,
        icon: '💵',
      });
    }

    if (item.status) {
      fields.push({
        label: 'Status',
        value: String(item.status).charAt(0).toUpperCase() + String(item.status).slice(1),
        icon: '🔄',
      });
    }

    if (item.startYear) {
      fields.push({
        label: 'Start Year',
        value: String(item.startYear),
        icon: '📅',
      });
    }

    if (item.endYear) {
      fields.push({
        label: 'End Year',
        value: String(item.endYear),
        icon: '📅',
      });
    }

    if (item.coInvestigators && Array.isArray(item.coInvestigators) && item.coInvestigators.length > 0) {
      fields.push({
        label: 'Co-Investigators',
        value: (item.coInvestigators as unknown[]).join(', '),
        icon: '👥',
      });
    }

    if (item.volume_issue) {
      fields.push({
        label: 'Volume/Issue',
        value: item.volume_issue,
        icon: '📊',
      });
    }

    if (item.downloadUrl) {
      fields.push({
        label: 'Download URL',
        value: item.downloadUrl,
        icon: '⬇️',
      });
    }

    if (item.studentName) {
      fields.push({
        label: 'Student Name',
        value: item.studentName,
        icon: '👤',
      });
    }

    if (item.degreeAwarded) {
      fields.push({
        label: 'Degree Awarded',
        value: item.degreeAwarded,
        icon: '🎓',
      });
    }

    if (item.thesisTitle) {
      fields.push({
        label: 'Thesis Title',
        value: item.thesisTitle,
        icon: '📚',
      });
    }

    if (item.researchArea) {
      fields.push({
        label: 'Research Area',
        value: item.researchArea,
        icon: '🔬',
      });
    }

    if (item.awardDate) {
      fields.push({
        label: 'Award Date',
        value: item.awardDate,
        icon: '📅',
      });
    }

    return fields;
  };

  const fields = getFields();
  const seoDescription = (item.abstract as string)
    ? (item.abstract as string).substring(0, 155)
    : `${item.title} - ${categoryTitle}`;

  const handleCopy = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: String(item.title),
          text: (item.abstract as string) || String(item.title),
          url: typeof window !== 'undefined' ? window.location.href : '',
        });
      } catch (err) {
        handleCopy();
      }
    } else {
      handleCopy();
    }
  };

  return (
    <>
      <Head>
        <title>{item.title} | {categoryTitle} - Prof. Manish K. Verma</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={item.keywords ? (item.keywords as string[]).join(', ') : categoryTitle} />
        <meta property="og:title" content={String(item.title)} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:image" content={getImageSource()} />
        <meta property="og:type" content="article" />
        <meta name="author" content={(item.authors as string) || 'Prof. Manish K. Verma'} />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : ''} />
      </Head>

      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <h1 className={styles.headerCategory}>{item.title}</h1>

        </header>

        <main className={styles.mainContent}>
          {/* Image Section with Details */}
          <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
              <Image
                src={getImageSource()}
                alt={String(item.title)}
                width={500}
                height={500}
                className={styles.heroImage}
                priority
              />
            </div>

            {/* Quick Details Overlay */}
            {(item.authors || item.year || item.journal) && (
              <div className={styles.imageDetailsPanel}>
                <div className={styles.detailsPanelContent}>
                  {item.authors && (
                    <div className={styles.detailItem}>
                      <span className={styles.detailItemLabel}>Author: </span>
                      <span className={styles.detailItemValue}>{item.authors}</span>
                    </div>
                  )}
                  {item.year && (
                    <div className={styles.detailItem}>
                      <span className={styles.detailItemLabel}>Year: </span>
                      <span className={styles.detailItemValue}>{item.year}</span>
                    </div>
                  )}
                  {item.journal && (
                    <div className={styles.detailItem}>
                      <span className={styles.detailItemLabel}>Journal/Publisher: </span>
                      <span className={styles.detailItemValue}>{item.journal}</span>
                    </div>
                  )}
                  {item.publisher && (
                    <div className={styles.detailItem}>
                      <span className={styles.detailItemLabel}>Publisher: </span>
                      <span className={styles.detailItemValue}>{item.publisher}</span>
                    </div>
                  )}
                  {item.type && (
                    <div className={styles.detailItem}>
                      <span className={styles.detailItemLabel}>Type: </span>
                      <span className={styles.detailItemValue}>{item.type}</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Content Section */}
          <article className={styles.contentSection}>
            {/* Title */}
            {/* <h1 className={styles.mainTitle}>{item.title}</h1> */}

            {/* Details Sections */}
            <div className={styles.sectionsContainer}>
              {/* Overview Section */}
              {item.abstract && (
                <section className={styles.expandSection}>
                  <div className={styles.sectionHeader}>
                    <SummaryIcon />
                    <span>Overview</span>
                  </div>
                  <div className={styles.sectionContent}>
                    <p className={styles.abstractText}>{item.abstract}</p>
                  </div>
                </section>
              )}

              {/* Keywords Section */}
              {item.keywords && Array.isArray(item.keywords) && item.keywords.length > 0 && (
                <section className={styles.expandSection}>
                  <div className={styles.sectionHeader}>
                    <TagIcon />
                    <span>Keywords</span>
                  </div>
                  <div className={styles.sectionContent}>
                    <div className={styles.keywordsList}>
                      {(item.keywords as string[]).map((keyword, idx) => (
                        <span key={idx} className={styles.keywordTag}>{keyword}</span>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {/* Details Section */}
              {fields.length > 0 && (
                <section className={styles.expandSection}>
                  <div className={styles.sectionHeader}>
                    <InfoIcon />
                    <span>Details</span>
                  </div>
                  <div className={styles.sectionContent}>
                    <div className={styles.detailsList}>
                      {fields.map((field, idx) => (
                        <div key={idx} className={styles.detailRow}>
                          <span className={styles.detailKey}>{field.label}</span>
                          <span className={styles.detailVal}>
                            {typeof field.value === 'string' ? field.value : JSON.stringify(field.value)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {/* Outcomes Section */}
              {item.outcomes && Array.isArray(item.outcomes) && item.outcomes.length > 0 && (
                <section className={styles.expandSection}>
                  <div className={styles.sectionHeader}>
                    <InsightsIcon />
                    <span>Outcomes</span>
                  </div>
                  <div className={styles.sectionContent}>
                    <ul className={styles.outcomesList}>
                      {(item.outcomes as string[]).map((outcome, idx) => (
                        <li key={idx} className={styles.outcomeItem}>{outcome}</li>
                      ))}
                    </ul>
                  </div>
                </section>
              )}

              {/* Citation Section */}
              {(item.title || item.authors || item.year) && (
                <section className={styles.expandSection}>
                  <div className={styles.sectionHeader}>
                    <LinkIcon />
                    <span>Citation</span>
                  </div>
                  <div className={styles.sectionContent}>
                    <div className={styles.citationBox}>
                      <code className={styles.citationText}>
                        {(item.authors as string) || 'Unknown Author'} ({item.year || 'N/A'}). {item.title}
                        {item.journal && `. ${item.journal}`}
                        {item.publisher && `. ${item.publisher}`}
                      </code>
                    </div>
                    <button
                      className={styles.citationCopyBtn}
                      onClick={handleCopy}
                    >
                      <CopyIcon /> {copied ? 'Copied!' : 'Copy Citation'}
                    </button>
                  </div>
                </section>
              )}
            </div>

            {/* Action Buttons */}
            {(item.url || item.pdfUrl || item.downloadUrl) && (
              <div className={styles.actionsBar}>
                {item.url && (
                  <a
                    href={String(item.url)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.actionButton}
                  >
                    <OpenNewIcon /> View Online
                  </a>
                )}
                {(item.pdfUrl || item.downloadUrl) && (
                  <a
                    href={String(item.pdfUrl || item.downloadUrl)}
                    download
                    className={styles.actionButton}
                  >
                    <DownloadIcon /> Download
                  </a>
                )}
              </div>
            )}
          </article>
        </main>
      </div>
    </>
  );
}
