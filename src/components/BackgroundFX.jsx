import React from 'react';

export default function BackgroundFX() {
  return (
    <div aria-hidden className="fixed inset-0 -z-0 pointer-events-none">
      {/* Deep backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0e] via-[#0a0a10] to-[#0a0a0e]" />
      {/* Radial glows */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full opacity-40 blur-3xl" style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(99,102,241,0.35) 0%, rgba(168,85,247,0.05) 60%, rgba(10,10,14,0) 100%)' }} />
      <div className="absolute bottom-[-300px] right-[-200px] w-[900px] h-[900px] rounded-full opacity-30 blur-3xl" style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(56,189,248,0.28) 0%, rgba(147,51,234,0.08) 55%, rgba(10,10,14,0) 100%)' }} />
      {/* Vignette */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(120% 120% at 50% 60%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 70%, rgba(0,0,0,0.7) 100%)' }} />
      {/* Grain */}
      <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'400\'><filter id=\'n\'><feTurbulence baseFrequency=\'0.65\' numOctaves=\'2\' stitchTiles=\'stitch\'/><feColorMatrix type=\'saturate\' values=\'0\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\'/></svg>" )' }} />
    </div>
  );
}
