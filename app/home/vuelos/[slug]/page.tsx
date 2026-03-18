import { notFound } from 'next/navigation';
import { getCountry } from '@/data/countries';
import { Header } from '@/components/home/Header';
import { HeroSearch } from '@/components/home/HeroSearch';
import { PageTransition } from '@/components/home/PageTransition';
import { CountryLanding } from '@/components/home/vuelos/CountryLanding';
import { VerticalCrossSell } from '@/components/home/VerticalCrossSell';
import pageStyles from '@/components/home/vuelos/vuelos.module.css';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const country = getCountry(slug);
  if (!country) return {};
  return {
    title: `Vuelos a ${country.name} — Multitravel.com`,
    description: country.intro,
  };
}

export default async function CountryPage({ params }: Props) {
  const { slug } = await params;
  const country = getCountry(slug);
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
        <>
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

          {/* Cross-sell: invitar a ver alojamientos en el mismo país */}
          <VerticalCrossSell
            currentVertical="vuelos"
            countrySlug={slug}
            countryName={country.name}
            heroImage={country.heroImage}
          />
        </>
      </PageTransition>
    </div>
  );
}
