import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Image metadata
export const alt = 'TakeTheProfit';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A0B0D',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            background: '#00FF66',
            width: 300,
            height: 300,
            borderRadius: 60,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
          }}
        >
          {/* Black arrow inside the green box */}
          <svg
            width="150"
            height="150"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 20L12 4M5 11L12 4L19 11" />
          </svg>
        </div>
        <div
          style={{
            color: '#ffffff',
            fontSize: 72,
            fontWeight: 'bold',
            letterSpacing: '-0.05em',
          }}
        >
          TAKETHEPROFIT
        </div>
        <div
          style={{
            color: '#00FF66',
            fontSize: 32,
            fontWeight: 'bold',
            letterSpacing: '0.1em',
            marginTop: 20,
          }}
        >
          AI TRADE EXIT AGENT
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
