/**
 * Typography tokens — extraídos de Figma "Lorien"
 * Dos familias: Nunito (MULTIKIT / Mobile tokens) + Outfit (cards / listados)
 */

export const fontFamilies = {
  nunito: '"Nunito", sans-serif',
  outfit: '"Outfit", sans-serif',
} as const;

export const fontWeights = {
  regular:  400,
  medium:   500,
  semibold: 600,
  bold:     700,
} as const;

export const fontSizes = {
  xs:   '12px', // fontSize-12
  sm:   '14px', // fontSize-14
  md:   '16px', // fontSize-16
  lg:   '18px', // fontSize-18
  xl:   '20px', // fontSize-20
  '2xl': '24px', // fontSize-24
} as const;

export const lineHeights = {
  tight:   '16px',
  snug:    '18px',
  normal:  '20px',
  relaxed: '26px',
  loose:   '30px',
} as const;

/** Escala tipográfica completa (Nunito — MULTIKIT / Mobile) */
export const textStyles = {
  // ── Mobile Headers (Nunito) ───────────────────────────────────────
  h1: {
    fontFamily:    fontFamilies.nunito,
    fontSize:      fontSizes['2xl'],    // 24px
    fontWeight:    fontWeights.bold,
    lineHeight:    lineHeights.loose,   // 30px
    letterSpacing: '-0.24px',
  },
  subtitle2: {
    fontFamily:    fontFamilies.nunito,
    fontSize:      fontSizes.xl,        // 20px
    fontWeight:    fontWeights.semibold,
    lineHeight:    lineHeights.relaxed, // 26px
    letterSpacing: '-0.20px',
  },

  // ── Controls / Buttons (Nunito) ───────────────────────────────────
  buttonLg: {
    fontFamily:    fontFamilies.nunito,
    fontSize:      fontSizes.lg,        // 18px — Mobile/Controls/Primary button
    fontWeight:    fontWeights.bold,
    lineHeight:    lineHeights.snug,    // 18px
    letterSpacing: '-0.18px',
  },
  buttonMd: {
    fontFamily:    fontFamilies.nunito,
    fontSize:      fontSizes.md,        // 16px — MULTIKIT/Label/Large/Bold
    fontWeight:    fontWeights.bold,
    lineHeight:    lineHeights.snug,
    letterSpacing: '0',
  },
  buttonSm: {
    fontFamily:    fontFamilies.nunito,
    fontSize:      fontSizes.sm,        // 14px — MULTIKIT/Label/Medium/Bold
    fontWeight:    fontWeights.bold,
    lineHeight:    lineHeights.snug,
    letterSpacing: '0',
  },

  // ── Labels / Paragraphs (Nunito) ──────────────────────────────────
  labelSmMedium: {
    fontFamily:  fontFamilies.nunito,
    fontSize:    fontSizes.xs,          // 12px — MULTIKIT/Label/Small/Medium
    fontWeight:  fontWeights.medium,
    lineHeight:  lineHeights.tight,
    letterSpacing: '0',
  },
  paragraphSmSemiBold: {
    fontFamily:  fontFamilies.nunito,
    fontSize:    fontSizes.sm,          // 14px — MULTIKIT/Paragraph/Small/SemiBold
    fontWeight:  fontWeights.semibold,
    lineHeight:  lineHeights.normal,
    letterSpacing: '0',
  },
  legal: {
    fontFamily:    fontFamilies.nunito,
    fontSize:      fontSizes.xs,        // 12px — Mobile/Paragraph/Legal
    fontWeight:    fontWeights.regular,
    lineHeight:    lineHeights.snug,    // 18px
    letterSpacing: '-0.12px',
  },

  // ── Outfit (Flight cards / result lists) ─────────────────────────
  outfitLgSemiBold: {
    fontFamily: fontFamilies.outfit,
    fontSize:   fontSizes.md,           // 16px — Label/Large/SemiBold
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.snug,
  },
  outfitMdMedium: {
    fontFamily: fontFamilies.outfit,
    fontSize:   fontSizes.sm,           // 14px — Label/Medium/Medium
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.tight,
  },
  outfitSmSemiBold: {
    fontFamily: fontFamilies.outfit,
    fontSize:   fontSizes.xs,           // 12px — Label/Small/SemiBold
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.tight,
  },
  outfitSmMedium: {
    fontFamily: fontFamilies.outfit,
    fontSize:   fontSizes.xs,           // 12px — Label/Small/Medium
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.tight,
  },
  outfitParaSmSemiBold: {
    fontFamily: fontFamilies.outfit,
    fontSize:   fontSizes.sm,           // 14px — Paragraph/Small/SemiBold
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.normal,
  },
} as const;

export type TextStyles = typeof textStyles;
