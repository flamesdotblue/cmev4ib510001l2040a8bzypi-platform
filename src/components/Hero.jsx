import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    if (scriptLoadedRef.current) return;
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@latest/build/spline-viewer.js';
    script.onload = () => {
      scriptLoadedRef.current = true;
    };
    document.body.appendChild(script);
  }, []);

  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-50 via-white to-white" />
        <div className="absolute inset-0 opacity-80">
          <spline-viewer url="https://prod.spline.design/mUyP14KSGymYtadq/scene.splinecode" style={{ width: '100%', height: '100%', background: 'transparent' }}></spline-viewer>
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_10%,rgba(244,63,94,0.12),transparent)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-24 pb-24 md:pt-36 md:pb-36">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/60 px-3 py-1 text-xs font-medium text-rose-700 shadow-[8px_8px_16px_rgba(0,0,0,0.06),_-8px_-8px_16px_rgba(255,255,255,0.9)] ring-1 ring-rose-200/70 backdrop-blur-md">
              <span className="inline-block h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
              Live beta — Two hands of pink & red particles
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }} className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            Illuminate your workflow with intelligent cloud automations
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-6 text-lg leading-7 text-slate-600">
            LumenCloud is a modern SaaS that orchestrates tasks, data, and teams—beautifully. Automate across your stack with zero code and ship faster using AI-powered playbooks.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#pricing" className="inline-flex items-center rounded-2xl border border-white/60 bg-gradient-to-br from-white/70 to-rose-50/60 px-5 py-3 text-sm font-semibold text-rose-800 ring-1 ring-rose-200 backdrop-blur-md transition-all shadow-[10px_10px_26px_rgba(0,0,0,0.06),_-10px_-10px_26px_rgba(255,255,255,0.95)] hover:shadow-[14px_14px_34px_rgba(0,0,0,0.08),_-14px_-14px_34px_rgba(255,255,255,1)] hover:from-white/80 hover:to-rose-100/60 active:shadow-[inset_8px_8px_18px_rgba(0,0,0,0.08),inset_-8px_-8px_18px_rgba(255,255,255,0.85)] focus:outline-none focus:ring-2 focus:ring-rose-300">
              Start free
            </a>
            <a href="#features" className="inline-flex items-center rounded-2xl border border-white/60 bg-white/50 px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200/80 backdrop-blur-md transition-all shadow-[10px_10px_26px_rgba(0,0,0,0.06),_-10px_-10px_26px_rgba(255,255,255,0.95)] hover:shadow-[14px_14px_34px_rgba(0,0,0,0.08),_-14px_-14px_34px_rgba(255,255,255,1)] hover:text-rose-700 hover:ring-rose-200 active:shadow-[inset_8px_8px_18px_rgba(0,0,0,0.08),inset_-8px_-8px_18px_rgba(255,255,255,0.85)]">
              Explore features
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
