import React from 'react';
import { motion } from 'framer-motion';

export default function Trailer() {
  return (
    <section id="trailer" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl"
        >
          Official Teaser
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mt-3 text-white/70"
        >
          A first glimpse into the world, systems, and feel of our tactical FPS.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.8 }}
        className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-black/20 shadow-2xl"
      >
        <div className="relative w-full pb-[56.25%]">
          <iframe
            title="Godæon Studio Teaser"
            src="https://www.youtube.com/embed/PEbQYZvXBJc"
            className="absolute left-0 top-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </motion.div>
    </section>
  );
}
