import React, { useRef } from 'react'
import { Sparkles, Rocket } from 'lucide-react'
import Spline from '@splinetool/react-spline'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 80])
  const vignetteOpacity = useTransform(scrollYProgress, [0, 1], [0.4, 0.7])

  return (
    <section ref={ref} className="relative min-h-[78vh] md:min-h-[85vh] overflow-hidden">
      {/* Spline full-cover background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient and vignette overlays that do not block pointer events */}
      <motion.div
        style={{ opacity: vignetteOpacity }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,10,11,0)_0%,rgba(10,10,11,0.2)_55%,rgba(10,10,11,0.65)_100%)]"
        aria-hidden
      />
      <motion.div
        style={{ y: yParallax }}
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"
        aria-hidden
      />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur">
            <Sparkles className="h-4 w-4 text-indigo-400" /> New release
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Roblox scripting runtime built for creators
          </h1>
          <p className="mt-4 text-slate-300 text-lg">
            A streamlined environment for running and testing Lua scripts in a controlled, educational context. Clean UI, fast attach, and a delightful experience.
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
