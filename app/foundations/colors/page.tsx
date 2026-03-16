import type { Metadata } from 'next';
import PageHeader from '@/components/ds/PageHeader';

export const metadata: Metadata = { title: 'Colors — Foundations' };

/* ─────────────────────────────────────────────────────────────
   SOURCE OF TRUTH: Variables oficiales de Figma vía MCP
   Archivo: awAiQ74drBGZImHlXtIdPN · node 5915:54298
   Auditado: Marzo 2025
   ───────────────────────────────────────────────────────────── */

/* ── Primitives (tal cual vienen de Figma) ───────────────────── */
const BLUE = [
  { step: '50',  hex: '#f5faff', figma: 'color/blue/50',  label: 'Fondo sutil, hover pastel' },
  { step: '100', hex: '#eaf3ff', figma: 'color/blue/100', label: 'Badge background, chip pastel' },
  { step: '200', hex: '#dfeeff', figma: 'color/blue/200', label: 'Border light' },
  { step: '250', hex: '#bddbff', figma: 'color/blue/250', label: 'Border énfasis, focus ring' },
  { step: '300', hex: '#71b6f2', figma: 'color/blue/300', label: 'Decorativo, ilustraciones' },
  { step: '400', hex: '#2a8bfe', figma: 'color/blue/400', label: 'Links, acciones secundarias' },
  { step: '500', hex: '#267de5', figma: 'color/blue/500', label: 'Hover sobre 600' },
  { step: '600', hex: '#226fcb', figma: '— AUSENTE EN FIGMA', label: '★ CTA, botones primarios', gap: true },
  { step: '800', hex: '#0d4e88', figma: 'color/blue/800', label: '★ Usafa — identidad de marca' },
  { step: '900', hex: '#00325d', figma: 'color/blue/900', label: 'Dark brand' },
  { step: '915', hex: '#082f52', figma: 'color/blue/915', label: 'Deep dark' },
  { step: '925', hex: '#06233d', figma: 'color/blue/925', label: 'Deep dark alt' },
  { step: '950', hex: '#051b30', figma: 'color/blue/950', label: 'Casi negro azulado' },
];

const RED = [
  { step: '50',  hex: '#fff0f1', figma: 'color/red/50',  label: 'Fondo alerta error leve' },
  { step: '100', hex: '#fde6eb', figma: 'color/red/100', label: 'Background feedback' },
  { step: '200', hex: '#fddae1', figma: 'color/red/200', label: 'Border error light' },
  { step: '300', hex: '#fab2c2', figma: 'color/red/300', label: 'Decorativo, pastel' },
  { step: '400', hex: '#ff5c7f', figma: 'color/red/400', label: 'Pastel Crimson' },
  { step: '500', hex: '#ff2c4e', figma: 'color/red/500', label: 'Vibrante' },
  { step: '600', hex: '#ef0539', figma: 'color/red/600', label: '★ Crimson — acción/acento' },
  { step: '700', hex: '#df0032', figma: 'color/red/700', label: 'Dark Crimson' },
  { step: '725', hex: '#bf042e', figma: 'color/red/725', label: 'Paso intermedio' },
  { step: '800', hex: '#8f0322', figma: 'color/red/800', label: 'Dark' },
  { step: '900', hex: '#85001d', figma: 'color/red/900', label: 'Dark Crimson profundo' },
  { step: '925', hex: '#6c021a', figma: 'color/red/925', label: 'Paso intermedio' },
  { step: '950', hex: '#540214', figma: 'color/red/950', label: 'Casi negro rojizo' },
];

const GREY = [
  { step: 'white',       hex: '#ffffff', figma: 'color/grey/white',      label: 'Blanco puro' },
  { step: '0 (grey)',    hex: '#fcfcfc', figma: 'color/grey/0',          label: 'Off-white' },
  { step: '50',          hex: '#f8f8f8', figma: 'color/grey/50',         label: 'Fondo levísimo' },
  { step: '75',          hex: '#f5f5f5', figma: 'color/grey/75',         label: 'Paso intermedio' },
  { step: 'background',  hex: '#f4f6f8', figma: 'color/grey/background', label: '⚠ Nombre semántico en primitivo', warn: true },
  { step: 'greyspecial', hex: '#f1f3f6', figma: 'color/grey/greyspecial',label: '⚠ Nombre semántico en primitivo', warn: true },
  { step: '100',         hex: '#dfdfdf', figma: 'color/grey/100',        label: 'Border default' },
  { step: '200',         hex: '#cacaca', figma: 'color/grey/200',        label: 'Border fuerte' },
  { step: '300',         hex: '#b6b6b6', figma: 'color/grey/300',        label: 'Placeholder' },
  { step: '400',         hex: '#a1a1a1', figma: 'color/grey/400',        label: 'Texto muy sutil (no pasar solo)' },
  { step: '500',         hex: '#8d8d8d', figma: 'color/grey/500',        label: 'Texto deshabilitado' },
  { step: '600',         hex: '#797878', figma: 'color/grey/600',        label: 'Texto secundario AA' },
  { step: '700',         hex: '#646464', figma: 'color/grey/700',        label: 'Texto medio' },
  { step: '800',         hex: '#504f4f', figma: 'color/grey/800',        label: 'Texto fuerte' },
  { step: '900',         hex: '#3b3b3b', figma: 'color/grey/900',        label: 'Casi negro' },
  { step: '950',         hex: '#272626', figma: 'color/grey/950',        label: 'Negro de texto' },
];

const FEEDBACK_PALETTES = [
  {
    id: 'success', name: 'Success', accent: '#23a423',
    tokens: [
      { step: '50',  hex: '#f3fcf3' }, { step: '100', hex: '#defade' },
      { step: '200', hex: '#c0f3bf' }, { step: '300', hex: '#8fe78e' },
      { step: '400', hex: '#55d355' }, { step: '500', hex: '#2eb92e' },
      { step: '600', hex: '#23a423' }, { step: '700', hex: '#1d781d' },
      { step: '800', hex: '#1c5f1c' }, { step: '900', hex: '#305030' },
      { step: '950', hex: '#082b0a' },
    ],
  },
  {
    id: 'informative', name: 'Informative', accent: '#2196f3',
    tokens: [
      { step: '50',  hex: '#eaf4fc' }, { step: '100', hex: '#daf3ff' },
      { step: '200', hex: '#bdebff' }, { step: '300', hex: '#8fe0ff' },
      { step: '400', hex: '#5accff' }, { step: '500', hex: '#34b1fd' },
      { step: '600', hex: '#2196f3' }, { step: '700', hex: '#167bdf' },
      { step: '800', hex: '#1863b5' }, { step: '900', hex: '#1a548e' },
      { step: '950', hex: '#064559' },
    ],
  },
  {
    id: 'warning', name: 'Warning', accent: '#f07306',
    tokens: [
      { step: '50',  hex: '#fff8ed' }, { step: '100', hex: '#fff2d4' },
      { step: '200', hex: '#ffe2a8' }, { step: '300', hex: '#ffcc70' },
      { step: '400', hex: '#ffaa37' }, { step: '500', hex: '#ff941a' },
      { step: '600', hex: '#f07306' }, { step: '700', hex: '#c75707' },
      { step: '800', hex: '#9e440e' }, { step: '900', hex: '#59401b' },
      { step: '950', hex: '#451b05' },
    ],
  },
  {
    id: 'error', name: 'Error', accent: '#e22d20',
    tokens: [
      { step: '50',  hex: '#feeceb' }, { step: '100', hex: '#ffe3e1' },
      { step: '200', hex: '#ffccc8' }, { step: '300', hex: '#ffa8a2' },
      { step: '400', hex: '#fc776d' }, { step: '500', hex: '#f44336' },
      { step: '600', hex: '#e22d20' }, { step: '700', hex: '#be2217' },
      { step: '800', hex: '#9d2017' }, { step: '900', hex: '#82211a' },
      { step: '950', hex: '#551713' },
    ],
  },
];

/* ── Semantic layer (propuesta) ──────────────────────────────── */
const SEMANTIC = [
  {
    category: 'Text',
    icon: '𝐓',
    roles: [
      { role: 'text/default',       primitive: 'grey/950',       hex: '#272626', css: '--color-text-default',      status: 'proposed', use: 'Todo texto de cuerpo. Máximo contraste.' },
      { role: 'text/subtle',        primitive: 'grey/700',       hex: '#646464', css: '--color-text-subtle',       status: 'proposed', use: 'Texto secundario, metadatos, labels.' },
      { role: 'text/placeholder',   primitive: 'grey/400',       hex: '#a1a1a1', css: '--color-text-placeholder',  status: 'proposed', use: 'Placeholder en inputs. No en texto real.' },
      { role: 'text/disabled',      primitive: 'grey/300',       hex: '#b6b6b6', css: '--color-text-disabled',     status: 'proposed', use: 'Texto en estado deshabilitado.' },
      { role: 'text/inverse',       primitive: 'grey/white',     hex: '#ffffff', css: '--color-text-inverse',      status: 'proposed', use: 'Texto sobre fondos oscuros o de marca.' },
      { role: 'text/brand',         primitive: 'blue/800',       hex: '#0d4e88', css: '--color-text-brand',        status: 'proposed', use: 'Texto de acento de marca. Links primarios.' },
      { role: 'text/link',          primitive: 'blue/500',       hex: '#267de5', css: '--color-text-link',         status: 'proposed', use: 'Links inline. Requiere underline para a11y.' },
      { role: 'text/success',       primitive: 'success/700',    hex: '#1d781d', css: '--color-text-success',      status: 'proposed', use: 'Texto de confirmación o estado exitoso.' },
      { role: 'text/warning',       primitive: 'warning/700',    hex: '#c75707', css: '--color-text-warning',      status: 'proposed', use: 'Texto de advertencia.' },
      { role: 'text/error',         primitive: 'error/600',      hex: '#e22d20', css: '--color-text-error',        status: 'proposed', use: 'Texto de error, validación fallida.' },
    ],
  },
  {
    category: 'Background',
    icon: '□',
    roles: [
      { role: 'background/canvas',         primitive: 'grey/background', hex: '#f4f6f8', css: '--color-bg-canvas',        status: 'proposed', use: 'Fondo de la app. Página principal.' },
      { role: 'background/surface',        primitive: 'grey/white',      hex: '#ffffff', css: '--color-bg-surface',       status: 'proposed', use: 'Cards, paneles, modales.' },
      { role: 'background/subtle',         primitive: 'grey/50',         hex: '#f8f8f8', css: '--color-bg-subtle',        status: 'proposed', use: 'Áreas de input, hover rows en tabla.' },
      { role: 'background/elevated',       primitive: 'grey/white',      hex: '#ffffff', css: '--color-bg-elevated',      status: 'proposed', use: 'Dropdowns, tooltips. Mismo color + shadow.' },
      { role: 'background/brand',          primitive: 'blue/800',        hex: '#0d4e88', css: '--color-bg-brand',         status: 'proposed', use: 'Header de marca, banners, nav activo.' },
      { role: 'background/brand-subtle',   primitive: 'blue/50',         hex: '#f5faff', css: '--color-bg-brand-subtle',  status: 'proposed', use: 'Hover estados, selected states claros.' },
      { role: 'background/success',        primitive: 'success/50',      hex: '#f3fcf3', css: '--color-bg-success',       status: 'proposed', use: 'Fondo de alert de éxito.' },
      { role: 'background/warning',        primitive: 'warning/50',      hex: '#fff8ed', css: '--color-bg-warning',       status: 'proposed', use: 'Fondo de alert de advertencia.' },
      { role: 'background/error',          primitive: 'error/50',        hex: '#feeceb', css: '--color-bg-error',         status: 'proposed', use: 'Fondo de alert de error.' },
      { role: 'background/info',           primitive: 'informative/50',  hex: '#eaf4fc', css: '--color-bg-info',          status: 'proposed', use: 'Fondo de alert informativo.' },
    ],
  },
  {
    category: 'Border',
    icon: '⊡',
    roles: [
      { role: 'border/subtle',   primitive: 'grey/75',    hex: '#f5f5f5', css: '--color-border-subtle',   status: 'proposed', use: 'Separadores casi invisibles entre secciones.' },
      { role: 'border/default',  primitive: 'grey/100',   hex: '#dfdfdf', css: '--color-border-default',  status: 'proposed', use: 'Cards, inputs en reposo, dividers.' },
      { role: 'border/strong',   primitive: 'grey/200',   hex: '#cacaca', css: '--color-border-strong',   status: 'proposed', use: 'Hover, énfasis, tabla seleccionada.' },
      { role: 'border/brand',    primitive: 'blue/250',   hex: '#bddbff', css: '--color-border-brand',    status: 'proposed', use: 'Input focused (color de marca).' },
      { role: 'border/focus',    primitive: 'blue/500',   hex: '#267de5', css: '--color-border-focus',    status: 'proposed', use: 'Ring de foco en todos los elementos interactivos.' },
      { role: 'border/success',  primitive: 'success/200',hex: '#c0f3bf', css: '--color-border-success',  status: 'proposed', use: 'Alert / input en estado success.' },
      { role: 'border/warning',  primitive: 'warning/200',hex: '#ffe2a8', css: '--color-border-warning',  status: 'proposed', use: 'Alert / input en estado warning.' },
      { role: 'border/error',    primitive: 'error/200',  hex: '#ffccc8', css: '--color-border-error',    status: 'proposed', use: 'Alert / input en estado error.' },
    ],
  },
  {
    category: 'Interactive',
    icon: '⊙',
    roles: [
      { role: 'interactive/primary',          primitive: 'blue/800',  hex: '#0d4e88', css: '--color-interactive-primary',         status: 'proposed', use: 'Botón primario default.' },
      { role: 'interactive/primary-hover',    primitive: 'blue/900',  hex: '#00325d', css: '--color-interactive-primary-hover',   status: 'proposed', use: 'Botón primario hover.' },
      { role: 'interactive/primary-active',   primitive: 'blue/915',  hex: '#082f52', css: '--color-interactive-primary-active',  status: 'proposed', use: 'Botón primario pressed.' },
      { role: 'interactive/destructive',      primitive: 'red/600',   hex: '#ef0539', css: '--color-interactive-destructive',     status: 'proposed', use: 'Botón destructivo, eliminar, acción crítica.' },
      { role: 'interactive/destructive-hover',primitive: 'red/700',   hex: '#df0032', css: '--color-interactive-destr-hover',     status: 'proposed', use: 'Hover sobre acción destructiva.' },
      { role: 'interactive/disabled',         primitive: 'grey/200',  hex: '#cacaca', css: '--color-interactive-disabled',        status: 'proposed', use: 'Fondo de botón deshabilitado.' },
      { role: 'interactive/disabled-text',    primitive: 'grey/500',  hex: '#8d8d8d', css: '--color-interactive-disabled-text',   status: 'proposed', use: 'Texto sobre elemento deshabilitado.' },
    ],
  },
  {
    category: 'Feedback',
    icon: '◉',
    roles: [
      { role: 'feedback/success',   primitive: 'success/600',     hex: '#23a423', css: '--color-feedback-success',   status: 'proposed', use: 'Ícono y texto de estado exitoso.' },
      { role: 'feedback/warning',   primitive: 'warning/600',     hex: '#f07306', css: '--color-feedback-warning',   status: 'proposed', use: 'Ícono y texto de advertencia.' },
      { role: 'feedback/error',     primitive: 'error/600',       hex: '#e22d20', css: '--color-feedback-error',     status: 'proposed', use: 'Ícono y texto de error.' },
      { role: 'feedback/info',      primitive: 'informative/600', hex: '#2196f3', css: '--color-feedback-info',      status: 'proposed', use: 'Ícono y texto informativo.' },
    ],
  },
  {
    category: 'Focus & Overlay',
    icon: '⊕',
    roles: [
      { role: 'focus/ring',         primitive: 'blue/500',  hex: '#267de5', css: '--color-focus-ring',     status: 'proposed', use: 'Box-shadow ring en foco de teclado. 3px offset.' },
      { role: 'overlay/scrim',      primitive: 'grey/950',  hex: '#272626', css: '--color-overlay-scrim',  status: 'proposed', use: 'Overlay de modal. Usar con opacity 0.5–0.7.' },
      { role: 'overlay/toast-bg',   primitive: 'grey/900',  hex: '#3b3b3b', css: '--color-overlay-toast',  status: 'proposed', use: 'Fondo de toast/snackbar.' },
    ],
  },
];

const LEGACY_TOKENS = [
  { token: 'Secondary/Grey/Grey',       duplicate: 'color/grey/0',          hex: '#FCFCFC' },
  { token: 'Secondary/Grey/White',      duplicate: 'color/grey/white',       hex: '#FFFFFF' },
  { token: 'Secondary/Grey/75 Grey',    duplicate: 'color/grey/75',          hex: '#F5F5F5' },
  { token: 'Secondary/Grey/50 Grey',    duplicate: 'color/grey/50',          hex: '#F8F8F8' },
  { token: 'Secondary/Grey/100 Grey',   duplicate: 'color/grey/100',         hex: '#DFDFDF' },
  { token: 'Secondary/Grey/200 Grey',   duplicate: 'color/grey/200',         hex: '#CACACA' },
  { token: 'Secondary/Grey/300 Grey',   duplicate: 'color/grey/300',         hex: '#B6B6B6' },
  { token: 'Secondary/Grey/400 Grey',   duplicate: 'color/grey/400',         hex: '#A1A1A1' },
  { token: 'Secondary/Grey/500 Grey',   duplicate: 'color/grey/500',         hex: '#8D8D8D' },
  { token: 'Secondary/Grey/600 Grey',   duplicate: 'color/grey/600',         hex: '#797878' },
  { token: 'Secondary/Grey/700 Grey',   duplicate: 'color/grey/700',         hex: '#646464' },
  { token: 'Secondary/Grey/800 Grey',   duplicate: 'color/grey/800',         hex: '#504F4F' },
  { token: 'Secondary/Grey/900 Grey',   duplicate: 'color/grey/900',         hex: '#3B3B3B' },
  { token: 'Secondary/Grey/950 Black',  duplicate: 'color/grey/950',         hex: '#272626' },
  { token: 'Secondary/Grey/Grey Blue',  duplicate: 'color/grey/background',  hex: '#F4F6F8' },
  { token: 'Secondary/Special Grey/Grey 01', duplicate: 'color/grey/greyspecial', hex: '#F1F3F6' },
  { token: 'Blue/color/blue/900',       duplicate: 'color/blue/900',         hex: '#00325D' },
  { token: 'Blue/color/blue/800',       duplicate: 'color/blue/800',         hex: '#0D4E88' },
  { token: 'Blue/color/blue/100',       duplicate: 'color/blue/100',         hex: '#EAF3FF' },
  { token: 'Warning/50 Light',          duplicate: 'color/warning/50',       hex: '#FFF8ED' },
];

function Swatch({ hex, size = 28 }: { hex: string; size?: number }) {
  return (
    <span style={{
      display: 'inline-block', width: size, height: size,
      borderRadius: 6, background: hex,
      border: '1px solid rgba(0,0,0,0.08)', flexShrink: 0,
      verticalAlign: 'middle',
    }} />
  );
}

function SectionAnchor({ id }: { id: string }) {
  return <div id={id} style={{ scrollMarginTop: 80 }} />;
}

function StatusPill({ label, color, bg }: { label: string; color: string; bg: string }) {
  return (
    <span style={{
      fontSize: 10, fontWeight: 700, padding: '2px 7px',
      borderRadius: 'var(--radius-pill)', background: bg, color,
      letterSpacing: '0.03em',
    }}>
      {label}
    </span>
  );
}

export default function ColorsPage() {
  return (
    <>
      <PageHeader
        title="Colors"
        description="Foundation de color de Lorien. Fuente de verdad para diseño y desarrollo: paletas primitivas, capa semántica, accesibilidad y nomenclatura."
        section="Foundations"
        status="stable"
        version="0.2"
        updatedAt="Marzo 2025"
        figmaNode="5915-54298"
      />

      {/* ── TABLE OF CONTENTS ──────────────────────────────────────── */}
      <div className="ds-section" style={{ paddingBottom: 0 }}>
        <div style={{
          background: 'var(--brand-light)', border: '1px solid var(--brand-border)',
          borderRadius: 'var(--radius-lg)', padding: '16px 20px',
        }}>
          <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--brand)', marginBottom: 10 }}>
            En esta página
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px 24px' }}>
            {[
              ['#overview',       '1. Overview y arquitectura'],
              ['#audit',          '2. Auditoría de variables'],
              ['#primitives',     '3. Colores primitivos'],
              ['#brand',          '4. Colores de marca'],
              ['#semantic',       '5. Capa semántica (propuesta)'],
              ['#states',         '6. Estados de interacción'],
              ['#accessibility',  '7. Accesibilidad'],
              ['#dodont',         '8. Do / Don\'t'],
              ['#examples',       '9. Ejemplos de aplicación'],
              ['#nomenclature',   '10. Nomenclatura y tokens'],
            ].map(([href, label]) => (
              <a key={href} href={href} style={{
                fontSize: 13, color: 'var(--brand)', lineHeight: 1.8,
                textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6,
              }}>
                <span style={{ color: 'var(--brand-border)', fontWeight: 700 }}>→</span>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── 1. OVERVIEW ───────────────────────────────────────────── */}
      <SectionAnchor id="overview" />
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">1. Overview y arquitectura</h2>
        </div>
        <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.8, maxWidth: 720, marginBottom: 24 }}>
          El sistema de color de Lorien está organizado en <strong>dos capas</strong>. Esta separación es
          fundamental para construir una UI consistente, mantenible y preparada para escalar.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
          {[
            {
              layer: 'Capa 1 — Primitivos',
              desc: 'Los valores de color en bruto. Escalas numéricas sin contexto de uso. Son la materia prima del sistema.',
              examples: ['color/blue/800 → #0D4E88', 'color/red/600 → #EF0539', 'color/grey/100 → #DFDFDF'],
              color: 'var(--brand)', bg: 'var(--brand-light)', border: 'var(--brand-border)',
              rule: 'Solo los consume la capa semántica. No usar directamente en componentes.',
            },
            {
              layer: 'Capa 2 — Semánticos',
              desc: 'Aliases con nombre funcional que apuntan a primitivos. Expresan intención, no valor visual.',
              examples: ['color.text.default → grey/950', 'color.bg.canvas → grey/background', 'color.interactive.primary → blue/800'],
              color: '#16A34A', bg: '#F0FDF4', border: '#BBF7D0',
              rule: 'Son los únicos tokens que deben usarse en componentes y patrones.',
            },
          ].map(l => (
            <div key={l.layer} style={{ background: l.bg, border: `1px solid ${l.border}`, borderRadius: 'var(--radius-lg)', padding: 20 }}>
              <div style={{ fontWeight: 800, fontSize: 14, color: l.color, marginBottom: 8 }}>{l.layer}</div>
              <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 12 }}>{l.desc}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 3, marginBottom: 12 }}>
                {l.examples.map(e => (
                  <code key={e} style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--text-2)', background: 'rgba(255,255,255,0.7)', padding: '2px 8px', borderRadius: 4 }}>{e}</code>
                ))}
              </div>
              <div style={{ fontSize: 12, fontWeight: 600, color: l.color, borderTop: `1px solid ${l.border}`, paddingTop: 10 }}>
                ↳ {l.rule}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
          {[
            { who: 'Para diseño', text: 'Usar variables semánticas en todos los frames y componentes. Los primitivos son solo referencia interna. Nunca aplicar un color/blue/500 directo en un botón.' },
            { who: 'Para desarrollo', text: 'Consumir únicamente los CSS custom properties semánticos (--color-*). Los valores hex de primitivos no deben aparecer hardcodeados en el código fuente.' },
            { who: 'Para el sistema', text: 'Cada vez que se agregue un componente, debe existir un token semántico para cada color que usa. Si no existe, crear el token antes de usar un primitivo.' },
          ].map(item => (
            <div key={item.who} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: 16 }}>
              <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-3)', marginBottom: 8 }}>{item.who}</div>
              <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.7 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── 2. AUDIT ──────────────────────────────────────────────── */}
      <SectionAnchor id="audit" />
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">2. Auditoría de variables Figma</h2>
          <p className="ds-section__desc">
            Variables extraídas de <code className="ds-code">awAiQ74drBGZImHlXtIdPN · node 5915:54298</code>.
            Se detectaron {LEGACY_TOKENS.length} tokens redundantes y 4 problemas estructurales.
          </p>
        </div>

        {/* Summary pills */}
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 20 }}>
          {[
            { label: '8 paletas primitivas', color: '#16A34A', bg: '#F0FDF4' },
            { label: `${LEGACY_TOKENS.length} duplicados detectados`, color: '#D97706', bg: '#FFFBEB' },
            { label: '1 token faltante (blue/600)', color: '#DC2626', bg: '#FFF1F2' },
            { label: '2 nombres semánticos en primitivos', color: '#D97706', bg: '#FFFBEB' },
            { label: 'Pasos de escala no estándar', color: '#64748B', bg: '#F8FAFC' },
            { label: 'Gradientes sin valor en Figma', color: '#DC2626', bg: '#FFF1F2' },
          ].map(p => (
            <StatusPill key={p.label} label={p.label} color={p.color} bg={p.bg} />
          ))}
        </div>

        {/* Issues detail */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
          {[
            {
              severity: 'CRÍTICO',
              sc: '#DC2626', sb: '#FFF1F2',
              title: 'color/blue/600 ausente en Figma',
              detail: 'El token #226FCB está en tokens.ts como "blue/600 Normal" y es el color de CTA principal, pero NO existe como variable publicada en Figma. Genera desincronización entre la fuente de verdad de diseño y código. Acción: publicar color/blue/600 en Figma variables ASAP.',
            },
            {
              severity: 'ALTO',
              sc: '#D97706', sb: '#FFFBEB',
              title: `${LEGACY_TOKENS.length} tokens duplicados sin deprecar`,
              detail: 'Existen dos grupos de variables paralelas: "Secondary/Grey/*" y "Blue/color/blue/*" que son copias exactas de "color/grey/*" y "color/blue/*". Generan confusión y mantenimiento doble. Deben marcarse como deprecated en Figma y eliminarse en el próximo sprint de limpieza.',
            },
            {
              severity: 'MEDIO',
              sc: '#D97706', sb: '#FFFBEB',
              title: 'Pasos de escala no estándar',
              detail: 'Las paletas incluyen pasos 250, 75, 715, 725, 915, 925 que rompen la progresión estándar (50, 100, 200, …, 900, 950). Estos pasos intermedios dificultan la predictibilidad de la escala. Deben justificarse o eliminarse.',
            },
            {
              severity: 'MEDIO',
              sc: '#D97706', sb: '#FFFBEB',
              title: 'Nombres semánticos dentro del grupo de primitivos',
              detail: '"color/grey/background" (#F4F6F8) y "color/grey/greyspecial" (#F1F3F6) tienen nombres que describen uso, no valor. Deben renombrarse a "color/grey/75b" o similar, y sus usos deben mapearse en la capa semántica (color.background.canvas).',
            },
            {
              severity: 'BAJO',
              sc: '#64748B', sb: '#F8FAFC',
              title: 'Gradientes sin valor en Figma variables',
              detail: 'Los 5 tokens de gradiente (Gradient/Blue/01, Gradient/Blue/02, Gradient/Red/01, Gradient/Grey/01, Gradient/Duo/01) están presentes en Figma pero sin valor asignado. Los valores correctos existen en tokens.ts. Sincronizar.',
            },
          ].map(issue => (
            <div key={issue.title} style={{
              display: 'grid', gridTemplateColumns: '90px 1fr', gap: 16,
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)', padding: '14px 20px',
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', paddingTop: 2 }}>
                <span style={{ fontSize: 10, fontWeight: 800, padding: '3px 8px', borderRadius: 'var(--radius-pill)', background: issue.sb, color: issue.sc, letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>
                  {issue.severity}
                </span>
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 6 }}>{issue.title}</div>
                <div style={{ fontSize: 13, color: 'var(--text-3)', lineHeight: 1.7 }}>{issue.detail}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Legacy tokens table */}
        <details style={{ background: 'var(--surface)', border: '1px solid var(--beta-border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
          <summary style={{ padding: '14px 20px', cursor: 'pointer', fontSize: 13, fontWeight: 700, color: 'var(--beta-text)', background: 'var(--beta-bg)', userSelect: 'none' }}>
            Ver {LEGACY_TOKENS.length} tokens duplicados / legacy — candidatos a deprecar
          </summary>
          <table className="ds-token-table">
            <thead><tr><th>Token legacy (deprecar)</th><th>Color</th><th>Hex</th><th>Reemplazar por</th></tr></thead>
            <tbody>
              {LEGACY_TOKENS.map(t => (
                <tr key={t.token}>
                  <td><code style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--deprecated-text)', textDecoration: 'line-through' }}>{t.token}</code></td>
                  <td><Swatch hex={t.hex} size={18} /></td>
                  <td><code style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--text-3)' }}>{t.hex}</code></td>
                  <td><code className="ds-code" style={{ fontSize: 11 }}>{t.duplicate}</code></td>
                </tr>
              ))}
            </tbody>
          </table>
        </details>
      </div>

      {/* ── 3. PRIMITIVES ─────────────────────────────────────────── */}
      <SectionAnchor id="primitives" />
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">3. Colores primitivos</h2>
          <p className="ds-section__desc">
            8 familias cromáticas. Son la materia prima del sistema. No usar directamente en componentes — consumir vía tokens semánticos.
          </p>
        </div>

        {/* Blue */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <div style={{ fontWeight: 800, fontSize: 14 }}>Blue</div>
            <span style={{ fontSize: 12, color: 'var(--text-3)' }}>— color de marca primario</span>
            <StatusPill label="13 pasos" color="var(--brand)" bg="var(--brand-light)" />
            <StatusPill label="⚠ blue/600 ausente en Figma" color="#DC2626" bg="#FFF1F2" />
          </div>
          <div style={{ display: 'flex', gap: 4, marginBottom: 12 }}>
            {BLUE.map(c => (
              <div key={c.step} style={{ flex: 1 }}>
                <div style={{
                  height: 48, borderRadius: 6, background: c.hex,
                  border: c.gap ? '2px dashed #DC2626' : '1px solid rgba(0,0,0,0.06)',
                  position: 'relative',
                }}>
                  {c.gap && (
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontSize: 10, fontWeight: 700, color: '#DC2626', background: 'rgba(255,255,255,0.9)', padding: '1px 4px', borderRadius: 3 }}>!</span>
                    </div>
                  )}
                </div>
                <div style={{ fontSize: 9, fontFamily: 'var(--font-mono)', color: 'var(--text-3)', marginTop: 4, textAlign: 'center', lineHeight: 1.3 }}>{c.step}</div>
              </div>
            ))}
          </div>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
            <table className="ds-token-table">
              <thead><tr><th>Paso</th><th>Color</th><th>Hex</th><th>Variable Figma</th><th>Uso a alto nivel</th></tr></thead>
              <tbody>
                {BLUE.map(c => (
                  <tr key={c.step} style={{ background: c.gap ? '#FFF8F8' : undefined }}>
                    <td><code style={{ fontSize: 11, fontFamily: 'var(--font-mono)', fontWeight: c.gap ? 700 : 400 }}>blue/{c.step}</code></td>
                    <td><Swatch hex={c.hex} size={20} /></td>
                    <td><code style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--text-3)' }}>{c.hex}</code></td>
                    <td>
                      {c.gap
                        ? <span style={{ fontSize: 11, color: '#DC2626', fontWeight: 700 }}>⚠ Ausente en Figma</span>
                        : <code className="ds-code" style={{ fontSize: 10 }}>{c.figma}</code>}
                    </td>
                    <td style={{ fontSize: 12, color: 'var(--text-3)', lineHeight: 1.5 }}>{c.label}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Red */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <div style={{ fontWeight: 800, fontSize: 14 }}>Red (Crimson)</div>
            <span style={{ fontSize: 12, color: 'var(--text-3)' }}>— acento y acciones de marca</span>
            <StatusPill label="13 pasos" color="#DC2626" bg="#FFF1F2" />
            <StatusPill label="⚠ pasos 725, 925 no estándar" color="#D97706" bg="#FFFBEB" />
          </div>
          <div style={{ display: 'flex', gap: 4, marginBottom: 12 }}>
            {RED.map(c => (
              <div key={c.step} style={{ flex: 1 }}>
                <div style={{ height: 48, borderRadius: 6, background: c.hex, border: '1px solid rgba(0,0,0,0.06)' }} />
                <div style={{ fontSize: 9, fontFamily: 'var(--font-mono)', color: 'var(--text-3)', marginTop: 4, textAlign: 'center', lineHeight: 1.3 }}>{c.step}</div>
              </div>
            ))}
          </div>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
            <table className="ds-token-table">
              <thead><tr><th>Paso</th><th>Color</th><th>Hex</th><th>Variable Figma</th><th>Uso</th></tr></thead>
              <tbody>
                {RED.map(c => (
                  <tr key={c.step}>
                    <td><code style={{ fontSize: 11, fontFamily: 'var(--font-mono)' }}>red/{c.step}</code></td>
                    <td><Swatch hex={c.hex} size={20} /></td>
                    <td><code style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--text-3)' }}>{c.hex}</code></td>
                    <td><code className="ds-code" style={{ fontSize: 10 }}>{c.figma}</code></td>
                    <td style={{ fontSize: 12, color: 'var(--text-3)', lineHeight: 1.5 }}>{c.label}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Grey */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <div style={{ fontWeight: 800, fontSize: 14 }}>Grey (Greyscale)</div>
            <span style={{ fontSize: 12, color: 'var(--text-3)' }}>— neutrales, texto y superficies</span>
            <StatusPill label="16 pasos" color="var(--text-3)" bg="var(--surface-2)" />
            <StatusPill label="⚠ 2 nombres semánticos en grupo primitivo" color="#D97706" bg="#FFFBEB" />
          </div>
          <div style={{ display: 'flex', gap: 3, marginBottom: 12 }}>
            {GREY.map(c => (
              <div key={c.step} style={{ flex: 1 }}>
                <div style={{
                  height: 48, borderRadius: 6, background: c.hex,
                  border: c.warn ? '2px dashed #D97706' : '1px solid rgba(0,0,0,0.06)',
                }} />
                <div style={{ fontSize: 9, fontFamily: 'var(--font-mono)', color: 'var(--text-3)', marginTop: 4, textAlign: 'center', lineHeight: 1.3, overflow: 'hidden' }}>
                  {c.step.length > 6 ? c.step.slice(0, 5) + '…' : c.step}
                </div>
              </div>
            ))}
          </div>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
            <table className="ds-token-table">
              <thead><tr><th>Paso</th><th>Color</th><th>Hex</th><th>Variable Figma</th><th>Uso</th></tr></thead>
              <tbody>
                {GREY.map(c => (
                  <tr key={c.step} style={{ background: c.warn ? '#FFFBEB' : undefined }}>
                    <td><code style={{ fontSize: 11, fontFamily: 'var(--font-mono)' }}>grey/{c.step}</code></td>
                    <td><Swatch hex={c.hex} size={20} /></td>
                    <td><code style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--text-3)' }}>{c.hex}</code></td>
                    <td><code className="ds-code" style={{ fontSize: 10 }}>{c.figma}</code></td>
                    <td style={{ fontSize: 12, color: c.warn ? '#D97706' : 'var(--text-3)', lineHeight: 1.5 }}>{c.label}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Feedback palettes */}
        <div>
          <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 16 }}>Paletas de feedback</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
            {FEEDBACK_PALETTES.map(p => (
              <div key={p.id} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                  <div style={{ width: 12, height: 12, borderRadius: '50%', background: p.accent }} />
                  <span style={{ fontWeight: 700, fontSize: 13 }}>{p.name}</span>
                  <code className="ds-code" style={{ fontSize: 10 }}>color/{p.id}/*</code>
                </div>
                <div style={{ display: 'flex', gap: 3 }}>
                  {p.tokens.map(t => (
                    <div key={t.step} style={{ flex: 1 }}>
                      <div style={{ height: 28, borderRadius: 4, background: t.hex, border: '1px solid rgba(0,0,0,0.06)' }} />
                      <div style={{ fontSize: 8, fontFamily: 'var(--font-mono)', color: 'var(--text-4)', marginTop: 2, textAlign: 'center' }}>{t.step}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 4. BRAND COLORS ───────────────────────────────────────── */}
      <SectionAnchor id="brand" />
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">4. Colores de marca</h2>
          <p className="ds-section__desc">Los colores que definen la identidad visual de Multitravel. Restrictivos por naturaleza.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 24 }}>
          {/* Blue brand */}
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
            <div style={{ height: 100, background: 'linear-gradient(135deg, #0d4e88 0%, #267de5 100%)' }} />
            <div style={{ padding: 20 }}>
              <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 4 }}>Blue Usafa</div>
              <div style={{ fontSize: 13, color: 'var(--text-3)', marginBottom: 16 }}>Color de identidad principal. Autoridad, confianza, viaje.</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
                {[
                  { label: 'Usafa Dark (identidad)', hex: '#0d4e88', token: 'color/blue/800' },
                  { label: 'Normal (interacción)', hex: '#226fcb', token: 'color/blue/600 ⚠', gap: true },
                  { label: 'Hover', hex: '#267de5', token: 'color/blue/500' },
                ].map(v => (
                  <div key={v.label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <Swatch hex={v.hex} size={24} />
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 600, color: v.gap ? '#DC2626' : 'var(--text)' }}>{v.label}</div>
                      <code style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--text-3)' }}>{v.hex} · {v.token}</code>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ fontSize: 12, color: 'var(--text-3)', lineHeight: 1.7, borderTop: '1px solid var(--border)', paddingTop: 12 }}>
                <strong>Uso permitido:</strong> Logo, nav principal, botones primarios, headers, selección activa, acentos de producto.<br />
                <strong>Restricción:</strong> No combinar como fondo con texto gris — solo texto blanco o muy claro. No usar blue/300 o más claro como color funcional en texto sobre fondo blanco (contraste insuficiente).
              </div>
            </div>
          </div>
          {/* Red brand */}
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
            <div style={{ height: 100, background: 'linear-gradient(135deg, #df0032 0%, #ff5c7f 100%)' }} />
            <div style={{ padding: 20 }}>
              <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 4 }}>Crimson Red</div>
              <div style={{ fontSize: 13, color: 'var(--text-3)', marginBottom: 16 }}>Acento de marca. Energía, acción, urgencia.</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
                {[
                  { label: 'Crimson (acento principal)', hex: '#ef0539', token: 'color/red/600' },
                  { label: 'Dark Crimson', hex: '#df0032', token: 'color/red/700' },
                  { label: 'Pastel (decorativo)', hex: '#ff5c7f', token: 'color/red/400' },
                ].map(v => (
                  <div key={v.label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <Swatch hex={v.hex} size={24} />
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 600 }}>{v.label}</div>
                      <code style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--text-3)' }}>{v.hex} · {v.token}</code>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ fontSize: 12, color: 'var(--text-3)', lineHeight: 1.7, borderTop: '1px solid var(--border)', paddingTop: 12 }}>
                <strong>Uso permitido:</strong> Precios destacados, CTAs secundarios, badges de oferta/promo, banners de campaña.<br />
                <strong>Restricción:</strong> No usar como color de error funcional — puede confundirse con feedback semántico. Usar exclusivamente con intención de marca.
              </div>
            </div>
          </div>
        </div>

        {/* Gradients */}
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-3)', marginBottom: 12 }}>
            Gradientes de marca <StatusPill label="⚠ Sin valor en Figma vars — sync pendiente" color="#D97706" bg="#FFFBEB" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 10 }}>
            {[
              { name: 'Blue/01', css: 'linear-gradient(135deg, #0d4e88 0%, #2a8bfe 100%)' },
              { name: 'Blue/02', css: 'linear-gradient(135deg, #051b30 0%, #0d4e88 100%)' },
              { name: 'Red/01',  css: 'linear-gradient(135deg, #ef0539 0%, #ff5c7f 100%)' },
              { name: 'Grey/01', css: 'linear-gradient(135deg, #cacaca 0%, #f5f5f5 100%)' },
              { name: 'Duo/01',  css: 'linear-gradient(135deg, #226fcb 0%, #ef0539 100%)' },
            ].map(g => (
              <div key={g.name} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <div style={{ height: 56, borderRadius: 'var(--radius-lg)', background: g.css, border: '1px solid rgba(0,0,0,0.06)' }} />
                <code style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--text-3)', textAlign: 'center' }}>Gradient/{g.name}</code>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 5. SEMANTIC LAYER ─────────────────────────────────────── */}
      <SectionAnchor id="semantic" />
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">5. Capa semántica</h2>
          <p className="ds-section__desc">
            Propuesta de tokens semánticos. Ninguno de estos tokens existe aún en Figma como variable publicada.
            Son la siguiente acción de arquitectura del sistema.
          </p>
        </div>

        <div style={{
          background: '#FFFBEB', border: '1px solid #FDE68A',
          borderLeft: '4px solid #D97706',
          borderRadius: 'var(--radius-lg)', padding: '14px 18px', marginBottom: 24,
          fontSize: 13, color: '#92400E', lineHeight: 1.7,
        }}>
          <strong>Estado:</strong> Propuesta. Los tokens que se muestran a continuación son una recomendación de arquitectura
          basada en los primitivos existentes en Figma. Requieren aprobación del equipo y publicación en Figma antes de usarse.
          La columna &quot;Primitivo&quot; indica de qué variable Figma existente tomaría el valor.
        </div>

        {SEMANTIC.map(group => (
          <div key={group.category} style={{ marginBottom: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <span style={{ fontSize: 16 }}>{group.icon}</span>
              <span style={{ fontWeight: 800, fontSize: 14 }}>{group.category}</span>
            </div>
            <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
              <table className="ds-token-table">
                <thead>
                  <tr>
                    <th>Token semántico</th>
                    <th>Color</th>
                    <th>Primitivo</th>
                    <th>CSS prop</th>
                    <th>Uso</th>
                  </tr>
                </thead>
                <tbody>
                  {group.roles.map(r => (
                    <tr key={r.role}>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                          <code style={{ fontSize: 11, fontFamily: 'var(--font-mono)', fontWeight: 600 }}>{r.role}</code>
                          <StatusPill label="propuesto" color="#D97706" bg="#FFFBEB" />
                        </div>
                      </td>
                      <td><Swatch hex={r.hex} size={20} /></td>
                      <td><code className="ds-code" style={{ fontSize: 10 }}>color/{r.primitive}</code></td>
                      <td><code style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--text-3)' }}>{r.css}</code></td>
                      <td style={{ fontSize: 12, color: 'var(--text-3)', lineHeight: 1.5 }}>{r.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>

      {/* ── 6. STATES ─────────────────────────────────────────────── */}
      <SectionAnchor id="states" />
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">6. Estados de interacción</h2>
          <p className="ds-section__desc">Qué cambia en el color para cada estado del ciclo de vida de un elemento interactivo.</p>
        </div>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: 24 }}>
          <table className="ds-token-table">
            <thead>
              <tr><th>Estado</th><th>Qué cambia</th><th>Primitivo base</th><th>Señal visual esperada</th></tr>
            </thead>
            <tbody>
              {[
                { state: 'Default',    change: 'Background + border + text en reposo',              prim: 'blue/800 / grey/100 / grey/950',  signal: 'Legible, neutral, sin énfasis adicional.' },
                { state: 'Hover',      change: 'Background oscurece ~1 paso / border se vuelve más fuerte', prim: 'blue/900 / grey/200',     signal: 'Retroalimentación inmediata al cursor. Δ 50–100ms.' },
                { state: 'Pressed',    change: 'Background aún más oscuro / leve scale-down',       prim: 'blue/915 / grey/300',             signal: 'Confirmación táctil visual.' },
                { state: 'Focus',      change: 'Ring exterior de 3px + 2px offset',                 prim: 'blue/500 (ring)',                  signal: 'Solo visible vía teclado. No en hover de ratón.' },
                { state: 'Selected',   change: 'Background brand-subtle + border brand + text brand', prim: 'blue/50 + blue/250 + blue/800',  signal: 'Persistente. Indica selección activa.' },
                { state: 'Disabled',   change: 'Background gris / border gris / texto gris / no events', prim: 'grey/200 + grey/500',        signal: 'Cursor not-allowed. No interactivo.' },
                { state: 'Error',      change: 'Border rojo / background rojo-50 / texto error',    prim: 'error/600 + error/50 + error/600', signal: 'Siempre acompañado de texto de error.' },
                { state: 'Success',    change: 'Border verde / background verde-50 / texto success', prim: 'success/600 + success/50',        signal: 'Confirmación positiva. Transitorio o persistente.' },
              ].map(row => (
                <tr key={row.state}>
                  <td>
                    <span style={{
                      display: 'inline-block', fontSize: 11, fontWeight: 700, padding: '2px 8px',
                      borderRadius: 'var(--radius-pill)',
                      background: row.state === 'Error' ? '#FFF1F2' : row.state === 'Success' ? '#F0FDF4' : row.state === 'Disabled' ? 'var(--surface-2)' : 'var(--brand-light)',
                      color: row.state === 'Error' ? '#BE123C' : row.state === 'Success' ? '#15803D' : row.state === 'Disabled' ? 'var(--text-3)' : 'var(--brand)',
                    }}>
                      {row.state}
                    </span>
                  </td>
                  <td style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.5 }}>{row.change}</td>
                  <td><code style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--text-3)' }}>{row.prim}</code></td>
                  <td style={{ fontSize: 12, color: 'var(--text-3)', lineHeight: 1.5 }}>{row.signal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Visual state demos */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
          {[
            { label: 'Default',  bg: '#0d4e88', text: '#fff', border: 'none',            extra: {} },
            { label: 'Hover',    bg: '#00325d', text: '#fff', border: 'none',            extra: {} },
            { label: 'Focus',    bg: '#0d4e88', text: '#fff', border: '2px solid #267de5', extra: { boxShadow: '0 0 0 3px rgba(38,125,229,0.35)' } },
            { label: 'Disabled', bg: '#cacaca', text: '#8d8d8d', border: 'none',         extra: { cursor: 'not-allowed' } },
            { label: 'Selected', bg: '#f5faff', text: '#0d4e88', border: '2px solid #bddbff', extra: { fontWeight: 700 } },
            { label: 'Error',    bg: '#feeceb', text: '#e22d20', border: '2px solid #ffccc8', extra: {} },
            { label: 'Success',  bg: '#f3fcf3', text: '#1d781d', border: '2px solid #c0f3bf', extra: {} },
            { label: 'Pressed',  bg: '#082f52', text: '#fff', border: 'none',            extra: { transform: 'scale(0.97)' } },
          ].map(s => (
            <div key={s.label} style={{
              height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center',
              borderRadius: 12, background: s.bg, color: s.text,
              border: s.border || '1px solid transparent',
              fontSize: 12, fontWeight: 600,
              ...s.extra,
            }}>
              {s.label}
            </div>
          ))}
        </div>
      </div>

      {/* ── 7. ACCESSIBILITY ──────────────────────────────────────── */}
      <SectionAnchor id="accessibility" />
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">7. Accesibilidad</h2>
          <p className="ds-section__desc">El color no puede ser el único portador de significado. WCAG 2.1 AA como mínimo obligatorio.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 24 }}>
          {[
            { level: 'AA Normal', ratio: '4.5:1', apply: 'Texto < 18px, texto < 14px bold', mandatory: true },
            { level: 'AA Large', ratio: '3:1', apply: 'Texto ≥ 18px, texto ≥ 14px bold, iconos UI', mandatory: true },
            { level: 'AAA', ratio: '7:1', apply: 'Texto crítico, alertas de seguridad', mandatory: false },
          ].map(c => (
            <div key={c.level} style={{
              background: c.mandatory ? 'var(--brand-light)' : 'var(--surface)',
              border: `1px solid ${c.mandatory ? 'var(--brand-border)' : 'var(--border)'}`,
              borderRadius: 'var(--radius-lg)', padding: 16, textAlign: 'center',
            }}>
              <div style={{ fontSize: 22, fontWeight: 800, color: 'var(--brand)', marginBottom: 4 }}>{c.ratio}</div>
              <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 4 }}>{c.level}</div>
              <div style={{ fontSize: 12, color: 'var(--text-3)', lineHeight: 1.5, marginBottom: 8 }}>{c.apply}</div>
              {c.mandatory && <StatusPill label="Obligatorio en Lorien" color="var(--brand)" bg="var(--brand-light)" />}
            </div>
          ))}
        </div>

        {/* Approved combinations */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 12, color: '#16A34A' }}>✓ Combinaciones aprobadas</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
            {[
              { bg: '#0d4e88', text: '#ffffff', label: 'Blanco / Blue 800', ratio: '~7.2:1 AAA', pass: true },
              { bg: '#272626', text: '#ffffff', label: 'Blanco / Grey 950', ratio: '~16.5:1 AAA', pass: true },
              { bg: '#ffffff', text: '#272626', label: 'Grey 950 / Blanco', ratio: '~16.5:1 AAA', pass: true },
              { bg: '#ffffff', text: '#646464', label: 'Grey 700 / Blanco', ratio: '~6.5:1 AA', pass: true },
              { bg: '#f5faff', text: '#0d4e88', label: 'Blue 800 / Blue 50', ratio: '~5.2:1 AA', pass: true },
              { bg: '#ef0539', text: '#ffffff', label: 'Blanco / Red 600',  ratio: '~4.6:1 AA', pass: true },
            ].map(c => (
              <div key={c.label} style={{
                height: 56, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                background: c.bg, color: c.text, borderRadius: 'var(--radius-lg)',
                border: '2px solid #BBF7D0', gap: 2,
              }}>
                <div style={{ fontSize: 12, fontWeight: 700 }}>{c.label}</div>
                <div style={{ fontSize: 10, opacity: 0.85 }}>{c.ratio}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Rejected combinations */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 12, color: '#DC2626' }}>✕ Combinaciones rechazadas</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
            {[
              { bg: '#267de5', text: '#ffffff', label: 'Blanco / Blue 500', ratio: '~3.0:1 FAIL body', note: 'Solo AA Large' },
              { bg: '#ffffff', text: '#a1a1a1', label: 'Grey 400 / Blanco', ratio: '~2.9:1 FAIL', note: 'Solo para placeholder' },
              { bg: '#fff8ed', text: '#ffaa37', label: 'Warning 400 / W.50', ratio: '~1.8:1 FAIL', note: 'No usar nunca' },
              { bg: '#f5faff', text: '#71b6f2', label: 'Blue 300 / Blue 50', ratio: '~1.6:1 FAIL', note: 'Solo decorativo' },
              { bg: '#2a8bfe', text: '#267de5', label: 'Blue 500 / Blue 400', ratio: '~1.1:1 FAIL', note: 'No combinar' },
              { bg: '#23a423', text: '#55d355', label: 'Success 400 / 600', ratio: '~1.5:1 FAIL', note: 'No combinar' },
            ].map(c => (
              <div key={c.label} style={{
                height: 56, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                background: c.bg, color: c.text, borderRadius: 'var(--radius-lg)',
                border: '2px solid #FECDD3', gap: 2, position: 'relative',
              }}>
                <div style={{ fontSize: 12, fontWeight: 700 }}>{c.label}</div>
                <div style={{ fontSize: 10 }}>{c.ratio}</div>
                <div style={{
                  position: 'absolute', bottom: 4, right: 6,
                  fontSize: 9, background: 'rgba(220,38,38,0.15)', color: '#DC2626',
                  padding: '1px 5px', borderRadius: 3, fontWeight: 700,
                }}>
                  {c.note}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rules */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: 20 }}>
          <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 12 }}>Reglas críticas de accesibilidad de color</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              'El color NUNCA es el único diferenciador de un estado (error, éxito). Siempre acompañar con ícono + texto.',
              'Los links deben tener underline o un diferenciador no-color del texto normal (no depender solo de blue).',
              'El focus ring debe ser visible en todos los modos de color. Mínimo 3:1 contraste del anillo con el fondo.',
              'Los placeholder de inputs (grey/400) no cumplen WCAG AA — es esperado y permitido según spec.',
              'El texto sobre gradientes debe verificarse en el punto de menor contraste, no en el promedio.',
              'Los íconos de UI (significado funcional) necesitan 3:1 mínimo contra el fondo (AA Large).',
            ].map((rule, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, fontSize: 13, color: 'var(--text-2)', lineHeight: 1.6 }}>
                <span style={{ color: 'var(--brand)', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>·</span>
                {rule}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 8. DO / DON'T ─────────────────────────────────────────── */}
      <SectionAnchor id="dodont" />
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">8. Do / Don&apos;t</h2>
        </div>
        <div className="ds-do-dont">
          <div className="ds-do-dont__do">
            <div className="ds-do-dont__label">Do</div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { title: 'Usar tokens semánticos', desc: 'Siempre --color-text-default, --color-bg-canvas, etc. en componentes. Los primitivos son referencia, no implementación.' },
                { title: 'Verificar contraste antes de implementar', desc: 'Usar herramientas como Stark, WhoCanUseThis o el plugin de contraste de Figma en cualquier texto sobre fondo de color.' },
                { title: 'Acompañar el color con señal adicional', desc: 'En estados de error, éxito o warning: icono + texto + color. Nunca solo color.' },
                { title: 'Usar el Crimson Red con intención de marca', desc: 'Es un color de acento, no de UI funcional. Reservarlo para precios, promos, CTAs secundarios de alta energía.' },
                { title: 'Respetar la jerarquía de grises en texto', desc: 'grey/950 para body principal, grey/700 para secundario, grey/400 solo para placeholder.' },
                { title: 'Mapear cualquier color nuevo a la capa semántica', desc: 'Si un nuevo componente necesita un color sin token, crear el token semántico primero.' },
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: 10, lineHeight: 1.6 }}>
                  <span style={{ color: '#16A34A', fontWeight: 800, flexShrink: 0, marginTop: 1 }}>✓</span>
                  <div>
                    <span style={{ fontSize: 13, fontWeight: 700 }}>{item.title}. </span>
                    <span style={{ fontSize: 13, color: 'var(--text-3)' }}>{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="ds-do-dont__dont">
            <div className="ds-do-dont__label">Don&apos;t</div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { title: 'Usar primitivos directamente en componentes', desc: 'color/blue/800 en el código de un botón es incorrecto. Siempre pasar por un token semántico.' },
                { title: 'Confundir color de marca con color de error', desc: 'Red/600 (Crimson) es de marca. Error/600 es feedback funcional. Son paletas distintas con propósitos distintos.' },
                { title: 'Usar más de 2 colores de acento en una misma pantalla', desc: 'Blue + Red + naranja de warning + verde de éxito en una vista crea caos visual y pierde jerarquía.' },
                { title: 'Hardcodear hex en el código', desc: 'Prohibido escribir #0d4e88 en CSS o JSX. Si el token no existe, crearlo antes de implementar.' },
                { title: 'Asumir que el contraste "se ve bien"', desc: 'Verificar siempre con herramienta. El ojo no es suficiente, especialmente en grises medios y colores de feedback.' },
                { title: 'Crear tokens nuevos fuera del sistema', desc: 'Cualquier color nuevo debe pasar por el proceso de design review. No crear variables ad-hoc por un caso de uso puntual.' },
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: 10, lineHeight: 1.6 }}>
                  <span style={{ color: '#DC2626', fontWeight: 800, flexShrink: 0, marginTop: 1 }}>✕</span>
                  <div>
                    <span style={{ fontSize: 13, fontWeight: 700 }}>{item.title}. </span>
                    <span style={{ fontSize: 13, color: 'var(--text-3)' }}>{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── 9. APPLICATION EXAMPLES ───────────────────────────────── */}
      <SectionAnchor id="examples" />
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">9. Ejemplos de aplicación</h2>
          <p className="ds-section__desc">Color aplicado a UI realista. Cada bloque muestra qué tokens semánticos se usan.</p>
        </div>

        {/* Buttons */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-3)', marginBottom: 12 }}>Elementos interactivos</div>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: 24 }}>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 16 }}>
              {[
                { label: 'Primario', bg: '#0d4e88', text: '#ffffff', border: 'none', tokens: 'bg: interactive/primary · text: text/inverse' },
                { label: 'Hover',    bg: '#00325d', text: '#ffffff', border: 'none', tokens: 'bg: interactive/primary-hover' },
                { label: 'Secundario', bg: 'transparent', text: '#0d4e88', border: '1.5px solid #0d4e88', tokens: 'border: border/brand · text: text/brand' },
                { label: 'Destructivo', bg: '#ef0539', text: '#ffffff', border: 'none', tokens: 'bg: interactive/destructive' },
                { label: 'Ghost',    bg: 'transparent', text: '#267de5', border: '1px solid #dfdfdf', tokens: 'text: text/link · border: border/default' },
                { label: 'Disabled', bg: '#cacaca', text: '#8d8d8d', border: 'none', tokens: 'bg: interactive/disabled · text: interactive/disabled-text' },
              ].map(btn => (
                <div key={btn.label} style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-start' }}>
                  <div style={{
                    padding: '10px 20px', borderRadius: 12, fontSize: 13, fontWeight: 600,
                    background: btn.bg, color: btn.text, border: btn.border || 'none',
                    whiteSpace: 'nowrap',
                  }}>
                    {btn.label}
                  </div>
                  <code style={{ fontSize: 9, fontFamily: 'var(--font-mono)', color: 'var(--text-4)', maxWidth: 140, lineHeight: 1.4 }}>{btn.tokens}</code>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Alerts */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-3)', marginBottom: 12 }}>Feedback alerts</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { type: 'success', bg: '#f3fcf3', border: '#c0f3bf', lborder: '#23a423', text: '#1d781d', icon: '✓', title: 'Reserva confirmada', msg: 'Tu vuelo MAD → BCN ha sido confirmado. Recibirás la confirmación por email.' },
              { type: 'warning', bg: '#fff8ed', border: '#ffe2a8', lborder: '#f07306', text: '#c75707', icon: '⚠', title: 'Check-in disponible', msg: 'El check-in online abre 48h antes de tu vuelo. Recuerda hacerlo para elegir asiento.' },
              { type: 'error',   bg: '#feeceb', border: '#ffccc8', lborder: '#e22d20', text: '#be2217', icon: '✕', title: 'Pago fallido', msg: 'No pudimos procesar tu pago. Verifica los datos de tu tarjeta e intenta nuevamente.' },
              { type: 'info',    bg: '#eaf4fc', border: '#bdebff', lborder: '#2196f3', text: '#1863b5', icon: 'ℹ', title: 'Documentación requerida', msg: 'Para este destino necesitas pasaporte con al menos 6 meses de vigencia.' },
            ].map(a => (
              <div key={a.type} style={{
                background: a.bg, border: `1px solid ${a.border}`,
                borderLeft: `4px solid ${a.lborder}`,
                borderRadius: 'var(--radius-lg)', padding: '12px 16px',
                display: 'flex', gap: 12, alignItems: 'flex-start',
              }}>
                <span style={{ fontSize: 16, color: a.lborder, marginTop: 1, flexShrink: 0 }}>{a.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13, color: a.text, marginBottom: 2 }}>{a.title}</div>
                  <div style={{ fontSize: 13, color: a.text, opacity: 0.85, lineHeight: 1.6 }}>{a.msg}</div>
                </div>
                <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'flex-start', paddingTop: 2 }}>
                  <code style={{ fontSize: 9, fontFamily: 'var(--font-mono)', color: a.text, opacity: 0.6, whiteSpace: 'nowrap' }}>
                    bg: background/{a.type}<br />border: border/{a.type}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Text hierarchy */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-3)', marginBottom: 12 }}>Jerarquía de texto</div>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: 24, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              { label: 'H1 — Título de página', size: 28, weight: 800, color: '#272626', token: 'text/default · grey/950' },
              { label: 'H2 — Subtítulo de sección', size: 20, weight: 700, color: '#272626', token: 'text/default · grey/950' },
              { label: 'Body — Descripción principal', size: 14, weight: 400, color: '#272626', token: 'text/default · grey/950' },
              { label: 'Secundario — Metadatos y etiquetas', size: 13, weight: 400, color: '#646464', token: 'text/subtle · grey/700' },
              { label: 'Placeholder — Texto de input vacío', size: 13, weight: 400, color: '#a1a1a1', token: 'text/placeholder · grey/400' },
              { label: 'Link — Acción en texto inline', size: 13, weight: 600, color: '#267de5', token: 'text/link · blue/500' },
              { label: 'Disabled — Elemento no interactivo', size: 13, weight: 400, color: '#b6b6b6', token: 'text/disabled · grey/300' },
            ].map(t => (
              <div key={t.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20 }}>
                <span style={{ fontSize: t.size, fontWeight: t.weight, color: t.color, lineHeight: 1 }}>{t.label}</span>
                <code style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--text-4)', flexShrink: 0 }}>{t.token}</code>
              </div>
            ))}
          </div>
        </div>

        {/* Surfaces */}
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-3)', marginBottom: 12 }}>Superficies y fondos</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
            {[
              { name: 'Canvas', bg: '#f4f6f8', text: '#272626', border: '1px solid #dfdfdf', token: 'background/canvas', sub: 'color/grey/background' },
              { name: 'Surface', bg: '#ffffff', text: '#272626', border: '1px solid #dfdfdf', token: 'background/surface', sub: 'color/grey/white' },
              { name: 'Subtle', bg: '#f8f8f8', text: '#272626', border: '1px solid #dfdfdf', token: 'background/subtle', sub: 'color/grey/50' },
              { name: 'Brand', bg: '#0d4e88', text: '#ffffff', border: 'none', token: 'background/brand', sub: 'color/blue/800' },
              { name: 'Brand subtle', bg: '#f5faff', text: '#0d4e88', border: '1px solid #bddbff', token: 'background/brand-subtle', sub: 'color/blue/50' },
              { name: 'Elevated', bg: '#ffffff', text: '#272626', border: 'none', shadow: '0 4px 12px rgba(0,0,0,0.08)', token: 'background/elevated', sub: 'grey/white + shadow' },
            ].map(s => (
              <div key={s.name} style={{
                height: 72, background: s.bg, color: s.text,
                border: s.border || 'none',
                boxShadow: s.shadow,
                borderRadius: 'var(--radius-lg)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2,
              }}>
                <div style={{ fontWeight: 700, fontSize: 12 }}>{s.name}</div>
                <code style={{ fontSize: 9, fontFamily: 'var(--font-mono)', opacity: 0.7 }}>{s.token}</code>
                <code style={{ fontSize: 9, fontFamily: 'var(--font-mono)', opacity: 0.5 }}>{s.sub}</code>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 10. NOMENCLATURE ──────────────────────────────────────── */}
      <SectionAnchor id="nomenclature" />
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">10. Nomenclatura y tokens</h2>
          <p className="ds-section__desc">Convención de nombres para el sistema de tokens. Propuesta para alinear Figma y código.</p>
        </div>

        {/* Convention */}
        <div style={{ background: 'var(--brand-light)', border: '1px solid var(--brand-border)', borderRadius: 'var(--radius-lg)', padding: 20, marginBottom: 24 }}>
          <div style={{ fontWeight: 800, fontSize: 14, color: 'var(--brand)', marginBottom: 12 }}>Convención propuesta</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 3, marginBottom: 16 }}>
            {[
              { part: 'color', desc: 'Namespace' },
              { part: 'category', desc: 'text / bg / border / interactive / feedback / focus / overlay' },
              { part: 'role', desc: 'default / subtle / inverse / primary / success / …' },
              { part: 'state?', desc: 'hover / active / disabled (opcional)' },
            ].map(p => (
              <div key={p.part} style={{ background: 'white', borderRadius: 8, padding: '10px 12px', border: '1px solid var(--brand-border)' }}>
                <code style={{ fontSize: 13, fontFamily: 'var(--font-mono)', fontWeight: 800, color: 'var(--brand)', display: 'block', marginBottom: 4 }}>{p.part}</code>
                <div style={{ fontSize: 11, color: 'var(--text-3)', lineHeight: 1.5 }}>{p.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 6 }}>
            {[
              'color.text.default', 'color.text.subtle', 'color.text.inverse', 'color.text.error',
              'color.background.canvas', 'color.background.surface', 'color.background.brand',
              'color.border.default', 'color.border.focus', 'color.border.error',
              'color.interactive.primary', 'color.interactive.primary.hover',
              'color.feedback.success', 'color.feedback.error',
              'color.focus.ring', 'color.overlay.scrim',
            ].map(t => (
              <code key={t} style={{
                fontSize: 11, fontFamily: 'var(--font-mono)',
                background: 'rgba(255,255,255,0.7)', padding: '3px 10px',
                borderRadius: 4, color: 'var(--brand-text)', display: 'block',
              }}>
                {t}
              </code>
            ))}
          </div>
        </div>

        {/* Current vs proposed */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: 24 }}>
          <table className="ds-token-table">
            <thead>
              <tr>
                <th>Uso</th>
                <th>Nombre actual en Figma</th>
                <th>Estado</th>
                <th>Nombre propuesto</th>
              </tr>
            </thead>
            <tbody>
              {[
                { use: 'Color primario de texto',   current: '—',                      state: 'ausente', proposed: 'color.text.default → grey/950' },
                { use: 'Texto secundario',          current: '—',                      state: 'ausente', proposed: 'color.text.subtle → grey/700' },
                { use: 'Placeholder de input',      current: '—',                      state: 'ausente', proposed: 'color.text.placeholder → grey/400' },
                { use: 'Fondo de la app',           current: 'color/grey/background',  state: 'rename',  proposed: 'color.background.canvas → grey/background' },
                { use: 'Fondo de card/panel',       current: 'color/grey/white',       state: 'alias',   proposed: 'color.background.surface → grey/white' },
                { use: 'Borde estándar',            current: 'color/grey/100',         state: 'alias',   proposed: 'color.border.default → grey/100' },
                { use: 'Borde focus',               current: 'color/blue/500',         state: 'alias',   proposed: 'color.border.focus → blue/500' },
                { use: 'Botón primario',            current: 'color/blue/800',         state: 'alias',   proposed: 'color.interactive.primary → blue/800' },
                { use: 'Estado éxito',              current: 'color/success/600',      state: 'alias',   proposed: 'color.feedback.success → success/600' },
                { use: 'Estado error',              current: 'color/error/600',        state: 'alias',   proposed: 'color.feedback.error → error/600' },
                { use: 'Fondo canvas especial',     current: 'color/grey/greyspecial', state: 'rename',  proposed: 'color.background.subtleB → grey/greyspecial' },
                { use: 'CTA principal (normal)',    current: '— (ausente)',            state: 'crítico', proposed: 'color.interactive.cta → blue/600 ⚠ publicar en Figma' },
              ].map(row => (
                <tr key={row.use}>
                  <td style={{ fontSize: 13, fontWeight: 500 }}>{row.use}</td>
                  <td>
                    {row.current === '—' || row.current.startsWith('—')
                      ? <span style={{ fontSize: 12, color: 'var(--text-4)', fontStyle: 'italic' }}>{row.current}</span>
                      : <code className="ds-code" style={{ fontSize: 10 }}>{row.current}</code>}
                  </td>
                  <td>
                    <StatusPill
                      label={row.state}
                      color={row.state === 'crítico' ? '#DC2626' : row.state === 'ausente' ? '#D97706' : row.state === 'rename' ? '#D97706' : '#16A34A'}
                      bg={row.state === 'crítico' ? '#FFF1F2' : row.state === 'ausente' ? '#FFFBEB' : row.state === 'rename' ? '#FFFBEB' : '#F0FDF4'}
                    />
                  </td>
                  <td><code style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--brand)' }}>{row.proposed}</code></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Scalability */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: 24 }}>
          <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 16 }}>Preparación para escalabilidad y dark mode</div>
          <p style={{ fontSize: 13, color: 'var(--text-3)', lineHeight: 1.7, marginBottom: 16, maxWidth: 680 }}>
            La capa semántica está diseñada para soportar múltiples temas sin cambiar los tokens que consumen los componentes.
            Cuando dark mode sea una necesidad, solo habrá que redefinir los valores semánticos — los primitivos y los componentes no cambian.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
            <div style={{ background: '#ffffff', border: '1px solid #dfdfdf', borderRadius: 12, padding: 16 }}>
              <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-3)', marginBottom: 8 }}>Light mode (hoy)</div>
              {[
                { token: 'color.text.default', val: 'grey/950 → #272626' },
                { token: 'color.background.canvas', val: 'grey/background → #f4f6f8' },
                { token: 'color.background.surface', val: 'grey/white → #ffffff' },
                { token: 'color.border.default', val: 'grey/100 → #dfdfdf' },
              ].map(t => (
                <div key={t.token} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <code style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--text-2)' }}>{t.token}</code>
                  <code style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--text-3)' }}>{t.val}</code>
                </div>
              ))}
            </div>
            <div style={{ background: '#1a1f2e', border: '1px solid #2d3348', borderRadius: 12, padding: 16 }}>
              <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#64748B', marginBottom: 8 }}>Dark mode (futuro)</div>
              {[
                { token: 'color.text.default', val: 'grey/50 → #f8f8f8' },
                { token: 'color.background.canvas', val: 'grey/925 → #1a1f2e (nuevo)' },
                { token: 'color.background.surface', val: 'grey/900 → #3b3b3b' },
                { token: 'color.border.default', val: 'grey/800 → #504f4f' },
              ].map(t => (
                <div key={t.token} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <code style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: '#94A3B8' }}>{t.token}</code>
                  <code style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: '#64748B' }}>{t.val}</code>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
            {[
              { step: '1. Hoy', desc: 'Publicar capa semántica en Figma como variables. Publicar color/blue/600 faltante. Deprecar los 20 tokens legacy.', color: '#16A34A', bg: '#F0FDF4' },
              { step: '2. Próximo sprint', desc: 'Conectar tokens semánticos con todos los componentes existentes (Button, Input, Switch, Tag, FlightCard). Reemplazar valores hardcodeados.', color: 'var(--brand)', bg: 'var(--brand-light)' },
              { step: '3. Futuro', desc: 'Cuando dark mode sea requerido: crear colección de variables "Dark" en Figma que redefine los mismos tokens semánticos con valores primitivos oscuros.', color: 'var(--text-3)', bg: 'var(--surface-2)' },
            ].map(s => (
              <div key={s.step} style={{ background: s.bg, border: `1px solid ${s.color === '#16A34A' ? '#BBF7D0' : s.color === 'var(--brand)' ? 'var(--brand-border)' : 'var(--border)'}`, borderRadius: 'var(--radius-lg)', padding: 16 }}>
                <div style={{ fontWeight: 700, fontSize: 12, color: s.color, marginBottom: 6 }}>{s.step}</div>
                <div style={{ fontSize: 12, color: 'var(--text-3)', lineHeight: 1.6 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
