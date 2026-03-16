import type { Metadata } from 'next';
import PlaceholderPage from '@/components/ds/PlaceholderPage';

export const metadata: Metadata = { title: 'Logo — Brand' };

export default function LogoPage() {
  return (
    <PlaceholderPage
      title="Logo"
      description="Versiones del logo de Multitravel, área de seguridad, tamaños mínimos y aplicaciones sobre distintos fondos."
      section="Brand"
      status="draft"
      sections={[
        { icon: '◈', title: 'Logo Principal', description: 'Versión principal en positivo y negativo con sus variaciones.' },
        { icon: '⊞', title: 'Versiones del Logo', description: 'Logo completo, isotipo, versión horizontal y versión vertical.' },
        { icon: '◻', title: 'Área de Seguridad', description: 'Espacio mínimo alrededor del logo que debe permanecer libre.' },
        { icon: '⊠', title: 'Tamaños Mínimos', description: 'Tamaño mínimo en pixels y puntos para distintos medios.' },
        { icon: '✓', title: 'Usos Correctos', description: 'Aplicaciones permitidas sobre fondo claro, oscuro y fotográfico.' },
        { icon: '✕', title: 'Usos Incorrectos', description: 'Deformaciones, colores no permitidos y usos a evitar.' },
      ]}
    />
  );
}
