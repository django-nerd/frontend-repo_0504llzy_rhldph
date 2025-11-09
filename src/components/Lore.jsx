import React from 'react';
import { motion } from 'framer-motion';

const items = [
  {
    title: 'The Fracture',
    text: 'An energy rift split the world into contested sectors. Factions weaponize anomalies for tactical gain.'
  },
  {
    title: 'Operators',
    text: 'Elite agents with divergent philosophies. Each brings doctrine‑level utility to squad compositions.'
  },
  {
    title: 'The Accord',
    text: 'A fragile peace collapsing under clandestine contracts. Your choices reshape the conflict.'
  },
];

export default function Lore() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white"
        >
          Lore Primer
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 backdrop-blur-xl"
            >
              <h3 className="text-lg font-bold text-white">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{it.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
