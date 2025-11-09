import React from 'react';
import BackgroundFX from './components/BackgroundFX';
import Hero from './components/Hero';
import Trailer from './components/Trailer';
import Lore from './components/Lore';
import Community from './components/Community';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0b10] text-white antialiased">
      <BackgroundFX />

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 sm:px-8">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-fuchsia-500 to-blue-500" />
            <span className="text-sm font-semibold tracking-wider text-white/90">GODÆON STUDIO</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/70">
            <a href="#" className="hover:text-white">Trailer</a>
            <a href="#" className="hover:text-white">Lore</a>
            <a href="#" className="hover:text-white">Community</a>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main>
        <Hero />
        <Trailer />
        <Lore />
        <Community />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 text-center text-xs text-white/60">
        <p>© {new Date().getFullYear()} Godæon Studio. All rights reserved.</p>
      </footer>
    </div>
  );
}
