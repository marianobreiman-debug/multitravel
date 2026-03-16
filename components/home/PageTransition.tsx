'use client';

import { useEffect, useState } from 'react';

/**
 * Wraps page content in a smooth fade-up entrance animation.
 * Use it around the <main> body of every page (not around Header/Hero
 * which should appear instantly).
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // One RAF guarantees the initial opacity:0 is painted before we transition
    const raf = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? 'translateY(0)' : 'translateY(10px)',
        transition: 'opacity 0.35s ease, transform 0.35s ease',
      }}
    >
      {children}
    </div>
  );
}
