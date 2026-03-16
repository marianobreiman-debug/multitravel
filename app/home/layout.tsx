import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Multitravel.com — Vuelos, Hoteles y Paquetes turísticos',
  description: 'Encontrá las mejores ofertas en vuelos, hoteles y paquetes turísticos. Viajá a Brasil, Caribe, Europa y Argentina.',
};

export default function HomeSiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        overflowY: 'auto',
        overflowX: 'hidden',
        backgroundColor: '#F4F6F8',
        fontFamily: "'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&family=Outfit:wght@400;500;600;700&display=swap');
        .home-site * { box-sizing: border-box; }
        .home-site a { text-decoration: none; color: inherit; }
        .home-site button { cursor: pointer; border: none; font-family: inherit; }
        .home-site img { display: block; max-width: 100%; }
        .home-site ul, .home-site ol { list-style: none; margin: 0; padding: 0; }
      `}</style>
      <div className="home-site">{children}</div>
    </div>
  );
}
