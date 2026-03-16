import type { Metadata } from 'next';
import PlaceholderPage from '@/components/ds/PlaceholderPage';

export const metadata: Metadata = { title: 'Home Vertical — Templates' };

export default function HomeTemplatePage() {
  return (
    <PlaceholderPage
      title="Home Vertical"
      description="Página de inicio de una vertical de producto: vuelos, hoteles, paquetes o traslados."
      section="Templates"
      status="draft"
      sections={[
        { icon: '⌕', title: 'Hero + Search Box', description: 'Sección hero con imagen de fondo y search box protagonista.' },
        { icon: '⭐', title: 'Destinos Destacados', description: 'Grid de destinos populares o recomendados.' },
        { icon: '▭', title: 'Banners Promocionales', description: 'Carrusel o grilla de ofertas y novedades.' },
        { icon: '◷', title: 'Últimas búsquedas', description: 'Accesos rápidos a búsquedas recientes del usuario logueado.' },
        { icon: '≡', title: 'Footer', description: 'Footer estándar con navegación, legales y redes.' },
      ]}
    />
  );
}
