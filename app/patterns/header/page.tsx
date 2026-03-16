import type { Metadata } from 'next';
import PlaceholderPage from '@/components/ds/PlaceholderPage';

export const metadata: Metadata = { title: 'Header — Patterns' };

export default function HeaderPatternPage() {
  return (
    <PlaceholderPage
      title="Header"
      description="Encabezado principal del sitio con logo, navegación global, acceso a cuenta y CTA de conversión."
      section="Patterns"
      status="draft"
      sections={[
        { icon: '◈', title: 'Anatomía', description: 'Logo + navegación principal + acciones de usuario + CTA.' },
        { icon: '◫', title: 'Variantes', description: 'Header transparente (home), sólido (interior), minimal (checkout).' },
        { icon: '↔', title: 'Responsive', description: 'Desktop (barra completa) vs mobile (hamburger + drawer de navegación).' },
        { icon: '⬡', title: 'Sticky behavior', description: 'Cuándo el header es fijo y cuándo se oculta al hacer scroll.' },
        { icon: '◉', title: 'Estados de sesión', description: 'Sin sesión, sesión iniciada, con notificaciones.' },
      ]}
    />
  );
}
