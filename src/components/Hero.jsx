import React from 'react'
import { Sparkles } from 'lucide-react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[78vh] md:min-h-[85vh] overflow-hidden">
      {/* Spline full-cover background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/t7ourXf4CdN9XTF3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient and vignette overlays that do not block pointer events */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,10,11,0)_0%,rgba(10,10,11,0.2)_55%,rgba(10,10,11,0.65)_100%)]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" aria-hidden />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur">
            <Sparkles className="h-4 w-4 text-indigo-400" /> New launch
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Build futuristic apps, faster
          </h1>
          <p className="mt-4 text-slate-300 text-lg">
            A dark, cosmic aesthetic paired with modern UI patterns. Design, prototype, and ship with confidence.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex items-center justify-center rounded-md bg-white/10 px-5 py-3 text-white font-medium shadow hover:bg-white/20 transition-colors border border-white/10 backdrop-blur">
              Get started
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-md bg-black/40 px-5 py-3 text-white font-medium border border-white/10 hover:bg-black/50 transition-colors">
              See features
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
