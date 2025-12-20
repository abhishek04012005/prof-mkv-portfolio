'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { professorDetails } from '@/data/professorDetails';
import styles from './navbar.module.css';
import { WhatsApp } from '@mui/icons-material';

interface DropdownItem {
  label: string;
  href: string;
}

interface NavLink {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  // Hide navbar on admin routes (including /admin/login)
  if (pathname.startsWith('/admin')) {
    return null;
  }

  const navLinks: NavLink[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    {
      label: 'Publications',
      dropdown: [
        { label: 'Books Published', href: '/publications/books-published' },
        { label: 'Books Edited', href: '/publications/books-edited' },
        { label: 'Articles', href: '/publications/articles' },
        { label: 'Book Reviews', href: '/publications/book-reviews' },
      ],
    },
    {
      label: 'Research',
      dropdown: [
        { label: 'Completed Projects', href: '/research/research-projects-completed' },
        { label: 'Research Interests', href: '/research/research-interests' },
        { label: 'Research Outputs', href: '/research/research-outputs' },
      ],
    },
    {
      label: 'Supervision',
      dropdown: [
        { label: 'Ph.D Supervision', href: '/supervision/phd-supervision' },
        { label: 'M.Phil Supervision', href: '/supervision/mphil-supervision' },
        { label: 'Postdoctoral Fellowship', href: '/supervision/post-doctorate-supervision' },
      ],
    },
    {
      label: 'Events',
      dropdown: [
        { label: 'Organized Events', href: '/events/organized-events'},
        // { label: 'Workshops', href: '/outreach/workshops' },
        // { label: 'Lectures', href: '/outreach/lectures' },
        { label: 'Presentations', href: '/events/presentations' },
      ],
    },
  
    { label: 'Gallery', href: '/gallery' },

  ];

  const { logo } = professorDetails.profileImages;
  const { firstName, lastName, middleInitial } = professorDetails.personalInfo;

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const toggleMobileDropdown = (label: string) => {
    setOpenMobileDropdown(openMobileDropdown === label ? null : label);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setOpenMobileDropdown(null);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          {/* Logo Section */}
          <div className={styles.logoSection}>
            <Link href="/" className={styles.logo} onClick={() => setIsOpen(false)}>
              <div className={styles.logoIcon}>
                <Image
                  src={logo.url}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  priority
                  className={styles.logoImage}
                />
              </div>

              <div className={styles.logoText}>
                <div className={styles.logoPrimary}>{professorDetails.personalInfo.title} {firstName}</div>
                <div className={styles.logoSecondary}>
                  {middleInitial}. {lastName}
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className={styles.navLinks}>
            {navLinks.map((link) => (
              <li
                key={link.label}
                className={styles.navItem}
                onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {link.dropdown ? (
                  <>
                    <button className={styles.navButton}>
                      {link.label}
                      <span className={styles.chevron}>▼</span>
                    </button>

                    {/* Desktop Dropdown */}
                    <div
                      className={`${styles.dropdown} ${openDropdown === link.label ? styles.dropdownOpen : ''
                        }`}
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={styles.dropdownItem}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link href={link.href || '#'} className={styles.navLink}>
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className={styles.desktopActions}>
            <a
              href="/contact"
              className={styles.contactBtn}
            >
              Contact
            </a>
          </div>

          {/* Hamburger Menu */}
          <button
            className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
          <ul className={styles.mobileNavList}>
            {navLinks.map((link) => (
              <li key={link.label} className={styles.mobileNavItem}>
                {link.dropdown ? (
                  <>
                    <button
                      className={styles.mobileNavButton}
                      onClick={() => toggleMobileDropdown(link.label)}
                      aria-expanded={openMobileDropdown === link.label}
                    >
                      <span>{link.label}</span>
                      <span
                        className={`${styles.mobileChevron} ${openMobileDropdown === link.label ? styles.rotated : ''
                          }`}
                      >
                        ▼
                      </span>
                    </button>

                    {/* Mobile Dropdown */}
                    <ul
                      className={`${styles.mobileDropdown} ${openMobileDropdown === link.label ? styles.mobileDropdownOpen : ''
                        }`}
                    >
                      {link.dropdown.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={styles.mobileDropdownItem}
                            onClick={handleLinkClick}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={link.href || '#'}
                    className={styles.mobileNavLink}
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className={styles.mobileDivider}></div>

          <div className={styles.mobileActions}>
            <a
              href={professorDetails.resources.cv}
              className={styles.mobileContactBtn}
              download
            >
              Contact Me
            </a>
          </div>
        </div>
      </nav>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${professorDetails.personalInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hello, *Prof. (Dr.) Manish K. Verma*\n\nI wish to connect with you.")}`}
        className={styles.whatsappBtn}
        target="_blank"
        rel="noopener noreferrer"
        title={`Contact ${professorDetails.personalInfo.firstName} via WhatsApp`}
        aria-label="WhatsApp Chat"
      >
        <WhatsApp className={styles.whatsappIcon} />
      </a>

    </>
  );
}