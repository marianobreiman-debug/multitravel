import type { Metadata } from 'next';
import PlaceholderPage from '@/components/ds/PlaceholderPage';

export const metadata: Metadata = { title: 'Modals & Drawers — Patterns' };

export default function ModalsPage() {
  return (
    <PlaceholderPage
      title="Modals & Drawers"
      description="Patrones de uso de overlays: cuándo usar modal vs drawer, cómo manejar el focus y el scroll."
      section="Patterns"
      status="draft"
      sections={[
        { icon: '◻', title: 'Modal de Confirmación', description: 'Para acciones destructivas o que requieren confirmación explícita.' },
        { icon: '▷', title: 'Drawer de Detalle', description: 'Panel lateral para ver detalle sin abandonar la vista actual.' },
        { icon: '◳', title: 'Modal de Selección', description: 'Para selección compleja: selector de aeropuerto, selector de fechas.' },
        { icon: '♿', title: 'Accesibilidad', description: 'Focus trap, aria-modal, escape para cerrar, scroll lock.' },
        { icon: '↔', title: 'Modal vs Drawer', description: 'Guía de cuándo usar cada uno según el contexto y el dispositivo.' },
      ]}
    />
  );
}
