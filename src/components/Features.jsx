import React from 'react';
import { Clock, Zap, ShieldCheck, Workflow } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Zap className="h-5 w-5 text-rose-600" />,
    title: 'AI Playbooks',
    desc: 'Generate, customize, and schedule automations in seconds using natural language prompts.',
  },
  {
    icon: <Workflow className="h-5 w-5 text-rose-600" />,
    title: 'Visual Builder',
    desc: 'Drag-and-drop nodes to connect your apps and data. Preview runs in real time.',
  },
  {
    icon: <ShieldCheck className="h-5 w-5 text-rose-600" />,
    title: 'Enterprise-grade Security',
    desc: 'SOC 2 compliant, SSO/SAML, audit logs, and fine-grained role-based access control.',
  },
  {
    icon: <Clock className="h-5 w-5 text-rose-600" />,
    title: 'Instant Scaling',
    desc: 'Serverless infra that scales from one run to millions with zero ops.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 md:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rose-200/70 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Everything you need to flow</h2>
          <p className="mt-3 text-slate-600">Designed to be fast, intuitive, and secure—so your team stays in the zone.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 ring-1 ring-inset ring-rose-200/70">
                {f.icon}
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
