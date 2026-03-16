import type { Metadata } from 'next';
import PageHeader from '@/components/ds/PageHeader';

export const metadata: Metadata = { title: 'Typography — Foundations' };

const TYPE_SCALE = [
  { name: 'Display / H1', size: '32px', weight: '700–800', lineHeight: '1.15', usage: 'Títulos de página, hero sections' },
  { name: 'H2', size: '24px', weight: '700', lineHeight: '1.25', usage: 'Subtítulos de sección' },
  { name: 'H3', size: '20px', weight: '600', lineHeight: '1.3', usage: 'Títulos de tarjeta, grupos' },
  { name: 'H4', size: '16px', weight: '600', lineHeight: '1.4', usage: 'Subtítulos, labels de sección' },
  { name: 'Body LG', size: '16px', weight: '400', lineHeight: '1.7', usage: 'Textos largos, descripciones' },
  { name: 'Body', size: '14px', weight: '400', lineHeight: '1.6', usage: 'Texto base de la interfaz' },
  { name: 'Body SM', size: '13px', weight: '400', lineHeight: '1.6', usage: 'Contenido secundario' },
  { name: 'Caption', size: '12px', weight: '400', lineHeight: '1.4', usage: 'Metadatos, labels pequeños' },
  { name: 'Label / Eyebrow', size: '11px', weight: '600', lineHeight: '1.4', usage: 'Labels uppercase, tags' },
];

export default function TypographyPage() {
  return (
    <>
      <PageHeader
        title="Typography"
        description="Sistema tipográfico de Lorien. Dos familias, escala modular y valores de espaciado para jerarquía visual clara."
        section="Foundations"
        status="stable"
        version="0.1"
        updatedAt="Marzo 2025"
        figmaNode="5915-54298"
      />

      {/* Familias */}
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">Familias tipográficas</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {[
            {
              name: 'Nunito',
              role: 'Principal — UI & MULTIKIT',
              cssVar: '--font-nunito',
              token: 'font-family-primary',
              weights: ['400 Regular', '500 Medium', '600 SemiBold', '700 Bold', '800 ExtraBold'],
              preview: 'Viaja con nosotros',
              note: 'Usada en toda la interfaz del producto. Mobile tokens y MULTIKIT.',
            },
            {
              name: 'Outfit',
              role: 'Soporte — Flight Cards & Display',
              cssVar: '--font-outfit',
              token: 'font-family-secondary',
              weights: ['400 Regular', '500 Medium', '600 SemiBold', '700 Bold'],
              preview: 'Buenos Aires → Miami',
              note: 'Usada en flight cards, precios y elementos de display.',
            },
          ].map(font => (
            <div key={font.name} style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-xl)',
              padding: 24,
            }}>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--brand)', marginBottom: 12 }}>
                {font.role}
              </div>
              <div style={{ fontSize: 36, fontWeight: 700, color: 'var(--text)', lineHeight: 1.1, marginBottom: 8 }}>
                {font.name}
              </div>
              <div style={{ fontSize: 16, color: 'var(--text-3)', marginBottom: 16, fontStyle: 'italic' }}>
                {font.preview}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 12 }}>
                {font.weights.map(w => (
                  <span key={w} className="ds-badge ds-badge--version">{w}</span>
                ))}
              </div>
              <div style={{ fontSize: 12, color: 'var(--text-4)', lineHeight: 1.5 }}>{font.note}</div>
              <div style={{ marginTop: 12, padding: '8px 12px', background: 'var(--surface-2)', borderRadius: 'var(--radius-md)', fontSize: 11 }}>
                <code className="ds-code">{font.cssVar}</code>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scale */}
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">Escala tipográfica</h2>
          <p className="ds-section__desc">Jerarquía visual del sistema con sus tamaños, pesos y usos recomendados.</p>
        </div>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
          {TYPE_SCALE.map((scale, i) => (
            <div key={scale.name} style={{
              display: 'grid',
              gridTemplateColumns: '180px 1fr auto',
              gap: 16,
              padding: '16px 24px',
              alignItems: 'center',
              borderBottom: i < TYPE_SCALE.length - 1 ? '1px solid var(--border)' : 'none',
            }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 2 }}>
                  {scale.name}
                </div>
                <div style={{ fontSize: 11, color: 'var(--text-4)', fontFamily: 'var(--font-mono)' }}>
                  {scale.size} / {scale.weight}
                </div>
              </div>
              <div style={{
                fontSize: scale.size,
                fontWeight: parseInt(scale.weight.split('–')[0]),
                color: 'var(--text)',
                lineHeight: scale.lineHeight,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}>
                El sistema de diseño de Multitravel
              </div>
              <div style={{ fontSize: 11, color: 'var(--text-4)', textAlign: 'right', minWidth: 140 }}>
                {scale.usage}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tokens */}
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">Tokens de tipografía</h2>
        </div>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
          <table className="ds-token-table">
            <thead>
              <tr><th>Token</th><th>Valor</th><th>Descripción</th></tr>
            </thead>
            <tbody>
              {[
                { name: '--font-size-xs',   value: '11px',  desc: 'Labels, eyebrows, tags' },
                { name: '--font-size-sm',   value: '12px',  desc: 'Captions, metadatos' },
                { name: '--font-size-base', value: '14px',  desc: 'Texto base de la interfaz' },
                { name: '--font-size-md',   value: '15px',  desc: 'Body intermedio' },
                { name: '--font-size-lg',   value: '16px',  desc: 'Body largo, H4' },
                { name: '--font-size-xl',   value: '20px',  desc: 'H3, títulos de tarjeta' },
                { name: '--font-size-2xl',  value: '24px',  desc: 'H2, subtítulos de sección' },
                { name: '--font-size-3xl',  value: '32px',  desc: 'H1, display' },
                { name: '--font-weight-regular',    value: '400', desc: 'Texto normal' },
                { name: '--font-weight-medium',     value: '500', desc: 'Énfasis leve' },
                { name: '--font-weight-semibold',   value: '600', desc: 'Labels, subtítulos' },
                { name: '--font-weight-bold',       value: '700', desc: 'Títulos principales' },
                { name: '--font-weight-extrabold',  value: '800', desc: 'Display, hero' },
                { name: '--line-height-tight',      value: '1.15', desc: 'Títulos grandes' },
                { name: '--line-height-normal',     value: '1.5',  desc: 'Texto estándar' },
                { name: '--line-height-relaxed',    value: '1.7',  desc: 'Lectura larga' },
              ].map(token => (
                <tr key={token.name}>
                  <td><code className="ds-code">{token.name}</code></td>
                  <td><span className="ds-mono">{token.value}</span></td>
                  <td style={{ color: 'var(--text-3)', fontSize: 13 }}>{token.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
