import React from 'react'
import { Sparkles, Rocket } from 'lucide-react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[72vh] md:min-h-[82vh] overflow-hidden">
      {/* Spline full-cover background (lightweight cover asset) */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/kqB-rdL4TCJ7pyGb/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* One subtle gradient overlay that won't block interactions */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40"
        aria-hidden
      />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur">
            <Sparkles className="h-4 w-4 text-fuchsia-400" /> Fresh build
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Swyra — a modern Roblox scripting runtime
          </h1>
          <p className="mt-4 text-slate-300 text-lg">
            Smooth, creator-focused tooling with a clean UI and fast iteration. Lightweight visuals for great performance on any device.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#download"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white/10 px-5 py-3 text-white font-medium shadow hover:bg-white/20 transition-colors border border-white/10 backdrop-blur"
            >
              <Rocket className="h-4 w-4" /> Download
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#features"
              className="inline-flex items-center justify-center rounded-md bg-black/40 px-5 py-3 text-white font-medium border border-white/10 hover:bg-black/50 transition-colors"
            >
              See features
            </motion.a>
          </div>
          <p className="mt-3 text-xs text-slate-400">For learning and private testing. Respect platform rules and local laws.</p>
        </motion.div>
      </div>
    </section>
  )
}
