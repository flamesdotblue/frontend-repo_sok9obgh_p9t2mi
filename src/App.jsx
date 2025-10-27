import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <Hero />
        <Features />
        <section id="cta" className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-tr from-indigo-600 to-violet-600 p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Ready to launch your next idea?</h3>
                <p className="mt-2 text-white/90 max-w-prose">Ship a polished MVP with a modern stack and beautiful defaults you can customize.</p>
              </div>
              <a href="#" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-slate-900 font-semibold shadow hover:bg-slate-100 transition-colors">
                Create project
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
