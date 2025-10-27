import React, { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Check, Star, Rocket } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: '/mo',
    highlight: 'For exploring Swyra',
    features: [
      'Basic attach & run',
      'Community support',
      'Core updates',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Pro',
    price: '$8',
    period: '/mo',
    highlight: 'For creators and tinkerers',
    featured: true,
    features: [
      'Priority runtime',
      'Advanced logging',
      'Script profiles',
      'Early features access',
    ],
    cta: 'Upgrade to Pro',
  },
  {
    name: 'Team',
    price: '$19',
    period: '/mo',
    highlight: 'For small teams',
    features: [
      'Seats & roles',
      'Shared profiles',
      'Team insights',
      'Email support',
    ],
    cta: 'Contact Sales',
  },
]

const faqs = [
  {
    q: 'Is Swyra free to use?',
    a: 'Yes. The Starter plan is free for personal use. Pro and Team unlock more performance and collaboration features.'
  },
  {
    q: 'Does it work on low-end devices?',
    a: 'Yes. We optimized visuals and motion to remain smooth on a wide range of hardware. A reduced-motion mode is also planned.'
  },
  {
    q: 'Will my projects be safe?',
    a: 'Swyra is designed for stability and controlled testing. Always follow platform rules and local laws when experimenting.'
  },
]

const testimonials = [
  {
    name: 'Mia K.',
    role: 'Creator',
    quote: 'The UI feels snappy and the animations stay smooth even on my laptop. Love the vibe.'
  },
  {
    name: 'Alex R.',
    role: 'Scripter',
    quote: 'Swapped in and shipped a prototype the same night. Clean, focused, fast.'
  },
  {
    name: 'Sam P.',
    role: 'Hobbyist',
    quote: 'The dark theme and cosmic feel are perfect. It just gets out of the way and lets me build.'
  },
]

export default function Pricing() {
  const [open, setOpen] = useState(0)
  const prefersReduced = useReducedMotion()

  return (
    <section id="pricing" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: prefersReduced ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: prefersReduced ? 0.25 : 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Simple, fair pricing</h2>
          <p className="mt-3 text-slate-300">Pick a plan and start building. Cancel anytime.</p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: prefersReduced ? 0 : 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: prefersReduced ? 0.25 : 0.45, delay: i * 0.05 }}
              whileHover={prefersReduced ? undefined : { y: -4 }}
              className={`relative overflow-hidden rounded-2xl border ${p.featured ? 'border-pink-500/40' : 'border-white/10'} bg-white/5 p-6 will-change-transform`}>
              {p.featured && (
                <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-pink-600/20 px-2.5 py-1 text-xs font-medium text-pink-300 border border-pink-500/40">
                  <Star className="h-3.5 w-3.5" /> Popular
                </div>
              )}
              <div className="flex items-baseline gap-2">
                <h3 className="text-xl font-semibold text-white">{p.name}</h3>
              </div>
              <div className="mt-3 flex items-end gap-1">
                <div className="text-4xl font-extrabold text-white">{p.price}</div>
                <div className="text-slate-300">{p.period}</div>
              </div>
              <p className="mt-2 text-sm text-slate-300">{p.highlight}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-200">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-0.5"><Check className="h-4 w-4 text-pink-400" /></span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#download" className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-2.5 font-medium text-white border ${p.featured ? 'bg-pink-600/80 hover:bg-pink-600 border-pink-500/50' : 'bg-white/10 hover:bg-white/20 border-white/10'} transition-colors`}>
                {p.featured ? <Rocket className="h-4 w-4" /> : null} {p.cta}
              </a>
              <div className="pointer-events-none absolute -inset-px bg-[radial-gradient(120px_60px_at_top_left,rgba(236,72,153,0.14),transparent),radial-gradient(120px_60px_at_bottom_right,rgba(192,38,211,0.14),transparent)] opacity-0 hover:opacity-100 transition-opacity" aria-hidden />
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <section id="testimonials" className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: prefersReduced ? 0 : 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: prefersReduced ? 0.25 : 0.45 }}
            className="text-2xl font-semibold text-white text-center"
          >
            What users had to say
          </motion.h3>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={t.name}
                initial={{ opacity: 0, y: prefersReduced ? 0 : 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: prefersReduced ? 0.25 : 0.45, delay: i * 0.05 }}
                className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 will-change-transform"
              >
                <p className="text-slate-200">“{t.quote}”</p>
                <footer className="mt-4 text-sm text-slate-400">— {t.name}, {t.role}</footer>
                <div className="pointer-events-none absolute -inset-px opacity-0 hover:opacity-100 transition-opacity bg-[radial-gradient(120px_60px_at_top_left,rgba(236,72,153,0.16),transparent),radial-gradient(120px_60px_at_bottom_right,rgba(192,38,211,0.16),transparent)]" aria-hidden />
              </motion.blockquote>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: prefersReduced ? 0 : 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: prefersReduced ? 0.25 : 0.45 }}
            className="text-2xl font-semibold text-white text-center"
          >
            Frequently asked questions
          </motion.h3>
          <div className="mt-8 mx-auto max-w-3xl divide-y divide-white/10 rounded-xl border border-white/10 bg-white/5">
            {faqs.map((item, i) => (
              <div key={item.q} className="p-5">
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <span className="text-white font-medium">{item.q}</span>
                  <motion.span
                    initial={false}
                    animate={{ rotate: open === i ? 180 : 0 }}
                    className="text-slate-300"
                  >
                    ▼
                  </motion.span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: open === i ? 'auto' : 0, opacity: open === i ? 1 : 0 }}
                  transition={{ duration: prefersReduced ? 0.18 : 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="mt-3 text-slate-300">{item.a}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}
