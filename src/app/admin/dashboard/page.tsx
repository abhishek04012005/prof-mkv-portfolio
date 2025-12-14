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

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [filteredMessages, setFilteredMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [deleting, setDeleting] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<'date' | 'name' | 'email'>('date');

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

  const handleSort = (key: 'date' | 'name' | 'email') => {
    setSortBy(key);
    const sorted = [...filteredMessages];

    if (key === 'date') {
      sorted.sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    } else if (key === 'name') {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (key === 'email') {
      sorted.sort((a, b) => a.email.localeCompare(b.email));
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
            <p className={styles.subtitle}>Admin Dashboard</p>
          </div>
          <div className={styles.userSection}>
            <span className={styles.userName}>Welcome, {user.name || user.email}</span>
            <button onClick={handleLogout} className={styles.logoutButton}>
              Logout
            </button>
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
              {new Set(messages.map((msg) => msg.email)).size}
            </div>
            <div className={styles.statLabel}>Unique Contacts</div>
          </div>
        </div>

        {/* Search Bar */}
        <div className={styles.searchSection}>
          <div className={styles.searchBox}>
            <input
              type="text"
              placeholder="Search by name, email, or subject..."
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
                  <th
                    className={`${styles.th} ${sortBy === 'email' ? styles.active : ''}`}
                    onClick={() => handleSort('email')}
                  >
                    Email
                  </th>
                  <th className={styles.th}>Subject</th>
                  <th
                    className={`${styles.th} ${sortBy === 'date' ? styles.active : ''}`}
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
                    <td className={styles.td}>
                      <a href={`mailto:${message.email}`} className={styles.emailLink}>
                        {message.email}
                      </a>
                    </td>
                    <td className={styles.td}>{message.subject}</td>
                    <td className={styles.td}>{formatDate(message.created_at)}</td>
                    <td className={`${styles.td} ${styles.messageCol}`}>
                      <div className={styles.messagePreview}>
                        {message.message.substring(0, 60)}...
                      </div>
                    </td>
                    <td className={styles.td}>
                      <button
                        onClick={() => handleDelete(message.id)}
                        disabled={deleting === message.id}
                        className={styles.deleteBtn}
                        title="Delete message"
                      >
                        {deleting === message.id ? '...' : '✕'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  );
}
