import React from 'react'
import { Rocket, Menu } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="/" className="inline-flex items-center gap-2 text-slate-900 font-semibold">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-600 to-violet-500 text-white">
              <Rocket className="h-5 w-5" />
            </span>
            <span className="text-lg">VibeStarter</span>
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
            <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
            <a href="#cta" className="hover:text-slate-900 transition-colors">Get Started</a>
          </nav>
          <button className="sm:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-slate-300 text-slate-700" aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
