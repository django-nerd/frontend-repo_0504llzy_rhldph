import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const text = `FIRST MISSION REPORT:\n\nUnit Ghostline deployed at 0300. Entry was clean.\nThermal signatures matched projections—until they didn’t.\n\nUnknown interference severed comms. Red static bled across our HUDs.\nA door opened where the blueprint showed a wall.\n\nWe walked through. The building breathed. And something watched back.`;

export default function Lore() {
  const [display, setDisplay] = useState('');

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setDisplay(text.slice(0, i++));
      if (i > text.length) clearInterval(id);
    }, 18);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="lore" className="relative overflow-hidden bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.08),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(244,63,94,0.07),transparent_50%)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center text-3xl font-bold tracking-tight"
        >
          First Mission Report
        </motion.h2>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-6 backdrop-blur">
          <div className="mb-4 h-1 w-full bg-gradient-to-r from-cyan-500 via-zinc-600 to-red-500" />
          <pre className="whitespace-pre-wrap font-mono text-sm leading-7 text-zinc-200">
            <span className="[text-shadow:_0_0_8px_rgba(0,255,255,0.35)]">
              {display}
            </span>
          </pre>
          <div className="mt-6 text-xs text-zinc-500">CLASSIFIED – EYES ONLY</div>
        </div>
      </div>
    </section>
  );
}
