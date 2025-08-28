import React from 'react';
import { Sparkles, Menu, X } from 'lucide-react';

export default function NavBar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/70 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-rose-400 to-pink-500 text-white shadow-sm">
            <Sparkles size={18} />
          </span>
          <span className="font-semibold tracking-tight text-slate-900">LumenCloud</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-slate-700 hover:text-rose-600 transition-colors">Features</a>
          <a href="#pricing" className="text-sm text-slate-700 hover:text-rose-600 transition-colors">Pricing</a>
          <a href="#" className="text-sm text-slate-700 hover:text-rose-600 transition-colors">Docs</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm text-slate-700 hover:text-rose-600 transition-colors">Sign in</a>
          <a href="#pricing" className="inline-flex items-center rounded-md bg-rose-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2">Get started</a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md border border-slate-200 bg-white p-2 text-slate-700 hover:text-rose-600 hover:border-rose-200 transition-colors">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200/70 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-4 grid gap-3">
            <a onClick={() => setOpen(false)} href="#features" className="text-slate-700 hover:text-rose-600">Features</a>
            <a onClick={() => setOpen(false)} href="#pricing" className="text-slate-700 hover:text-rose-600">Pricing</a>
            <a onClick={() => setOpen(false)} href="#" className="text-slate-700 hover:text-rose-600">Docs</a>
            <div className="pt-2 flex items-center gap-3">
              <a href="#" className="text-slate-700 hover:text-rose-600">Sign in</a>
              <a href="#pricing" className="inline-flex items-center rounded-md bg-rose-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-rose-500">Get started</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
