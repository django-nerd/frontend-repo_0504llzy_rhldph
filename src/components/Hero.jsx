import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero({ onInvestorClick }) {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient to improve text contrast without blocking Spline interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />

      {/* Top navigation */}
      <div className="relative z-10 flex items-center justify-between px-6 py-6 md:px-10">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-indigo-300 to-fuchsia-600 shadow-inner" />
          <span className="font-semibold tracking-widest text-zinc-200">GODÆON STUDIO</span>
        </div>
        <div className="flex items-center gap-3">
          <a href="#trailer" className="text-sm text-zinc-300 transition-colors hover:text-white">Trailer</a>
          <a href="#lore" className="text-sm text-zinc-300 transition-colors hover:text-white">Lore</a>
          <button
            onClick={onInvestorClick}
            className="group inline-flex items-center gap-2 rounded-full border border-indigo-400/40 bg-black/30 px-4 py-2 text-sm font-medium text-indigo-200 backdrop-blur transition-all hover:border-indigo-300 hover:text-indigo-100"
          >
            <Shield size={16} className="text-indigo-300" />
            Investor Access
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex h-[calc(100vh-88px)] max-w-6xl flex-col items-center justify-center px-6 text-center md:px-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="select-none text-4xl font-extrabold tracking-tight text-white md:text-6xl"
        >
          <span className="relative inline-block">
            <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-indigo-400/30 via-sky-300/20 to-fuchsia-400/30 blur-lg" aria-hidden />
            <span className="relative bg-gradient-to-r from-indigo-300 via-slate-100 to-fuchsia-300 bg-clip-text text-transparent">
              Tactical FPS for a New Era
            </span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="mt-5 max-w-2xl text-zinc-300"
        >
          Cinematic gunplay, competitive precision, and a living world of covert operations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#trailer"
            className="relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-900/30 transition-transform hover:scale-[1.02] focus:outline-none"
          >
            Watch Teaser
            <ArrowRight size={16} />
            <span className="absolute inset-0 -translate-x-full bg-white/20 mix-blend-overlay transition-transform duration-700 hover:translate-x-0" />
          </a>
          <button
            onClick={onInvestorClick}
            className="relative overflow-hidden rounded-full border border-zinc-700/80 bg-zinc-900/60 px-6 py-3 text-sm font-semibold text-zinc-200 backdrop-blur transition hover:border-zinc-500 hover:text-white"
          >
            Investor Access – Confidential
            <span className="pointer-events-none absolute inset-0 translate-x-[-150%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 hover:translate-x-[150%]" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
