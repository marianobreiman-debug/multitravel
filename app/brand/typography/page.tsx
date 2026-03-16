import type { Metadata } from 'next';
import PlaceholderPage from '@/components/ds/PlaceholderPage';

export const metadata: Metadata = { title: 'Tipografía de Marca — Brand' };

export default function BrandTypographyPage() {
  return (
    <PlaceholderPage
      title="Tipografía de Marca"
      description="Familias tipográficas de Multitravel, jerarquía visual y principios de uso en comunicación editorial."
      section="Brand"
      status="draft"
      sections={[
        { icon: 'Aa', title: 'Nunito', description: 'Fuente principal de la interfaz. Pesos 400–800.' },
        { icon: 'Aa', title: 'Outfit', description: 'Fuente de soporte. Usada en flight cards y display.' },
        { icon: '≡', title: 'Jerarquía Tipográfica', description: 'H1 → H6, body, captions y labels con sus valores.' },
        { icon: '⊡', title: 'Escalas de Tamaño', description: 'Tabla completa de tamaños, line-height y letter-spacing.' },
        { icon: '✓', title: 'Usos Correctos', description: 'Combinaciones de pesos y tamaños permitidas.' },
        { icon: '✕', title: 'Usos Incorrectos', description: 'Fuentes de sustitución, combinaciones no permitidas.' },
      ]}
    />
  );
}
