import React from 'react'
import { Rocket, Menu } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/50 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="/" className="inline-flex items-center gap-2 text-white font-semibold">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-600 to-violet-500 text-white">
              <Rocket className="h-5 w-5" />
            </span>
            <span className="text-lg">Nebula Executor</span>
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-300">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#docs" className="hover:text-white transition-colors">Docs</a>
            <a href="#download" className="hover:text-white transition-colors">Download</a>
          </nav>
          <button className="sm:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-white/15 text-slate-200" aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
