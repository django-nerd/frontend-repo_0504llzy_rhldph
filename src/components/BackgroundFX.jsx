import React from 'react';

// Global background effects: soft radial glows, vignette, and film grain
export default function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-0">
      {/* Radial gradient glows */}
      <div className="absolute inset-0 opacity-60 mix-blend-screen">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl"
             style={{
               background: 'radial-gradient(closest-side, rgba(99,102,241,0.35), transparent 70%)',
             }}
        />
        <div className="absolute top-1/4 -right-20 h-[28rem] w-[28rem] rounded-full blur-3xl"
             style={{
               background: 'radial-gradient(closest-side, rgba(56,189,248,0.35), transparent 70%)',
             }}
        />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full blur-3xl"
             style={{
               background: 'radial-gradient(closest-side, rgba(147,51,234,0.25), transparent 70%)',
             }}
        />
      </div>

      {/* Subtle vignette */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(60% 60% at 50% 40%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 100%)'
      }} />

      {/* Film grain (noise) */}
      <div className="absolute inset-0 opacity-[0.07]"
           style={{
             backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(`
               <svg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'>
                 <filter id='n'>
                   <feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/>
                   <feColorMatrix type='saturate' values='0'/>
                 </filter>
                 <rect width='100%' height='100%' filter='url(%23n)' opacity='0.8'/>
               </svg>
             `)}")`
           }}
      />
    </div>
  );
}
