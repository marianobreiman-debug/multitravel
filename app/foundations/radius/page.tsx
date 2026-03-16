import type { Metadata } from 'next';
import PageHeader from '@/components/ds/PageHeader';

export const metadata: Metadata = { title: 'Radius — Foundations' };

const RADII = [
  { name: '--radius-tag',   value: '4px',   label: 'Tag',   desc: 'Tags, badges pequeños', usage: 'Tag, Badge, Label' },
  { name: '--radius-input', value: '12px',  label: 'Input', desc: 'Inputs, selects, campos de formulario', usage: 'Input, Select, Textarea' },
  { name: '--radius-card',  value: '16px',  label: 'Card',  desc: 'Tarjetas, modales, panels', usage: 'Card, Modal, Drawer, FlightCard' },
  { name: '--radius-pill',  value: '32px',  label: 'Pill',  desc: 'Botones, chips, elementos redondeados', usage: 'Button, Chip, Tab activo' },
];

export default function RadiusPage() {
  return (
    <>
      <PageHeader
        title="Radius"
        description="Cuatro valores de radio de borde para toda la interfaz. Cada radio tiene un rol y un contexto de uso específico."
        section="Foundations"
        status="stable"
        updatedAt="Marzo 2025"
        figmaNode="5915-54298"
      />

      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">Valores del sistema</h2>
        </div>

        {/* Visual preview */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 32 }}>
          {RADII.map(r => (
            <div key={r.name} style={{ textAlign: 'center' }}>
              <div style={{
                height: 80,
                background: 'var(--brand-light)',
                border: '2px solid var(--brand-border)',
                borderRadius: r.value,
                marginBottom: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--brand-text)',
                fontWeight: 700,
                fontSize: 11,
              }}>
                {r.value}
              </div>
              <div style={{ fontWeight: 600, fontSize: 13, color: 'var(--text)', marginBottom: 2 }}>{r.label}</div>
              <code className="ds-code" style={{ fontSize: 10 }}>{r.name}</code>
            </div>
          ))}
        </div>

        {/* Table */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
          <table className="ds-token-table">
            <thead>
              <tr><th>Token</th><th>Valor</th><th>Descripción</th><th>Componentes</th></tr>
            </thead>
            <tbody>
              {RADII.map(r => (
                <tr key={r.name}>
                  <td><code className="ds-code">{r.name}</code></td>
                  <td><span className="ds-mono">{r.value}</span></td>
                  <td style={{ color: 'var(--text-3)', fontSize: 13 }}>{r.desc}</td>
                  <td style={{ fontSize: 12, color: 'var(--text-4)' }}>{r.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="ds-section">
        <div className="ds-do-dont">
          <div className="ds-do-dont__item ds-do-dont__item--do">
            <div className="ds-do-dont__label">✓ Do</div>
            <div className="ds-do-dont__content">
              <strong>Usar siempre tokens del sistema.</strong><br />
              Aplicar los 4 radios definidos según el contexto del componente. Nunca usar valores arbitrarios como 6px, 10px, 20px.
            </div>
          </div>
          <div className="ds-do-dont__item ds-do-dont__item--dont">
            <div className="ds-do-dont__label">✕ Don&apos;t</div>
            <div className="ds-do-dont__content">
              <strong>Mezclar radios sin criterio.</strong><br />
              No usar radius-pill en cards ni radius-tag en botones primarios. Cada token está pensado para un propósito.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
