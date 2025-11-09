import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Instagram, Linkedin, Send, Mail } from 'lucide-react';

export default function Community() {
  return (
    <section id="community" className="relative bg-gradient-to-b from-black via-zinc-950 to-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center text-3xl font-bold tracking-tight"
        >
          Community & Intel Network
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Follow box - responsive, no overflow */}
          <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
            <h3 className="mb-4 font-semibold text-zinc-100">Follow</h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <a
                href="https://www.youtube.com/@godaeon"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950/60 px-3 py-2 text-sm text-zinc-200 transition hover:border-red-500/50 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500/40"
              >
                <Youtube className="text-red-500 transition-transform group-hover:scale-110" size={18} />
                <span className="whitespace-nowrap">YouTube</span>
              </a>
              <a
                href="https://www.instagram.com/godaeon_studio/?igsh=MTEwZTZ1NjNpbzVtdA=="
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950/60 px-3 py-2 text-sm text-zinc-200 transition hover:border-pink-500/50 hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-500/40"
              >
                <Instagram className="text-pink-500 transition-transform group-hover:scale-110" size={18} />
                <span className="whitespace-nowrap">Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/company/godaeon-studio/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950/60 px-3 py-2 text-sm text-zinc-200 transition hover:border-blue-500/50 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/40"
              >
                <Linkedin className="text-blue-500 transition-transform group-hover:scale-110" size={18} />
                <span className="whitespace-nowrap">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
          >
            <h3 className="mb-2 font-semibold text-zinc-100">Join our intel network — exclusive drops + updates.</h3>
            <p className="mb-4 text-sm text-zinc-400">Switch to your email provider later by swapping this form with their embed.</p>
            <div className="flex flex-col gap-3 md:flex-row">
              <input
                type="email"
                required
                placeholder="you@domain.com"
                className="w-full rounded-lg border border-zinc-800 bg-black/40 px-4 py-3 text-sm text-zinc-200 placeholder-zinc-500 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-600 to-fuchsia-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-900/30 transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
              >
                <Send size={16} /> Subscribe
              </button>
            </div>
          </form>

          {/* Contact */}
          <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
            <h3 className="mb-4 font-semibold text-zinc-100">Contact</h3>
            <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-300">
              <a
                href="mailto:hello@godaeon.com"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950/60 px-3 py-2 hover:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
              >
                <Mail size={16} className="text-cyan-400" /> Email
              </a>
              <a
                href="https://www.linkedin.com/company/godaeon-studio/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950/60 px-3 py-2 hover:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
              >
                <Linkedin size={16} className="text-blue-400" /> LinkedIn
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950/60 px-3 py-2 hover:border-green-500/50 focus:outline-none focus:ring-2 focus:ring-green-500/30"
              >
                Calendly
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
