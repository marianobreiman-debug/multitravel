import type { Metadata } from 'next';
import ComponentPage from '@/components/ds/ComponentPage';

export const metadata: Metadata = { title: 'Switch — Forms' };

const CODE = `import { Switch } from '@lorien/components';

<Switch
  label="Vuelo directo"
  checked={onlyDirect}
  onChange={setOnlyDirect}
/>

// Variante grey (apagado visible)
<Switch
  variant="grey"
  label="Activar alertas"
  checked={alertsEnabled}
  onChange={setAlertsEnabled}
/>

// Deshabilitado
<Switch
  label="Opción no disponible"
  disabled
  checked={false}
/>`;

export default function SwitchPage() {
  return (
    <ComponentPage
      title="Switch"
      description="Toggle on/off para activar o desactivar una opción. Ideal para filtros binarios y configuraciones."
      section="Components / Forms"
      status="stable"
      version="0.1"
      updatedAt="Marzo 2025"
      figmaNode="2863:30303"
      whenToUse={[
        'Para activar o desactivar una opción de forma inmediata (sin submit).',
        'Para filtros binarios: vuelo directo/con escala, solo disponibles, etc.',
        'Para configuraciones y preferencias del usuario.',
      ]}
      whenNotToUse={[
        'Para selección dentro de un formulario que requiere confirmación — usar Checkbox.',
        'Para elegir entre más de 2 opciones — usar Radio o Select.',
      ]}
      variants={
        <div className="ds-preview-canvas" style={{ gap: 32 }}>
          {/* Blue - ON */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
            <div style={{ width: 48, height: 28, background: 'var(--brand)', borderRadius: '100px', position: 'relative', display: 'flex', alignItems: 'center', padding: '0 3px', justifyContent: 'flex-end' }}>
              <div style={{ width: 22, height: 22, background: 'white', borderRadius: '50%', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }} />
            </div>
            <span style={{ fontSize: 11, color: 'var(--text-4)' }}>Blue / ON</span>
          </div>
          {/* Blue - OFF */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
            <div style={{ width: 48, height: 28, background: '#E2E8F0', borderRadius: '100px', position: 'relative', display: 'flex', alignItems: 'center', padding: '0 3px' }}>
              <div style={{ width: 22, height: 22, background: 'white', borderRadius: '50%', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }} />
            </div>
            <span style={{ fontSize: 11, color: 'var(--text-4)' }}>Blue / OFF</span>
          </div>
          {/* Grey - ON */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
            <div style={{ width: 48, height: 28, background: '#646464', borderRadius: '100px', position: 'relative', display: 'flex', alignItems: 'center', padding: '0 3px', justifyContent: 'flex-end' }}>
              <div style={{ width: 22, height: 22, background: 'white', borderRadius: '50%', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }} />
            </div>
            <span style={{ fontSize: 11, color: 'var(--text-4)' }}>Grey / ON</span>
          </div>
        </div>
      }
      accessibility={[
        'Usar role="switch" con aria-checked para semántica correcta.',
        'El label debe estar siempre visible y asociado al switch.',
        'El switch debe ser activable con la tecla Space.',
        'El estado del switch debe ser anunciado por screen readers.',
      ]}
      code={CODE}
      tokens={[
        { name: '--blue-600', value: '#226FCB', description: 'Color ON variante blue' },
        { name: '--grey-700', value: '#646464', description: 'Color ON variante grey' },
        { name: '--grey-100', value: '#dfdfdf', description: 'Color OFF ambas variantes' },
        { name: '--radius-pill', value: '32px', description: 'Radio del track del switch' },
      ]}
      notes={[
        'Componente en /components/Switch/Switch.tsx',
        'El switch debe cambiar de estado de forma inmediata, sin confirmación.',
      ]}
    />
  );
}
