'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './card.module.css';
import {
  ArrowForward as ArrowForwardIcon,
  AutoStories as BooksIcon,
  EditNote as EditIcon,
  Article as ArticleIcon,
  RateReview as ReviewIcon,
} from '@mui/icons-material';

export type CardItem = { title: string; year?: number };
export type CardCategory = {
  id: string;
  title: string;
  description?: string;
  icon?: string;
  cards: CardItem[];
};
export type PublicationStats = { 
  totalPublications?: number; 
  hIndex?: number; 
  citations?: number;
  completedProjects?: number;
  ongoingProjects?: number;
};

type Props = {
  data: CardCategory[];
  stats?: PublicationStats;
  heading?: string;
  subheading?: string;
  iconMap?: Record<string, React.ReactNode>;
  onExplore?: (categoryId: string) => void;
  routePrefix?: string;
};

const DEFAULT_ICON_MAP: Record<string, React.ReactNode> = {
  'books-published': <BooksIcon className={styles.muiIcon} />,
  'books-edited': <EditIcon className={styles.muiIcon} />,
  'articles': <ArticleIcon className={styles.muiIcon} />,
  'book-reviews': <ReviewIcon className={styles.muiIcon} />,
  'research-projects-completed': <BooksIcon className={styles.muiIcon} />,
  'research-projects-ongoing': <EditIcon className={styles.muiIcon} />,
  'research-interests': <ArticleIcon className={styles.muiIcon} />,
  'research-outputs': <ReviewIcon className={styles.muiIcon} />,
};

// Helper function to add className to icon
const addClassNameToIcon = (icon: React.ReactNode, className: string): React.ReactNode => {
  if (React.isValidElement(icon)) {
    const existingClass = (icon.props as any)?.className || '';
    return React.cloneElement(icon, {
      className: existingClass ? `${existingClass} ${className}` : className,
    } as any);
  }
  return icon;
};

export default function CardPreview({
  data,
  stats = { totalPublications: 0, hIndex: 0, citations: 0 },
  heading = 'Publications & Research',
  subheading,
  iconMap = {},
  onExplore,
  routePrefix = 'publications',
}: Props) {
  const router = useRouter();
  // Merge icon maps - custom icons override defaults
  const mergedIconMap: Record<string, React.ReactNode> = {};

  // First add defaults
  Object.entries(DEFAULT_ICON_MAP).forEach(([key, icon]) => {
    mergedIconMap[key] = icon;
  });

  // Then add custom icons with className
  Object.entries(iconMap).forEach(([key, icon]) => {
    mergedIconMap[key] = addClassNameToIcon(icon, styles.muiIcon);
  });

  const cardData = (data || []).map((cat) => ({
    ...cat,
    muiIcon: mergedIconMap[cat.id] || mergedIconMap['articles'],
    cards: cat.cards || [],
  }));

  const { totalPublications = 0, hIndex = 0, citations = 0, completedProjects = 0, ongoingProjects = 0 } = stats;

  const handleExploreCategory = (categoryId: string) => {
    router.push(`/${routePrefix}/${categoryId}`);
  };

  return (
    <section className={styles.cardPreview}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{heading}</h2>
          <p className={styles.sectionSubtitle}>
            {subheading ?? `Explore my research across ${cardData.length} categories with ${totalPublications}+ publications`}
          </p>
        </div>

        <div className={styles.categoriesGrid}>
          {cardData.map((category) => (
            <div key={category.id} className={styles.categoryCard}>
              <div 
                className={styles.iconBadge}
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                {category.cards.length}<span className={styles.badgePlusIcon}>+</span>
              </div>

              <div className={styles.iconContainer}>
                <div 
                  className={styles.iconWrapper}
                  style={{ backgroundColor: 'var(--color-background-secondary)' }}
                >
                  <span className={styles.categoryIcon}>{category.muiIcon}</span>
                </div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{category.title}</h3>
                <p className={styles.cardDescription}>{category.description}</p>

                <button
                  type="button"
                  className={styles.exploreBtn}
                  style={{
                    borderColor: 'var(--color-primary)',
                    color: 'var(--color-primary)',
                  }}
                  onMouseEnter={(e) => {
                    const target = e.currentTarget as HTMLButtonElement;
                    target.style.backgroundColor = 'var(--color-primary)';
                    target.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.currentTarget as HTMLButtonElement;
                    target.style.backgroundColor = 'transparent';
                    target.style.color = 'var(--color-primary)';
                  }}
                  onClick={() => handleExploreCategory(category.id)}
                >
                  Explore
                  <ArrowForwardIcon className={styles.btnIcon} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.statsSection}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>{totalPublications}+</div>
            <div className={styles.statText}>Total Publications</div>
          </div>

          <div className={styles.statDivider} />

          <div className={styles.statItem}>
            <div className={styles.statNumber}>{hIndex}</div>
            <div className={styles.statText}>H-Index</div>
          </div>

          <div className={styles.statDivider} />

          <div className={styles.statItem}>
            <div className={styles.statNumber}>{citations}+</div>
            <div className={styles.statText}>Citations</div>
          </div>

          <div className={styles.statDivider} />

          <div className={styles.statItem}>
            <div className={styles.statNumber}>{cardData.length}</div>
            <div className={styles.statText}>Categories</div>
          </div>
        </div>
      </div>
    </section>
  );
}