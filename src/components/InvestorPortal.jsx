import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, FileDown, Play } from 'lucide-react';

const VALID_PASSWORD = 'godaeon2025';

export default function InvestorPortal() {
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === VALID_PASSWORD) {
      setAuthenticated(true);
    }
  };

  return (
    <section id="investor" className="relative bg-black py-24 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Investor Access – Confidential</h2>
          <button
            onClick={() => setOpen(true)}
            className="rounded-full border border-zinc-800 bg-zinc-900/60 px-5 py-2 text-sm text-zinc-200 backdrop-blur transition hover:border-cyan-500 hover:text-white"
          >
            Open Portal
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4"
            >
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 120, damping: 18 }}
                className="relative w-full max-w-md overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-950 to-zinc-900 p-6 shadow-2xl"
              >
                <div className="absolute inset-0 pointer-events-none bg-[conic-gradient(from_140deg_at_50%_50%,rgba(0,255,255,0.06),transparent_30%,rgba(244,63,94,0.06),transparent_70%)]" />
                <button
                  onClick={() => setOpen(false)}
                  className="absolute right-3 top-3 rounded-md border border-zinc-800 bg-zinc-900/60 px-2 py-1 text-xs text-zinc-400 hover:text-white"
                >
                  Close
                </button>

                {!authenticated ? (
                  <form onSubmit={handleSubmit} className="relative">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-black/40 px-3 py-1 text-xs text-cyan-200">
                      <Lock size={14} className="text-cyan-400" /> Confidential
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">Enter Access Key</h3>
                    <p className="mb-5 text-sm text-zinc-400">Authorized investors only. This portal contains sensitive materials.</p>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      placeholder="Access key"
                      className="mb-4 w-full rounded-lg border border-zinc-800 bg-black/40 px-4 py-3 text-sm text-zinc-200 placeholder-zinc-500 outline-none focus:border-cyan-500"
                    />
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-gradient-to-r from-cyan-600 to-fuchsia-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-900/30 transition-transform hover:scale-[1.01]"
                    >
                      Unlock
                    </button>
                  </form>
                ) : (
                  <div className="relative">
                    <h3 className="mb-2 text-xl font-semibold">Investor Hub</h3>
                    <p className="mb-5 text-sm text-zinc-400">Briefing, deck, and prototype preview.</p>

                    <div className="mb-6 rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
                      <div className="mb-3 font-semibold">Investor Briefing – Confidential</div>
                      <div className="aspect-video w-full overflow-hidden rounded-lg">
                        <iframe
                          src="https://www.youtube.com/embed/PEbQYZvXBJc"
                          title="Teaser"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="h-full w-full"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <div className="mb-6 flex flex-wrap items-center gap-3">
                      <a href="#" className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm text-zinc-200 transition hover:border-cyan-500/50">
                        <FileDown size={16} className="text-cyan-400"/> Pitch Deck (PDF)
                      </a>
                      <a href="#" className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm text-zinc-200 transition hover:border-red-500/50">
                        <Play size={16} className="text-red-400"/> Prototype Download
                      </a>
                    </div>

                    <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
                      <div className="mb-2 font-semibold">Vision & Mission</div>
                      <p className="text-sm text-zinc-300">We build precision tactical shooters with cinematic immersion and competitive integrity. Our mission is to push the genre forward—systems-first, community-driven, esports-ready.</p>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
