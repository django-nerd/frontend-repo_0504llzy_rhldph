import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, MessageSquare, Users } from 'lucide-react';

const cards = [
  {
    title: 'Discord',
    text: 'Dev logs, playtests, and theorycrafting with the team and community.',
    icon: MessageSquare,
    href: '#'
  },
  {
    title: 'Newsletter',
    text: 'Monthly drops with behind‑the‑scenes art, builds, and patch notes.',
    icon: Rocket,
    href: '#'
  },
  {
    title: 'Creator Program',
    text: 'Partner perks for streamers, editors, and tacticians shaping the meta.',
    icon: Users,
    href: '#'
  }
];

export default function Community() {
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
          Join the Community
        </motion.h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.a
              key={c.title}
              href={c.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true, amount: 0.3 }}
              className="group block rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 backdrop-blur-xl hover:bg-white/10"
            >
              <div className="flex items-center gap-3">
                <c.icon className="h-5 w-5 text-fuchsia-300" />
                <h3 className="text-lg font-semibold text-white">{c.title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{c.text}</p>
              <span className="mt-4 inline-block text-xs text-fuchsia-200/80 opacity-0 transition-opacity group-hover:opacity-100">Learn more →</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
