'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import styles from './itemDetail.module.css';
import {
  ArrowBack as ArrowBackIcon,
  OpenInNew as OpenNewIcon,
  Download as DownloadIcon,
  Share as ShareIcon,
  Star as StarIcon,
  VerifiedUser as VerifiedIcon,
  Info as InfoIcon,
  EmojiEvents as KeywordsIcon,
  Article as AbstractIcon,
  Description as CitationIcon,
} from '@mui/icons-material';
import bookImage from '../../../public/assets/about.png';

export interface DetailItem {
  id: string;
  title: string;
  [key: string]: any;
}

interface DetailField {
  label: string;
  value: string;
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

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      router.back();
    }
  };

  const getImageSource = () => {
    return item.image || item.thumbnail || bookImage.src;
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

    return fields;
  };

  const fields = getFields();

  // Generate SEO meta description
  const seoDescription = item.abstract 
    ? item.abstract.substring(0, 155) 
    : `${item.title} - ${categoryTitle}`;

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>{item.title} | {categoryTitle} - Prof. Manish K. Verma</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={item.keywords ? item.keywords.join(', ') : categoryTitle} />
        <meta property="og:title" content={item.title} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:image" content={getImageSource()} />
        <meta property="og:type" content="article" />
        <meta name="author" content={item.authors || 'Prof. Manish K. Verma'} />
        <meta name="publish_date" content={item.year ? `${item.year}-01-01` : ''} />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : ''} />
      </Head>

      <div className={styles.detailPage}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <button
              className={styles.backBtn}
              onClick={handleBack}
              aria-label="Go back"
              title="Go back"
            >
              <ArrowBackIcon />
            </button>
            <div className={styles.headerText}>
              <span className={styles.category}>{categoryTitle}</span>
              <h1 className={styles.title}>{item.title}</h1>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            {/* Sidebar - Image & Actions */}
            <div className={styles.sidebar}>
              <div className={styles.imageBox}>
                <img
                  src={getImageSource()}
                  alt={item.title}
                  className={styles.image}
                  loading="lazy"
                />
              </div>

              {/* Featured Badge */}
              <div className={styles.featuredBadge}>
                <StarIcon />
                <span>Featured {categoryTitle}</span>
              </div>

              {/* Quick Actions */}
              <div className={styles.quickActions}>
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.actionBtn}
                    title="Open URL"
                  >
                    <OpenNewIcon />
                    <span>View Online</span>
                  </a>
                )}
                {(item.pdfUrl || item.downloadUrl) && (
                  <a
                    href={item.pdfUrl || item.downloadUrl}
                    download
                    className={styles.actionBtn}
                    title="Download PDF"
                  >
                    <DownloadIcon />
                    <span>Download</span>
                  </a>
                )}
                <button
                  className={styles.actionBtn}
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: item.title,
                        text: item.abstract || item.title,
                        url: window.location.href,
                      });
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                      alert('Link copied to clipboard!');
                    }
                  }}
                  title="Share"
                >
                  <ShareIcon />
                  <span>Share</span>
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className={styles.mainContent}>
              {/* Meta Info Bar */}
              <div className={styles.metaBar}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Published</span>
                  <span className={styles.metaValue}>{item.year || 'N/A'}</span>
                </div>
                {item.authors && (
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Author</span>
                    <span className={styles.metaValue}>{item.authors}</span>
                  </div>
                )}
                {item.citations && (
                  <div className={styles.metaItem}>
                    <VerifiedIcon className={styles.metaIcon} />
                    <span className={styles.metaValue}>{item.citations} Citations</span>
                  </div>
                )}
              </div>

              {/* Details Section */}
              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                  <InfoIcon className={styles.titleIcon} />
                  Key Information
                </h2>
                <div className={styles.detailsGrid}>
                  {fields.map((field, index) => (
                    <div key={index} className={styles.detailItem}>
                      <div className={styles.detailLabel}>
                        {field.icon && <span className={styles.icon}>{field.icon}</span>}
                        <span>{field.label}</span>
                      </div>
                      <div className={styles.detailValue}>{field.value}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Abstract Section */}
              {item.abstract && (
                <section className={styles.section}>
                  <h2 className={styles.sectionTitle}>
                    <AbstractIcon className={styles.titleIcon} />
                    Overview
                  </h2>
                  <p className={styles.abstractText}>{item.abstract}</p>
                </section>
              )}

              {/* Keywords Section */}
              {item.keywords && item.keywords.length > 0 && (
                <section className={styles.section}>
                  <h2 className={styles.sectionTitle}>
                    <KeywordsIcon className={styles.titleIcon} />
                    Topics & Keywords
                  </h2>
                  <div className={styles.keywordsList}>
                    {item.keywords.map((keyword: string, index: number) => (
                      <a
                        key={index}
                        href={`#${keyword.replace(/\s+/g, '-').toLowerCase()}`}
                        className={styles.keyword}
                        title={`Search for ${keyword}`}
                      >
                        {keyword}
                      </a>
                    ))}
                  </div>
                </section>
              )}

              {/* Citation Info */}
              <section className={styles.section + ' ' + styles.citationSection}>
                <h2 className={styles.sectionTitle}>
                  <CitationIcon className={styles.titleIcon} />
                  Citation
                </h2>
                <div className={styles.citationBox}>
                  <p className={styles.citationText}>
                    {item.authors || 'Author Unknown'} ({item.year || 'N/A'}). 
                    <em>{item.title}</em>. 
                    {item.journal && `${item.journal}.`}
                    {item.publisher && `${item.publisher}.`}
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
