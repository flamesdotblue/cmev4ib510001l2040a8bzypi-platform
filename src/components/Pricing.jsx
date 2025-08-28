import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    desc: 'For individuals exploring automations',
    cta: 'Get started',
    highlight: false,
    features: [
      '100 runs/month',
      '2 active workflows',
      'Community support',
    ],
  },
  {
    name: 'Pro',
    price: '$24/mo',
    desc: 'For teams ready to scale automation',
    cta: 'Start 14-day trial',
    highlight: true,
    features: [
      'Unlimited runs',
      'Unlimited workflows',
      'Versioning & rollback',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Let’s talk',
    desc: 'Security, control, and white-glove onboarding',
    cta: 'Contact sales',
    highlight: false,
    features: [
      'SSO/SAML & SCIM',
      'RBAC & audit logs',
      'VPC & data residency',
      '99.99% SLA',
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 md:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rose-200/70 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Simple pricing</h2>
          <p className="mt-3 text-slate-600">Start free. Upgrade when you are ready. Cancel anytime.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={[
                'relative rounded-2xl border p-6 backdrop-blur-md',
                tier.highlight
                  ? 'border-white/60 bg-gradient-to-br from-white/70 via-white/60 to-rose-50/60 ring-1 ring-rose-200 shadow-[12px_12px_30px_rgba(0,0,0,0.06),_-12px_-12px_30px_rgba(255,255,255,0.98)]'
                  : 'border-white/60 bg-white/60 ring-1 ring-slate-200/80 shadow-[10px_10px_26px_rgba(0,0,0,0.06),_-10px_-10px_26px_rgba(255,255,255,0.95)]',
              ].join(' ')}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-6 inline-flex items-center rounded-full bg-white/70 px-2.5 py-1 text-xs font-medium text-rose-700 ring-1 ring-rose-200 backdrop-blur-md shadow-[6px_6px_16px_rgba(0,0,0,0.06),_-6px_-6px_16px_rgba(255,255,255,0.95)]">Most popular</span>
              )}
              <h3 className="text-lg font-semibold text-slate-900">{tier.name}</h3>
              <p className="mt-1 text-sm text-slate-600">{tier.desc}</p>
              <div className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900">{tier.price}</div>
              <ul className="mt-5 space-y-2 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-rose-600" />
                    <span className="text-slate-700">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a href="#" className={[
                  'inline-flex w-full items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold transition-all backdrop-blur-md',
                  tier.highlight
                    ? 'border border-white/60 bg-gradient-to-br from-white/80 to-rose-50/70 text-rose-800 ring-1 ring-rose-300 shadow-[10px_10px_26px_rgba(0,0,0,0.06),_-10px_-10px_26px_rgba(255,255,255,0.95)] hover:shadow-[14px_14px_34px_rgba(0,0,0,0.08),_-14px_-14px_34px_rgba(255,255,255,1)] hover:from-white/90 hover:to-rose-100/70 active:shadow-[inset_8px_8px_18px_rgba(0,0,0,0.08),inset_-8px_-8px_18px_rgba(255,255,255,0.85)]'
                    : 'border border-white/60 bg-white/60 text-slate-900 ring-1 ring-slate-200/80 shadow-[10px_10px_26px_rgba(0,0,0,0.06),_-10px_-10px_26px_rgba(255,255,255,0.95)] hover:shadow-[14px_14px_34px_rgba(0,0,0,0.08),_-14px_-14px_34px_rgba(255,255,255,1)] hover:text-rose-700 hover:ring-rose-200 active:shadow-[inset_8px_8px_18px_rgba(0,0,0,0.08),inset_-8px_-8px_18px_rgba(255,255,255,0.85)]',
                ].join(' ')}>
                  {tier.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center text-sm text-slate-500">
          Need custom terms? <a className="text-rose-600 hover:underline" href="#">Talk to sales</a>
        </div>
      </div>
    </section>
  );
}
