import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-slate-100">
      <Header />
      <main>
        <Hero />
        <Features />
        <Pricing />

        {/* Download anchor target */}
        <section id="download" className="pb-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-slate-300">
              <p>
                Download coming soon. Meanwhile, explore the features and pricing above. This anchor ensures smooth in-page navigation for your CTAs.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
