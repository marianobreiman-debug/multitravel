// ─── Hotel country landing page data ──────────────────────────────────────────

export interface HotelCity {
  name:        string;
  citySlug:    string;
  image:       string;
  hotelCount:  number;
  fromPrice:   string;
  currency:    string;
  tags:        string[];
  hasDetailPage: boolean;
}

export interface HotelCountry {
  slug:        string;
  name:        string;
  flag:        string;
  heroImage:   string;
  intro:       string;
  cities:      HotelCity[];
}

const HOTEL_COUNTRIES: HotelCountry[] = [
  {
    slug:      'brasil',
    name:      'Brasil',
    flag:      '🇧🇷',
    heroImage: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1400&q=80',
    intro:     'Brasil es uno de los destinos más vibrantes y diversos de Sudamérica. Desde hoteles boutique en las orillas de Copacabana hasta resorts de selva en el Amazonas, encontrás alojamientos para cada estilo de viaje.',
    cities: [
      { name: 'Río de Janeiro', citySlug: 'rio-de-janeiro', image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=600&q=80', hotelCount: 284, fromPrice: 'USD 65', currency: 'por noche', tags: ['Playa', 'Copacabana', 'Ipanema'], hasDetailPage: true },
      { name: 'São Paulo',      citySlug: 'sao-paulo',      image: 'https://images.unsplash.com/photo-1578002171197-b8faeb67e4ef?auto=format&fit=crop&w=600&q=80', hotelCount: 512, fromPrice: 'USD 55', currency: 'por noche', tags: ['Negocios', 'Gastronomía', 'Ciudad'], hasDetailPage: false },
      { name: 'Búzios',         citySlug: 'buzios',         image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=80', hotelCount: 78,  fromPrice: 'USD 80', currency: 'por noche', tags: ['Playa', 'Relax', 'Boutique'], hasDetailPage: false },
      { name: 'Salvador',       citySlug: 'salvador',       image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=600&q=80', hotelCount: 142, fromPrice: 'USD 48', currency: 'por noche', tags: ['Historia', 'Cultura', 'Playa'], hasDetailPage: false },
      { name: 'Florianópolis',  citySlug: 'florianopolis',  image: 'https://images.unsplash.com/photo-1598977123118-4e30ba233de6?auto=format&fit=crop&w=600&q=80', hotelCount: 96,  fromPrice: 'USD 60', currency: 'por noche', tags: ['Playa', 'Surf', 'Naturaleza'], hasDetailPage: false },
      { name: 'Foz do Iguaçú',  citySlug: 'foz-do-iguacu',  image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80', hotelCount: 54,  fromPrice: 'USD 42', currency: 'por noche', tags: ['Naturaleza', 'Cataratas', 'Aventura'], hasDetailPage: false },
    ],
  },
  {
    slug:      'argentina',
    name:      'Argentina',
    flag:      '🇦🇷',
    heroImage: 'https://images.unsplash.com/photo-1612294037637-ec328d0e075e?auto=format&fit=crop&w=1400&q=80',
    intro:     'Desde los hoteles de diseño en Palermo Soho hasta los lodges patagónicos con vistas a los glaciares, Argentina ofrece una experiencia de alojamiento única en Latinoamérica.',
    cities: [
      { name: 'Buenos Aires', citySlug: 'buenos-aires', image: 'https://images.unsplash.com/photo-1612294037637-ec328d0e075e?auto=format&fit=crop&w=600&q=80', hotelCount: 620, fromPrice: 'USD 40', currency: 'por noche', tags: ['Ciudad', 'Design Hotels', 'Tango'], hasDetailPage: true },
      { name: 'Bariloche',    citySlug: 'bariloche',    image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=600&q=80', hotelCount: 148, fromPrice: 'USD 75', currency: 'por noche', tags: ['Montaña', 'Lodge', 'Ski'], hasDetailPage: false },
      { name: 'Mendoza',      citySlug: 'mendoza',      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80', hotelCount: 88,  fromPrice: 'USD 55', currency: 'por noche', tags: ['Bodegas', 'Spa', 'Vinos'], hasDetailPage: false },
      { name: 'Salta',        citySlug: 'salta',        image: 'https://images.unsplash.com/photo-1553522991-90ede4e3e5c3?auto=format&fit=crop&w=600&q=80', hotelCount: 64,  fromPrice: 'USD 38', currency: 'por noche', tags: ['Historia', 'Naturaleza', 'Colonial'], hasDetailPage: false },
    ],
  },
  {
    slug:      'mexico',
    name:      'México',
    flag:      '🇲🇽',
    heroImage: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=1400&q=80',
    intro:     'Resorts all-inclusive en el Caribe, hoteles boutique en Tulum o hoteles de lujo en Ciudad de México — México tiene el alojamiento perfecto para cada tipo de viajero.',
    cities: [
      { name: 'Cancún',          citySlug: 'cancun',          image: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=600&q=80', hotelCount: 318, fromPrice: 'USD 90',  currency: 'por noche', tags: ['All Inclusive', 'Playa', 'Caribe'], hasDetailPage: true },
      { name: 'Ciudad de México', citySlug: 'ciudad-de-mexico', image: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&w=600&q=80', hotelCount: 445, fromPrice: 'USD 60',  currency: 'por noche', tags: ['Ciudad', 'Historia', 'Negocios'], hasDetailPage: false },
      { name: 'Tulum',           citySlug: 'tulum',           image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=600&q=80', hotelCount: 120, fromPrice: 'USD 110', currency: 'por noche', tags: ['Boutique', 'Eco', 'Bienestar'], hasDetailPage: false },
    ],
  },
  {
    slug:      'eeuu',
    name:      'EE.UU.',
    flag:      '🇺🇸',
    heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&q=80',
    intro:     'De los hoteles icónicos de Manhattan a los resorts de Miami Beach, EE.UU. tiene opciones de alojamiento para todos los presupuestos y estilos.',
    cities: [
      { name: 'Miami',      citySlug: 'miami',      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80', hotelCount: 380, fromPrice: 'USD 120', currency: 'por noche', tags: ['Playa', 'Nightlife', 'Lujo'], hasDetailPage: true },
      { name: 'Nueva York', citySlug: 'nueva-york', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=600&q=80', hotelCount: 820, fromPrice: 'USD 140', currency: 'por noche', tags: ['Ciudad', 'Icónicos', 'Manhattan'], hasDetailPage: false },
      { name: 'Orlando',    citySlug: 'orlando',    image: 'https://images.unsplash.com/photo-1575089776834-8be34696ffb9?auto=format&fit=crop&w=600&q=80', hotelCount: 210, fromPrice: 'USD 80',  currency: 'por noche', tags: ['Parques', 'Familia', 'Resort'], hasDetailPage: false },
    ],
  },
  {
    slug:      'francia',
    name:      'Francia',
    flag:      '🇫🇷',
    heroImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=80',
    intro:     'Hoteles históricos en los Champs-Élysées, villas en la Provenza o chateaux en Burdeos — Francia eleva el arte del alojamiento a una experiencia cultural en sí misma.',
    cities: [
      { name: 'París', citySlug: 'paris', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80', hotelCount: 1240, fromPrice: 'USD 130', currency: 'por noche', tags: ['Lujo', 'Historia', 'Romance'], hasDetailPage: true },
      { name: 'Niza',  citySlug: 'niza',  image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80', hotelCount: 180,  fromPrice: 'USD 110', currency: 'por noche', tags: ['Riviera', 'Playa', 'Lujo'], hasDetailPage: false },
    ],
  },
];

export function getHotelCountry(slug: string): HotelCountry | undefined {
  return HOTEL_COUNTRIES.find((c) => c.slug === slug);
}

export function getHotelCity(countrySlug: string, citySlug: string): HotelCity | undefined {
  const country = getHotelCountry(countrySlug);
  return country?.cities.find((c) => c.citySlug === citySlug);
}

export { HOTEL_COUNTRIES };
