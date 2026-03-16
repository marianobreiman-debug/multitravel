// ─── Destination data for flight results pages ────────────────────────────────

export interface FlightDateOffer {
  id:          number;
  departure:   string;
  return:      string;
  duration:    string;
  airline:     string;
  airlineLogo: string;
  stops:       string;
  stopDetail?: string;
  duration_h:  string;
  price:       string;
  priceLabel:  string;
  badge?:      string;
}

export interface DestinationContent {
  title:      string;
  intro:      string;
  bestTime:   string;
  currency:   string;
  language:   string;
  tip:        string;
  highlights: { icon: string; label: string; desc: string }[];
}

export interface Destination {
  /** e.g. 'brasil' */
  countrySlug:      string;
  /** e.g. 'rio-de-janeiro' */
  destinationSlug:  string;
  destination:      string;
  country:          string;
  heroImage:        string;
  pageTitle:        string;
  /** 4-level: ["Home","Vuelos","Vuelos a Brasil","Vuelos a Brasil - Río de Janeiro"] */
  breadcrumb:       string[];
  flightOffers:     FlightDateOffer[];
  content:          DestinationContent;
}

const DESTINATIONS: Destination[] = [
  // ── Buenos Aires ──────────────────────────────────────────────────────────
  {
    countrySlug:     'argentina',
    destinationSlug: 'buenos-aires',
    destination:     'Buenos Aires',
    country:         'Argentina',
    heroImage:       'https://images.unsplash.com/photo-1612294037637-ec328d0e075e?auto=format&fit=crop&w=1400&q=80',
    pageTitle:       'Vuelos a Buenos Aires',
    breadcrumb:      ['Home', 'Vuelos', 'Vuelos a Argentina', 'Vuelos a Argentina - Buenos Aires'],
    content: {
      title:    'Buenos Aires, Argentina',
      intro:    'La capital argentina combina la energía europea de sus boulevards y teatros con el alma apasionada del tango y la carne asada. Explorá barrios únicos como Palermo, San Telmo y La Boca, y descubrí una ciudad que nunca duerme.',
      bestTime: 'Mar – May / Sep – Nov',
      currency: 'Peso argentino (ARS)',
      language: 'Español',
      tip:      'Reservá con anticipación en temporada alta (verano y fiestas patrias)',
      highlights: [
        { icon: '🎭', label: 'Tango & Teatro Colón',  desc: 'Capital mundial del tango y sede de uno de los mejores teatros líricos del mundo.' },
        { icon: '🍖', label: 'Gastronomía',            desc: 'Parrillas, bodegones y restaurantes de autor que hacen de BA un destino gourmet.' },
        { icon: '🏛️', label: 'Arquitectura',           desc: 'Barrios con influencia italiana, francesa y española que te harán sentir en Europa.' },
        { icon: '🛍️', label: 'Shopping',               desc: 'Desde el Paseo Alcorta hasta las ferias de San Telmo, para todos los gustos.' },
      ],
    },
    flightOffers: [
      { id: 1, departure: 'Mié, 2 Abr',  return: 'Mié, 9 Abr',   duration: '7 noches', airline: 'Aerolíneas Argentinas', airlineLogo: 'AR', stops: 'Directo',  duration_h: '2h 30m', price: '$ 120.000', priceLabel: 'por persona', badge: 'Más vendido' },
      { id: 2, departure: 'Vie, 4 Abr',  return: 'Vie, 11 Abr',  duration: '7 noches', airline: 'LATAM Airlines',        airlineLogo: 'LA', stops: 'Directo',  duration_h: '2h 45m', price: '$ 108.000', priceLabel: 'por persona', badge: 'Mejor precio' },
      { id: 3, departure: 'Lun, 7 Abr',  return: 'Lun, 14 Abr',  duration: '7 noches', airline: 'Flybondi',              airlineLogo: 'FO', stops: 'Directo',  duration_h: '2h 35m', price: '$ 89.000',  priceLabel: 'por persona' },
      { id: 4, departure: 'Sáb, 12 Abr', return: 'Sáb, 19 Abr',  duration: '7 noches', airline: 'JetSMART',              airlineLogo: 'JA', stops: 'Directo',  duration_h: '2h 50m', price: '$ 95.000',  priceLabel: 'por persona' },
      { id: 5, departure: 'Mar, 15 Abr', return: 'Mar, 22 Abr',  duration: '7 noches', airline: 'Aerolíneas Argentinas', airlineLogo: 'AR', stops: '1 escala', stopDetail: 'vía COR', duration_h: '4h 20m', price: '$ 79.000', priceLabel: 'por persona' },
      { id: 6, departure: 'Jue, 24 Abr', return: 'Jue, 1 May',   duration: '7 noches', airline: 'LATAM Airlines',        airlineLogo: 'LA', stops: 'Directo',  duration_h: '2h 40m', price: '$ 115.000', priceLabel: 'por persona' },
    ],
  },

  // ── Bariloche ─────────────────────────────────────────────────────────────
  {
    countrySlug:     'argentina',
    destinationSlug: 'bariloche',
    destination:     'S. C. de Bariloche',
    country:         'Argentina',
    heroImage:       'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1400&q=80',
    pageTitle:       'Vuelos a Bariloche',
    breadcrumb:      ['Home', 'Vuelos', 'Vuelos a Argentina', 'Vuelos a Argentina - Bariloche'],
    content: {
      title:    'San Carlos de Bariloche, Argentina',
      intro:    'La Suiza argentina esconde lagos cristalinos, picos nevados y bosques de lengas que se tiñen de naranja en otoño. Tanto en invierno para esquiar en Cerro Catedral como en verano para trekking y mountain bike, Bariloche siempre impresiona.',
      bestTime: 'Jul – Ago (ski) / Dic – Feb (verano)',
      currency: 'Peso argentino (ARS)',
      language: 'Español',
      tip:      'Reservá alojamiento con meses de anticipación en temporada de ski (julio)',
      highlights: [
        { icon: '⛷️', label: 'Cerro Catedral',    desc: 'El mayor centro de ski de América Latina, con más de 120 km de pistas.' },
        { icon: '🏔️', label: 'Trekking',           desc: 'Rutas increíbles al Frey, Tronador y la Laguna Negra con vistas únicas.' },
        { icon: '🍫', label: 'Chocolate artesanal', desc: 'La capital del chocolate argentino, con decenas de fábricas y degustaciones.' },
        { icon: '🚣', label: 'Lago Nahuel Huapi',  desc: 'Navegaciones, kayak y pesca en uno de los lagos más bellos de la Patagonia.' },
      ],
    },
    flightOffers: [
      { id: 1, departure: 'Vie, 4 Jul',   return: 'Vie, 11 Jul',  duration: '7 noches', airline: 'Aerolíneas Argentinas', airlineLogo: 'AR', stops: 'Directo',  duration_h: '2h 10m', price: '$ 250.000', priceLabel: 'por persona', badge: 'Temporada ski' },
      { id: 2, departure: 'Sáb, 5 Jul',   return: 'Sáb, 12 Jul', duration: '7 noches', airline: 'LATAM Airlines',        airlineLogo: 'LA', stops: 'Directo',  duration_h: '2h 15m', price: '$ 235.000', priceLabel: 'por persona' },
      { id: 3, departure: 'Lun, 14 Jul',  return: 'Lun, 21 Jul', duration: '7 noches', airline: 'Flybondi',              airlineLogo: 'FO', stops: 'Directo',  duration_h: '2h 20m', price: '$ 198.000', priceLabel: 'por persona', badge: 'Mejor precio' },
      { id: 4, departure: 'Sáb, 19 Jul',  return: 'Sáb, 26 Jul', duration: '7 noches', airline: 'JetSMART',              airlineLogo: 'JA', stops: 'Directo',  duration_h: '2h 25m', price: '$ 210.000', priceLabel: 'por persona' },
      { id: 5, departure: 'Vie, 25 Jul',  return: 'Vie, 1 Ago',  duration: '7 noches', airline: 'Aerolíneas Argentinas', airlineLogo: 'AR', stops: 'Directo',  duration_h: '2h 10m', price: '$ 260.000', priceLabel: 'por persona' },
      { id: 6, departure: 'Sáb, 2 Ago',   return: 'Sáb, 9 Ago', duration: '7 noches', airline: 'LATAM Airlines',        airlineLogo: 'LA', stops: '1 escala', stopDetail: 'vía AEP', duration_h: '4h 30m', price: '$ 185.000', priceLabel: 'por persona' },
    ],
  },

  // ── Río de Janeiro ────────────────────────────────────────────────────────
  {
    countrySlug:     'brasil',
    destinationSlug: 'rio-de-janeiro',
    destination:     'Río de Janeiro',
    country:         'Brasil',
    heroImage:       'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1400&q=80',
    pageTitle:       'Vuelos a Río de Janeiro',
    breadcrumb:      ['Home', 'Vuelos', 'Vuelos a Brasil', 'Vuelos a Brasil - Río de Janeiro'],
    content: {
      title:    'Río de Janeiro, Brasil',
      intro:    'La "Cidade Maravilhosa" te sorprende con sus playas icónicas, el Cristo Redentor vigilando desde lo alto del Corcovado y la energía inigualable del carnaval. Entre samba, caipiriñas y atardeceres desde el Pan de Azúcar, Río es pura magia.',
      bestTime: 'Mar – Jun / Sep – Nov',
      currency: 'Real brasileño (BRL)',
      language: 'Portugués',
      tip:      'Evitá el carnaval si buscás tranquilidad; aprovechalo si querés la experiencia máxima',
      highlights: [
        { icon: '🏖️', label: 'Copacabana & Ipanema', desc: 'Las playas más famosas del mundo, perfectas para surf, vóley y samba.' },
        { icon: '✝️', label: 'Cristo Redentor',       desc: 'Una de las 7 Maravillas del Mundo Moderno con vistas panorámicas increíbles.' },
        { icon: '🎉', label: 'Carnaval',               desc: 'El carnaval más grande del mundo, con samba, desfile de escuelas y mucho color.' },
        { icon: '🌿', label: 'Floresta da Tijuca',     desc: 'El bosque urbano más grande del mundo, ideal para trekking y naturaleza.' },
      ],
    },
    flightOffers: [
      { id: 1, departure: 'Vie, 4 Abr',  return: 'Vie, 11 Abr',  duration: '7 noches', airline: 'LATAM Airlines',        airlineLogo: 'LA', stops: 'Directo',  duration_h: '3h 45m', price: '$ 150.000', priceLabel: 'por persona', badge: 'Más vendido' },
      { id: 2, departure: 'Sáb, 5 Abr',  return: 'Sáb, 12 Abr', duration: '7 noches', airline: 'Aerolíneas Argentinas', airlineLogo: 'AR', stops: 'Directo',  duration_h: '3h 50m', price: '$ 145.000', priceLabel: 'por persona' },
      { id: 3, departure: 'Lun, 7 Abr',  return: 'Lun, 14 Abr', duration: '7 noches', airline: 'Gol Linhas Aéreas',     airlineLogo: 'G3', stops: '1 escala', stopDetail: 'vía GRU', duration_h: '6h 10m', price: '$ 118.000', priceLabel: 'por persona', badge: 'Mejor precio' },
      { id: 4, departure: 'Jue, 10 Abr', return: 'Jue, 17 Abr', duration: '7 noches', airline: 'LATAM Airlines',        airlineLogo: 'LA', stops: 'Directo',  duration_h: '3h 40m', price: '$ 155.000', priceLabel: 'por persona' },
      { id: 5, departure: 'Sáb, 19 Abr', return: 'Sáb, 26 Abr', duration: '7 noches', airline: 'Aerolíneas Argentinas', airlineLogo: 'AR', stops: 'Directo',  duration_h: '3h 55m', price: '$ 142.000', priceLabel: 'por persona' },
      { id: 6, departure: 'Mié, 23 Abr', return: 'Mié, 30 Abr', duration: '7 noches', airline: 'Copa Airlines',         airlineLogo: 'CM', stops: '1 escala', stopDetail: 'vía PTY', duration_h: '7h 20m', price: '$ 112.000', priceLabel: 'por persona' },
    ],
  },

  // ── Cancún ────────────────────────────────────────────────────────────────
  {
    countrySlug:     'mexico',
    destinationSlug: 'cancun',
    destination:     'Cancún',
    country:         'México',
    heroImage:       'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=1400&q=80',
    pageTitle:       'Vuelos a Cancún',
    breadcrumb:      ['Home', 'Vuelos', 'Vuelos a México', 'Vuelos a México - Cancún'],
    content: {
      title:    'Cancún, México',
      intro:    'El Caribe mexicano en su máxima expresión: playas de arena blanca, mar turquesa, zona hotelera con resorts todo incluido y la magia de la Riviera Maya a tu alcance. Cancún es el punto de partida ideal para explorar Tulum, Chichén Itzá y Xcaret.',
      bestTime: 'Dic – Abr (temporada seca)',
      currency: 'Peso mexicano (MXN)',
      language: 'Español',
      tip:      'La zona hotelera tiene playas públicas accesibles aunque estés hospedado en Cancún centro',
      highlights: [
        { icon: '🏝️', label: 'Playa del Carmen',  desc: 'La quinta avenida, sus playas y la isla Cozumel a pocos minutos en ferry.' },
        { icon: '🏛️', label: 'Chichén Itzá',       desc: 'Una de las 7 Maravillas del Mundo Moderno, a 3 horas en auto.' },
        { icon: '🐠', label: 'Buceo y snorkel',     desc: 'El segundo arrecife de coral más grande del mundo está en tus costas.' },
        { icon: '🎡', label: 'Xcaret & Xenses',     desc: 'Parques eco-arqueológicos únicos con cultura maya, fauna y espectáculos.' },
      ],
    },
    flightOffers: [
      { id: 1, departure: 'Sáb, 5 Abr',  return: 'Sáb, 12 Abr',  duration: '7 noches', airline: 'Aerolíneas Argentinas', airlineLogo: 'AR', stops: '1 escala', stopDetail: 'vía MEX', duration_h: '9h 30m',  price: '$ 180.000', priceLabel: 'por persona', badge: 'Más vendido' },
      { id: 2, departure: 'Jue, 10 Abr', return: 'Jue, 17 Abr',  duration: '7 noches', airline: 'LATAM Airlines',        airlineLogo: 'LA', stops: '1 escala', stopDetail: 'vía BOG', duration_h: '10h 15m', price: '$ 165.000', priceLabel: 'por persona', badge: 'Mejor precio' },
      { id: 3, departure: 'Vie, 18 Abr', return: 'Vie, 25 Abr',  duration: '7 noches', airline: 'Copa Airlines',         airlineLogo: 'CM', stops: '1 escala', stopDetail: 'vía PTY', duration_h: '8h 45m',  price: '$ 172.000', priceLabel: 'por persona' },
      { id: 4, departure: 'Sáb, 26 Abr', return: 'Sáb, 3 May',  duration: '7 noches', airline: 'Aerolíneas Argentinas', airlineLogo: 'AR', stops: '1 escala', stopDetail: 'vía EZE', duration_h: '9h 50m',  price: '$ 185.000', priceLabel: 'por persona' },
      { id: 5, departure: 'Mié, 7 May',  return: 'Mié, 14 May', duration: '7 noches', airline: 'LATAM Airlines',        airlineLogo: 'LA', stops: '1 escala', stopDetail: 'vía LIM', duration_h: '11h 00m', price: '$ 158.000', priceLabel: 'por persona' },
      { id: 6, departure: 'Sáb, 17 May', return: 'Sáb, 24 May', duration: '7 noches', airline: 'Avianca',               airlineLogo: 'AV', stops: '1 escala', stopDetail: 'vía BOG', duration_h: '9h 20m',  price: '$ 175.000', priceLabel: 'por persona' },
    ],
  },

  // ── Miami ─────────────────────────────────────────────────────────────────
  {
    countrySlug:     'eeuu',
    destinationSlug: 'miami',
    destination:     'Miami',
    country:         'Estados Unidos',
    heroImage:       'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&q=80',
    pageTitle:       'Vuelos a Miami',
    breadcrumb:      ['Home', 'Vuelos', 'Vuelos a EE.UU.', 'Vuelos a EE.UU. - Miami'],
    content: {
      title:    'Miami, Estados Unidos',
      intro:    'Miami es la ciudad donde el sol del Caribe, la cultura latina y el glamour americano se fusionan en una mezcla irresistible. South Beach, el Design District, Wynwood Walls y los Everglades hacen de Miami un destino para todos.',
      bestTime: 'Nov – Abr (clima perfecto)',
      currency: 'Dólar estadounidense (USD)',
      language: 'Inglés / Español',
      tip:      'El tren Brightline conecta Miami con Orlando en 3 horas; ideal para combinar destinos',
      highlights: [
        { icon: '🌊', label: 'South Beach',   desc: 'El icónico paseo Art Déco con playas de arena blanca y vida nocturna legendaria.' },
        { icon: '🎨', label: 'Wynwood Walls', desc: 'El museo de arte urbano al aire libre más famoso de América, en constante renovación.' },
        { icon: '🐊', label: 'Everglades',    desc: 'Paseos en airboat por el humedal más grande de EE.UU., con caimanes y flamencos.' },
        { icon: '🛍️', label: 'Aventura Mall', desc: 'Uno de los shopping centers más grandes de EE.UU., con las mejores marcas del mundo.' },
      ],
    },
    flightOffers: [
      { id: 1, departure: 'Vie, 4 Abr',  return: 'Vie, 11 Abr',  duration: '7 noches', airline: 'American Airlines',     airlineLogo: 'AA', stops: 'Directo',  duration_h: '9h 45m',  price: '$ 290.000', priceLabel: 'por persona', badge: 'Más vendido' },
      { id: 2, departure: 'Lun, 7 Abr',  return: 'Lun, 14 Abr', duration: '7 noches', airline: 'LATAM Airlines',        airlineLogo: 'LA', stops: 'Directo',  duration_h: '10h 00m', price: '$ 275.000', priceLabel: 'por persona', badge: 'Mejor precio' },
      { id: 3, departure: 'Sáb, 12 Abr', return: 'Sáb, 19 Abr', duration: '7 noches', airline: 'Copa Airlines',         airlineLogo: 'CM', stops: '1 escala', stopDetail: 'vía PTY', duration_h: '12h 30m', price: '$ 255.000', priceLabel: 'por persona' },
      { id: 4, departure: 'Jue, 17 Abr', return: 'Jue, 24 Abr', duration: '7 noches', airline: 'Aerolíneas Argentinas', airlineLogo: 'AR', stops: 'Directo',  duration_h: '9h 50m',  price: '$ 285.000', priceLabel: 'por persona' },
      { id: 5, departure: 'Sáb, 26 Abr', return: 'Sáb, 3 May',  duration: '7 noches', airline: 'American Airlines',     airlineLogo: 'AA', stops: 'Directo',  duration_h: '9h 45m',  price: '$ 295.000', priceLabel: 'por persona' },
      { id: 6, departure: 'Mié, 7 May',  return: 'Mié, 14 May', duration: '7 noches', airline: 'United Airlines',       airlineLogo: 'UA', stops: '1 escala', stopDetail: 'vía IAH', duration_h: '13h 10m', price: '$ 248.000', priceLabel: 'por persona' },
    ],
  },

  // ── París ─────────────────────────────────────────────────────────────────
  {
    countrySlug:     'francia',
    destinationSlug: 'paris',
    destination:     'París',
    country:         'Francia',
    heroImage:       'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=80',
    pageTitle:       'Vuelos a París',
    breadcrumb:      ['Home', 'Vuelos', 'Vuelos a Francia', 'Vuelos a Francia - París'],
    content: {
      title:    'París, Francia',
      intro:    'La Ciudad de la Luz sigue siendo la capital mundial de la moda, el arte y la gastronomía. Desde la Torre Eiffel hasta el Louvre, pasando por Montmartre y el barrio de Le Marais, París es un destino que enamora a primera vista y nunca decepciona.',
      bestTime: 'Abr – Jun / Sep – Oct',
      currency: 'Euro (EUR)',
      language: 'Francés',
      tip:      'El Pase Museum deja visitar más de 50 museos sin hacer colas; vale la pena en temporada alta',
      highlights: [
        { icon: '🗼', label: 'Torre Eiffel',    desc: 'El símbolo más icónico de Europa; subí al tercer piso para vistas de 360° de la ciudad.' },
        { icon: '🖼️', label: 'Musée du Louvre', desc: 'El museo más visitado del mundo, hogar de la Mona Lisa y la Venus de Milo.' },
        { icon: '🥐', label: 'Gastronomía',     desc: 'Croissants, crêpes, quesos y vinos: la cocina francesa es Patrimonio Cultural de la UNESCO.' },
        { icon: '🛍️', label: 'Champs-Élysées',  desc: 'La avenida más famosa del mundo, con las boutiques de lujo más exclusivas del planeta.' },
      ],
    },
    flightOffers: [
      { id: 1, departure: 'Vie, 4 Abr',  return: 'Vie, 11 Abr',  duration: '7 noches', airline: 'Air France',            airlineLogo: 'AF', stops: 'Directo',  duration_h: '13h 30m', price: '$ 410.000', priceLabel: 'por persona', badge: 'Más vendido' },
      { id: 2, departure: 'Lun, 7 Abr',  return: 'Lun, 14 Abr', duration: '7 noches', airline: 'Aerolíneas Argentinas', airlineLogo: 'AR', stops: 'Directo',  duration_h: '13h 45m', price: '$ 395.000', priceLabel: 'por persona' },
      { id: 3, departure: 'Sáb, 12 Abr', return: 'Sáb, 19 Abr', duration: '7 noches', airline: 'Iberia',                airlineLogo: 'IB', stops: '1 escala', stopDetail: 'vía MAD', duration_h: '16h 20m', price: '$ 355.000', priceLabel: 'por persona', badge: 'Mejor precio' },
      { id: 4, departure: 'Jue, 17 Abr', return: 'Jue, 24 Abr', duration: '7 noches', airline: 'Lufthansa',             airlineLogo: 'LH', stops: '1 escala', stopDetail: 'vía FRA', duration_h: '17h 00m', price: '$ 370.000', priceLabel: 'por persona' },
      { id: 5, departure: 'Sáb, 26 Abr', return: 'Sáb, 3 May',  duration: '7 noches', airline: 'Air France',            airlineLogo: 'AF', stops: 'Directo',  duration_h: '13h 30m', price: '$ 420.000', priceLabel: 'por persona' },
      { id: 6, departure: 'Mié, 7 May',  return: 'Mié, 14 May', duration: '7 noches', airline: 'KLM',                   airlineLogo: 'KL', stops: '1 escala', stopDetail: 'vía AMS', duration_h: '16h 45m', price: '$ 362.000', priceLabel: 'por persona' },
    ],
  },
];

export function getDestination(countrySlug: string, destinationSlug: string): Destination | undefined {
  return DESTINATIONS.find(
    (d) => d.countrySlug === countrySlug && d.destinationSlug === destinationSlug
  );
}

export function getDestinationsByCountry(countrySlug: string): Destination[] {
  return DESTINATIONS.filter((d) => d.countrySlug === countrySlug);
}

export { DESTINATIONS };
