'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigation } from '@/lib/navigation';
import styles from './TopBar.module.css';

function buildBreadcrumb(pathname: string): Array<{ label: string; href: string }> {
  const crumbs: Array<{ label: string; href: string }> = [];
  const segments = pathname.split('/').filter(Boolean);

  if (segments.length === 0) return [];

  let currentPath = '';
  for (const segment of segments) {
    currentPath += '/' + segment;

    // Find label from navigation
    let label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');

    for (const section of navigation) {
      if (section.href === currentPath) {
        label = section.label;
        break;
      }
      if (section.items) {
        for (const item of section.items) {
          if (item.href === currentPath) {
            label = item.label;
            break;
          }
          if (item.children) {
            for (const child of item.children) {
              if (child.href === currentPath) {
                label = child.label;
                break;
              }
            }
          }
        }
      }
    }

    crumbs.push({ label, href: currentPath });
  }

  return crumbs;
}

export default function TopBar() {
  const pathname = usePathname();
  const crumbs = buildBreadcrumb(pathname);

  return (
    <header className={styles.topbar} role="banner">
      {/* Breadcrumb */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href="/" className={styles.breadcrumbHome} aria-label="Inicio">
          <span className={styles.breadcrumbHomeIcon}>⌂</span>
        </Link>
        {crumbs.map((crumb, i) => (
          <span key={crumb.href} className={styles.breadcrumbItem}>
            <span className={styles.breadcrumbSep} aria-hidden="true">›</span>
            {i === crumbs.length - 1 ? (
              <span className={styles.breadcrumbCurrent} aria-current="page">{crumb.label}</span>
            ) : (
              <Link href={crumb.href} className={styles.breadcrumbLink}>{crumb.label}</Link>
            )}
          </span>
        ))}
      </nav>

      {/* Actions */}
      <div className={styles.actions}>
        <a
          href="https://www.figma.com/design/awAiQ74drBGZImHlXtIdPN/Lorien"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.actionBtn}
          title="Abrir en Figma"
        >
          <FigmaIcon />
          <span className={styles.actionLabel}>Figma</span>
        </a>
        <a href="#" className={styles.actionBtn} title="Repositorio">
          <GitHubIcon />
          <span className={styles.actionLabel}>Repo</span>
        </a>
        <div className={styles.versionBadge}>v0.1.0</div>
      </div>
    </header>
  );
}

function FigmaIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 12a4 4 0 0 1 4-4h4v8h-4a4 4 0 0 1-4-4zM4 20a4 4 0 0 0 4 4v-8H4v4zM4 12a4 4 0 0 1 4-4H12v8H8a4 4 0 0 1-4-4zM4 4a4 4 0 0 0 4 4H12V0H8a4 4 0 0 0-4 4zM12 0h4a4 4 0 0 1 0 8h-4V0z"/>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}
