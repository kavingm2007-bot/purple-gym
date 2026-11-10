import { Check, Crown, Sparkles } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { PLANS } from '@/data/content';

const ICONS = [Sparkles, Crown, Sparkles];

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-gym-pink/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Membership Plans"
          title="Choose Your"
          highlight="Plan"
          subtitle="Flexible memberships with no hidden fees. Cancel anytime. Every plan includes a free trial session."
        />

        <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <article
              key={plan.name}
              className={`reveal reveal-delay-${i + 1} relative flex flex-col rounded-3xl border p-8 transition-all duration-500 hover:-translate-y-2 ${
                plan.featured
                  ? 'border-gym-pink bg-gradient-to-b from-gym-violet-light/30 to-gym-violet-dark/50 shadow-[0_25px_60px_rgba(243,184,208,0.2)] lg:scale-[1.04]'
                  : 'border-gym-violet-light/25 bg-gym-violet-dark/40 hover:border-gym-pink/40'
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gym-pink px-5 py-1.5 font-montserrat text-[10px] font-bold uppercase tracking-widest text-gym-violet-dark shadow-lg">
                  {plan.badge}
                </span>
              )}

              <div className="flex items-center gap-3">
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                    plan.featured ? 'bg-gym-pink text-gym-violet-dark' : 'bg-gym-violet-lighter/20 text-gym-pink'
                  }`}
                >
                  {(() => {
                    const Icon = ICONS[i] ?? Sparkles;
                    return <Icon className="h-6 w-6" />;
                  })()}
                </span>
                <h3 className="font-heading text-3xl uppercase tracking-wide text-gym-text">
                  {plan.name}
                </h3>
              </div>

              <p className="mt-4 text-sm text-gym-text-lavender">{plan.description}</p>

              <div className="mt-6 flex items-end gap-1">
                <span className="font-heading text-5xl text-gym-pink">{plan.price}</span>
                <span className="mb-1.5 text-sm text-gym-text-lavender">{plan.period}</span>
              </div>

              <div className="my-6 h-px w-full bg-gradient-to-r from-gym-violet-light/40 to-transparent" />

              <ul className="flex flex-1 flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gym-text-lavender">
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        plan.featured ? 'bg-gym-pink text-gym-violet-dark' : 'bg-gym-violet-lighter/20 text-gym-pink'
                      }`}
                    >
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button
                  href="#contact"
                  variant={plan.featured ? 'primary' : 'secondary'}
                  className="w-full"
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Started
                </Button>
              </div>
            </article>
          ))}
        </div>

        <p className="reveal mt-10 text-center text-sm text-gym-text-lavender">
          All plans include a complimentary 7-day trial. No card required.
        </p>
      </div>
    </section>
  );
}
