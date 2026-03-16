'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigation, NavSection, NavItem, systemStats } from '@/lib/navigation';
import styles from './Sidebar.module.css';

function isActive(href: string, pathname: string) {
  return pathname === href;
}

function isAncestorActive(item: NavItem, pathname: string): boolean {
  if (isActive(item.href, pathname)) return true;
  return item.children?.some(child => isAncestorActive(child, pathname)) ?? false;
}

function isSectionActive(section: NavSection, pathname: string): boolean {
  if (pathname === section.href || pathname.startsWith(section.href + '/')) return true;
  return section.items?.some(item => isAncestorActive(item, pathname)) ?? false;
}

function StatusDot({ status }: { status?: string }) {
  if (!status || status === 'stable') return null;
  const cls = {
    beta: styles.dotBeta,
    draft: styles.dotDraft,
    deprecated: styles.dotDeprecated,
  }[status] ?? '';
  return <span className={`${styles.dot} ${cls}`} />;
}

interface NavItemProps {
  item: NavItem;
  depth?: number;
  pathname: string;
  searchQuery: string;
}

function NavItemView({ item, depth = 0, pathname, searchQuery }: NavItemProps) {
  const [open, setOpen] = useState(false);
  const active = isActive(item.href, pathname);
  const ancestorActive = !active && isAncestorActive(item, pathname);
  const hasChildren = item.children && item.children.length > 0;

  useEffect(() => {
    if (ancestorActive || active) setOpen(true);
  }, [ancestorActive, active]);

  const matchesSearch = useCallback((it: NavItem): boolean => {
    if (!searchQuery) return true;
    if (it.label.toLowerCase().includes(searchQuery.toLowerCase())) return true;
    return it.children?.some(matchesSearch) ?? false;
  }, [searchQuery]);

  if (!matchesSearch(item)) return null;

  const indent = depth * 14;

  if (hasChildren) {
    return (
      <div className={styles.group}>
        <button
          className={`${styles.groupHeader} ${ancestorActive ? styles.groupHeaderActive : ''}`}
          style={{ paddingLeft: `${12 + indent}px` }}
          onClick={() => setOpen(v => !v)}
          aria-expanded={open}
        >
          <span className={styles.groupLabel}>{item.label}</span>
          <StatusDot status={item.status} />
          <span className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}>›</span>
        </button>
        {open && (
          <div className={styles.groupItems}>
            {item.children!.map(child => (
              <NavItemView
                key={child.href}
                item={child}
                depth={depth + 1}
                pathname={pathname}
                searchQuery={searchQuery}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      className={`${styles.navItem} ${active ? styles.navItemActive : ''}`}
      style={{ paddingLeft: `${12 + indent}px` }}
    >
      <span className={styles.navItemLabel}>{item.label}</span>
      <StatusDot status={item.status} />
      {item.isNew && <span className={styles.newTag}>Nuevo</span>}
    </Link>
  );
}

interface SidebarSectionProps {
  section: NavSection;
  pathname: string;
  searchQuery: string;
}

function SidebarSection({ section, pathname, searchQuery }: SidebarSectionProps) {
  const sectionActive = isSectionActive(section, pathname);
  const [open, setOpen] = useState(sectionActive);

  useEffect(() => {
    if (sectionActive) setOpen(true);
  }, [sectionActive]);

  const hasItems = section.items && section.items.length > 0;

  const matchesSearch = (sec: NavSection): boolean => {
    if (!searchQuery) return true;
    if (sec.label.toLowerCase().includes(searchQuery.toLowerCase())) return true;
    return sec.items?.some(item => item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.children?.some(c => c.label.toLowerCase().includes(searchQuery.toLowerCase()))
    ) ?? false;
  };

  if (!matchesSearch(section)) return null;

  return (
    <div className={styles.section}>
      {hasItems ? (
        <button
          className={`${styles.sectionHeader} ${sectionActive ? styles.sectionHeaderActive : ''}`}
          onClick={() => setOpen(v => !v)}
          aria-expanded={open}
        >
          <span className={styles.sectionIcon}>{section.icon}</span>
          <span className={styles.sectionLabel}>{section.label}</span>
          <span className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}>›</span>
        </button>
      ) : (
        <Link
          href={section.href}
          className={`${styles.sectionHeader} ${sectionActive ? styles.sectionHeaderActive : ''}`}
        >
          <span className={styles.sectionIcon}>{section.icon}</span>
          <span className={styles.sectionLabel}>{section.label}</span>
        </Link>
      )}

      {hasItems && open && (
        <div className={styles.sectionItems}>
          {section.items!.map(item => (
            <NavItemView
              key={item.href}
              item={item}
              depth={0}
              pathname={pathname}
              searchQuery={searchQuery}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Sidebar() {
  const pathname = usePathname();
  const [search, setSearch] = useState('');

  return (
    <aside className={styles.sidebar} aria-label="Design System Navigation">
      {/* Brand */}
      <div className={styles.brand}>
        <Link href="/" className={styles.brandLink}>
          <div className={styles.brandIcon}>◆</div>
          <div className={styles.brandText}>
            <div className={styles.brandName}>LORIEN</div>
            <div className={styles.brandSub}>Design System</div>
          </div>
        </Link>
      </div>

      {/* Search */}
      <div className={styles.search}>
        <span className={styles.searchIcon}>⌕</span>
        <input
          type="search"
          placeholder="Buscar..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className={styles.searchInput}
          aria-label="Buscar en el design system"
        />
        {search && (
          <button className={styles.searchClear} onClick={() => setSearch('')} aria-label="Limpiar búsqueda">×</button>
        )}
      </div>

      {/* Home link */}
      <div className={styles.homeLink}>
        <Link
          href="/"
          className={`${styles.sectionHeader} ${pathname === '/' ? styles.sectionHeaderActive : ''}`}
        >
          <span className={styles.sectionIcon}>⌂</span>
          <span className={styles.sectionLabel}>Home</span>
        </Link>
      </div>

      {/* Nav */}
      <nav className={styles.nav}>
        {navigation.map(section => (
          <SidebarSection
            key={section.id}
            section={section}
            pathname={pathname}
            searchQuery={search}
          />
        ))}
      </nav>

      {/* Footer */}
      <div className={styles.footer}>
        <div className={styles.footerVersion}>
          <span className={styles.footerVersionBadge}>v{systemStats.version}</span>
          <span className={styles.footerStats}>{systemStats.totalComponents} componentes</span>
        </div>
        <div className={styles.footerLinks}>
          <a href="https://www.figma.com/design/awAiQ74drBGZImHlXtIdPN/Lorien" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
            Figma
          </a>
          <span className={styles.footerDot}>·</span>
          <a href="#" className={styles.footerLink}>GitHub</a>
        </div>
      </div>
    </aside>
  );
}
