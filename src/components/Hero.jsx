import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const SPLINE_URL = 'https://prod.spline.design/ns1MlpZQDFS29uiL/scene.splinecode';

export default function Hero() {
  const shouldReduce = useReducedMotion();
  const [mount3D, setMount3D] = useState(false);
  const [title, setTitle] = useState('');
  const fullTitle = 'Build faster. Launch smarter. Swyra.';
  const rafId = useRef(0);

  // Defer heavy 3D mounting to after first paint
  useEffect(() => {
    if (shouldReduce) return; // skip spline entirely if reduced motion
    rafId.current = requestAnimationFrame(() => setMount3D(true));
    return () => cancelAnimationFrame(rafId.current);
  }, [shouldReduce]);

  // Typewriter effect
  useEffect(() => {
    let i = 0;
    const delay = 22;
    const interval = setInterval(() => {
      setTitle(fullTitle.slice(0, i + 1));
      i += 1;
      if (i >= fullTitle.length) clearInterval(interval);
    }, delay);
    return () => clearInterval(interval);
  }, []);

  const subtitle = useMemo(
    () => 'A next-gen platform for stunning product sites with realtime 3D, motion, and performance baked in.',
    []
  );

  return (
    <section className="relative min-h-[92vh] w-full bg-[#0a0a0b]" id="top">
      <div className="absolute inset-0 overflow-hidden">
        {!shouldReduce && mount3D && (
          <Spline scene={SPLINE_URL} style={{ width: '100%', height: '100%' }} />
        )}

        {/* Fallback gradient/texture for reduced motion or while loading */}
        {(shouldReduce || !mount3D) && (
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0b] to-[#0a0a0b]" />
            <div className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  'radial-gradient(600px 300px at 50% 35%, rgba(255,255,255,0.08), transparent), radial-gradient(800px 400px at 50% 65%, rgba(236,72,153,0.12), transparent)'
              }}
            />
          </div>
        )}

        {/* Glow overlays - must not block interaction */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -inset-x-24 top-0 h-40 bg-gradient-to-b from-white/10 to-transparent" />
          <div className="absolute -inset-x-24 bottom-0 h-56 bg-gradient-to-t from-fuchsia-600/20 via-pink-500/10 to-transparent" />
        </div>
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 sm:py-36">
          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-100"
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={shouldReduce ? false : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{ willChange: 'transform' }}
          >
            {title}
            <span className="animate-pulse">▍</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-base sm:text-lg text-slate-300"
            initial={shouldReduce ? false : { opacity: 0, y: 12 }}
            animate={shouldReduce ? false : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            style={{ willChange: 'transform' }}
          >
            {subtitle}
          </motion.p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <CTA href="#pricing" label="View Pricing" />
            <CTA href="#features" label="Explore Features" variant="ghost" />
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA({ href, label, variant = 'primary' }) {
  const base = 'inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-transform active:scale-95';
  if (variant === 'ghost') {
    return (
      <a href={href} className={`${base} border border-white/10 text-slate-100/90 hover:text-slate-100 bg-white/5 hover:bg-white/10`}>
        {label}
      </a>
    );
  }
  return (
    <a
      href={href}
      className={`${base} bg-gradient-to-r from-white to-orange-300 text-black hover:from-white hover:to-orange-200`}
    >
      {label}
    </a>
  );
}
