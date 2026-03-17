'use client';

import type { HotelCountry, HotelCity } from '@/data/hotelCountries';
import type { Hotel } from '@/data/hotels';

interface Props {
  country: HotelCountry;
  city:    HotelCity;
  hotels:  Hotel[];
}

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < count ? '#F59E0B' : '#E5E7EB'}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

// Placeholder hotels for UI if no real hotel data exists
const PLACEHOLDER_HOTELS = [
  { name: 'Hotel Marriott Río', stars: 5, score: 9.0, pricePerNight: 'USD 320', image: 'https://images.unsplash.com/photo-1568495248636-6432b97bd949?auto=format&fit=crop&w=600&q=80', slug: null },
  { name: 'Iberostar Ipanema',  stars: 4, score: 8.5, pricePerNight: 'USD 195', image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=600&q=80', slug: null },
  { name: 'Arena Ipanema',      stars: 4, score: 8.3, pricePerNight: 'USD 165', image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=600&q=80', slug: null },
  { name: 'Windsor Florida',    stars: 4, score: 8.7, pricePerNight: 'USD 145', image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=600&q=80', slug: null },
  { name: 'Ipanema Inn',        stars: 3, score: 8.0, pricePerNight: 'USD 95',  image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80', slug: null },
  { name: 'Arpoador Inn',       stars: 3, score: 7.9, pricePerNight: 'USD 85',  image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80', slug: null },
];

export function HotelCityLanding({ country, city, hotels }: Props) {
  // Merge real hotels with placeholders for UI
  const realHotels = hotels.map((h) => ({
    name:         h.name,
    stars:        h.category,
    score:        h.reviewScore,
    pricePerNight: h.pricePerNight,
    image:        h.heroImage,
    slug:         h.slug,
    reviewLabel:  h.reviewLabel,
    reviewCount:  h.reviewCount,
    address:      h.address,
    services:     h.services.slice(0, 4),
  }));

  const displayHotels = realHotels.length > 0
    ? realHotels
    : PLACEHOLDER_HOTELS.map((h) => ({ ...h, reviewLabel: 'Muy bueno', reviewCount: Math.floor(Math.random() * 2000) + 500, address: `${city.name}, ${country.name}`, services: [] }));

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif" }}>

      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 28, lineHeight: '36px', color: '#272626', margin: '0 0 8px' }}>
          Hoteles en {city.name}, {country.flag} {country.name}
        </h1>
        <p style={{ fontSize: 15, color: '#8D8D8D', margin: 0 }}>
          {city.hotelCount} propiedades disponibles · Desde {city.fromPrice} {city.currency}
        </p>
      </div>

      {/* Tags filter */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 28, flexWrap: 'wrap' }}>
        {['Todos', ...city.tags, 'Pileta', 'Wi-Fi gratuito', 'Desayuno incluido'].map((tag, i) => (
          <button
            key={tag}
            style={{
              background:   i === 0 ? '#226FCB' : '#F4F6F8',
              color:        i === 0 ? '#fff' : '#504F4F',
              border:       'none',
              borderRadius: 20,
              padding:      '7px 16px',
              fontSize:     13,
              fontWeight:   600,
              cursor:       'pointer',
              fontFamily:   "'Outfit', sans-serif",
            }}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Hotels list — vertical cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {displayHotels.map((hotel, idx) => (
          <a
            key={idx}
            href={hotel.slug ? `/home/alojamientos/${country.slug}/${city.citySlug}/${hotel.slug}` : '#'}
            style={{ textDecoration: 'none', display: 'flex', background: '#fff', borderRadius: 16, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', transition: 'box-shadow 0.2s', flexDirection: 'row' }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px rgba(0,0,0,0.13)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)'}
          >
            {/* Image */}
            <div style={{ position: 'relative', width: 220, flexShrink: 0 }}>
              <img src={hotel.image} alt={hotel.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              {hotel.slug && (
                <div style={{ position: 'absolute', top: 10, left: 10, background: '#226FCB', color: '#fff', fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 12 }}>
                  FICHA COMPLETA
                </div>
              )}
            </div>

            {/* Content */}
            <div style={{ flex: 1, padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                <div>
                  <StarRating count={hotel.stars} />
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 18, color: '#272626', margin: '4px 0 2px' }}>
                    {hotel.name}
                  </h3>
                  <p style={{ fontSize: 13, color: '#8D8D8D', margin: 0 }}>{hotel.address}</p>
                </div>
                {/* Score badge */}
                <div style={{ textAlign: 'center', flexShrink: 0 }}>
                  <div style={{ background: '#0D4E88', color: '#fff', fontWeight: 800, fontSize: 16, padding: '6px 12px', borderRadius: '8px 8px 8px 0', minWidth: 44, textAlign: 'center' }}>
                    {hotel.score}
                  </div>
                  <p style={{ fontSize: 11, color: '#8D8D8D', margin: '4px 0 0', fontWeight: 500 }}>{hotel.reviewLabel}</p>
                </div>
              </div>

              {/* Services chips */}
              {hotel.services && hotel.services.length > 0 && (
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {hotel.services.map((s) => (
                    <span key={s.name} style={{ background: '#F4F6F8', fontSize: 12, color: '#504F4F', padding: '3px 8px', borderRadius: 8 }}>
                      {s.icon} {s.name}
                    </span>
                  ))}
                </div>
              )}

              {/* Price + CTA */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: 12, borderTop: '1px solid #F0F0F0' }}>
                <div>
                  <span style={{ fontSize: 11, color: '#8D8D8D' }}>Desde</span>
                  <div style={{ fontWeight: 800, fontSize: 22, color: '#272626', lineHeight: 1 }}>
                    {hotel.pricePerNight}
                  </div>
                  <span style={{ fontSize: 11, color: '#8D8D8D' }}>por noche</span>
                </div>
                <div
                  style={{
                    background: 'linear-gradient(135deg, #DF0032, #FF2C4E)',
                    color: '#fff', fontSize: 14, fontWeight: 700,
                    padding: '10px 22px', borderRadius: 12, cursor: 'pointer',
                  }}
                >
                  Ver hotel
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Disclaimer */}
      <div style={{ marginTop: 32, padding: '14px 18px', background: '#FFF8E1', borderRadius: 12, border: '1px solid #FDE68A' }}>
        <p style={{ fontSize: 12, color: '#92400E', margin: 0, lineHeight: '20px' }}>
          ⚠️ <strong>Los precios mostrados son de referencia</strong> y pueden variar según la disponibilidad, temporada y fecha de búsqueda. Te recomendamos verificar el precio final antes de confirmar tu reserva.
        </p>
      </div>
    </div>
  );
}
