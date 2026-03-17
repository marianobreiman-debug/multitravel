// ─── Individual hotel detail data ─────────────────────────────────────────────

export interface HotelRoom {
  id:           string;
  name:         string;
  size:         string;
  beds:         string;
  maxOccupancy: number;
  amenities:    string[];
  image:        string;
  pricePerNight: string;
  features:     string[];
}

export interface HotelReview {
  name:    string;
  avatar:  string;
  avatarBg: string;
  rating:  number;
  date:    string;
  text:    string;
  country: string;
  travelType: string;
}

export interface NearbyPlace {
  name:     string;
  category: string;
  distance: string;
  icon:     string;
}

export interface Hotel {
  slug:          string;
  citySlug:      string;
  countrySlug:   string;
  city:          string;
  country:       string;
  name:          string;
  category:      number;
  heroImages:    string[];
  heroImage:     string;
  address:       string;
  neighborhood:  string;
  distanceFromCenter:  string;
  distanceFromAirport: string;
  nearestAirport: string;
  coords:        { lat: number; lng: number };
  reviewScore:   number;
  reviewLabel:   string;
  reviewCount:   number;
  reviewBreakdown: { category: string; score: number }[];
  pricePerNight: string;
  priceCurrency: string;
  priceDate:     string;
  priceGuests:   string;
  breadcrumb:    string[];

  services: { icon: string; name: string }[];
  advantages: string[];

  rooms: HotelRoom[];

  reviews: HotelReview[];

  description: string;
  descriptionExtended: string;

  nearbyPlaces: NearbyPlace[];

  conditions: {
    checkIn:       string;
    checkOut:      string;
    breakfast:     string;
    breakfastPrice?: string;
    cancellation:  string;
    extraPolicies: string[];
  };

  usefulInfo: {
    languages:           string[];
    distanceCenter:      string;
    distanceAirport:     string;
    airport:             string;
    thirdPartyValidation: string[];
    parking:             string;
    petsPolicy:          string;
  };

  nearbyHotels: {
    slug:    string;
    name:    string;
    image:   string;
    stars:   number;
    score:   number;
    pricePerNight: string;
  }[];

  faqs: { question: string; answer: string }[];
}

const HOTELS: Hotel[] = [
  // ── Belmond Copacabana Palace — Río de Janeiro ───────────────────────────────
  {
    slug:         'belmond-copacabana-palace',
    citySlug:     'rio-de-janeiro',
    countrySlug:  'brasil',
    city:         'Río de Janeiro',
    country:      'Brasil',
    name:         'Belmond Copacabana Palace',
    category:     5,
    heroImage:    'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80',
    heroImages: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=1200&q=80',
    ],
    address:              'Av. Atlântica, 1702 — Copacabana, Río de Janeiro',
    neighborhood:         'Copacabana',
    distanceFromCenter:   '2.1 km del centro',
    distanceFromAirport:  '18 km del Aeropuerto Galeão (GIG)',
    nearestAirport:       'Aeropuerto Internacional Galeão (GIG)',
    coords:               { lat: -22.9673, lng: -43.1764 },
    reviewScore:          9.2,
    reviewLabel:          'Excepcional',
    reviewCount:          4812,
    reviewBreakdown: [
      { category: 'Limpieza',       score: 9.6 },
      { category: 'Confort',        score: 9.4 },
      { category: 'Ubicación',      score: 9.8 },
      { category: 'Instalaciones',  score: 9.1 },
      { category: 'Personal',       score: 9.5 },
      { category: 'Relación precio-calidad', score: 8.7 },
    ],
    pricePerNight: 'USD 580',
    priceCurrency: 'USD',
    priceDate:     '5 – 10 abr 2026',
    priceGuests:   '2 adultos',
    breadcrumb:    ['Home', 'Alojamientos', 'Alojamientos en Brasil', 'Hoteles en Río de Janeiro', 'Belmond Copacabana Palace'],

    services: [
      { icon: '🏊', name: 'Pileta exterior' },
      { icon: '🌐', name: 'Wi-Fi gratuito' },
      { icon: '🍳', name: 'Desayuno incluido' },
      { icon: '🚗', name: 'Estacionamiento' },
      { icon: '🏋️', name: 'Gimnasio' },
      { icon: '💆', name: 'Spa & Wellness' },
      { icon: '🍽️', name: 'Restaurante gourmet' },
      { icon: '🍸', name: 'Bar & Lounge' },
      { icon: '🧹', name: 'Servicio de habitaciones 24h' },
      { icon: '👔', name: 'Servicio de conserjería' },
      { icon: '🔒', name: 'Caja fuerte en habitación' },
      { icon: '❄️', name: 'Aire acondicionado' },
    ],

    advantages: [
      'Vista directa al mar desde habitaciones y pileta',
      'Ubicado en la icónica Avenida Atlântica frente a Copacabana',
      'Reconocido por Condé Nast Traveler como uno de los mejores hoteles de Brasil',
      'Desayuno buffet incluido con frutas tropicales y especialidades brasileñas',
      'Acceso directo a la playa de Copacabana',
      'Personal multilingüe (español, inglés, portugués, francés)',
      'Pileta climatizada de agua salada',
      'Parking privado cubierto',
    ],

    rooms: [
      {
        id:           'superior-ocean',
        name:         'Superior con vista al mar',
        size:         '32 m²',
        beds:         '1 cama King o 2 camas Twin',
        maxOccupancy: 2,
        amenities:    ['Vista al mar', 'Balcón', 'Mini-bar', 'TV 55"', 'Caja fuerte', 'Bañera', 'Wi-Fi'],
        image:        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=600&q=80',
        pricePerNight: 'USD 580',
        features:     ['Cancelación gratuita hasta 48h antes', 'Desayuno incluido'],
      },
      {
        id:           'deluxe-ocean',
        name:         'Deluxe con vista al océano',
        size:         '40 m²',
        beds:         '1 cama King',
        maxOccupancy: 2,
        amenities:    ['Vista panorámica al océano', 'Balcón amplio', 'Mini-bar', 'TV 65"', 'Jacuzzi', 'Ducha rain', 'Wi-Fi', 'Bata & pantuflas'],
        image:        'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=600&q=80',
        pricePerNight: 'USD 780',
        features:     ['Cancelación gratuita hasta 24h antes', 'Desayuno incluido', 'Minibar incluido'],
      },
      {
        id:           'suite-ipanema',
        name:         'Suite Ipanema',
        size:         '65 m²',
        beds:         '1 cama King + sala de estar',
        maxOccupancy: 3,
        amenities:    ['Vista 180° al mar', 'Terraza privada', 'Sala de estar separada', 'Kitchenette', 'TV dual', 'Jacuzzi', 'Butler service'],
        image:        'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80',
        pricePerNight: 'USD 1.250',
        features:     ['No reembolsable', 'Desayuno + cena incluidos', 'Traslado aeropuerto incluido', 'Early check-in y late check-out'],
      },
    ],

    reviews: [
      {
        name:       'Valentina S.',
        avatar:     'VS',
        avatarBg:   '#7C3AED',
        rating:     10,
        date:       'Febrero 2026',
        text:       'Una experiencia absolutamente mágica. La vista al mar desde la habitación es exactamente como en las fotos — increíble amanecer cada día. El personal es atentísimo, hablan español perfectamente. El desayuno con la vista a Copacabana es lo más. Definitivamente vuelvo.',
        country:    '🇦🇷 Argentina',
        travelType: 'Pareja',
      },
      {
        name:       'Rodrigo M.',
        avatar:     'RM',
        avatarBg:   '#226FCB',
        rating:     9,
        date:       'Enero 2026',
        text:       'Hotel histórico con mucho encanto. Las instalaciones son impecables y la ubicación frente a Copacabana no tiene comparación. Pedimos una suite y valió cada centavo. El servicio de conserjería nos organizó todo el itinerario por Río. Muy recomendado.',
        country:    '🇧🇷 Brasil',
        travelType: 'Familia',
      },
      {
        name:       'Carolina F.',
        avatar:     'CF',
        avatarBg:   '#0891B2',
        rating:     10,
        date:       'Diciembre 2025',
        text:       'Me hospedé para mi luna de miel y fue perfecto. El hotel nos sorprendió con detalles de bienvenida. La pileta con vista al océano es espectacular. El restaurante del hotel está entre los mejores de Río. No puedo pedir más.',
        country:    '🇨🇱 Chile',
        travelType: 'Luna de miel',
      },
      {
        name:       'Martín L.',
        avatar:     'ML',
        avatarBg:   '#15803D',
        rating:     8,
        date:       'Noviembre 2025',
        text:       'Muy buen hotel, la ubicación es perfecta para moverse por Río. La habitación era amplia y muy cómoda. Desayuno excelente con muchísimas opciones. Lo único que mejoraría es el precio del parking, que es bastante caro.',
        country:    '🇦🇷 Argentina',
        travelType: 'Viaje de negocios',
      },
      {
        name:       'Sofía G.',
        avatar:     'SG',
        avatarBg:   '#D97706',
        rating:     10,
        date:       'Octubre 2025',
        text:       'El hotel más bonito en el que me he quedado en toda mi vida. Cada detalle está cuidado al máximo. El spa es excepcional y la atención personalizada hace que te sientas como en casa. Muy recomendado para ocasiones especiales.',
        country:    '🇪🇸 España',
        travelType: 'Pareja',
      },
    ],

    description:
      'El Belmond Copacabana Palace es el hotel más icónico de Río de Janeiro. Inaugurado en 1923, este palacio blanco frente al océano Atlántico ha sido testigo de la historia de Brasil y ha recibido a presidentes, artistas y celebridades de todo el mundo durante más de un siglo.',
    descriptionExtended:
      'Diseñado por el arquitecto Joseph Gire con una fachada neoclásica que se convirtió en parte del paisaje de Copacabana, el hotel combina la grandeza del pasado con todas las comodidades del lujo moderno. Sus 239 habitaciones y suites ofrecen vistas al océano Atlántico o a los jardines internos. El restaurante Cipriani, referente de la cocina italiana en Brasil, y el Pool Bar junto a la pileta de agua salada son experiencias gastronómicas que no deben perderse. El spa ofrece tratamientos inspirados en rituales brasileños con productos naturales de la Amazonia.',

    nearbyPlaces: [
      { name: 'Playa de Copacabana',    category: 'Playa',       distance: '50 m',  icon: '🏖️' },
      { name: 'Cristo Redentor',        category: 'Monumento',   distance: '8.2 km', icon: '🗿' },
      { name: 'Pan de Azúcar',          category: 'Atracción',   distance: '4.1 km', icon: '🚡' },
      { name: 'Playa de Ipanema',       category: 'Playa',       distance: '1.8 km', icon: '🌊' },
      { name: 'Theatro Municipal',      category: 'Cultura',     distance: '5.3 km', icon: '🎭' },
      { name: 'Jardim Botânico',        category: 'Naturaleza',  distance: '4.8 km', icon: '🌿' },
      { name: 'Maracaná',               category: 'Deporte',     distance: '12 km',  icon: '⚽' },
      { name: 'Feria de São Cristóvão', category: 'Gastronomía', distance: '9.4 km', icon: '🍢' },
    ],

    conditions: {
      checkIn:        'A partir de las 15:00 hs',
      checkOut:       'Hasta las 12:00 hs',
      breakfast:      'Buffet completo incluido en tarifas seleccionadas',
      breakfastPrice: 'USD 45 por persona para habitaciones sin desayuno incluido',
      cancellation:   'Cancelación gratuita hasta 48 horas antes del check-in en la mayoría de tarifas. Tarifas no reembolsables disponibles con descuento.',
      extraPolicies: [
        'Check-in temprano y late check-out sujetos a disponibilidad (cargo adicional)',
        'Menores de 12 años no generan costo adicional en habitaciones compartidas',
        'Mascotas no permitidas en las instalaciones',
        'Política de no fumadores en todas las habitaciones y áreas comunes',
        'ID y tarjeta de crédito obligatorias al momento del check-in',
        'El hotel puede solicitar un depósito de garantía de USD 200',
      ],
    },

    usefulInfo: {
      languages:           ['Español', 'Portugués', 'Inglés', 'Francés', 'Alemán'],
      distanceCenter:      '2.1 km del centro de Río de Janeiro',
      distanceAirport:     '18 km del Aeropuerto Internacional Galeão (GIG)',
      airport:             'Aeropuerto Internacional Galeão (GIG)',
      thirdPartyValidation: ['Booking.com — 9.2/10', 'TripAdvisor — Certificado de Excelencia 2025', 'Condé Nast Traveler — Top Hotels Brasil', 'Forbes Travel Guide — 4 Estrellas'],
      parking:             'Estacionamiento privado cubierto disponible — USD 35 por día',
      petsPolicy:          'No se admiten mascotas',
    },

    nearbyHotels: [
      { slug: 'rio-othon-palace',      name: 'Rio Othon Palace',      image: 'https://images.unsplash.com/photo-1568495248636-6432b97bd949?auto=format&fit=crop&w=400&q=80', stars: 5, score: 8.8, pricePerNight: 'USD 310' },
      { slug: 'hotel-fasano-rio',      name: 'Hotel Fasano Río',      image: 'https://images.unsplash.com/photo-1598928636135-d146006ff4be?auto=format&fit=crop&w=400&q=80', stars: 5, score: 9.0, pricePerNight: 'USD 490' },
      { slug: 'windsor-atlantica',     name: 'Windsor Atlântica',     image: 'https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?auto=format&fit=crop&w=400&q=80', stars: 5, score: 8.6, pricePerNight: 'USD 220' },
      { slug: 'ibis-copacabana',       name: 'ibis Copacabana',       image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80', stars: 3, score: 8.1, pricePerNight: 'USD 90'  },
    ],

    faqs: [
      { question: '¿El desayuno está incluido?',                       answer: 'Depende de la tarifa seleccionada. Las tarifas "con desayuno" incluyen un completo buffet con opciones internacionales y brasileñas. El desayuno sin tarifa incluida tiene un costo adicional de USD 45 por persona.' },
      { question: '¿Hay transporte desde el aeropuerto?',              answer: 'Sí, el hotel ofrece servicio de traslado privado desde el Aeropuerto Internacional Galeão (GIG) con tarifa fija de USD 80 por vehículo, disponible las 24 horas. Se recomienda reservar con anticipación.' },
      { question: '¿Cuál es la política de cancelación?',              answer: 'La mayoría de las tarifas permiten cancelación gratuita hasta 48 horas antes del check-in. Las tarifas no reembolsables ofrecen hasta un 20% de descuento. Recomendamos revisar las condiciones de cada tarifa antes de confirmar.' },
      { question: '¿Se admiten niños?',                                answer: 'Sí, los menores de 12 años que compartan habitación con los adultos no generan cargo adicional. Para niños de más de 12 años se aplica tarifa de adulto. El hotel cuenta con menú infantil y actividades para familias.' },
      { question: '¿Hay pileta exterior?',                             answer: 'Sí, el hotel cuenta con una pileta olímpica de agua salada con vista al océano Atlántico, abierta todos los días de 7:00 a 20:00 hs. El acceso es exclusivo para huéspedes.' },
      { question: '¿El hotel tiene acceso directo a la playa?',        answer: 'El hotel está ubicado literalmente frente a la Playa de Copacabana, con acceso directo desde la vereda de la Avenida Atlântica. El personal de playa del hotel ofrece servicio de sombrillas y reposeras a los huéspedes.' },
    ],
  },
];

export function getHotel(countrySlug: string, citySlug: string, hotelSlug: string): Hotel | undefined {
  return HOTELS.find(
    (h) => h.countrySlug === countrySlug && h.citySlug === citySlug && h.slug === hotelSlug
  );
}

export function getHotelsByCity(countrySlug: string, citySlug: string): Hotel[] {
  return HOTELS.filter((h) => h.countrySlug === countrySlug && h.citySlug === citySlug);
}

export function getAllHotelsForCity(citySlug: string): Hotel[] {
  return HOTELS.filter((h) => h.citySlug === citySlug);
}

export { HOTELS };
