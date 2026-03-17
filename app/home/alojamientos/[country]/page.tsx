import { notFound } from 'next/navigation';
import { getHotelCountry } from '@/data/hotelCountries';
import { Header } from '@/components/home/Header';
import { HeroSearch } from '@/components/home/HeroSearch';
import { PageTransition } from '@/components/home/PageTransition';
import { HotelCountryLanding } from '@/components/home/alojamientos/HotelCountryLanding';
import pageStyles from '@/components/home/vuelos/vuelos.module.css';

interface Props { params: { country: string } }

export async function generateMetadata({ params }: Props) {
  const country = getHotelCountry(params.country);
  if (!country) return {};
  return {
    title: `Hoteles en ${country.name} — Multitravel.com`,
    description: country.intro,
  };
}

export default function HotelCountryPage({ params }: Props) {
  const country = getHotelCountry(params.country);
  if (!country) notFound();

  return (
    <div style={{ minHeight: '100vh', background: '#F4F6F8', fontFamily: "'Outfit', sans-serif" }}>
      <Header />

      <HeroSearch
        heroImage={country.heroImage}
        breadcrumb={['Home', 'Alojamientos', `Hoteles en ${country.name}`]}
        heroTitle={`Hoteles baratos en ${country.name}`}
        compactMobileSearch={true}
      />

      <PageTransition>
        <main className={pageStyles.pageMain}>
          <a
            href="/home"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: 14, color: '#226FCB', textDecoration: 'none', marginBottom: 40 }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M5 12l7 7M5 12l7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Volver al inicio
          </a>

          <HotelCountryLanding country={country} />
        </main>
      </PageTransition>
    </div>
  );
}
