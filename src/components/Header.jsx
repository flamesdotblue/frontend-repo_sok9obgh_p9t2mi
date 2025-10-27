import React from 'react'
import { Rocket, Menu } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Header() {
  const { scrollY } = useScroll()
  const bgOpacity = useTransform(scrollY, [0, 200], [0.35, 0.85])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10">
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 bg-black/90 backdrop-blur supports-[backdrop-filter]:bg-black/40"
        aria-hidden
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="/" className="group inline-flex items-center gap-2 text-white font-semibold">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-fuchsia-600 to-pink-500 text-white shadow shadow-fuchsia-600/20">
              <Rocket className="h-5 w-5" />
            </span>
            <span className="text-lg tracking-tight">Swyra</span>
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-300">
            {[
              { href: '#features', label: 'Features' },
              { href: '#docs', label: 'Docs' },
              { href: '#download', label: 'Download' },
            ].map((link) => (
              <a key={link.href} href={link.href} className="relative hover:text-white transition-colors group">
                <span>{link.label}</span>
                <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-pink-500 to-fuchsia-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
          <button className="sm:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-white/15 text-slate-200" aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
