import { ArrowRight, Check } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { PROGRAMS } from '@/data/content';

export default function Programs() {
  return (
    <section id="programs" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Train With Purpose"
          title="Training"
          highlight="Programs"
          subtitle="Structured, coach-led programs designed around a single goal — getting you measurably stronger, faster and leaner."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {PROGRAMS.map((program, i) => (
            <article
              key={program.name}
              className={`reveal reveal-delay-${(i % 2) + 1} group relative overflow-hidden rounded-3xl border border-gym-violet-light/20 transition-all duration-500 hover:-translate-y-1 hover:border-gym-pink/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]`}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden sm:h-72">
                <img
                  src={program.image}
                  alt={program.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gym-violet-darker via-gym-violet-darker/50 to-transparent" />
                <div className="absolute left-6 top-6">
                  <span className="rounded-full bg-gym-pink px-4 py-1.5 font-montserrat text-[10px] font-bold uppercase tracking-widest text-gym-violet-dark">
                    {program.level}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="relative -mt-12 px-6 pb-7 sm:px-8">
                <h3 className="font-heading text-3xl uppercase tracking-wide text-gym-text">
                  {program.name}
                </h3>
                <p className="mt-1 font-montserrat text-sm font-semibold uppercase tracking-wide text-gym-pink">
                  {program.tagline}
                </p>
                <p className="mt-1 text-xs text-gym-text-lavender">{program.sessions}</p>

                <ul className="mt-5 space-y-2.5">
                  {program.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2.5 text-sm text-gym-text-lavender">
                      <Check className="h-4 w-4 shrink-0 text-gym-pink" />
                      {h}
                    </li>
                  ))}
                </ul>

                <a
                  href="#pricing"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="mt-6 inline-flex items-center gap-2 font-montserrat text-xs font-bold uppercase tracking-widest text-gym-text transition-colors hover:text-gym-pink"
                >
                  Choose Program
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
