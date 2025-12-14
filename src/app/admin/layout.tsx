'use client';

import { useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from '@/utils/auth';

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const router = useRouter();

  useEffect(() => {
    // Check authentication on mount
    const checkAuth = () => {
      if (!isAuthenticated()) {
        router.push('/admin/login');
      }
    };

    checkAuth();

    // Also check on visibility change (when user returns to tab)
    const handleVisibilityChange = () => {
      if (!document.hidden && !isAuthenticated()) {
        router.push('/admin/login');
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [router]);

  return <>{children}</>;
}
