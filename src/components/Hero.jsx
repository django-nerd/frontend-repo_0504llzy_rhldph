import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

function MagneticButton({ children }) {
  const ref = useRef(null);

  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'translate(0px, 0px)';
  };

  return (
    <button
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-white/90 backdrop-blur-md transition-colors hover:bg-white/10"
    >
      <span ref={ref} className="relative z-[1]">{children}</span>
      <span className="pointer-events-none absolute inset-0 rounded-xl bg-fuchsia-500/10 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
    </button>
  );
}

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Spline scene as full-bleed background (no negative z-index) */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/igThmltzmqv5hkWo/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Foreground content */}
      <motion.div style={{ y, opacity }} className="relative mx-auto max-w-7xl px-6 sm:px-8 w-full">
        <div className="select-none">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
            Godæon Studio
          </h1>
          <p className="mt-3 max-w-2xl text-base sm:text-lg md:text-xl text-white/80">
            Next‑gen tactical FPS. Precision gunplay. Dynamic battlefields. Built for competitive supremacy.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <MagneticButton>Play Trailer</MagneticButton>
          <MagneticButton>Join Community</MagneticButton>
        </div>
      </motion.div>
    </section>
  );
}
