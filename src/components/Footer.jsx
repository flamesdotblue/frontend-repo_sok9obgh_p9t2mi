import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-300">
          <p>© {new Date().getFullYear()} Nebula Executor. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-white">Privacy</a>
            <a href="#terms" className="hover:text-white">Terms</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
