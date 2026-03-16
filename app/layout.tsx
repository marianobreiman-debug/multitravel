import type { Metadata } from 'next';
import Sidebar from '@/components/ds/Sidebar';
import TopBar from '@/components/ds/TopBar';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s — Lorien Design System',
    default: 'Lorien Design System — Multitravel',
  },
  description:
    'Sistema de diseño de Multitravel. Fuente única de verdad para diseño y desarrollo.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <div className="ds-layout">
          <Sidebar />
          <div className="ds-main">
            <TopBar />
            <main className="ds-content" id="main-content">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
