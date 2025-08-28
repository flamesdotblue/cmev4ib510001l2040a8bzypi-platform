import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased selection:bg-rose-200/60 selection:text-rose-900">
      <NavBar />
      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>
      <footer className="border-t border-slate-200/70 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto max-w-7xl px-6 py-10 grid gap-6 md:flex md:items-center md:justify-between">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} LumenCloud Inc. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a className="text-slate-500 hover:text-rose-600 transition-colors" href="#features">Features</a>
            <a className="text-slate-500 hover:text-rose-600 transition-colors" href="#pricing">Pricing</a>
            <a className="text-slate-500 hover:text-rose-600 transition-colors" href="#">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
