import React from 'react'
import { Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-violet-50" aria-hidden />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
              <Sparkles className="h-4 w-4" /> New launch
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Build beautiful apps, faster
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              A clean starting point with modern UI patterns, animations, and a delightful developer experience.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-white font-medium shadow hover:bg-indigo-700 transition-colors">
                Get started
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-slate-900 font-medium border border-slate-200 hover:bg-slate-50 transition-colors">
                See features
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              <div className="h-full w-full grid grid-cols-3 gap-2 p-4">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="rounded-lg bg-gradient-to-br from-indigo-100 to-violet-100 border border-indigo-200" />
                ))}
              </div>
            </div>
            <div className="pointer-events-none absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-violet-200/50 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
