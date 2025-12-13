'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './exploreDataDashboard.module.css';
import {
  ArrowBack as ArrowBackIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  Download as DownloadIcon,
  OpenInNew as OpenNewIcon,
  Search as SearchIcon,
  Close as CloseIcon,
} from '@mui/icons-material';

export interface ExploreItem {
  id: string;
  title: string;
  year: number;
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
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<string>('year');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const toggleRowExpansion = (itemId: string) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedRows(newExpanded);
  };

  // Filter items
  const filteredItems = data.items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort items
  const sortedItems = [...filteredItems].sort((a, b) => {
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

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('desc');
    }
  };

  return (
    <div className={styles.dashboard}>
      {/* Header Section */}
      <div className={styles.header}>
        <button
          className={styles.backBtn}
          onClick={() => router.back()}
          aria-label="Go back"
        >
          <ArrowBackIcon />
          <span>Back</span>
        </button>

        <div className={styles.headerContent}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.description}>{data.description}</p>
        </div>

        <div className={styles.headerStats}>
          <div className={styles.statBox}>
            <span className={styles.statValue}>{data.items.length}</span>
            <span className={styles.statLabel}>Total Items</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statBox}>
            <span className={styles.statValue}>{sortedItems.length}</span>
            <span className={styles.statLabel}>Showing</span>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className={styles.searchSection}>
        <div className={styles.searchWrapper}>
          <SearchIcon className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
          {searchTerm && (
            <button
              className={styles.clearSearchBtn}
              onClick={() => setSearchTerm('')}
              aria-label="Clear search"
            >
              <CloseIcon />
            </button>
          )}
        </div>
      </div>

      {/* Table */}
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead className={styles.tableHead}>
            <tr>
              <th className={styles.expandCol}></th>
              <th
                className={styles.titleCol}
                onClick={() => handleSort('title')}
              >
                <div className={styles.headerCell}>
                  Title
                  {sortField === 'title' && (
                    <span className={styles.sortIndicator}>
                      {sortOrder === 'asc' ? '↑' : '↓'}
                    </span>
                  )}
                </div>
              </th>
              <th
                className={styles.yearCol}
                onClick={() => handleSort('year')}
              >
                <div className={styles.headerCell}>
                  Year
                  {sortField === 'year' && (
                    <span className={styles.sortIndicator}>
                      {sortOrder === 'asc' ? '↑' : '↓'}
                    </span>
                  )}
                </div>
              </th>
              <th className={styles.actionCol}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedItems.length > 0 ? (
              sortedItems.map((item) => (
                <React.Fragment key={item.id}>
                  <tr
                    className={`${styles.tableRow} ${
                      expandedRows.has(item.id) ? styles.expandedRow : ''
                    }`}
                  >
                    <td className={styles.expandCol}>
                      <button
                        className={styles.expandBtn}
                        onClick={() => toggleRowExpansion(item.id)}
                        aria-label={
                          expandedRows.has(item.id) ? 'Collapse' : 'Expand'
                        }
                      >
                        {expandedRows.has(item.id) ? (
                          <ExpandLessIcon />
                        ) : (
                          <ExpandMoreIcon />
                        )}
                      </button>
                    </td>
                    <td className={styles.titleCol}>
                      <span className={styles.itemTitle}>{item.title}</span>
                    </td>
                    <td className={styles.yearCol}>
                      <span className={styles.yearBadge}>{item.year}</span>
                    </td>
                    <td className={styles.actionCol}>
                      <div className={styles.actionButtons}>
                        {item.url && (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.actionBtn}
                            title="Open in new tab"
                          >
                            <OpenNewIcon />
                          </a>
                        )}
                        {item.downloadUrl && (
                          <a
                            href={item.downloadUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.actionBtn}
                            title="Download"
                          >
                            <DownloadIcon />
                          </a>
                        )}
                        {item.pdfUrl && (
                          <a
                            href={item.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.actionBtn}
                            title="Download PDF"
                          >
                            <DownloadIcon />
                          </a>
                        )}
                      </div>
                    </td>
                  </tr>

                  {/* Expandable Details Row */}
                  {expandedRows.has(item.id) && (
                    <tr className={styles.detailsRow}>
                      <td colSpan={4}>
                        <div className={styles.detailsPanel}>
                          {renderDetails ? (
                            renderDetails(item)
                          ) : (
                            <DefaultItemDetails item={item} />
                          )}
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))
            ) : (
              <tr>
                <td colSpan={4} className={styles.emptyState}>
                  <div className={styles.emptyContent}>
                    <span className={styles.emptyIcon}>📭</span>
                    <p>No items found matching your search.</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function DefaultItemDetails({ item }: { item: ExploreItem }) {
  const getDisplayValue = (value: any): string => {
    if (Array.isArray(value)) {
      return value.join(', ');
    }
    return String(value);
  };

  return (
    <div className={require('./exploreDataDashboard.module.css').defaultDetails}>
      <div className={require('./exploreDataDashboard.module.css').detailsGrid}>
        {Object.entries(item).map(([key, value]) => {
          if (
            key === 'id' ||
            key === 'title' ||
            key === 'year' ||
            !value ||
            (Array.isArray(value) && value.length === 0)
          ) {
            return null;
          }

          const displayLabel = key
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, (c) => c.toUpperCase());

          return (
            <div
              key={key}
              className={require('./exploreDataDashboard.module.css').detailField}
            >
              <h5 className={require('./exploreDataDashboard.module.css').fieldLabel}>
                {displayLabel}
              </h5>
              <p className={require('./exploreDataDashboard.module.css').fieldValue}>
                {getDisplayValue(value)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
