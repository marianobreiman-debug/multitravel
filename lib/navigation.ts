/**
 * Lorien Design System — Navegación principal
 * Estructura jerárquica: sección → categoría → ítem
 */

export type NavStatus = 'stable' | 'beta' | 'draft' | 'deprecated';

export interface NavItem {
  label: string;
  href: string;
  status?: NavStatus;
  children?: NavItem[];
  icon?: string;
  isNew?: boolean;
}

export interface NavSection {
  id: string;
  label: string;
  icon: string;
  href: string;
  items?: NavItem[];
}

export const navigation: NavSection[] = [
  {
    id: 'brand',
    label: 'Brand',
    icon: '◈',
    href: '/brand',
    items: [
      { label: 'Logo', href: '/brand/logo', status: 'draft' },
      { label: 'Colores de Marca', href: '/brand/colors', status: 'draft' },
      { label: 'Tipografía de Marca', href: '/brand/typography', status: 'draft' },
      { label: 'Voz y Tono', href: '/brand/voice', status: 'draft' },
      { label: 'Composición', href: '/brand/composition', status: 'draft' },
    ],
  },
  {
    id: 'foundations',
    label: 'Foundations',
    icon: '◉',
    href: '/foundations',
    items: [
      { label: 'Colors', href: '/foundations/colors', status: 'stable' },
      { label: 'Typography', href: '/foundations/typography', status: 'stable' },
      { label: 'Spacing', href: '/foundations/spacing', status: 'stable' },
      { label: 'Radius', href: '/foundations/radius', status: 'stable' },
      { label: 'Shadows', href: '/foundations/shadows', status: 'stable' },
      { label: 'Borders', href: '/foundations/borders', status: 'draft' },
      { label: 'Grid & Layout', href: '/foundations/grid', status: 'draft' },
      { label: 'Breakpoints', href: '/foundations/breakpoints', status: 'draft' },
      { label: 'Iconography', href: '/foundations/iconography', status: 'draft' },
      { label: 'Motion', href: '/foundations/motion', status: 'draft' },
    ],
  },
  {
    id: 'components',
    label: 'Components',
    icon: '▣',
    href: '/components',
    items: [
      {
        label: 'Actions',
        href: '/components/actions',
        children: [
          { label: 'Button', href: '/components/actions/button', status: 'stable' },
          { label: 'Link', href: '/components/actions/link', status: 'draft' },
          { label: 'Icon Button', href: '/components/actions/icon-button', status: 'draft' },
        ],
      },
      {
        label: 'Forms',
        href: '/components/forms',
        children: [
          { label: 'Input', href: '/components/forms/input', status: 'stable' },
          { label: 'Select', href: '/components/forms/select', status: 'draft' },
          { label: 'Checkbox', href: '/components/forms/checkbox', status: 'draft' },
          { label: 'Radio', href: '/components/forms/radio', status: 'draft' },
          { label: 'Switch', href: '/components/forms/switch', status: 'stable' },
          { label: 'Date Picker', href: '/components/forms/date-picker', status: 'draft' },
        ],
      },
      {
        label: 'Navigation',
        href: '/components/navigation',
        children: [
          { label: 'Tabs', href: '/components/navigation/tabs', status: 'draft' },
          { label: 'Breadcrumb', href: '/components/navigation/breadcrumb', status: 'draft' },
          { label: 'Pagination', href: '/components/navigation/pagination', status: 'draft' },
          { label: 'Stepper', href: '/components/navigation/stepper', status: 'draft' },
        ],
      },
      {
        label: 'Feedback',
        href: '/components/feedback',
        children: [
          { label: 'Alert', href: '/components/feedback/alert', status: 'draft' },
          { label: 'Toast', href: '/components/feedback/toast', status: 'draft' },
          { label: 'Skeleton', href: '/components/feedback/skeleton', status: 'draft' },
          { label: 'Progress', href: '/components/feedback/progress', status: 'draft' },
          { label: 'Spinner', href: '/components/feedback/spinner', status: 'draft' },
        ],
      },
      {
        label: 'Data Display',
        href: '/components/data-display',
        children: [
          { label: 'Tag', href: '/components/data-display/tag', status: 'stable' },
          { label: 'Badge', href: '/components/data-display/badge', status: 'draft' },
          { label: 'Card', href: '/components/data-display/card', status: 'draft' },
          { label: 'Flight Card', href: '/components/data-display/flight-card', status: 'stable' },
          { label: 'Avatar', href: '/components/data-display/avatar', status: 'draft' },
          { label: 'Accordion', href: '/components/data-display/accordion', status: 'draft' },
        ],
      },
      {
        label: 'Overlays',
        href: '/components/overlays',
        children: [
          { label: 'Modal', href: '/components/overlays/modal', status: 'draft' },
          { label: 'Drawer', href: '/components/overlays/drawer', status: 'draft' },
          { label: 'Tooltip', href: '/components/overlays/tooltip', status: 'draft' },
          { label: 'Popover', href: '/components/overlays/popover', status: 'draft' },
          { label: 'Dropdown', href: '/components/overlays/dropdown', status: 'draft' },
        ],
      },
      {
        label: 'Layout',
        href: '/components/layout',
        children: [
          { label: 'Container', href: '/components/layout/container', status: 'draft' },
          { label: 'Divider', href: '/components/layout/divider', status: 'draft' },
          { label: 'Stack', href: '/components/layout/stack', status: 'draft' },
          { label: 'Grid', href: '/components/layout/grid', status: 'draft' },
        ],
      },
    ],
  },
  {
    id: 'patterns',
    label: 'Patterns',
    icon: '◫',
    href: '/patterns',
    items: [
      { label: 'Header', href: '/patterns/header', status: 'draft' },
      { label: 'Search Box', href: '/patterns/search', status: 'draft' },
      { label: 'Result Cards', href: '/patterns/result-cards', status: 'draft' },
      { label: 'Filters', href: '/patterns/filters', status: 'draft' },
      { label: 'Forms', href: '/patterns/forms', status: 'draft' },
      { label: 'Checkout', href: '/patterns/checkout', status: 'draft' },
      { label: 'Banners', href: '/patterns/banners', status: 'draft' },
      { label: 'Empty States', href: '/patterns/empty-states', status: 'draft' },
      { label: 'Modals & Drawers', href: '/patterns/modals', status: 'draft' },
      { label: 'Tables & Lists', href: '/patterns/tables', status: 'draft' },
    ],
  },
  {
    id: 'templates',
    label: 'Templates',
    icon: '▤',
    href: '/templates',
    items: [
      { label: 'Home Vertical', href: '/templates/home', status: 'draft' },
      { label: 'Landing de Contenido', href: '/templates/landing', status: 'draft' },
      { label: 'Resultados', href: '/templates/results', status: 'draft' },
      { label: 'Detalle de Producto', href: '/templates/product-detail', status: 'draft' },
      { label: 'Checkout', href: '/templates/checkout', status: 'draft' },
      { label: 'Thank You Page', href: '/templates/thank-you', status: 'draft' },
      { label: 'Mi Cuenta', href: '/templates/account', status: 'draft' },
    ],
  },
  {
    id: 'resources',
    label: 'Resources',
    icon: '⊡',
    href: '/resources',
    items: [
      { label: 'Nomenclaturas', href: '/resources/nomenclature', status: 'draft' },
      { label: 'Tokens & Variables', href: '/resources/tokens', status: 'stable' },
      { label: 'Snippets', href: '/resources/snippets', status: 'draft' },
      { label: 'Links & Herramientas', href: '/resources/links', status: 'draft' },
    ],
  },
  {
    id: 'changelog',
    label: 'Changelog',
    icon: '◷',
    href: '/changelog',
  },
];

/** Estadísticas del sistema para mostrar en la home y sidebar */
export const systemStats = {
  version: '0.1.0',
  totalComponents: 5,
  stableComponents: 5,
  betaComponents: 0,
  draftComponents: 0,
  lastUpdated: 'Marzo 2025',
};
