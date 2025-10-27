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
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Ready to launch your next idea?</h3>
                  <p className="mt-2 text-slate-300 max-w-prose">Ship a polished MVP with a dark, futuristic aesthetic and a delightful experience.</p>
                </div>
                <a href="#" className="inline-flex items-center justify-center rounded-md bg-white/10 px-5 py-3 text-white font-semibold shadow hover:bg-white/20 transition-colors border border-white/10 backdrop-blur">
                  Create project
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
