import type { Metadata } from 'next';
import PlaceholderPage from '@/components/ds/PlaceholderPage';

export const metadata: Metadata = { title: 'Composición — Brand' };

export default function BrandCompositionPage() {
  return (
    <PlaceholderPage
      title="Composición"
      description="Reglas de composición visual, márgenes, proporciones y layout de la marca Multitravel."
      section="Brand"
      status="draft"
      sections={[
        { icon: '⊞', title: 'Principios de Composición', description: 'Grid visual, alineación y proporciones de la identidad.' },
        { icon: '◻', title: 'Márgenes y Espaciado', description: 'Guías de márgenes en piezas de comunicación.' },
        { icon: '◈', title: 'Elementos de Apoyo', description: 'Uso de formas, íconos y texturas en composición.' },
        { icon: '⬡', title: 'Fotografía', description: 'Criterios de selección, encuadre y tratamiento de imágenes.' },
      ]}
    />
  );
}
