import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Users, MessageSquare } from 'lucide-react';

const items = [
  {
    title: 'Discord',
    desc: 'Get dev logs, early tests, and squad up with the community.',
    href: 'https://discord.com',
    Icon: MessageSquare,
  },
  {
    title: 'Newsletter',
    desc: 'Monthly progress beats, playtest signups, and drops.',
    href: '#',
    Icon: Rocket,
  },
  {
    title: 'Follow',
    desc: 'Stay in the loop across platforms and fresh reveals.',
    href: 'https://twitter.com',
    Icon: Users,
  },
];

export default function Community() {
  return (
    <section id="community" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl"
        >
          Join the community
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05, duration: 0.6 }}
          className="mt-3 text-white/70"
        >
          Be first to test experimental builds and help shape the meta.
        </motion.p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ title, desc, href, Icon }) => (
          <motion.a
            key={title}
            href={href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-colors hover:bg-white/10"
          >
            <div className="absolute -inset-20 -z-10 rounded-full opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-40"
                 style={{ background: 'radial-gradient(closest-side, rgba(99,102,241,0.35), rgba(56,189,248,0.25), transparent 70%)' }} />
            <div className="flex items-start gap-4">
              <div className="rounded-lg border border-white/10 bg-white/10 p-3 text-white">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-1 text-sm text-white/70">{desc}</p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
