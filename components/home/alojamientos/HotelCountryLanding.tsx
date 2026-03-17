'use client';

import type { HotelCountry } from '@/data/hotelCountries';

interface Props { country: HotelCountry }

export function HotelCountryLanding({ country }: Props) {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif" }}>

      {/* Intro */}
      <div style={{ marginBottom: 40 }}>
        <p style={{ fontWeight: 700, color: '#226FCB', margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: 12 }}>
          {country.flag} Alojamientos en {country.name}
        </p>
        <h1 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 32, lineHeight: '40px', color: '#272626', margin: '0 0 12px' }}>
          Hoteles en {country.name}
        </h1>
        <p style={{ fontSize: 16, lineHeight: '26px', color: '#504F4F', margin: 0, maxWidth: 720 }}>
          {country.intro}
        </p>
      </div>

      {/* Cities grid */}
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 22, color: '#272626', margin: '0 0 20px' }}>
          Elegí tu ciudad
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
          {country.cities.map((city) => (
            <a
              key={city.citySlug}
              href={`/home/alojamientos/${country.slug}/${city.citySlug}`}
              style={{ textDecoration: 'none', display: 'block', borderRadius: 16, overflow: 'hidden', background: '#fff', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', transition: 'transform 0.2s, box-shadow 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px rgba(0,0,0,0.14)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ''; (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)'; }}
            >
              {/* Image */}
              <div style={{ position: 'relative', height: 180, overflow: 'hidden' }}>
                <img
                  src={city.image}
                  alt={city.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)' }} />
                <div
                  style={{
                    position: 'absolute', top: 12, right: 12,
                    background: 'rgba(255,255,255,0.92)', borderRadius: 20,
                    padding: '4px 10px', fontSize: 12, fontWeight: 600, color: '#226FCB',
                  }}
                >
                  {city.hotelCount} hoteles
                </div>
              </div>
              {/* Content */}
              <div style={{ padding: '16px 18px 18px' }}>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 18, color: '#272626', margin: '0 0 6px' }}>
                  {city.name}
                </h3>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 12 }}>
                  {city.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{ background: '#EEF5FF', color: '#226FCB', fontSize: 11, fontWeight: 600, padding: '3px 8px', borderRadius: 20 }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ fontSize: 11, color: '#8D8D8D' }}>Desde</span>
                    <div style={{ fontWeight: 800, fontSize: 18, color: '#272626' }}>
                      {city.fromPrice} <span style={{ fontWeight: 400, fontSize: 13, color: '#8D8D8D' }}>{city.currency}</span>
                    </div>
                  </div>
                  <div
                    style={{
                      background: 'linear-gradient(135deg, #DF0032, #FF2C4E)',
                      color: '#fff', fontSize: 13, fontWeight: 600,
                      padding: '8px 16px', borderRadius: 12,
                    }}
                  >
                    Ver hoteles →
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
