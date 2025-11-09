import React from 'react';
import { motion } from 'framer-motion';

export default function Trailer() {
  return (
    <section id="trailer" className="relative bg-gradient-to-b from-black via-zinc-950 to-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center text-3xl font-bold tracking-tight"
        >
          Red Line Nation – Teaser
        </motion.h2>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 p-2 shadow-2xl"
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/5 to-red-500/10" />
            <div className="relative aspect-[9/16] w-full overflow-hidden rounded-xl">
              <iframe
                width="360"
                height="640"
                src="https://www.youtube.com/embed/PEbQYZvXBJc"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center gap-4"
          >
            <p className="text-zinc-300">
              Precision tactics. High-stakes operations. A world on the brink. Red Line Nation brings
              relentless firefights into cinematic focus with competitive depth and a pulse of danger.
            </p>
            <ul className="grid grid-cols-2 gap-3 text-sm text-zinc-400">
              <li className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-3">Ultra-low latency netcode</li>
              <li className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-3">Tactical gadgets & breaching</li>
              <li className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-3">Destructible environments</li>
              <li className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-3">Esports-ready modes</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
