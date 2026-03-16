import type { Metadata } from 'next';
import PlaceholderPage from '@/components/ds/PlaceholderPage';

export const metadata: Metadata = { title: 'Banners — Patterns' };

export default function BannersPage() {
  return (
    <PlaceholderPage
      title="Banners"
      description="Banners de comunicación, promociones, alertas del sistema y mensajes de estado global."
      section="Patterns"
      status="draft"
      sections={[
        { icon: '⊡', title: 'Banner Promocional', description: 'Bloque destacado con oferta o novedad. Imagen + texto + CTA.' },
        { icon: '⚠', title: 'Banner de Sistema', description: 'Alertas globales: mantenimiento, problemas de servicio.' },
        { icon: '◳', title: 'Banner Informativo', description: 'Información contextual: equipaje, cambios de política.' },
        { icon: '✕', title: 'Banner Dismissible', description: 'Cómo implementar banners que el usuario puede cerrar.' },
        { icon: '↔', title: 'Responsive', description: 'Banner full-width en desktop, apilado en mobile.' },
      ]}
    />
  );
}
