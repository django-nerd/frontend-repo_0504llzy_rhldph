import React from 'react';
import BackgroundFX from './components/BackgroundFX.jsx';
import Hero from './components/Hero.jsx';
import Trailer from './components/Trailer.jsx';
import Lore from './components/Lore.jsx';
import Community from './components/Community.jsx';
import InvestorPortal from './components/InvestorPortal.jsx';

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <BackgroundFX />

      <header className="relative z-20 mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#" className="text-lg font-semibold tracking-wide">Godæon Studio</a>
        <nav className="hidden gap-6 text-sm text-white/70 md:flex">
          <a className="transition-colors hover:text-white" href="#trailer">Teaser</a>
          <a className="transition-colors hover:text-white" href="#lore">Lore</a>
          <a className="transition-colors hover:text-white" href="#community">Community</a>
          <a className="transition-colors hover:text-white" href="#invest">Invest</a>
        </nav>
      </header>

      <main className="relative z-10">
        <Hero />
        <Trailer />
        <Lore />
        <Community />
        <InvestorPortal />
      </main>

      <footer className="relative z-10 border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
          <p className="text-white/50">© {new Date().getFullYear()} Godæon Studio. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <a href="#" className="hover:text-white">Privacy</a>
            <span className="opacity-30">•</span>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
