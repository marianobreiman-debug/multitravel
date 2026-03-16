// ─── Reusable skeleton / shimmer primitives ───────────────────────────────────

const SHIMMER_STYLE = `
  @keyframes shimmer {
    0%   { background-position: -600px 0; }
    100% { background-position:  600px 0; }
  }
  .skeleton-shimmer {
    background: linear-gradient(
      90deg,
      #E8EAED 25%,
      #F4F6F8 50%,
      #E8EAED 75%
    );
    background-size: 600px 100%;
    animation: shimmer 1.6s infinite linear;
    border-radius: 8px;
  }
`;

function ShimmerStyle() {
  return <style dangerouslySetInnerHTML={{ __html: SHIMMER_STYLE }} />;
}

function Bone({ width = '100%', height = 16, radius = 8, style }: {
  width?: string | number;
  height?: number;
  radius?: number;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className="skeleton-shimmer"
      style={{ width, height, borderRadius: radius, flexShrink: 0, ...style }}
    />
  );
}

// ─── Hero skeleton (same height as HeroSearch) ────────────────────────────────
export function HeroSkeleton() {
  return (
    <>
      <ShimmerStyle />
      <div style={{ background: '#C8D4E0', height: 340, position: 'relative', overflow: 'hidden' }}>
        <div
          className="skeleton-shimmer"
          style={{ position: 'absolute', inset: 0, borderRadius: 0, height: '100%', width: '100%' }}
        />
        {/* Title lines */}
        <div
          style={{
            position: 'absolute',
            bottom: 80,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'calc(100% - 126px)',
            maxWidth: 1240,
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
          }}
        >
          <Bone width={240} height={12} radius={6} style={{ marginBottom: 8 }} />
          <Bone width={380} height={32} radius={8} />
          <Bone width={320} height={32} radius={8} />
        </div>
      </div>
    </>
  );
}

// ─── Flight date card skeleton ────────────────────────────────────────────────
function FlightCardSkeleton() {
  return (
    <div style={{
      background: '#fff',
      borderRadius: 20,
      padding: '20px',
      boxShadow: '0px 4px 20px 0px rgba(39,38,38,0.10)',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
    }}>
      {/* Airline row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Bone width={44} height={44} radius={10} />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
          <Bone width="60%" height={14} />
          <Bone width="40%" height={11} />
        </div>
      </div>
      <Bone width="100%" height={1} radius={0} />
      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 16px' }}>
        {[0,1,2,3].map(i => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            <Bone width="50%" height={10} />
            <Bone width="70%" height={14} />
          </div>
        ))}
      </div>
      <Bone width="100%" height={1} radius={0} />
      {/* Price + CTA */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          <Bone width={60} height={10} />
          <Bone width={100} height={24} />
        </div>
        <Bone width={110} height={40} radius={32} />
      </div>
    </div>
  );
}

// ─── Destination page skeleton ────────────────────────────────────────────────
export function DestinationPageSkeleton() {
  return (
    <>
      <ShimmerStyle />
      <HeroSkeleton />
      <div style={{
        maxWidth: 1240,
        width: 'calc(100% - 126px)',
        margin: '0 auto',
        padding: '48px 0 80px',
      }}>
        {/* Back link */}
        <Bone width={120} height={14} style={{ marginBottom: 40 }} />
        {/* Section title */}
        <Bone width={280} height={24} style={{ marginBottom: 10 }} />
        <Bone width={440} height={14} style={{ marginBottom: 32 }} />
        {/* Flight cards 3-col */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginBottom: 56 }}>
          <FlightCardSkeleton />
          <FlightCardSkeleton />
          <FlightCardSkeleton />
        </div>
        {/* Content section */}
        <Bone width={180} height={12} style={{ marginBottom: 8 }} />
        <Bone width={240} height={24} style={{ marginBottom: 12 }} />
        <Bone width="70%" height={14} style={{ marginBottom: 6 }} />
        <Bone width="55%" height={14} style={{ marginBottom: 32 }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 40 }}>
          {[0,1,2,3].map(i => (
            <div key={i} style={{ background: '#fff', borderRadius: 16, padding: 20, display: 'flex', alignItems: 'center', gap: 14, boxShadow: '0px 2px 8px 0px rgba(39,38,38,0.05)' }}>
              <Bone width={48} height={48} radius={12} />
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
                <Bone width="50%" height={10} />
                <Bone width="80%" height={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// ─── Country card skeleton ─────────────────────────────────────────────────────
function CountryCardSkeleton() {
  return (
    <div style={{
      background: '#fff',
      borderRadius: 20,
      overflow: 'hidden',
      boxShadow: '0px 4px 20px 0px rgba(39,38,38,0.10)',
    }}>
      <Bone width="100%" height={180} radius={0} />
      <div style={{ padding: '16px 20px 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <Bone width="60%" height={18} />
        <div style={{ display: 'flex', gap: 6 }}>
          <Bone width={56} height={22} radius={20} />
          <Bone width={56} height={22} radius={20} />
          <Bone width={56} height={22} radius={20} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 4 }}>
          <Bone width={90} height={20} />
          <Bone width={100} height={36} radius={32} />
        </div>
      </div>
    </div>
  );
}

// ─── Country landing skeleton ─────────────────────────────────────────────────
export function CountryPageSkeleton() {
  return (
    <>
      <ShimmerStyle />
      <HeroSkeleton />
      <div style={{
        maxWidth: 1240,
        width: 'calc(100% - 126px)',
        margin: '0 auto',
        padding: '48px 0 80px',
      }}>
        <Bone width={120} height={14} style={{ marginBottom: 40 }} />
        <Bone width={180} height={12} style={{ marginBottom: 8 }} />
        <Bone width={300} height={28} style={{ marginBottom: 10 }} />
        <Bone width="60%" height={14} style={{ marginBottom: 6 }} />
        <Bone width="45%" height={14} style={{ marginBottom: 40 }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {[0,1,2,3,4,5].map(i => <CountryCardSkeleton key={i} />)}
        </div>
      </div>
    </>
  );
}
