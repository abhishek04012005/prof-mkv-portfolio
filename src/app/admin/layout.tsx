'use client';

import { useEffect, ReactNode, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { isAuthenticated, getCurrentUser, signOut } from '@/utils/auth';
import AdminNavbar from '@/components/admin-navbar/admin-navbar';

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuth, setIsAuth] = useState(false);
  const [userName, setUserName] = useState('Admin');
  const [isLoading, setIsLoading] = useState(true);

  // Check if current page is login page
  const isLoginPage = pathname === '/admin/login';

  useEffect(() => {
    // Check authentication on mount
    const checkAuth = () => {
      const authenticated = isAuthenticated();
      
      if (!authenticated && !isLoginPage) {
        // Redirect to login if not authenticated and not on login page
        router.push('/admin/login');
        return;
      }
      
      if (authenticated) {
        const currentUser = getCurrentUser();
        if (currentUser && currentUser.name) {
          setUserName(currentUser.name);
        }
        setIsAuth(true);
      }
      
      setIsLoading(false);
    };

    checkAuth();

    // Also check on visibility change (when user returns to tab)
    const handleVisibilityChange = () => {
      if (!document.hidden && !isLoginPage && !isAuthenticated()) {
        router.push('/admin/login');
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [router, isLoginPage]);

  const handleLogout = () => {
    signOut();
    router.push('/admin/login');
  };

  // Show loading state while checking authentication
  if (isLoading && !isLoginPage) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        gap: '16px',
        color: 'var(--color-text-light)',
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          border: '3px solid var(--color-border)',
          borderTopColor: 'var(--color-primary)',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite',
        }}></div>
        <p>Loading...</p>
      </div>
    );
  }

  // If login page, don't show navbar
  if (isLoginPage) {
    return <>{children}</>;
  }

  // If not authenticated on protected page, show nothing (will redirect)
  if (!isAuth) {
    return null;
  }

  // Show navbar and content for authenticated users
  return (
    <>
      <AdminNavbar userName={userName} onLogout={handleLogout} />
      {children}
    </>
  );
}
