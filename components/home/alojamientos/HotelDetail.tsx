'use client';

import { useState, useEffect, useRef } from 'react';
import type { Hotel } from '@/data/hotels';
import { NewsletterSection } from '@/components/home/NewsletterSection';
import { Footer } from '@/components/home/Footer';

const TABS = [
  { id: 'fotos',        label: 'Fotos' },
  { id: 'servicios',    label: 'Servicios' },
  { id: 'habitaciones', label: 'Habitaciones' },
  { id: 'opiniones',    label: 'Opiniones' },
  { id: 'descripcion',  label: 'Descripción' },
  { id: 'lugares',      label: 'Lugares cercanos' },
  { id: 'condiciones',  label: 'Condiciones' },
  { id: 'info',         label: 'Info útil' },
  { id: 'faqs',         label: 'FAQs' },
];

function StarRating({ count, size = 16 }: { count: number; size?: number }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill={i < count ? '#F59E0B' : '#E5E7EB'}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

function ScoreBar({ score }: { score: number }) {
  const pct = (score / 10) * 100;
  const color = score >= 9 ? '#22C55E' : score >= 8 ? '#3B82F6' : score >= 7 ? '#F59E0B' : '#EF4444';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{ flex: 1, height: 8, background: '#F0F0F0', borderRadius: 4, overflow: 'hidden' }}>
        <div style={{ width: `${pct}%`, height: '100%', background: color, borderRadius: 4, transition: 'width 0.8s' }} />
      </div>
      <span style={{ fontSize: 13, fontWeight: 700, color: '#272626', minWidth: 28 }}>{score}</span>
    </div>
  );
}

interface Props {
  hotel:       Hotel;
  countrySlug: string;
}

export function HotelDetail({ hotel, countrySlug }: Props) {
  const [activeTab,    setActiveTab]    = useState('fotos');
  const [activePhoto,  setActivePhoto]  = useState(0);
  const [galleryOpen,  setGalleryOpen]  = useState(false);
  const [activeRoom,   setActiveRoom]   = useState(0);
  const [activeFaq,    setActiveFaq]    = useState<number | null>(null);
  const tabBarRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const el = document.getElementById(`section-${id}`);
    if (el) {
      const offset = 72;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  // Observe sections
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    TABS.forEach(({ id }) => {
      const el = document.getElementById(`section-${id}`);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveTab(id); },
        { rootMargin: '-50% 0px -45% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", paddingTop: 32 }}>

      {/* ── BREADCRUMB ────────────────────────────────────────────────────────── */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 20, flexWrap: 'wrap', padding: '0 0 16px', borderBottom: '1px solid #EBEBEB' }}>
        <a href="/home" style={{ fontSize: 13, color: '#8D8D8D', textDecoration: 'none' }}>Inicio</a>
        {hotel.breadcrumb.slice(1).map((crumb, i) => {
          const isLast = i === hotel.breadcrumb.length - 2;
          if (isLast) return (
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ color: '#CACACA', fontSize: 13 }}>›</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: '#272626' }}>{crumb}</span>
            </span>
          );
          const hrefs: Record<string, string> = {
            'Alojamientos': '/home',
            [`Alojamientos en ${hotel.country}`]: `/home/alojamientos/${countrySlug}`,
            [`Hoteles en ${hotel.city}`]: `/home/alojamientos/${countrySlug}/${hotel.citySlug}`,
          };
          return (
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ color: '#CACACA', fontSize: 13 }}>›</span>
              <a href={hrefs[crumb] || '#'} style={{ fontSize: 13, color: '#226FCB', textDecoration: 'none' }}>{crumb}</a>
            </span>
          );
        })}
      </div>

      {/* ── HOTEL HEADER ──────────────────────────────────────────────────────── */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 20, marginBottom: 20, flexWrap: 'wrap' }}>
        <div>
          <StarRating count={hotel.category} size={18} />
          <h1 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 30, lineHeight: '38px', color: '#272626', margin: '6px 0 8px' }}>
            {hotel.name}
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 14, color: '#504F4F', display: 'flex', alignItems: 'center', gap: 5 }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#8D8D8D" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              {hotel.address}
            </span>
            <span style={{ fontSize: 14, color: '#226FCB', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 5 }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#226FCB" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              {hotel.distanceFromCenter}
            </span>
          </div>
        </div>

        {/* Score + price */}
        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-end', flexShrink: 0 }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'flex-end' }}>
              <div>
                <p style={{ fontSize: 12, color: '#8D8D8D', margin: 0, textAlign: 'right' }}>{hotel.reviewLabel}</p>
                <p style={{ fontSize: 11, color: '#CACACA', margin: 0, textAlign: 'right' }}>{hotel.reviewCount.toLocaleString()} opiniones</p>
              </div>
              <div style={{ background: '#0D4E88', color: '#fff', fontWeight: 800, fontSize: 20, padding: '10px 14px', borderRadius: '10px 10px 10px 0', minWidth: 52, textAlign: 'center' }}>
                {hotel.reviewScore}
              </div>
            </div>
          </div>
          <div style={{ background: '#fff', border: '1.5px solid #EBEBEB', borderRadius: 14, padding: '12px 18px', textAlign: 'right', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
            <p style={{ fontSize: 11, color: '#8D8D8D', margin: '0 0 2px' }}>{hotel.priceDate} · {hotel.priceGuests}</p>
            <p style={{ fontSize: 11, color: '#8D8D8D', margin: '0 0 4px' }}>Precio de referencia</p>
            <p style={{ fontWeight: 800, fontSize: 24, color: '#272626', margin: 0, lineHeight: 1 }}>{hotel.pricePerNight}</p>
            <p style={{ fontSize: 11, color: '#8D8D8D', margin: '2px 0 10px' }}>por noche</p>
            <button
              style={{ width: '100%', background: 'linear-gradient(135deg, #DF0032, #FF2C4E)', color: '#fff', border: 'none', borderRadius: 10, padding: '9px 20px', fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: "'Outfit', sans-serif" }}
            >
              Ver disponibilidad
            </button>
          </div>
        </div>
      </div>

      {/* ── STICKY TAB BAR ────────────────────────────────────────────────────── */}
      <div
        ref={tabBarRef}
        style={{ position: 'sticky', top: 0, zIndex: 40, background: '#fff', borderBottom: '2px solid #F0F0F0', marginBottom: 0, overflow: 'auto', scrollbarWidth: 'none' }}
      >
        <div style={{ display: 'flex', gap: 0, minWidth: 'max-content' }}>
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              style={{
                fontFamily:     "'Outfit', sans-serif",
                fontWeight:     activeTab === tab.id ? 700 : 500,
                fontSize:       14,
                color:          activeTab === tab.id ? '#226FCB' : '#504F4F',
                background:     'none',
                border:         'none',
                borderBottom:   activeTab === tab.id ? '2px solid #226FCB' : '2px solid transparent',
                padding:        '14px 18px',
                cursor:         'pointer',
                whiteSpace:     'nowrap',
                transition:     'all 0.2s',
                marginBottom:   -2,
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════ */}

      {/* ── FOTOS ─────────────────────────────────────────────────────────── */}
      <section id="section-fotos" style={{ paddingTop: 40, paddingBottom: 40, borderBottom: '1px solid #F0F0F0' }}>
        <h2 style={sectionTitle}>📸 Fotos del hotel</h2>
        {/* Gallery grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '240px 180px', gap: 8, borderRadius: 16, overflow: 'hidden', cursor: 'pointer' }}
          onClick={() => setGalleryOpen(true)}
        >
          <img
            src={hotel.heroImages[0]}
            alt={hotel.name}
            style={{ gridColumn: '1', gridRow: '1', width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
            onMouseEnter={e => (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.03)'}
            onMouseLeave={e => (e.currentTarget as HTMLImageElement).style.transform = ''}
          />
          <img src={hotel.heroImages[1]} alt="" style={{ gridColumn: '2', gridRow: '1', width: '100%', height: '100%', objectFit: 'cover' }} />
          <img src={hotel.heroImages[2]} alt="" style={{ gridColumn: '1', gridRow: '2', width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ gridColumn: '2', gridRow: '2', position: 'relative' }}>
            <img src={hotel.heroImages[3]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 4 }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
              <span style={{ color: '#fff', fontWeight: 700, fontSize: 14 }}>Ver todas las fotos</span>
              <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12 }}>{hotel.heroImages.length} imágenes</span>
            </div>
          </div>
        </div>

        {/* Lightbox */}
        {galleryOpen && (
          <div
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.95)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={() => setGalleryOpen(false)}
          >
            <button style={navBtn} onClick={(e) => { e.stopPropagation(); setActivePhoto(p => (p - 1 + hotel.heroImages.length) % hotel.heroImages.length); }}>‹</button>
            <img src={hotel.heroImages[activePhoto]} alt="" style={{ maxWidth: '80vw', maxHeight: '80vh', objectFit: 'contain', borderRadius: 8 }} onClick={e => e.stopPropagation()} />
            <button style={{ ...navBtn, right: 24, left: 'auto' }} onClick={(e) => { e.stopPropagation(); setActivePhoto(p => (p + 1) % hotel.heroImages.length); }}>›</button>
            <button style={{ position: 'absolute', top: 20, right: 24, background: 'rgba(255,255,255,0.15)', border: 'none', color: '#fff', fontSize: 28, width: 44, height: 44, borderRadius: '50%', cursor: 'pointer' }} onClick={() => setGalleryOpen(false)}>✕</button>
            <div style={{ position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)', color: 'rgba(255,255,255,0.6)', fontSize: 13 }}>{activePhoto + 1} / {hotel.heroImages.length}</div>
          </div>
        )}
      </section>

      {/* ── SERVICIOS ─────────────────────────────────────────────────────── */}
      <section id="section-servicios" style={{ paddingTop: 40, paddingBottom: 40, borderBottom: '1px solid #F0F0F0' }}>
        <h2 style={sectionTitle}>✅ Servicios e instalaciones</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12 }}>
          {hotel.services.map((s) => (
            <div key={s.name} style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#F8FAFC', borderRadius: 12, padding: '12px 16px' }}>
              <span style={{ fontSize: 22 }}>{s.icon}</span>
              <span style={{ fontSize: 14, fontWeight: 500, color: '#272626' }}>{s.name}</span>
            </div>
          ))}
        </div>

        {/* Advantages */}
        <div style={{ marginTop: 28 }}>
          <h3 style={{ fontWeight: 700, fontSize: 18, color: '#272626', margin: '0 0 16px' }}>🏆 Ventajas de este alojamiento</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 10 }}>
            {hotel.advantages.map((adv, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, background: '#F0FDF4', borderRadius: 10, padding: '10px 14px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                  <path d="M20 6L9 17l-5-5" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span style={{ fontSize: 14, color: '#272626', lineHeight: '22px' }}>{adv}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HABITACIONES ──────────────────────────────────────────────────── */}
      <section id="section-habitaciones" style={{ paddingTop: 40, paddingBottom: 40, borderBottom: '1px solid #F0F0F0' }}>
        <h2 style={sectionTitle}>🛏️ Habitaciones disponibles</h2>

        {/* Room tabs */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
          {hotel.rooms.map((room, i) => (
            <button
              key={room.id}
              onClick={() => setActiveRoom(i)}
              style={{
                fontFamily:   "'Outfit', sans-serif",
                fontWeight:   i === activeRoom ? 700 : 500,
                fontSize:     13,
                background:   i === activeRoom ? '#226FCB' : '#F4F6F8',
                color:        i === activeRoom ? '#fff' : '#504F4F',
                border:       'none',
                borderRadius: 20,
                padding:      '8px 18px',
                cursor:       'pointer',
                transition:   'all 0.2s',
              }}
            >
              {room.name}
            </button>
          ))}
        </div>

        {hotel.rooms[activeRoom] && (() => {
          const room = hotel.rooms[activeRoom];
          return (
            <div style={{ display: 'flex', gap: 24, background: '#fff', borderRadius: 16, overflow: 'hidden', boxShadow: '0 2px 16px rgba(0,0,0,0.08)', flexWrap: 'wrap' }}>
              <img src={room.image} alt={room.name} style={{ width: 320, objectFit: 'cover', flexShrink: 0, maxHeight: 280 }} />
              <div style={{ flex: 1, padding: '24px 28px', minWidth: 260 }}>
                <h3 style={{ fontWeight: 800, fontSize: 20, color: '#272626', margin: '0 0 12px' }}>{room.name}</h3>
                <div style={{ display: 'flex', gap: 20, marginBottom: 16, flexWrap: 'wrap' }}>
                  <span style={infoChip}>📐 {room.size}</span>
                  <span style={infoChip}>🛏️ {room.beds}</span>
                  <span style={infoChip}>👤 Máx. {room.maxOccupancy} personas</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                  {room.amenities.map((a) => (
                    <span key={a} style={{ background: '#F4F6F8', fontSize: 12, color: '#504F4F', padding: '4px 10px', borderRadius: 8 }}>{a}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 20 }}>
                  {room.features.map((f, fi) => (
                    <div key={fi} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      <span style={{ fontSize: 13, color: '#504F4F' }}>{f}</span>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 16, borderTop: '1px solid #F0F0F0' }}>
                  <div>
                    <span style={{ fontSize: 11, color: '#8D8D8D' }}>Desde</span>
                    <div style={{ fontWeight: 800, fontSize: 24, color: '#272626' }}>{room.pricePerNight}</div>
                    <span style={{ fontSize: 11, color: '#8D8D8D' }}>por noche</span>
                  </div>
                  <button style={{ background: 'linear-gradient(135deg, #DF0032, #FF2C4E)', color: '#fff', border: 'none', borderRadius: 12, padding: '12px 24px', fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: "'Outfit', sans-serif" }}>
                    Reservar esta habitación
                  </button>
                </div>
              </div>
            </div>
          );
        })()}
      </section>

      {/* ── OPINIONES ─────────────────────────────────────────────────────── */}
      <section id="section-opiniones" style={{ paddingTop: 40, paddingBottom: 40, borderBottom: '1px solid #F0F0F0' }}>
        <h2 style={sectionTitle}>⭐ Opiniones de viajeros</h2>

        {/* Summary */}
        <div style={{ display: 'flex', gap: 28, marginBottom: 36, flexWrap: 'wrap', background: '#fff', borderRadius: 16, padding: 24, boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
          {/* Overall score */}
          <div style={{ textAlign: 'center', minWidth: 120 }}>
            <div style={{ fontWeight: 900, fontSize: 60, color: '#0D4E88', lineHeight: 1 }}>{hotel.reviewScore}</div>
            <div style={{ fontWeight: 700, fontSize: 16, color: '#272626', margin: '4px 0 2px' }}>{hotel.reviewLabel}</div>
            <StarRating count={Math.round(hotel.reviewScore / 2)} size={16} />
            <p style={{ fontSize: 12, color: '#8D8D8D', margin: '6px 0 0' }}>{hotel.reviewCount.toLocaleString()} opiniones</p>
          </div>
          {/* Breakdown */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10, minWidth: 220 }}>
            {hotel.reviewBreakdown.map((b) => (
              <div key={b.category} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontSize: 13, color: '#504F4F', minWidth: 180 }}>{b.category}</span>
                <ScoreBar score={b.score} />
              </div>
            ))}
          </div>
        </div>

        {/* Individual reviews */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 16 }}>
          {hotel.reviews.map((review, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 14, padding: '18px 20px', boxShadow: '0 2px 10px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <div style={{ width: 42, height: 42, borderRadius: '50%', background: review.avatarBg, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 13, flexShrink: 0 }}>
                  {review.avatar}
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: 700, fontSize: 15, color: '#272626', margin: '0 0 2px' }}>{review.name}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: 11, color: '#8D8D8D' }}>{review.country}</span>
                    <span style={{ fontSize: 11, color: '#CACACA' }}>·</span>
                    <span style={{ fontSize: 11, color: '#8D8D8D' }}>{review.travelType}</span>
                  </div>
                </div>
                <div style={{ background: '#0D4E88', color: '#fff', fontWeight: 800, fontSize: 14, padding: '5px 10px', borderRadius: '8px 8px 8px 0' }}>
                  {review.rating}
                </div>
              </div>
              <p style={{ fontSize: 14, color: '#504F4F', lineHeight: '22px', margin: 0 }}>"{review.text}"</p>
              <p style={{ fontSize: 12, color: '#CACACA', margin: 0 }}>{review.date}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── DESCRIPCIÓN ───────────────────────────────────────────────────── */}
      <section id="section-descripcion" style={{ paddingTop: 40, paddingBottom: 40, borderBottom: '1px solid #F0F0F0' }}>
        <h2 style={sectionTitle}>📖 Descripción del hotel</h2>
        <div style={{ background: '#fff', borderRadius: 16, padding: '24px 28px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
          <p style={{ fontSize: 15, lineHeight: '26px', color: '#272626', margin: '0 0 16px', fontWeight: 600 }}>{hotel.description}</p>
          <p style={{ fontSize: 15, lineHeight: '26px', color: '#504F4F', margin: 0 }}>{hotel.descriptionExtended}</p>
        </div>
      </section>

      {/* ── LUGARES CERCANOS ──────────────────────────────────────────────── */}
      <section id="section-lugares" style={{ paddingTop: 40, paddingBottom: 40, borderBottom: '1px solid #F0F0F0' }}>
        <h2 style={sectionTitle}>📍 Lugares de interés cercanos</h2>

        {/* Map placeholder */}
        <div style={{ width: '100%', height: 260, background: 'linear-gradient(135deg, #DBEAFE, #EFF6FF)', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, position: 'relative', overflow: 'hidden', border: '1px solid #BFDBFE' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 48, marginBottom: 8 }}>🗺️</div>
            <p style={{ fontWeight: 700, color: '#1D4ED8', margin: '0 0 4px' }}>Ver en mapa</p>
            <p style={{ fontSize: 13, color: '#3B82F6', margin: 0 }}>{hotel.address}</p>
          </div>
          {/* Pin icon center */}
          <div style={{ position: 'absolute', bottom: '35%', left: '50%', transform: 'translateX(-50%)' }}>
            <div style={{ background: '#DF0032', width: 20, height: 20, borderRadius: '50% 50% 50% 0', transform: 'rotate(-45deg)', border: '3px solid #fff', boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 12 }}>
          {hotel.nearbyPlaces.map((place, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, background: '#fff', borderRadius: 12, padding: '14px 16px', boxShadow: '0 1px 8px rgba(0,0,0,0.06)' }}>
              <span style={{ fontSize: 24 }}>{place.icon}</span>
              <div style={{ flex: 1 }}>
                <p style={{ fontWeight: 600, fontSize: 14, color: '#272626', margin: '0 0 2px' }}>{place.name}</p>
                <p style={{ fontSize: 12, color: '#8D8D8D', margin: 0 }}>{place.category}</p>
              </div>
              <span style={{ fontSize: 12, fontWeight: 700, color: '#226FCB', background: '#EEF5FF', padding: '3px 8px', borderRadius: 8, flexShrink: 0 }}>
                {place.distance}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONDICIONES ───────────────────────────────────────────────────── */}
      <section id="section-condiciones" style={{ paddingTop: 40, paddingBottom: 40, borderBottom: '1px solid #F0F0F0' }}>
        <h2 style={sectionTitle}>📋 Condiciones de la reserva</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16, marginBottom: 20 }}>
          {[
            { icon: '🏨', label: 'Check-in',   value: hotel.conditions.checkIn },
            { icon: '🚪', label: 'Check-out',  value: hotel.conditions.checkOut },
            { icon: '🍳', label: 'Desayuno',   value: hotel.conditions.breakfast },
            { icon: '↩️', label: 'Cancelación', value: hotel.conditions.cancellation },
          ].map((item) => (
            <div key={item.label} style={{ background: '#fff', borderRadius: 14, padding: '18px 20px', boxShadow: '0 1px 8px rgba(0,0,0,0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <span style={{ fontSize: 22 }}>{item.icon}</span>
                <span style={{ fontWeight: 700, fontSize: 15, color: '#272626' }}>{item.label}</span>
              </div>
              <p style={{ fontSize: 14, color: '#504F4F', margin: 0, lineHeight: '22px' }}>{item.value}</p>
            </div>
          ))}
        </div>
        <div style={{ background: '#F8FAFC', borderRadius: 14, padding: '18px 20px', border: '1px solid #EBEBEB' }}>
          <h4 style={{ fontWeight: 700, fontSize: 14, color: '#272626', margin: '0 0 12px' }}>Políticas adicionales</h4>
          <ul style={{ margin: 0, padding: '0 0 0 18px' }}>
            {hotel.conditions.extraPolicies.map((policy, i) => (
              <li key={i} style={{ fontSize: 14, color: '#504F4F', lineHeight: '24px', marginBottom: 4 }}>{policy}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── INFO ÚTIL ─────────────────────────────────────────────────────── */}
      <section id="section-info" style={{ paddingTop: 40, paddingBottom: 40, borderBottom: '1px solid #F0F0F0' }}>
        <h2 style={sectionTitle}>💡 Información útil</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
          {[
            { icon: '🗣️', label: 'Idiomas en el hotel', value: hotel.usefulInfo.languages.join(' · ') },
            { icon: '🏙️', label: 'Distancia al centro', value: hotel.usefulInfo.distanceCenter },
            { icon: '✈️', label: 'Aeropuerto más cercano', value: `${hotel.usefulInfo.airport} — ${hotel.usefulInfo.distanceAirport}` },
            { icon: '🚗', label: 'Estacionamiento', value: hotel.usefulInfo.parking },
            { icon: '🐾', label: 'Política de mascotas', value: hotel.usefulInfo.petsPolicy },
          ].map((item) => (
            <div key={item.label} style={{ background: '#fff', borderRadius: 14, padding: '16px 18px', boxShadow: '0 1px 8px rgba(0,0,0,0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                <span style={{ fontSize: 20 }}>{item.icon}</span>
                <span style={{ fontWeight: 700, fontSize: 14, color: '#272626' }}>{item.label}</span>
              </div>
              <p style={{ fontSize: 14, color: '#504F4F', margin: 0, lineHeight: '21px' }}>{item.value}</p>
            </div>
          ))}
          {/* Third-party validation */}
          <div style={{ background: '#fff', borderRadius: 14, padding: '16px 18px', boxShadow: '0 1px 8px rgba(0,0,0,0.06)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <span style={{ fontSize: 20 }}>🏅</span>
              <span style={{ fontWeight: 700, fontSize: 14, color: '#272626' }}>Validación de terceros</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              {hotel.usefulInfo.thirdPartyValidation.map((v, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span style={{ fontSize: 13, color: '#504F4F' }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOTELES CERCANOS ──────────────────────────────────────────────── */}
      <section style={{ paddingTop: 40, paddingBottom: 40, borderBottom: '1px solid #F0F0F0' }}>
        <h2 style={sectionTitle}>🏨 Otros hoteles en {hotel.city}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
          {hotel.nearbyHotels.map((h) => (
            <a
              key={h.slug}
              href={`/home/alojamientos/${hotel.countrySlug}/${hotel.citySlug}/${h.slug}`}
              style={{ textDecoration: 'none', background: '#fff', borderRadius: 14, overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.07)', display: 'block', transition: 'transform 0.2s, box-shadow 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 20px rgba(0,0,0,0.12)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ''; (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 10px rgba(0,0,0,0.07)'; }}
            >
              <img src={h.image} alt={h.name} style={{ width: '100%', height: 140, objectFit: 'cover' }} />
              <div style={{ padding: '12px 14px' }}>
                <StarRating count={h.stars} size={13} />
                <p style={{ fontWeight: 700, fontSize: 15, color: '#272626', margin: '4px 0 4px' }}>{h.name}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ background: '#0D4E88', color: '#fff', fontWeight: 800, fontSize: 13, padding: '3px 8px', borderRadius: 6 }}>{h.score}</span>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontWeight: 800, fontSize: 15, color: '#272626' }}>{h.pricePerNight}</span>
                    <span style={{ fontSize: 11, color: '#8D8D8D', display: 'block' }}>por noche</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── FAQs ──────────────────────────────────────────────────────────── */}
      <section id="section-faqs" style={{ paddingTop: 40, paddingBottom: 40, borderBottom: '1px solid #F0F0F0' }}>
        <h2 style={sectionTitle}>❓ Preguntas frecuentes</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {hotel.faqs.map((faq, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 14, overflow: 'hidden', boxShadow: '0 1px 8px rgba(0,0,0,0.06)', border: `1px solid ${activeFaq === i ? '#BFDBFE' : 'transparent'}` }}>
              <button
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: "'Outfit', sans-serif" }}
              >
                <span style={{ fontWeight: 600, fontSize: 15, color: '#272626', flex: 1, paddingRight: 16 }}>{faq.question}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, transition: 'transform 0.3s', transform: activeFaq === i ? 'rotate(180deg)' : '' }}>
                  <path d="M6 9l6 6 6-6" stroke="#226FCB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {activeFaq === i && (
                <div style={{ padding: '0 20px 18px' }}>
                  <p style={{ fontSize: 14, color: '#504F4F', lineHeight: '24px', margin: 0 }}>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── PRICE DISCLAIMER ──────────────────────────────────────────────── */}
      <div style={{ margin: '32px 0', padding: '16px 20px', background: '#FFF8E1', borderRadius: 12, border: '1px solid #FDE68A', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
        <span style={{ fontSize: 20 }}>⚠️</span>
        <div>
          <p style={{ fontWeight: 700, fontSize: 14, color: '#92400E', margin: '0 0 4px' }}>Aviso sobre los precios</p>
          <p style={{ fontSize: 13, color: '#92400E', margin: 0, lineHeight: '20px' }}>
            Los precios mostrados en esta página son de <strong>referencia</strong> y corresponden a búsquedas realizadas en {hotel.priceDate} para {hotel.priceGuests}.
            Los precios pueden variar según la fecha de reserva, disponibilidad, temporada y condiciones de cada tarifa.
            Multitravel no garantiza la disponibilidad ni los precios mostrados al momento de la reserva.
            Te recomendamos verificar el precio final antes de confirmar.
          </p>
        </div>
      </div>

      {/* Newsletter + Footer */}
      <NewsletterSection />
      <Footer />
    </div>
  );
}

// ── Shared styles ──────────────────────────────────────────────────────────────
const sectionTitle: React.CSSProperties = {
  fontFamily:    "'Outfit', sans-serif",
  fontWeight:    800,
  fontSize:      22,
  color:         '#272626',
  margin:        '0 0 24px',
  letterSpacing: '-0.2px',
};

const infoChip: React.CSSProperties = {
  background:   '#F4F6F8',
  borderRadius: 8,
  padding:      '5px 10px',
  fontSize:     13,
  color:        '#504F4F',
  fontWeight:   500,
};

const navBtn: React.CSSProperties = {
  position:   'absolute',
  left:       24,
  top:        '50%',
  transform:  'translateY(-50%)',
  background: 'rgba(255,255,255,0.15)',
  border:     'none',
  color:      '#fff',
  fontSize:   48,
  width:      56,
  height:     56,
  borderRadius: '50%',
  cursor:     'pointer',
  display:    'flex',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: 1,
};
