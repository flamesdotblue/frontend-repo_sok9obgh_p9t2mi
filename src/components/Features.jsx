import React from 'react'
import { CheckCircle2, Shield, Zap } from 'lucide-react'

const features = [
  {
    icon: <Zap className="h-5 w-5 text-indigo-600" />,
    title: 'Fast by default',
    desc: 'Optimized build setup and snappy UI. Spend time building, not wiring.'
  },
  {
    icon: <Shield className="h-5 w-5 text-indigo-600" />,
    title: 'Best practices',
    desc: 'Accessible components, responsive layouts, and production-ready patterns.'
  },
  {
    icon: <CheckCircle2 className="h-5 w-5 text-indigo-600" />,
    title: 'DX you’ll love',
    desc: 'Hot reloading, type-friendly patterns, and clean file structure.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Everything you need to start</h2>
          <p className="mt-3 text-slate-600">Modular components that cover the essentials so you can launch in hours, not weeks.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="h-10 w-10 rounded-lg bg-indigo-50 flex items-center justify-center">
                {f.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
