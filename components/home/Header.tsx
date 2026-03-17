'use client';

import styles from './Header.module.css';

// ─── Figma asset URLs (reemplazar por /public/logo.png cuando esté disponible)
const LOGO_M_ICON = 'https://www.figma.com/api/mcp/asset/a04d90a8-662c-4579-adf8-a12748ae63c1';
const LOGO_ACCENT = 'https://www.figma.com/api/mcp/asset/8965b87b-ea99-4e1d-ab01-ea17e158d155';
const LOGO_TEXT   = 'https://www.figma.com/api/mcp/asset/fc884147-3df0-464a-8b43-006fff0b8000';

function HeadsetIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 2.5C6.55 2.5 3.75 5.3 3.75 8.75V13.125C3.75 14.16 4.59 15 5.625 15H6.875C7.22 15 7.5 14.72 7.5 14.375V10.625C7.5 10.28 7.22 10 6.875 10H5V8.75C5 5.99 7.24 3.75 10 3.75C12.76 3.75 15 5.99 15 8.75V10H13.125C12.78 10 12.5 10.28 12.5 10.625V14.375C12.5 14.72 12.78 15 13.125 15H14.375C15.41 15 16.25 14.16 16.25 13.125V8.75C16.25 5.3 13.45 2.5 10 2.5Z" fill="#226FCB"/>
    </svg>
  );
}

function ProfileCircleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 1.667a8.333 8.333 0 1 0 0 16.667A8.333 8.333 0 0 0 10 1.667Zm0 3.333a2.917 2.917 0 1 1 0 5.833 2.917 2.917 0 0 1 0-5.833Zm0 11.25a6.657 6.657 0 0 1-5.208-2.5c.042-1.715 3.472-2.658 5.208-2.658s5.158.943 5.208 2.658A6.657 6.657 0 0 1 10 16.25Z" fill="#EF0539"/>
    </svg>
  );
}

export function Header() {
  return (
    <header
      className="w-full bg-white"
      style={{
        boxShadow: '0px 1px 2px 0px rgba(39,38,38,0.04), 0px 1px 2px 0px rgba(39,38,38,0.04)',
        position:  'relative',
        zIndex:    50,
      }}
    >
      <div className={styles.navInner}>

        {/* ─── Logo ─────────────────────────────────────────────────────── */}
        <a href="/home" aria-label="Multitravel.com — inicio" style={{ display: 'block', lineHeight: 0 }}>
          <div className={styles.logoWrap}>
            {/* Ícono M */}
            <div style={{ position: 'absolute', top: '2.63%', right: '83.43%', bottom: '0%', left: '0%' }}>
              <img src={LOGO_M_ICON} alt="" style={{ position: 'absolute', width: '100%', height: '100%', maxWidth: 'none', display: 'block' }} />
            </div>
            {/* Acento */}
            <div style={{ position: 'absolute', top: '0%', right: '84.28%', bottom: '88.22%', left: '14.13%' }}>
              <img src={LOGO_ACCENT} alt="" style={{ position: 'absolute', width: '100%', height: '100%', maxWidth: 'none', display: 'block' }} />
            </div>
            {/* Texto */}
            <div style={{ position: 'absolute', top: '15.96%', right: '0%', bottom: '24.32%', left: '21.07%' }}>
              <img src={LOGO_TEXT} alt="MULTITRAVEL.COM" style={{ position: 'absolute', width: '100%', height: '100%', maxWidth: 'none', display: 'block' }} />
            </div>
          </div>
        </a>

        {/* ─── Botones ──────────────────────────────────────────────────── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>

          {/* Headset / Contáctanos */}
          <a href="#" className={styles.contactBtn}>
            <HeadsetIcon />
            <span className={styles.btnLabel} style={{ fontWeight: 500, fontSize: 12, lineHeight: '16px', color: '#226FCB' }}>
              Contáctanos
            </span>
          </a>

          {/* Profile / Iniciar sesión */}
          <a href="#" className={styles.profileBtn}>
            <ProfileCircleIcon />
            <span className={styles.btnLabel} style={{ fontWeight: 600, fontSize: 12, lineHeight: '16px', color: '#EF0539' }}>
              Iniciar sesión
            </span>
          </a>

        </div>
      </div>
    </header>
  );
}
