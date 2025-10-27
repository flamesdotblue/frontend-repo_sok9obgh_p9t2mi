import { motion, useReducedMotion } from 'framer-motion';

const features = [
  {
    title: '3D Hero, Zero Jank',
    desc: 'Deferred rendering with GPU-friendly animations keeps interactions snappy.',
  },
  { title: 'Motion that Respects', desc: 'Reduced-motion users get accessible yet delightful alternatives.' },
  { title: 'Built for Speed', desc: 'Tailwind + Vite + React with best practices for performance.' },
];

export default function Features() {
  const shouldReduce = useReducedMotion();

  return (
    <section id="features" className="relative bg-[#0a0a0b] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-slate-100"
          initial={shouldReduce ? false : { opacity: 0, y: 14 }}
          whileInView={shouldReduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
          transition={{ duration: 0.5 }}
        >
          Features
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="group relative rounded-xl border border-white/10 bg-white/5 p-6 text-slate-300 hover:text-slate-200"
              initial={shouldReduce ? false : { opacity: 0, y: 16 }}
              whileInView={shouldReduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              style={{ willChange: 'transform' }}
            >
              <div className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background:
                    'radial-gradient(400px 200px at 50% -20%, rgba(236,72,153,0.12), transparent)',
                }}
              />
              <h3 className="relative z-10 text-lg font-semibold text-slate-100">{f.title}</h3>
              <p className="relative z-10 mt-2 text-sm text-slate-300/90">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
