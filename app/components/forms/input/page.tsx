import type { Metadata } from 'next';
import ComponentPage from '@/components/ds/ComponentPage';

export const metadata: Metadata = { title: 'Input — Forms' };

const CODE = `import { Input } from '@lorien/components';

// Input básico
<Input
  label="Destino"
  placeholder="¿A dónde querés ir?"
/>

// Con validación
<Input
  label="Email"
  type="email"
  placeholder="tu@email.com"
  error="El email no es válido"
/>

// Con label doble (origen/destino)
<Input
  labelTop="Origen"
  labelBottom="Destino"
  placeholder="Ciudad o aeropuerto"
/>

// Con dropdown interno
<Input
  label="Pasajeros"
  type="dropdown"
  value="2 adultos, 1 niño"
/>`;

export default function InputPage() {
  return (
    <ComponentPage
      title="Input"
      description="Campo de texto para formularios. Soporta label simple, label doble (para campos de origen/destino) y dropdown interno para selección."
      section="Components / Forms"
      status="stable"
      version="0.1"
      updatedAt="Marzo 2025"
      figmaNode="2863:30300"
      whenToUse={[
        'Para capturar texto libre del usuario: destinos, nombres, emails.',
        'Para campos de origen y destino con el formato de label doble.',
        'Para campos con dropdown integrado (pasajeros, clase de vuelo).',
      ]}
      whenNotToUse={[
        'Para selección de un set de opciones fijo — usar Select o Radio.',
        'Para toggles de dos opciones — usar Switch.',
        'Para texto largo sin estructura — usar Textarea.',
      ]}
      anatomy={
        <div className="ds-preview-canvas" style={{ flexDirection: 'column', gap: 8, padding: 32 }}>
          <div style={{
            width: 280,
            border: '1.5px solid var(--brand)',
            borderRadius: 12,
            padding: '8px 14px',
            background: 'white',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--brand)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              ① Label
            </div>
            <div style={{ fontSize: 14, color: 'var(--text-4)' }}>
              ② Placeholder
            </div>
          </div>
          <div style={{ fontSize: 12, color: 'var(--text-3)' }}>
            Border: 1.5px solid · Radius: 12px · Padding: 8px 14px
          </div>
        </div>
      }
      states={
        <div className="ds-preview-canvas" style={{ gap: 16, flexWrap: 'wrap' }}>
          {[
            { label: 'Default', borderColor: '#E2E8F0', labelColor: 'var(--text-3)' },
            { label: 'Focus', borderColor: 'var(--brand)', labelColor: 'var(--brand)' },
            { label: 'Filled', borderColor: '#E2E8F0', labelColor: 'var(--text-3)', value: 'Buenos Aires' },
            { label: 'Error', borderColor: '#EF0539', labelColor: '#EF0539' },
            { label: 'Disabled', borderColor: '#E2E8F0', labelColor: 'var(--text-4)', opacity: 0.5 },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div style={{
                width: 140, border: `1.5px solid ${s.borderColor}`,
                borderRadius: 12, padding: '6px 12px', background: 'white',
                opacity: (s as { opacity?: number }).opacity ?? 1,
              }}>
                <div style={{ fontSize: 10, fontWeight: 600, color: s.labelColor, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Destino</div>
                <div style={{ fontSize: 12, color: s.value ? 'var(--text)' : 'var(--text-4)' }}>{s.value ?? 'Ciudad...'}</div>
              </div>
              <span style={{ fontSize: 10, color: 'var(--text-4)' }}>{s.label}</span>
            </div>
          ))}
        </div>
      }
      dos={[
        { label: 'Label siempre visible', description: 'No usar solo placeholder como label. Cuando el usuario escribe, el label desaparece y no sabe qué campo es.' },
        { label: 'Errores específicos', description: 'El mensaje de error debe decir qué está mal y cómo corregirlo. "Email inválido" es mejor que "Error".' },
      ]}
      donts={[
        { label: 'No usar placeholder como label', description: 'El placeholder desaparece al escribir. El label debe ser siempre visible para mantener el contexto.' },
        { label: 'No omitir validación visual', description: 'Siempre mostrar el estado de error o éxito claramente. El usuario debe saber si su input es correcto.' },
      ]}
      accessibility={[
        'Siempre asociar label con el input mediante htmlFor / id.',
        'Los mensajes de error deben estar vinculados con aria-describedby.',
        'El campo required debe incluir aria-required="true".',
        'El ratio de contraste del texto placeholder debe ser mínimo 4.5:1.',
      ]}
      code={CODE}
      tokens={[
        { name: '--radius-input', value: '12px', description: 'Radio del campo' },
        { name: '--blue-600', value: '#226FCB', description: 'Color del borde en focus y label activo' },
        { name: '--red-600', value: '#EF0539', description: 'Color de error en borde y label' },
      ]}
      notes={[
        'El componente está en /components/Input/Input.tsx.',
        'Figma Code Connect en node 2863:30300.',
        'El Input soporta el prop labelTop + labelBottom para el formato doble de origen/destino.',
      ]}
    />
  );
}
