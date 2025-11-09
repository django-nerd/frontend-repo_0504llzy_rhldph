import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function Trailer() {
  return (
    <section id="trailer" className="relative z-10 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <motion.h2
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-3xl sm:text-4xl font-semibold"
          >
            Cinematic Reveal
          </motion.h2>
          <motion.p
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
            className="text-white/60 max-w-md text-sm"
          >
            In-engine footage showcasing dynamic lighting, recoil model, and tactical movement.
          </motion.p>
        </div>

        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-10 relative group"
        >
          <div className="aspect-video w-full rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1&playsinline=1"
              title="Reveal Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <button
            type="button"
            className="absolute inset-0 m-auto h-16 w-16 grid place-items-center rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-white opacity-0 group-hover:opacity-100 transition"
            aria-label="Play"
          >
            <Play />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
