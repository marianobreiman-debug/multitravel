import { notFound } from 'next/navigation';
import { getCountry } from '@/data/countries';
import { Header } from '@/components/home/Header';
import { HeroSearch } from '@/components/home/HeroSearch';
import { PageTransition } from '@/components/home/PageTransition';
import { CountryLanding } from '@/components/home/vuelos/CountryLanding';
import pageStyles from '@/components/home/vuelos/vuelos.module.css';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props) {
  const country = getCountry(params.slug);
  if (!country) return {};
  return {
    title: `Vuelos a ${country.name} — Multitravel.com`,
    description: country.intro,
  };
}

export default function CountryPage({ params }: Props) {
  const country = getCountry(params.slug);
  if (!country) notFound();

  const breadcrumb = ['Home', 'Vuelos', `Vuelos a ${country.name}`];

  return (
    <div style={{ minHeight: '100vh', background: '#F4F6F8', fontFamily: "'Outfit', sans-serif" }}>
      <Header />

      <HeroSearch
        heroImage={country.heroImage}
        breadcrumb={breadcrumb}
        heroTitle={`Vuelos baratos a ${country.name}`}
        compactMobileSearch={true}
      />

      <PageTransition>
        <main className={pageStyles.pageMain}>
          {/* Back link */}
          <a
            href="/home"
            style={{
              display:        'inline-flex',
              alignItems:     'center',
              gap:            6,
              fontFamily:     "'Outfit', sans-serif",
              fontWeight:     500,
              fontSize:       14,
              color:          '#226FCB',
              textDecoration: 'none',
              marginBottom:   40,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M5 12l7 7M5 12l7-7"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Volver al inicio
          </a>

          <CountryLanding country={country} />
        </main>
      </PageTransition>
    </div>
  );
}
