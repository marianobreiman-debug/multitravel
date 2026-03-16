/**
 * Color tokens — escala completa extraída de Figma Variables "Lorien"
 * Nodo: https://www.figma.com/design/awAiQ74drBGZImHlXtIdPN/Lorien?node-id=5915-54298
 */

export const colors = {

  // ─── Primary Blue ──────────────────────────────────────────────
  blue: {
    50:    '#f5faff', // Primary/Blue/50 Light
    100:   '#eaf3ff', // Primary/Blue/100 Light
    200:   '#dfeeff', // Primary/Blue/200 Light
    250:   '#bddbff', // Primary/Blue/250 Light
    300:   '#71b6f2', // Primary/Blue/300 Pastel Usafa
    400:   '#2a8bfe', // Primary/Blue/400 Normal
    500:   '#267de5', // Primary/Blue/500 Normal
    600:   '#226fcb', // Primary/Blue/600 Normal
    800:   '#0d4e88', // Primary/Blue/800 Usafa  ← token principal
    900:   '#00325d', // Primary/Blue/900 Dark Usafa
    915:   '#082f52', // Primary/Blue/915 Dark
    925:   '#06233d', // Primary/Blue/925 Dark
    950:   '#051b30', // Primary/Blue/950 Dark
  },

  // ─── Primary Red ───────────────────────────────────────────────
  red: {
    50:    '#fff0f1', // Primary/Red/50
    100:   '#fde6eb', // Primary/Red/100 Light
    200:   '#fddae1', // Primary/Red/200 Light
    300:   '#fab2c2', // Primary/Red/300 Light
    400:   '#ff5c7f', // Primary/Red/400 Pastel Crimson
    500:   '#ff2c4e', // Primary/Red/500
    600:   '#ef0539', // Primary/Red/600 Normal  ← token principal
    700:   '#df0032', // Primary/Red/700 Crimson
    725:   '#bf042e', // Primary/Red/725 Normal
    800:   '#8f0322', // Primary/Red/800 Dark
    900:   '#85001d', // Primary/Red/900 Dark Crimson
    925:   '#6c021a', // Primary/Red/925 Dark
    950:   '#540214', // Primary/Red/950 Dark
  },

  // ─── Success ───────────────────────────────────────────────────
  success: {
    50:    '#f3fcf3', // Success/50 Light
    100:   '#defade', // Success/100
    200:   '#c0f3bf', // Success/200
    300:   '#8fe78e', // Success/300
    400:   '#55d355', // Success/400
    500:   '#2eb92e', // Success/500
    600:   '#23a423', // Success/600 Normal  ← token principal
    700:   '#1d781d', // Success/700
    800:   '#1c5f1c', // Success/800
    900:   '#305030', // Success/900 Dark
    950:   '#082b0a', // Success/950
  },

  // ─── Informative ───────────────────────────────────────────────
  informative: {
    50:    '#eaf4fc', // Informative/50 Light
    100:   '#daf3ff', // Informative/100
    200:   '#bdebff', // Informative/200
    300:   '#8fe0ff', // Informative/300
    400:   '#5accff', // Informative/400
    500:   '#34b1fd', // Informative/500
    600:   '#2196f3', // Informative/600 Normal
    700:   '#167bdf', // Informative/700
    800:   '#1863b5', // Informative/800
    900:   '#1a548e', // Informative/900
    950:   '#064559', // Informative/950 Dark
  },

  // ─── Warning ───────────────────────────────────────────────────
  warning: {
    50:    '#fff8ed', // Warning/50 Light
    100:   '#fff2d4', // Warning/100
    200:   '#ffe2a8', // Warning/200
    300:   '#ffcc70', // Warning/300
    400:   '#ffaa37', // Warning/400
    500:   '#ff941a', // Warning/500 Normal
    600:   '#f07306', // Warning/600
    700:   '#c75707', // Warning/700
    800:   '#9e440e', // Warning/800
    900:   '#59401b', // Warning/900 Dark
    950:   '#451b05', // Warning/950
  },

  // ─── Destructive ───────────────────────────────────────────────
  destructive: {
    50:    '#feeceb', // Destructive/50 Light
    100:   '#ffe3e1', // Destructive/100
    200:   '#ffccc8', // Destructive/200
    300:   '#ffa8a2', // Destructive/300
    400:   '#fc776d', // Destructive/400
    500:   '#f44336', // Destructive/500 Normal
    600:   '#e22d20', // Destructive/600
    700:   '#be2217', // Destructive/700
    800:   '#9d2017', // Destructive/800
    900:   '#82211a', // Destructive/900
    950:   '#551713', // Destructive/950 Dark
  },

  // ─── Greyscale ─────────────────────────────────────────────────
  grey: {
    white:    '#ffffff', // Greyscale/Grey/White
    grey:     '#fcfcfc', // Greyscale/Grey/Grey
    greyBlue: '#f4f6f8', // Greyscale/Grey/GreyBlue
    50:       '#f8f8f8', // Greyscale/Grey/50
    75:       '#f5f5f5', // Greyscale/Grey/75
    100:      '#dfdfdf', // Greyscale/Grey/100
    200:      '#cacaca', // Greyscale/Grey/200
    300:      '#b6b6b6', // Greyscale/Grey/300
    400:      '#a1a1a1', // Greyscale/Grey/400
    500:      '#8d8d8d', // Greyscale/Grey/500
    600:      '#797878', // Greyscale/Grey/600
    700:      '#646464', // Greyscale/Grey/700
    800:      '#504f4f', // Greyscale/Grey/800
    900:      '#3b3b3b', // Greyscale/Grey/900
    950:      '#272626', // Greyscale/Grey/950 Black
  },

  // ─── Grey Special ──────────────────────────────────────────────
  greySpecial: {
    grey01: '#f1f3f6', // Greyscale/Special Grey/Grey 01
  },

  // ─── Gradients ─────────────────────────────────────────────────
  gradient: {
    blue01:  'linear-gradient(90deg, #0d4e88 0%, #2a8bfe 100%)',
    blue02:  'linear-gradient(90deg, #051b30 0%, #0d4e88 100%)',
    red01:   'linear-gradient(90deg, #ef0539 0%, #ff5c7f 100%)',
    grey01:  'linear-gradient(90deg, #cacaca 0%, #f5f5f5 100%)',
    duo01:   'linear-gradient(90deg, #226fcb 0%, #ef0539 100%)',
  },

} as const;

export type Colors = typeof colors;
