import { notFound } from 'next/navigation';
import { getHotel } from '@/data/hotels';
import { getHotelCountry } from '@/data/hotelCountries';
import { Header } from '@/components/home/Header';
import { HeroSearch } from '@/components/home/HeroSearch';
import { PageTransition } from '@/components/home/PageTransition';
import { HotelDetail } from '@/components/home/alojamientos/HotelDetail';
import pageStyles from '@/components/home/vuelos/vuelos.module.css';

interface Props { params: { country: string; city: string; hotel: string } }

export async function generateMetadata({ params }: Props) {
  const hotel = getHotel(params.country, params.city, params.hotel);
  if (!hotel) return {};
  return {
    title: `${hotel.name} — ${hotel.city}, ${hotel.country} | Multitravel.com`,
    description: hotel.description,
  };
}

export default function HotelDetailPage({ params }: Props) {
  const hotel   = getHotel(params.country, params.city, params.hotel);
  const country = getHotelCountry(params.country);
  if (!hotel || !country) notFound();

  return (
    <div style={{ minHeight: '100vh', background: '#F4F6F8', fontFamily: "'Outfit', sans-serif" }}>
      <Header />

      <HeroSearch
        heroImage={hotel.heroImage}
        breadcrumb={hotel.breadcrumb}
        heroTitle={hotel.name}
        compactMobileSearch={true}
      />

      <PageTransition>
        <main className={pageStyles.pageMain} style={{ paddingTop: 0 }}>
          <HotelDetail hotel={hotel} countrySlug={params.country} />
        </main>
      </PageTransition>
    </div>
  );
}
