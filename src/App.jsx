import React, { useCallback, useState } from 'react';
import Hero from './components/Hero';
import Trailer from './components/Trailer';
import Lore from './components/Lore';
import Community from './components/Community';
import InvestorPortal from './components/InvestorPortal';

function App() {
  const [openInvestorFromHero, setOpenInvestorFromHero] = useState(false);

  const handleInvestorClick = useCallback(() => {
    // Toggle a state that InvestorPortal can react to via a key prop
    setOpenInvestorFromHero(true);
    setTimeout(() => setOpenInvestorFromHero(false), 50);
  }, []);

  return (
    <div className="min-h-screen bg-black font-sans text-white">
      <Hero onInvestorClick={handleInvestorClick} />
      <main>
        <Trailer />
        <Lore />
        <Community />
        <InvestorPortal key={openInvestorFromHero ? 'open' : 'closed'} />
      </main>
      <footer className="bg-black py-10 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Godæon Studio — All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
