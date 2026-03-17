import { notFound } from 'next/navigation';
import { getDestination } from '@/data/destinations';
import { getCountry } from '@/data/countries';
import { Header } from '@/components/home/Header';
import { HeroSearch } from '@/components/home/HeroSearch';
import { FlightDateCards } from '@/components/home/vuelos/FlightDateCards';
import { DestinationContent } from '@/components/home/vuelos/DestinationContent';
import { PageTransition } from '@/components/home/PageTransition';
import pageStyles from '@/components/home/vuelos/vuelos.module.css';

interface Props {
  params: { slug: string; destinationSlug: string };
}

export async function generateMetadata({ params }: Props) {
  const dest = getDestination(params.slug, params.destinationSlug);
  if (!dest) return {};
  return {
    title: `${dest.pageTitle} — Multitravel.com`,
    description: dest.content.intro,
  };
}

export default function VuelosDestinationPage({ params }: Props) {
  const dest    = getDestination(params.slug, params.destinationSlug);
  const country = getCountry(params.slug);
  if (!dest) notFound();

  return (
    <div style={{ minHeight: '100vh', background: '#F4F6F8', fontFamily: "'Outfit', sans-serif" }}>
      <Header />

      {/* Same HeroSearch — destination image, pre-filled origin + destination, 4-level breadcrumb */}
      <HeroSearch
        heroImage={dest.heroImage}
        initialOrigin="Buenos Aires"
        initialDestination={dest.destination}
        breadcrumb={dest.breadcrumb}
        heroTitle={`Vuelos baratos a ${dest.destination}`}
        compactMobileSearch={true}
      />

      <PageTransition>
        <main className={pageStyles.pageMain}>
          {/* Back links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 40 }}>
            <a
              href="/home"
              style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400, fontSize: 13, color: '#8D8D8D', textDecoration: 'none' }}
            >
              Inicio
            </a>
            <span style={{ color: '#CACACA', fontSize: 13 }}>›</span>
            <a
              href={`/home/vuelos/${dest.countrySlug}`}
              style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400, fontSize: 13, color: '#226FCB', textDecoration: 'none' }}
            >
              Vuelos a {dest.country}
            </a>
            <span style={{ color: '#CACACA', fontSize: 13 }}>›</span>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: 13, color: '#272626' }}>
              {dest.destination}
            </span>
          </div>

          {/* Section title */}
          <div style={{ marginBottom: 32 }}>
            <h2
              style={{
                fontFamily:    "'Outfit', sans-serif",
                fontWeight:    700,
                fontSize:      24,
                lineHeight:    '32px',
                letterSpacing: '-0.24px',
                color:         '#272626',
                margin:        '0 0 6px',
              }}
            >
              Opciones de fechas disponibles
            </h2>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400, fontSize: 15, color: '#8D8D8D', margin: 0 }}>
              Encontramos {dest.flightOffers.length} opciones de vuelo hacia {dest.destination}. Elegí la fecha que mejor se adapte a tu viaje.
            </p>
          </div>

          <FlightDateCards offers={dest.flightOffers} destination={dest.destination} />
          <DestinationContent content={dest.content} destination={dest.destination} />
        </main>
      </PageTransition>
    </div>
  );
}
