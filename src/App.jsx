import React from 'react';
import BackgroundFX from './components/BackgroundFX.jsx';
import Hero from './components/Hero.jsx';
import Trailer from './components/Trailer.jsx';
import Community from './components/Community.jsx';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0e] text-white overflow-x-hidden">
      <BackgroundFX />
      <Hero />
      <Trailer />
      <Community />
      <footer className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Godæon Studio — All rights reserved.</p>
          <div className="flex items-center gap-6 text-white/70">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
