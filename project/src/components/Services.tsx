import SectionHeading from '@/components/ui/SectionHeading';
import { SERVICES } from '@/data/content';

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      {/* subtle background tint */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-gym-violet-darker/40 via-transparent to-gym-violet-darker/40" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What We Offer"
          title="Our"
          highlight="Services"
          subtitle="Every corner of Purple Gym is built for a specific kind of result. Find the training that fits your goals."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <article
              key={service.title}
              className={`reveal reveal-delay-${(i % 3) + 1} group relative overflow-hidden rounded-3xl border border-gym-violet-light/25 bg-gym-violet-dark/40 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-gym-pink/50 hover:bg-gym-violet-light/15 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]`}
            >
              {/* glow accent */}
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gym-pink/10 blur-2xl transition-all duration-500 group-hover:bg-gym-pink/25" />

              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gym-violet-lighter/20 text-gym-pink transition-all duration-500 group-hover:scale-110 group-hover:bg-gym-pink group-hover:text-gym-violet-dark">
                  <service.icon className="h-7 w-7" strokeWidth={2} />
                </div>

                <h3 className="font-heading text-2xl uppercase tracking-wide text-gym-text">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gym-text-lavender">
                  {service.description}
                </p>

                <div className="mt-6 h-px w-full bg-gradient-to-r from-gym-pink/40 to-transparent" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
