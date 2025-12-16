'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './admin-navbar.module.css';
import Image from 'next/image';
import { professorDetails } from '@/data/professorDetails';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Dashboard as DashboardIcon,
  Logout as LogoutIcon,
  Person as PersonIcon,
  KeyboardArrowDown as ArrowDownIcon,
} from '@mui/icons-material';

interface AdminNavbarProps {
  userName?: string;
  onLogout?: () => void;
}

export default function AdminNavbar({ userName = 'Admin', onLogout }: AdminNavbarProps) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    router.push('/admin/login');
  };

  const navItems = [
    {
      id: 'dashboard',
      icon: DashboardIcon,
      label: 'Dashboard',
      href: '/admin/dashboard',
    },
    {
      id: 'messages',
      icon: PersonIcon,
      label: 'Contact Messages',
      href: '/admin/dashboard',
    },
  ];

  const { logo } = professorDetails.profileImages;
  const { firstName, lastName, middleInitial } = professorDetails.personalInfo;

  return (
    <nav className={styles.adminNavbar}>
      <div className={styles.navContainer}>
        {/* Logo Section */}
        <div className={styles.logoSection}>
          <Link href="/admin/dashboard" className={styles.logo}>
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
              <div className={styles.logoPrimary}>{firstName}</div>
              <div className={styles.logoSecondary}>
                {middleInitial}. {lastName}
              </div>
            </div>
          </Link>
        </div>

        {/* Nav Links - Desktop */}
        <div className={styles.navLinks}>
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.id}
                href={item.href}
                className={styles.navLink}
                title={item.label}
              >
                <IconComponent className={styles.navIcon} />
                <span className={styles.navLabel}>{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Right Section - Profile & Logout */}
        <div className={styles.rightSection}>
          {/* Profile Dropdown */}
          <div className={styles.profileDropdown}>
            <button
              className={styles.profileButton}
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              title="User menu"
            >
              <div className={styles.userAvatar}>{userName.charAt(0).toUpperCase()}</div>
              <span className={styles.userName}>{userName}</span>
              <ArrowDownIcon
                className={`${styles.arrowIcon} ${isProfileOpen ? styles.arrowOpen : ''}`}
              />
            </button>

            {/* Profile Dropdown Menu */}
            {isProfileOpen && (
              <div className={styles.dropdownMenu}>
                <div className={styles.dropdownHeader}>
                  <div className={styles.userInfo}>
                    <div className={styles.userAvatarLarge}>{userName.charAt(0).toUpperCase()}</div>
                    <div className={styles.userNameLarge}>{userName}</div>
                  </div>
                </div>
                <div className={styles.dropdownDivider}></div>
                <button
                  onClick={handleLogout}
                  className={styles.logoutDropdownBtn}
                >
                  <LogoutIcon />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={styles.mobileMenuToggle}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileNavLinks}>
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <IconComponent className={styles.mobileNavIcon} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
          <div className={styles.mobileDivider}></div>
          <button onClick={handleLogout} className={styles.mobileLogoutBtn}>
            <LogoutIcon />
            <span>Logout</span>
          </button>
        </div>
      )}
    </nav>
  );
}
