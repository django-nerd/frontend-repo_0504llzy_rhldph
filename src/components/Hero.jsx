import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Play } from 'lucide-react';

function MagneticButton({ children, href, variant = 'primary' }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const moveX = (x - rect.width / 2) * 0.08;
    const moveY = (y - rect.height / 2) * 0.08;
    el.style.transform = `translate(${moveX}px, ${moveY}px)`;
    const glow = el.querySelector('.btn-glow');
    if (glow) {
      glow.style.opacity = '0.9';
      glow.style.background = `radial-gradient(120px 120px at ${x}px ${y}px, rgba(255,255,255,0.35), rgba(255,255,255,0))`;
    }
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'translate(0,0)';
    const glow = el.querySelector('.btn-glow');
    if (glow) glow.style.opacity = '0';
  };

  const base = 'inline-flex items-center gap-3 rounded-xl px-6 py-3 transition-all will-change-transform select-none';
  const styles =
    variant === 'primary'
      ? 'bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white shadow-[0_10px_30px_-10px_rgba(168,85,247,.6)] hover:shadow-[0_18px_40px_-12px_rgba(99,102,241,.7)]'
      : 'border border-white/15 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white';

  return (
    <a
      href={href}
      className={`${base} ${styles} relative`}
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <span className="btn-glow pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 rounded-xl" />
      {children}
    </a>
  );
}

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0vh', '-20vh']);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const fade = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <section ref={containerRef} className="relative min-h-[110vh] w-full overflow-hidden">
      <motion.div style={{ y: parallaxY }} className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </motion.div>

      {/* Lightwash overlays - allow interaction */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0e]/10 via-transparent to-[#0a0a0e]/60" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(60% 50% at 50% 10%, rgba(99,102,241,0.25) 0%, rgba(10,10,14,0) 60%)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-28">
        <div className="flex items-center justify-between">
          <div className="pointer-events-auto">
            <a href="#" className="text-xs md:text-sm inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors">
              Pre-alpha access
              <ArrowRight size={14} className="opacity-70" />
            </a>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/70 pointer-events-auto">
            <a href="#trailer" className="hover:text-white transition">Trailer</a>
            <a href="#lore" className="hover:text-white transition">Lore</a>
            <a href="#community" className="hover:text-white transition">Community</a>
          </nav>
        </div>

        <motion.div style={{ y: titleY, opacity: fade }} className="mt-16">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]">
            <span className="bg-gradient-to-br from-indigo-300 via-white to-fuchsia-300 bg-clip-text text-transparent">Godæon</span>
            <span className="text-white/80"> — Tactical FPS</span>
          </h1>
          <p className="mt-6 max-w-2xl text-white/70 text-lg">
            Next-generation ballistics, dynamic extraction, and cooperative intel ops. Precision-first gunplay built for teams.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <MagneticButton href="#trailer" variant="primary">
              Watch trailer
              <Play size={18} />
            </MagneticButton>
            <MagneticButton href="#community" variant="secondary">
              Join community
              <ArrowRight size={18} />
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
