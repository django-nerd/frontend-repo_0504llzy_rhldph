import React from 'react';
import { motion } from 'framer-motion';
import { Send, Instagram, Youtube, Linkedin } from 'lucide-react';

const links = [
  { label: 'Discord', href: '#', icon: Send },
  { label: 'Instagram', href: '#', icon: Instagram },
  { label: 'YouTube', href: '#', icon: Youtube },
  { label: 'LinkedIn', href: '#', icon: Linkedin },
];

export default function Community() {
  return (
    <section id="community" className="relative z-10 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl sm:text-4xl font-semibold"
        >
          Join the community
        </motion.h2>
        <motion.p
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
          className="mt-3 text-white/60 max-w-2xl"
        >
          Get development updates, behind‑the‑scenes clips, and early playtest invites.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {links.map(({ label, href, icon: Icon }) => (
            <motion.a
              key={label}
              href={href}
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-md hover:bg-white/10 transition"
            >
              <div className="flex items-center justify-between">
                <div className="text-lg font-medium">{label}</div>
                <Icon className="opacity-70 group-hover:opacity-100 transition" size={20} />
              </div>
              <div className="pointer-events-none absolute -bottom-24 right-0 w-48 h-48 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition" style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(99,102,241,0.35) 0%, rgba(168,85,247,0.15) 60%, rgba(10,10,14,0) 100%)' }} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
