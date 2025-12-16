'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  getCurrentUser,
  signOut,
  getAllContactMessages,
  deleteContactMessage,
  searchContactMessages,
  ContactMessage,
} from '@/utils/auth';
import styles from './dashboard.module.css';
import { Phone, Close as CloseIcon, Visibility as ViewIcon, UsbRounded, Person, Search } from '@mui/icons-material';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [filteredMessages, setFilteredMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [deleting, setDeleting] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<'date' | 'name' | 'email'>('date');
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);

  // Load user and messages on mount
  useEffect(() => {
    const currentUser = getCurrentUser();

    if (!currentUser) {
      router.push('/admin/login');
      return;
    }

    setUser(currentUser);
    loadMessages();
  }, [router]);

  const loadMessages = async () => {
    setLoading(true);
    try {
      const data = await getAllContactMessages();
      setMessages(data);
      setFilteredMessages(data);
    } catch (error) {
      console.error('Error loading messages:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query: string) => {
    setSearchQuery(query);

    if (!query.trim()) {
      setFilteredMessages(messages);
      return;
    }

    try {
      const results = await searchContactMessages(query);
      setFilteredMessages(results);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  const handleSort = (key: 'date' | 'name') => {
    setSortBy(key);
    const sorted = [...filteredMessages];

    if (key === 'date') {
      sorted.sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    } else if (key === 'name') {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    }

    setFilteredMessages(sorted);
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this message?')) {
      return;
    }

    setDeleting(id);
    try {
      const success = await deleteContactMessage(id);
      if (success) {
        setMessages((prev) => prev.filter((msg) => msg.id !== id));
        setFilteredMessages((prev) => prev.filter((msg) => msg.id !== id));
      }
    } catch (error) {
      console.error('Error deleting message:', error);
    } finally {
      setDeleting(null);
    }
  };

  const handleLogout = () => {
    signOut();
    router.push('/admin/login');
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (!user) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <p>Redirecting to login...</p>
      </div>
    );
  }

  return (
    <div className={styles.dashboardContainer}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.titleSection}>
            <h1 className={styles.title}>Contact Messages</h1>
            <p className={styles.subtitle}>Manage all incoming messages</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className={styles.mainContent}>
        {/* Stats */}
        <div className={styles.statsSection}>
          <div className={styles.statCard}>
            <div className={styles.statValue}>{messages.length}</div>
            <div className={styles.statLabel}>Total Messages</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>
              {messages.filter(
                (msg) =>
                  new Date(msg.created_at).getTime() > Date.now() - 7 * 24 * 60 * 60 * 1000
              ).length}
            </div>
            <div className={styles.statLabel}>This Week</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>
              {new Set(messages.map((msg) => msg.phone)).size}
            </div>
            <div className={styles.statLabel}>Unique Contacts</div>
          </div>
        </div>



        <div className={styles.searchSection}>
          <div className={styles.searchBox}>
            <Search className={styles.searchIconLeft} />
            <input
              type="text"
              placeholder="Search by name or phone..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className={styles.searchInput}
            />
          </div>
          <p className={styles.resultCount}>
            {filteredMessages.length} of {messages.length} messages
          </p>
        </div>

        {/* Messages Table */}
        <div className={styles.tableContainer}>
          {loading ? (
            <div className={styles.loadingCenter}>
              <div className={styles.spinner}></div>
              <p>Loading messages...</p>
            </div>
          ) : filteredMessages.length === 0 ? (
            <div className={styles.emptyState}>
              <p>No messages found</p>
              {searchQuery && (
                <button onClick={() => handleSearch('')} className={styles.clearButton}>
                  Clear Search
                </button>
              )}
            </div>
          ) : (
            <table className={styles.messagesTable}>
              <thead className={styles.tableHead}>
                <tr>
                  <th
                    className={`${styles.th} ${sortBy === 'name' ? styles.active : ''}`}
                    onClick={() => handleSort('name')}
                  >
                    Name
                  </th>
                  <th className={styles.th}>Phone</th>

                  <th
                    className={`${styles.th}`}
                    onClick={() => handleSort('date')}
                  >
                    Date
                  </th>
                  <th className={styles.th}>Message</th>
                  <th className={styles.th}>Action</th>
                </tr>
              </thead>
              <tbody className={styles.tableBody}>
                {filteredMessages.map((message) => (
                  <tr key={message.id} className={styles.tr}>
                    <td className={styles.td}>{message.name}</td>
                    <td className={styles.td}>{message.phone}
                      <a
                        href={`tel:${message.phone}`}
                        className={styles.phoneLink}
                        aria-label={`Call ${message.phone}`}
                      >
                        <Phone />
                      </a>
                    </td>
                    <td className={styles.td}>{formatDate(message.created_at)}</td>
                    <td className={`${styles.td} ${styles.messageCol}`}>
                      <div className={styles.messagePreview}>
                        {message.message.substring(0, 60)}...
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.actionButtons}>
                        <button
                          onClick={() => setSelectedMessage(message)}
                          className={styles.viewBtn}
                          title="View details"
                        >
                          <ViewIcon />
                        </button>
                        <button
                          onClick={() => handleDelete(message.id)}
                          disabled={deleting === message.id}
                          className={styles.deleteBtn}
                          title="Delete message"
                        >
                          {deleting === message.id ? '...' : '✕'}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>

      {/* Details Modal */}
      {selectedMessage && (
        <div className={styles.modalOverlay} onClick={() => setSelectedMessage(null)}>
          <div className={styles.modalNew} onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedMessage(null)}
              className={styles.modalCloseIconBtn}
              aria-label="Close modal"
            >
              <CloseIcon />
            </button>

            <div className={styles.modalContentWrapper}>
              <div className={styles.modalTitleSection}>
                <div className={styles.modalTitleBadge}>Message</div>
                <h2 className={styles.modalNewTitle}>Contact Details</h2>
              </div>

              <div className={styles.modalDetailsGrid}>

                <div className={styles.detailCardName}>
                  <div className={styles.detailCardHeader}>
                    <div className={styles.detailCardIcon}>
                      <Person />
                    </div>
                    <span className={styles.detailCardLabel}>Full Name</span>
                  </div>
                  <p className={styles.detailCardValue}>{selectedMessage.name}</p>
                </div>

                <div className={styles.detailCard}>
                  <div className={styles.detailCardHeader}>
                    <div className={styles.detailCardIcon}>
                      <Phone style={{ fontSize: '20px' }} />
                    </div>
                    <span className={styles.detailCardLabel}>Phone Number</span>
                  </div>
                  <p className={styles.detailCardValue}>
                    <a href={`tel:${selectedMessage.phone}`} className={styles.phoneCallLink}>
                      {selectedMessage.phone}
                    </a>
                  </p>
                </div>

                <div className={styles.detailCard}>
                  <div className={styles.detailCardHeader}>
                    <div className={styles.detailCardIcon}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                    </div>
                    <span className={styles.detailCardLabel}>Date & Time</span>
                  </div>
                  <p className={styles.detailCardValue}>{formatDate(selectedMessage.created_at)}</p>
                </div>


              </div>

              <div className={styles.messageSection}>
                <div className={styles.messageSectionHeader}>
                  <h3 className={styles.messageSectionTitle}>Message</h3>
                  <div className={styles.messageLengthBadge}>{selectedMessage.message.length} characters</div>
                </div>
                <div className={styles.messageContentBox}>
                  {selectedMessage.message}
                </div>
              </div>

              <div className={styles.modalActionButtons}>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(selectedMessage.phone);
                  }}
                  className={styles.actionBtnSecondary}
                  title="Copy phone number"
                >
                  Copy Phone
                </button>
                <button
                  onClick={() => setSelectedMessage(null)}
                  className={styles.actionBtnPrimary}
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
