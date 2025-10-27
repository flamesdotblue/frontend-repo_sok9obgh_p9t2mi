import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-slate-100">
      <Header />
      <main>
        <Hero />
        <Features />
        <section id="cta" className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-tr from-indigo-600/20 via-violet-600/20 to-fuchsia-600/20 p-8 sm:p-12">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.25),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.2),transparent_55%)]" aria-hidden />
              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Build, test, and ship your scripting tools</h3>
                  <p className="mt-2 text-slate-300 max-w-prose">A focused workflow with a dark, immersive canvas. Designed for customization and extensibility.</p>
                </div>
                <div className="flex gap-3">
                  <a href="#download" className="inline-flex items-center justify-center rounded-md bg-white/10 px-5 py-3 text-white font-semibold shadow hover:bg-white/20 transition-colors border border-white/10 backdrop-blur">
                    Download
                  </a>
                  <a href="#docs" className="inline-flex items-center justify-center rounded-md bg-black/40 px-5 py-3 text-white font-semibold border border-white/10 hover:bg-black/50 transition-colors">
                    View Docs
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
