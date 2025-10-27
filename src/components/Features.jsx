import React from 'react'
import { CheckCircle2, Shield, Zap } from 'lucide-react'

const features = [
  {
    icon: <Zap className="h-5 w-5 text-indigo-400" />,
    title: 'Blazing fast',
    desc: 'Optimized build setup and snappy UI. Spend time building, not wiring.'
  },
  {
    icon: <Shield className="h-5 w-5 text-indigo-400" />,
    title: 'Best practices',
    desc: 'Accessible components, responsive layouts, and production-ready patterns.'
  },
  {
    icon: <CheckCircle2 className="h-5 w-5 text-indigo-400" />,
    title: 'Delightful DX',
    desc: 'Hot reloading, type-friendly patterns, and a clean structure you can extend.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Everything you need to start</h2>
          <p className="mt-3 text-slate-300">Modular pieces that cover the essentials so you can launch in hours, not weeks.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 shadow-sm">
              <div className="h-10 w-10 rounded-lg bg-indigo-500/10 flex items-center justify-center ring-1 ring-inset ring-white/10">
                {f.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-slate-300">{f.desc}</p>
              <div className="pointer-events-none absolute -inset-px opacity-0 hover:opacity-100 transition-opacity bg-[radial-gradient(120px_60px_at_top_left,rgba(99,102,241,0.18),transparent),radial-gradient(120px_60px_at_bottom_right,rgba(139,92,246,0.18),transparent)]" aria-hidden />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
