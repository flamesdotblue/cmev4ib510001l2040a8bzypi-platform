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
                'relative rounded-2xl border p-6 shadow-sm bg-white',
                tier.highlight ? 'border-rose-300 shadow-md ring-1 ring-rose-200' : 'border-slate-200',
              ].join(' ')}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-6 inline-flex items-center rounded-full bg-rose-600 px-2.5 py-1 text-xs font-medium text-white shadow">Most popular</span>
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
                  'inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow-sm',
                  tier.highlight ? 'bg-rose-600 text-white hover:bg-rose-500' : 'border border-slate-200 bg-white text-slate-900 hover:border-rose-200 hover:text-rose-600',
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
