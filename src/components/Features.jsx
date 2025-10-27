import React from 'react'
import { CheckCircle2, Shield, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: <Zap className="h-5 w-5 text-fuchsia-400" />,
    title: 'High performance',
    desc: 'Lean visuals and optimized UI so you can attach fast and iterate without stutter.'
  },
  {
    icon: <Shield className="h-5 w-5 text-fuchsia-400" />,
    title: 'Safety-first design',
    desc: 'Sandboxed runtime with smart guards to keep sessions stable while you test.'
  },
  {
    icon: <CheckCircle2 className="h-5 w-5 text-fuchsia-400" />,
    title: 'Creator friendly',
    desc: 'Clean layout, readable logs, and extensible modules for your workflow.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Everything you need for scripting</h2>
          <p className="mt-3 text-slate-300">Focused tools to run and iterate quickly in a controlled environment.</p>
        </motion.div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 shadow-sm"
            >
              <div className="h-10 w-10 rounded-lg bg-fuchsia-500/10 flex items-center justify-center ring-1 ring-inset ring-white/10">
                {f.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-slate-300">{f.desc}</p>
              <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(120px_60px_at_top_left,rgba(236,72,153,0.16),transparent),radial-gradient(120px_60px_at_bottom_right,rgba(192,38,211,0.16),transparent)]" aria-hidden />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
