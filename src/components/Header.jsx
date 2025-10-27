import React, { useMemo, useState } from 'react'
import { Rocket, Menu, X } from 'lucide-react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

export default function Header() {
  const { scrollY } = useScroll()
  const bgOpacity = useTransform(scrollY, [0, 200], [0.35, 0.85])
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('#features')

  const links = useMemo(() => ([
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#faq', label: 'FAQ' },
    { href: '#download', label: 'Download' },
  ]), [])

  const handleNav = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      setActive(href)
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setMobileOpen(false)
  }

  const NavLinks = ({ vertical = false }) => (
    <div className={`${vertical ? 'flex flex-col gap-1 p-2' : 'hidden sm:flex items-center gap-2'} text-sm text-slate-300`}>
      {links.map((link) => (
        <motion.a
          key={link.href}
          href={link.href}
          onClick={(e) => handleNav(e, link.href)}
          whileTap={{ scale: 0.96 }}
          className={`relative px-3 py-2 rounded-md hover:text-white transition-colors ${active === link.href ? 'text-white' : ''}`}
        >
          <span className="relative z-10">{link.label}</span>
          {active === link.href && (
            <motion.span
              layoutId="nav-active"
              className="absolute inset-0 rounded-md bg-white/5 ring-1 ring-inset ring-white/10"
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
        </motion.a>
      ))}
    </div>
  )

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10">
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 bg-black/90 backdrop-blur supports-[backdrop-filter]:bg-black/40"
        aria-hidden
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="group inline-flex items-center gap-2 text-white font-semibold">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-fuchsia-600 to-pink-500 text-white shadow shadow-fuchsia-600/20">
              <Rocket className="h-5 w-5" />
            </span>
            <span className="text-lg tracking-tight">Swyra</span>
          </a>

          <NavLinks />

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="sm:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-white/15 text-slate-200"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="sm:hidden border-t border-white/10 bg-black/70 backdrop-blur"
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2">
              <NavLinks vertical />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
