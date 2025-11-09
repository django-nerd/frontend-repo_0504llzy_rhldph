import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

function MagneticButton({ children, href }) {
  const ref = useRef(null);

  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
    const glow = el.querySelector('.glow');
    if (glow) {
      glow.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
      glow.style.opacity = '1';
    }
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'translate(0, 0)';
    const glow = el.querySelector('.glow');
    if (glow) glow.style.opacity = '0.6';
  };

  const Inner = (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative isolate inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white/90 backdrop-blur-md transition-colors hover:bg-white/10"
    >
      <span className="absolute glow -inset-px -z-10 rounded-full opacity-60 blur-xl transition-opacity"
            style={{
              background: 'radial-gradient(closest-side, rgba(99,102,241,0.45), rgba(56,189,248,0.35), transparent 70%)'
            }}
      />
      {children}
    </div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {Inner}
      </a>
    );
  }
  return Inner;
}

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  return (
    <section ref={containerRef} className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden">
      <motion.div style={{ y, opacity }} className="relative h-[70vh] w-full">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/7L1HJbX1o3SWTr2S/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-balance bg-gradient-to-b from-white to-white/60 bg-clip-text text-5xl font-semibold leading-tight text-transparent md:text-6xl"
        >
          Godæon Studio presents a next‑gen tactical FPS
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%'}}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mt-4 max-w-2xl text-lg text-white/70"
        >
          Ultra‑responsive gunplay, AI‑driven encounters, and cinematic immersion — optimized for high refresh and low latency.
        </motion.p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <MagneticButton href="#trailer">Watch teaser</MagneticButton>
          <MagneticButton href="#community">Join community</MagneticButton>
        </div>
      </div>
    </section>
  );
}
