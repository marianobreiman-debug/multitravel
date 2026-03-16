import type { Metadata } from 'next';
import PlaceholderPage from '@/components/ds/PlaceholderPage';

export const metadata: Metadata = { title: 'Overlays — Components' };

export default function OverlaysPage() {
  return (
    <PlaceholderPage
      title="Overlays"
      description="Capas flotantes: modales, drawers, tooltips, popovers y dropdowns."
      section="Components"
      status="draft"
      sections={[
        { icon: '◻', title: 'Modal', description: 'Diálogo superpuesto con overlay de fondo.' },
        { icon: '▷', title: 'Drawer', description: 'Panel lateral que desliza desde un borde.' },
        { icon: '⊡', title: 'Tooltip', description: 'Información contextual al hover de un elemento.' },
        { icon: '◳', title: 'Popover', description: 'Panel flotante con contenido más rico que un tooltip.' },
        { icon: '⬡', title: 'Dropdown', description: 'Menú de opciones contextual.' },
      ]}
    />
  );
}
