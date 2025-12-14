'use client';

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import styles from './exploreDataDashboard.module.css';
import {
  ArrowBack as ArrowBackIcon,
  Search as SearchIcon,
  Close as CloseIcon,
  GridView as GridViewIcon,
  ViewList as ViewListIcon,
  Info as InfoIcon,
  Download as DownloadIcon,
  OpenInNew as OpenNewIcon,
  ExpandMore as ChevronDownIcon,
} from '@mui/icons-material';
import bookImage from '../../../public/assets/about.png';

export interface ExploreItem {
  id: string;
  title: string;
  year: number;
  image?: string;
  thumbnail?: string;
  [key: string]: any;
}

export interface ExploreCategoryData {
  id: string;
  title: string;
  description: string;
  items: ExploreItem[];
}

interface ExploreDataDashboardProps {
  data: ExploreCategoryData;
  renderDetails?: (item: ExploreItem) => React.ReactNode;
}

export default function ExploreDataDashboard({
  data,
  renderDetails,
}: ExploreDataDashboardProps) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<string>('year');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [viewMode, setViewMode] = useState<'table' | 'grid'>('table');
  const [selectedItem, setSelectedItem] = useState<ExploreItem | null>(null);
  const [expandedRowId, setExpandedRowId] = useState<string | null>(null);

  // Filter items
  const filteredItems = useMemo(
    () =>
      data.items.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [data.items, searchTerm]
  );

  // Sort items
  const sortedItems = useMemo(() => {
    return [...filteredItems].sort((a, b) => {
      const aVal = a[sortField] ?? '';
      const bVal = b[sortField] ?? '';

      if (typeof aVal === 'string') {
        return sortOrder === 'asc'
          ? aVal.localeCompare(bVal as string)
          : (bVal as string).localeCompare(aVal);
      }

      return sortOrder === 'asc'
        ? (aVal as number) - (bVal as number)
        : (bVal as number) - (aVal as number);
    });
  }, [filteredItems, sortField, sortOrder]);

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('desc');
    }
  };

  const handleViewDetails = (item: ExploreItem) => {
    // Navigate to detail page with category and item ID
    const url = `${window.location.pathname}/${item.id}`;
    router.push(url);
  };

  const getImageSource = (item: ExploreItem) => {
    return item.image || item.thumbnail || bookImage.src;
  };

  const renderDetailFields = (item: ExploreItem) => {
    return Object.entries(item)
      .filter(
        ([key, value]) =>
          key !== 'id' &&
          key !== 'title' &&
          key !== 'year' &&
          key !== 'image' &&
          key !== 'thumbnail' &&
          value &&
          !(Array.isArray(value) && value.length === 0)
      )
      .map(([key, value]) => {
        const displayLabel = key
          .replace(/([A-Z])/g, ' $1')
          .replace(/^./, (c) => c.toUpperCase());

        const displayValue = Array.isArray(value) ? value.join(', ') : String(value);

        return { key, displayLabel, displayValue };
      });
  };

  return (
    <div className={styles.dashboard}>
      {/* Hero Header */}
      <div className={styles.heroHeader}>
        <div className={styles.heroBackdrop}></div>
        
        <div className={styles.heroContent}>
          <button
            className={styles.backBtn}
            onClick={() => router.back()}
            aria-label="Go back"
          >
            <ArrowBackIcon />
          </button>

          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>{data.title}</h1>
            <p className={styles.heroDescription}>{data.description}</p>
          </div>

          
        </div>
      </div>

      {/* Controls Section */}
      <div className={styles.controlsBar}>
        <div className={styles.searchSection}>
          <div className={styles.searchBox}>
            <SearchIcon className={styles.searchIconLeft} />
            <input
              type="text"
              placeholder="Search by title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
            {searchTerm && (
              <button
                className={styles.clearBtn}
                onClick={() => setSearchTerm('')}
                aria-label="Clear search"
              >
                <CloseIcon />
              </button>
            )}
          </div>
        </div>

        <div className={styles.viewToggle}>
          <button
            className={`${styles.viewToggleBtn} ${viewMode === 'table' ? styles.active : ''}`}
            onClick={() => setViewMode('table')}
            title="Table view"
            aria-label="Switch to table view"
          >
            <ViewListIcon />
            <span>Table</span>
          </button>
          <button
            className={`${styles.viewToggleBtn} ${viewMode === 'grid' ? styles.active : ''}`}
            onClick={() => setViewMode('grid')}
            title="Grid view"
            aria-label="Switch to grid view"
          >
            <GridViewIcon />
            <span>Grid</span>
          </button>
        </div>
      </div>

      {/* Content Section */}
      {viewMode === 'table' ? (
        // Table View
        <div className={styles.tableSection}>
          {sortedItems.length > 0 ? (
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th className={styles.colImage}></th>
                    <th
                      className={styles.colTitle}
                      onClick={() => handleSort('title')}
                    >
                      <div className={styles.headerContent}>
                        Title
                        {sortField === 'title' && (
                          <span className={styles.sortIcon}>
                            {sortOrder === 'asc' ? '↑' : '↓'}
                          </span>
                        )}
                      </div>
                    </th>
                    <th className={styles.colIsbn}>ISBN</th>
                    <th
                      className={styles.colYear}
                      onClick={() => handleSort('year')}
                    >
                      <div className={styles.headerContent}>
                        Year
                        {sortField === 'year' && (
                          <span className={styles.sortIcon}>
                            {sortOrder === 'asc' ? '↑' : '↓'}
                          </span>
                        )}
                      </div>
                    </th>
                    <th className={styles.colAuthor}>Author</th>
                    <th className={styles.colActions}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedItems.map((item) => (
                    <React.Fragment key={item.id}>
                      <tr className={styles.tableRow}>
                        <td className={styles.colImage}>
                          <img
                            src={getImageSource(item)}
                            alt={item.title}
                            className={styles.rowImage}
                          />
                        </td>
                        <td className={styles.colTitle}>
                          <div className={styles.titleContent}>
                            <span className={styles.itemTitle}>{item.title}</span>
                          </div>
                        </td>
                        <td className={styles.colIsbn}>
                          <span className={styles.isbnText}>{item.isbn || 'N/A'}</span>
                        </td>
                        <td className={styles.colYear}>
                          <span className={styles.yearTag}>{item.year}</span>
                        </td>
                        <td className={styles.colAuthor}>
                          <span className={styles.authorText}>{item.authors || 'N/A'}</span>
                        </td>
                        <td className={styles.colActions}>
                          <div className={styles.actionGroup}>
                            <button
                              className={styles.actionBtnLarge}
                              onClick={() => handleViewDetails(item)}
                              title="View full details page"
                            >
                              <InfoIcon />
                              <span>Details</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className={styles.emptyState}>
              <div className={styles.emptyIcon}>🔍</div>
              <h3>No items found</h3>
              <p>Try adjusting your search criteria</p>
            </div>
          )}
        </div>
      ) : (
        // Grid View
        <div className={styles.gridSection}>
          {sortedItems.length > 0 ? (
            <div className={styles.gridContainer}>
              {sortedItems.map((item) => (
                <div key={item.id} className={styles.gridCard}>
                  <div className={styles.cardImageWrapper}>
                    <img
                      src={getImageSource(item)}
                      alt={item.title}
                      className={styles.cardImage}
                    />
                    <span className={styles.cardYear}>{item.year}</span>
                  </div>
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                  </div>
                  <div className={styles.cardActions}>
                    <button
                      className={styles.cardBtn}
                      onClick={() => handleViewDetails(item)}
                      title="View full details"
                    >
                      <InfoIcon />
                      Details
                    </button>
                    <div className={styles.cardIcons}>
                      {item.url && (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.cardIcon}
                          title="Open"
                        >
                          <OpenNewIcon />
                        </a>
                      )}
                      {(item.downloadUrl || item.pdfUrl) && (
                        <a
                          href={item.downloadUrl || item.pdfUrl}
                          download
                          className={styles.cardIcon}
                          title="Download"
                        >
                          <DownloadIcon />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <div className={styles.emptyIcon}>🔍</div>
              <h3>No items found</h3>
              <p>Try adjusting your search criteria</p>
            </div>
          )}
        </div>
      )}

      {/* Modal Details */}
      {selectedItem && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedItem(null)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.modalClose}
              onClick={() => setSelectedItem(null)}
              aria-label="Close modal"
            >
              <CloseIcon />
            </button>

            <div className={styles.modalImage}>
              <img
                src={getImageSource(selectedItem)}
                alt={selectedItem.title}
              />
            </div>

            <div className={styles.modalBody}>
              <h2 className={styles.modalTitle}>{selectedItem.title}</h2>

              <div className={styles.modalFields}>
                {renderDetailFields(selectedItem).map(({ key, displayLabel, displayValue }) => (
                  <div key={key} className={styles.fieldRow}>
                    <span className={styles.fieldKey}>{displayLabel}:</span>
                    <span className={styles.fieldVal}>{displayValue}</span>
                  </div>
                ))}
              </div>

              <div className={styles.modalActions}>
                {selectedItem.url && (
                  <a
                    href={selectedItem.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.modalBtn}
                  >
                    <OpenNewIcon />
                    Open
                  </a>
                )}
                {(selectedItem.downloadUrl || selectedItem.pdfUrl) && (
                  <a
                    href={selectedItem.downloadUrl || selectedItem.pdfUrl}
                    download
                    className={styles.modalBtn}
                  >
                    <DownloadIcon />
                    Download
                  </a>
                )}
                <button
                  className={styles.modalBtnClose}
                  onClick={() => setSelectedItem(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}