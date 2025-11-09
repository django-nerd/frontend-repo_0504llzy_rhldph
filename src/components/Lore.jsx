import React from 'react';
import { motion } from 'framer-motion';

export default function Lore() {
  return (
    <section id="lore" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl"
        >
          Lore: The Godæon Protocol
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05, duration: 0.6 }}
          className="mt-3 text-white/70"
        >
          In the wake of a failed peace initiative, black‑box AIs assume command of off‑ledger task forces. You aren’t the hero—you’re a variable in their calculus.
        </motion.p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {[
          {
            t: 'Sectors',
            d: 'Vertical mega‑cities fractured into corporate jurisdictions. Every block is a negotiation.',
          },
          {
            t: 'Operators',
            d: 'Augmented specialists with adaptive implants. Builds evolve as the AI observes your play.',
          },
          {
            t: 'Conflict Model',
            d: 'AI arbiters escalate from skirmish to siege based on telemetry—no two ops are alike.',
          },
        ].map((card, i) => (
          <motion.div
            key={card.t}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.6 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6 text-white/80 backdrop-blur-md"
          >
            <h3 className="text-white text-lg font-semibold">{card.t}</h3>
            <p className="mt-2 text-sm">{card.d}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
