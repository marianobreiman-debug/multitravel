import { notFound } from 'next/navigation';
import { getHotelCountry, getHotelCity } from '@/data/hotelCountries';
import { getHotelsByCity } from '@/data/hotels';
import { Header } from '@/components/home/Header';
import { HeroSearch } from '@/components/home/HeroSearch';
import { PageTransition } from '@/components/home/PageTransition';
import { HotelCityLanding } from '@/components/home/alojamientos/HotelCityLanding';
import { VerticalCrossSell } from '@/components/home/VerticalCrossSell';
import pageStyles from '@/components/home/vuelos/vuelos.module.css';

interface Props { params: Promise<{ country: string; city: string }> }

export async function generateMetadata({ params }: Props) {
  const { country: countryParam, city: cityParam } = await params;
  const city    = getHotelCity(countryParam, cityParam);
  const country = getHotelCountry(countryParam);
  if (!city || !country) return {};
  return {
    title: `Hoteles en ${city.name}, ${country.name} — Multitravel.com`,
    description: `Encontrá los mejores hoteles en ${city.name}. ${city.hotelCount} opciones disponibles desde ${city.fromPrice} por noche.`,
  };
}

export default async function HotelCityPage({ params }: Props) {
  const { country: countryParam, city: cityParam } = await params;
  const country = getHotelCountry(countryParam);
  const city    = getHotelCity(countryParam, cityParam);
  if (!country || !city) notFound();

  const hotels  = getHotelsByCity(countryParam, cityParam);
  const heroImg = city.image.replace('w=600', 'w=1400');

  return (
    <div style={{ minHeight: '100vh', background: '#F4F6F8', fontFamily: "'Outfit', sans-serif" }}>
      <Header />

      <HeroSearch
        heroImage={heroImg}
        breadcrumb={['Home', 'Alojamientos', `Hoteles en ${country.name}`, `Hoteles en ${city.name}`]}
        heroTitle={`Hoteles en ${city.name}`}
        compactMobileSearch={true}
      />

      <PageTransition>
        <>
          <main className={pageStyles.pageMain}>
            {/* Breadcrumb trail */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 40, flexWrap: 'wrap' }}>
              <a href="/home" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400, fontSize: 13, color: '#8D8D8D', textDecoration: 'none' }}>Inicio</a>
              <span style={{ color: '#CACACA', fontSize: 13 }}>›</span>
              <a href={`/home/alojamientos/${countryParam}`} style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400, fontSize: 13, color: '#226FCB', textDecoration: 'none' }}>Hoteles en {country.name}</a>
              <span style={{ color: '#CACACA', fontSize: 13 }}>›</span>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: 13, color: '#272626' }}>Hoteles en {city.name}</span>
            </div>

            <HotelCityLanding country={country} city={city} hotels={hotels} />
          </main>

          {/* Cross-sell: invitar a ver vuelos a la misma ciudad */}
          <VerticalCrossSell
            currentVertical="alojamientos"
            countrySlug={countryParam}
            countryName={country.name}
            citySlug={cityParam}
            cityName={city.name}
            heroImage={heroImg}
          />
        </>
      </PageTransition>
    </div>
  );
}
