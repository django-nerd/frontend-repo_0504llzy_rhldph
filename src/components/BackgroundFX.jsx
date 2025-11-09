import React from 'react';

export default function BackgroundFX() {
  return (
    <div aria-hidden="true" className="fixed inset-0 pointer-events-none">
      {/* Radial gradient glows */}
      <div className="absolute inset-0 opacity-60 mix-blend-screen pointer-events-none">
        <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full blur-3xl bg-gradient-to-br from-fuchsia-500/50 to-blue-500/40" />
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full blur-3xl bg-gradient-to-tr from-blue-500/40 to-indigo-500/40" />
      </div>

      {/* Vignette overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background:
          'radial-gradient(80% 60% at 50% 50%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.6) 100%)'
      }} />

      {/* Film grain using SVG noise */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
}
