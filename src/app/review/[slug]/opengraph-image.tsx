import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';
export const alt = 'Product Review';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title = slug.replace(/-/g, ' ').toUpperCase();

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#0f172a',
          padding: '80px',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            color: '#38bdf8',
            fontSize: 24,
            fontWeight: 600,
            marginBottom: 16,
          }}
        >
          PRODUCT REVIEW & RATING
        </div>
        <div style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.2 }}>
          {title}
        </div>
      </div>
    ),
    { ...size }
  );
}