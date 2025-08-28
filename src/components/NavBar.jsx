import React from 'react';
import { Sparkles, Menu, X } from 'lucide-react';

export default function NavBar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/60 bg-white/50 backdrop-blur-md supports-[backdrop-filter]:bg-white/40 shadow-[8px_8px_24px_rgba(0,0,0,0.06),_-8px_-8px_24px_rgba(255,255,255,0.9)]">
          <a href="#" className="m-1 flex items-center gap-2 rounded-xl border border-white/60 bg-white/50 px-2.5 py-1.5 shadow-[6px_6px_16px_rgba(0,0,0,0.06),_-6px_-6px_16px_rgba(255,255,255,0.9)] ring-1 ring-white/50 backdrop-blur-md">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-rose-400 to-pink-500 text-white shadow-[inset_2px_2px_6px_rgba(255,255,255,0.25)]">
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
            <a href="#" className="inline-flex items-center rounded-2xl border border-white/60 bg-white/40 px-4 py-2 text-sm font-medium text-slate-900 ring-1 ring-slate-200/70 backdrop-blur-md transition-all shadow-[8px_8px_20px_rgba(0,0,0,0.06),_-8px_-8px_20px_rgba(255,255,255,0.9)] hover:shadow-[12px_12px_28px_rgba(0,0,0,0.08),_-12px_-12px_28px_rgba(255,255,255,0.95)] hover:text-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-300">Sign in</a>
            <a href="#pricing" className="inline-flex items-center rounded-2xl border border-white/60 bg-gradient-to-br from-white/60 to-rose-50/60 px-4 py-2 text-sm font-semibold text-rose-800 ring-1 ring-rose-200 backdrop-blur-md transition-all shadow-[8px_8px_20px_rgba(0,0,0,0.06),_-8px_-8px_20px_rgba(255,255,255,0.9)] hover:shadow-[12px_12px_28px_rgba(0,0,0,0.08),_-12px_-12px_28px_rgba(255,255,255,0.95)] hover:from-white/70 hover:to-rose-100/60 focus:outline-none focus:ring-2 focus:ring-rose-300">Get started</a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden m-2 inline-flex items-center justify-center rounded-xl border border-white/60 bg-white/50 p-2 text-slate-700 ring-1 ring-slate-200/70 backdrop-blur-md transition-all shadow-[8px_8px_18px_rgba(0,0,0,0.06),_-8px_-8px_18px_rgba(255,255,255,0.9)] hover:text-rose-600 hover:shadow-[12px_12px_26px_rgba(0,0,0,0.08),_-12px_-12px_26px_rgba(255,255,255,0.95)]">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4">
          <div className="mx-auto max-w-7xl rounded-2xl border border-white/60 bg-white/50 p-4 ring-1 ring-white/60 backdrop-blur-md shadow-[10px_10px_26px_rgba(0,0,0,0.06),_-10px_-10px_26px_rgba(255,255,255,0.95)]">
            <div className="grid gap-3">
              <a onClick={() => setOpen(false)} href="#features" className="rounded-xl px-3 py-2 text-slate-700 hover:text-rose-600 transition-colors">Features</a>
              <a onClick={() => setOpen(false)} href="#pricing" className="rounded-xl px-3 py-2 text-slate-700 hover:text-rose-600 transition-colors">Pricing</a>
              <a onClick={() => setOpen(false)} href="#" className="rounded-xl px-3 py-2 text-slate-700 hover:text-rose-600 transition-colors">Docs</a>
              <div className="pt-2 flex items-center gap-3">
                <a href="#" className="inline-flex flex-1 items-center justify-center rounded-2xl border border-white/60 bg-white/40 px-4 py-2 text-sm font-medium text-slate-900 ring-1 ring-slate-200/70 backdrop-blur-md transition-all shadow-[8px_8px_20px_rgba(0,0,0,0.06),_-8px_-8px_20px_rgba(255,255,255,0.9)] hover:shadow-[12px_12px_28px_rgba(0,0,0,0.08),_-12px_-12px_28px_rgba(255,255,255,0.95)] hover:text-rose-700">Sign in</a>
                <a href="#pricing" className="inline-flex flex-1 items-center justify-center rounded-2xl border border-white/60 bg-gradient-to-br from-white/60 to-rose-50/60 px-4 py-2 text-sm font-semibold text-rose-800 ring-1 ring-rose-200 backdrop-blur-md transition-all shadow-[8px_8px_20px_rgba(0,0,0,0.06),_-8px_-8px_20px_rgba(255,255,255,0.9)] hover:shadow-[12px_12px_28px_rgba(0,0,0,0.08),_-12px_-12px_28px_rgba(255,255,255,0.95)] hover:from-white/70 hover:to-rose-100/60">Get started</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
