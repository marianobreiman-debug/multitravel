// ─── Country landing page data ────────────────────────────────────────────────

export interface CountryDestCard {
  name:            string;
  destinationSlug: string;
  image:           string;
  fromPrice:       string;
  currency:        string;
  flightsCount:    number;
  tags:            string[];
  hasDetailPage:   boolean;
}

export interface Country {
  slug:         string;
  name:         string;
  flag:         string;
  heroImage:    string;
  intro:        string;
  destinations: CountryDestCard[];
}

const COUNTRIES: Country[] = [
  // ── Brasil ────────────────────────────────────────────────────────────────
  {
    slug:      'brasil',
    name:      'Brasil',
    flag:      '🇧🇷',
    heroImage: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1400&q=80',
    intro:     'El país del carnaval, la samba y las playas interminables. Brasil tiene destinos para todos: desde el glamour de Río hasta las dunas de Búzios, la modernidad de São Paulo, el misticismo de Salvador y las cataratas de Foz do Iguaçú.',
    destinations: [
      {
        name:            'Río de Janeiro',
        destinationSlug: 'rio-de-janeiro',
        image:           'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=600&q=80',
        fromPrice:       '$ 112.000',
        currency:        'ARS',
        flightsCount:    6,
        tags:            ['Playa', 'Cultura', 'Gastronomía'],
        hasDetailPage:   true,
      },
      {
        name:            'Búzios',
        destinationSlug: 'buzios',
        image:           'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=80',
        fromPrice:       '$ 98.000',
        currency:        'ARS',
        flightsCount:    4,
        tags:            ['Playa', 'Relax', 'Naturaleza'],
        hasDetailPage:   false,
      },
      {
        name:            'São Paulo',
        destinationSlug: 'sao-paulo',
        image:           'https://images.unsplash.com/photo-1578002171197-b8faeb67e4ef?auto=format&fit=crop&w=600&q=80',
        fromPrice:       '$ 89.000',
        currency:        'ARS',
        flightsCount:    8,
        tags:            ['Ciudad', 'Gastronomía', 'Negocios'],
        hasDetailPage:   false,
      },
      {
        name:            'Salvador de Bahía',
        destinationSlug: 'salvador',
        image:           'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=600&q=80',
        fromPrice:       '$ 125.000',
        currency:        'ARS',
        flightsCount:    3,
        tags:            ['Cultura', 'Historia', 'Playa'],
        hasDetailPage:   false,
      },
      {
        name:            'Florianópolis',
        destinationSlug: 'florianopolis',
        image:           'https://images.unsplash.com/photo-1598977123118-4e30ba233de6?auto=format&fit=crop&w=600&q=80',
        fromPrice:       '$ 95.000',
        currency:        'ARS',
        flightsCount:    5,
        tags:            ['Playa', 'Surf', 'Naturaleza'],
        hasDetailPage:   false,
      },
      {
        name:            'Foz do Iguaçú',
        destinationSlug: 'foz-do-iguacu',
        image:           'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80',
        fromPrice:       '$ 105.000',
        currency:        'ARS',
        flightsCount:    4,
        tags:            ['Naturaleza', 'Cataratas', 'Aventura'],
        hasDetailPage:   false,
      },
    ],
  },

  // ── Argentina ─────────────────────────────────────────────────────────────
  {
    slug:      'argentina',
    name:      'Argentina',
    flag:      '🇦🇷',
    heroImage: 'https://images.unsplash.com/photo-1612294037637-ec328d0e075e?auto=format&fit=crop&w=1400&q=80',
    intro:     'De la energía porteña de Buenos Aires a los glaciares patagónicos, Argentina es un país que lo tiene todo. Cultura, gastronomía, naturaleza imponente y paisajes únicos en cada destino.',
    destinations: [
      {
        name:            'Buenos Aires',
        destinationSlug: 'buenos-aires',
        image:           'https://images.unsplash.com/photo-1612294037637-ec328d0e075e?auto=format&fit=crop&w=600&q=80',
        fromPrice:       '$ 79.000',
        currency:        'ARS',
        flightsCount:    6,
        tags:            ['Ciudad', 'Tango', 'Gastronomía'],
        hasDetailPage:   true,
      },
      {
        name:            'Bariloche',
        destinationSlug: 'bariloche',
        image:           'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=600&q=80',
        fromPrice:       '$ 185.000',
        currency:        'ARS',
        flightsCount:    6,
        tags:            ['Ski', 'Montaña', 'Naturaleza'],
        hasDetailPage:   true,
      },
      {
        name:            'Mendoza',
        destinationSlug: 'mendoza',
        image:           'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
        fromPrice:       '$ 72.000',
        currency:        'ARS',
        flightsCount:    5,
        tags:            ['Vinos', 'Montaña', 'Enoturismo'],
        hasDetailPage:   false,
      },
      {
        name:            'Salta',
        destinationSlug: 'salta',
        image:           'https://images.unsplash.com/photo-1553522991-90ede4e3e5c3?auto=format&fit=crop&w=600&q=80',
        fromPrice:       '$ 65.000',
        currency:        'ARS',
        flightsCount:    4,
        tags:            ['Historia', 'Naturaleza', 'Cultura'],
        hasDetailPage:   false,
      },
    ],
  },

  // ── México ────────────────────────────────────────────────────────────────
  {
    slug:      'mexico',
    name:      'México',
    flag:      '🇲🇽',
    heroImage: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=1400&q=80',
    intro:     'Playas turquesa, pirámides mayas, gastronomía Patrimonio de la Humanidad y una cultura vibrante. México tiene el Caribe más hermoso y ciudades llenas de historia que no se parecen a ninguna otra en el mundo.',
    destinations: [
      {
        name:            'Cancún',
        destinationSlug: 'cancun',
        image:           'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=600&q=80',
        fromPrice:       '$ 158.000',
        currency:        'ARS',
        flightsCount:    6,
        tags:            ['Playa', 'Caribe', 'Todo Incluido'],
        hasDetailPage:   true,
      },
      {
        name:            'Ciudad de México',
        destinationSlug: 'ciudad-de-mexico',
        image:           'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&w=600&q=80',
        fromPrice:       '$ 142.000',
        currency:        'ARS',
        flightsCount:    4,
        tags:            ['Ciudad', 'Historia', 'Gastronomía'],
        hasDetailPage:   false,
      },
      {
        name:            'Los Cabos',
        destinationSlug: 'los-cabos',
        image:           'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
        fromPrice:       '$ 185.000',
        currency:        'ARS',
        flightsCount:    3,
        tags:            ['Playa', 'Lujo', 'Pesca'],
        hasDetailPage:   false,
      },
    ],
  },

  // ── EE.UU. ────────────────────────────────────────────────────────────────
  {
    slug:      'eeuu',
    name:      'EE.UU.',
    flag:      '🇺🇸',
    heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&q=80',
    intro:     'La tierra de las oportunidades también es uno de los mejores destinos turísticos del planeta. Miami, Nueva York, Orlando y Las Vegas ofrecen experiencias únicas e irrepetibles para cada tipo de viajero.',
    destinations: [
      {
        name:            'Miami',
        destinationSlug: 'miami',
        image:           'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80',
        fromPrice:       '$ 248.000',
        currency:        'ARS',
        flightsCount:    6,
        tags:            ['Playa', 'Shopping', 'Nightlife'],
        hasDetailPage:   true,
      },
      {
        name:            'Nueva York',
        destinationSlug: 'nueva-york',
        image:           'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=600&q=80',
        fromPrice:       '$ 310.000',
        currency:        'ARS',
        flightsCount:    5,
        tags:            ['Ciudad', 'Cultura', 'Shopping'],
        hasDetailPage:   false,
      },
      {
        name:            'Orlando',
        destinationSlug: 'orlando',
        image:           'https://images.unsplash.com/photo-1575089776834-8be34696ffb9?auto=format&fit=crop&w=600&q=80',
        fromPrice:       '$ 265.000',
        currency:        'ARS',
        flightsCount:    4,
        tags:            ['Parques temáticos', 'Familia', 'Disney'],
        hasDetailPage:   false,
      },
    ],
  },

  // ── Francia ───────────────────────────────────────────────────────────────
  {
    slug:      'francia',
    name:      'Francia',
    flag:      '🇫🇷',
    heroImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=80',
    intro:     'La elegancia francesa se vive en cada rincón: desde la Torre Eiffel y los museos de París hasta los viñedos de Burdeos, los lavandales de Provenza y la Riviera francesa. Francia es el país más visitado del mundo por algo.',
    destinations: [
      {
        name:            'París',
        destinationSlug: 'paris',
        image:           'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80',
        fromPrice:       '$ 355.000',
        currency:        'ARS',
        flightsCount:    6,
        tags:            ['Cultura', 'Gastronomía', 'Moda'],
        hasDetailPage:   true,
      },
      {
        name:            'Niza',
        destinationSlug: 'niza',
        image:           'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80',
        fromPrice:       '$ 380.000',
        currency:        'ARS',
        flightsCount:    3,
        tags:            ['Playa', 'Riviera', 'Lujo'],
        hasDetailPage:   false,
      },
    ],
  },
];

export function getCountry(slug: string): Country | undefined {
  return COUNTRIES.find((c) => c.slug === slug);
}

export { COUNTRIES };
