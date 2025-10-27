import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    features: ['Basic components', 'Community support', 'MIT license'],
  },
  {
    name: 'Pro',
    price: '$29',
    popular: true,
    features: ['Everything in Starter', 'Spline integrations', 'Priority support'],
  },
  {
    name: 'Team',
    price: '$79',
    features: ['All Pro features', 'Collaboration', 'Custom domains'],
  },
];

const faqs = [
  { q: 'Is the 3D interactive?', a: 'Yes, the hero supports pointer interaction and remains interactive under overlays.' },
  { q: 'Does it support reduced motion?', a: 'Absolutely. Heavy effects are skipped when the user prefers reduced motion.' },
  { q: 'Can I customize the theme?', a: 'Yes, colors and accents can be configured to match your brand.' },
];

export default function Pricing() {
  const [open, setOpen] = useState(0);
  const shouldReduce = useReducedMotion();

  return (
    <section id="pricing" className="relative bg-[#0a0a0b] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-slate-100"
          initial={shouldReduce ? false : { opacity: 0, y: 14 }}
          whileInView={shouldReduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
          transition={{ duration: 0.5 }}
        >
          Pricing
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              className={`relative rounded-xl border border-white/10 p-6 ${
                p.popular ? 'bg-white text-black' : 'bg-white/5 text-slate-300'
              }`}
              initial={shouldReduce ? false : { opacity: 0, y: 16 }}
              whileInView={shouldReduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              style={{ willChange: 'transform' }}
            >
              {p.popular && (
                <span className="absolute -top-3 right-4 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-600 px-3 py-1 text-xs font-semibold text-white shadow">Popular</span>
              )}
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="mt-2 text-3xl font-extrabold">{p.price}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className={`${p.popular ? 'text-black/70' : 'text-slate-400'}`}>•</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full rounded-md px-4 py-2 text-sm font-medium transition-transform active:scale-95 ${
                p.popular
                  ? 'bg-black text-white hover:bg-black/90'
                  : 'bg-white/10 text-slate-100 hover:bg-white/20'
              }`}
              >
                Choose {p.name}
              </button>
            </motion.div>
          ))}
        </div>

        <div id="faq" className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-slate-100">What customers say</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
                  “Swyra made our launch page feel alive without sacrificing speed.”
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-100">FAQ</h3>
            <div className="mt-4 divide-y divide-white/10 rounded-xl border border-white/10 bg-white/5">
              {faqs.map((item, i) => (
                <div key={item.q}>
                  <button
                    onClick={() => setOpen(open === i ? -1 : i)}
                    className="w-full px-4 py-3 text-left text-slate-200 hover:text-white"
                  >
                    {item.q}
                  </button>
                  <AnimatePresence initial={false}>
                    {open === i && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-4 pb-4 text-sm text-slate-300">{item.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
