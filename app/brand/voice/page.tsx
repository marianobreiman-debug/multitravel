import type { Metadata } from 'next';
import PlaceholderPage from '@/components/ds/PlaceholderPage';

export const metadata: Metadata = { title: 'Voz y Tono — Brand' };

export default function VoicePage() {
  return (
    <PlaceholderPage
      title="Voz y Tono"
      description="Personalidad de la marca Multitravel, principios de comunicación, tono según contexto y ejemplos editoriales."
      section="Brand"
      status="draft"
      sections={[
        { icon: '◉', title: 'Personalidad de Marca', description: 'Los atributos que definen cómo habla Multitravel.' },
        { icon: '≡', title: 'Principios de Comunicación', description: 'Reglas de oro para toda la comunicación de la marca.' },
        { icon: '⊡', title: 'Tono según Contexto', description: 'Cómo varía el tono en diferentes situaciones y canales.' },
        { icon: '✓', title: 'Ejemplos: Sí', description: 'Mensajes que representan bien la voz de Multitravel.' },
        { icon: '✕', title: 'Ejemplos: No', description: 'Mensajes que se deben evitar.' },
        { icon: '◻', title: 'Microcopy', description: 'Guía de texto para UI: labels, errores, vacíos, confirmaciones.' },
      ]}
    />
  );
}
