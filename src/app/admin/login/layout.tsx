'use client';

import { ReactNode } from 'react';

interface LoginLayoutProps {
  children: ReactNode;
}

export default function LoginLayout({ children }: LoginLayoutProps) {
  // Login page doesn't need any special layout or authentication checks
  return <>{children}</>;
}
