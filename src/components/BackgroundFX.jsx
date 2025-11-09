import React from 'react';

// Global cinematic background for all pages/sections
// Subtle purple/blue gradient wash + vignette + fine noise
export default function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      {/* Gradient wash (purple/blue) */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_15%_0%,rgba(99,102,241,0.14),transparent_60%),radial-gradient(1200px_600px_at_85%_100%,rgba(56,189,248,0.12),transparent_60%)]" />
      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(0,0,0,0.6))]" />
      {/* Fine noise texture */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'160\\' height=\\'160\\' viewBox=\\'0 0 160 160\\'><filter id=\\'n\\'><feTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.9\\' numOctaves=\\'3\\' stitchTiles=\\'stitch\\' /></filter><rect width=\\'100%\\' height=\\'100%\\' filter=\\'url(%23n)\\' opacity=\\'0.35\\'/></svg>')",
        }}
      />
    </div>
  );
}
