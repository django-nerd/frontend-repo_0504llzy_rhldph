import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function InvestorPortal() {
  const [open, setOpen] = useState(false);

  return (
    <section id="invest" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl"
        >
          Investor Portal
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05, duration: 0.6 }}
          className="mt-3 text-white/70"
        >
          Access the latest deck, KPIs, and milestones.
        </motion.p>
      </div>

      <div className="mx-auto mt-8 max-w-md">
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
          <label htmlFor="code" className="block text-sm text-white/70">Access code</label>
          <input
            id="code"
            type="password"
            placeholder="Enter code"
            className="mt-2 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-white placeholder-white/40 outline-none focus:border-cyan-400/50"
          />
          <button
            onClick={() => setOpen(true)}
            className="mt-4 w-full rounded-lg border border-white/10 bg-white/10 px-4 py-2 text-white transition-colors hover:bg-white/20"
          >
            Unlock
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.4 }}
            className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3"
          >
            {[
              { t: 'Deck (PDF)', s: 'Updated Q4', href: '#' },
              { t: 'KPIs', s: 'DAU/MAU, Retention, Velocity', href: '#' },
              { t: 'Roadmap', s: 'Milestones & risks', href: '#' },
            ].map((item) => (
              <a
                key={item.t}
                href={item.href}
                className="rounded-xl border border-white/10 bg-white/5 p-5 text-white/80 backdrop-blur-md transition-colors hover:bg-white/10"
              >
                <h3 className="text-white font-semibold">{item.t}</h3>
                <p className="mt-1 text-sm">{item.s}</p>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
