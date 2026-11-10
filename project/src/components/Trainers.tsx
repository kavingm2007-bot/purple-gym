import { Instagram, Twitter, Linkedin } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { TRAINERS } from '@/data/content';

const SOCIALS = [Instagram, Twitter, Linkedin];

export default function Trainers() {
  return (
    <section id="trainers" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-gym-pink/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Meet The Team"
          title="Expert"
          highlight="Trainers"
          subtitle="Certified, passionate and relentlessly focused on your progress. Your goals are their mission."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRAINERS.map((trainer, i) => (
            <article
              key={trainer.name}
              className={`reveal reveal-delay-${(i % 4) + 1} group relative overflow-hidden rounded-3xl rounded-t-[4rem] border border-gym-violet-light/20 bg-gym-violet-dark/40 transition-all duration-500 hover:-translate-y-2 hover:border-gym-pink/50 hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)]`}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gym-violet-darker via-gym-violet-darker/30 to-transparent transition-opacity duration-500" />

                {/* Social icons reveal on hover */}
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 translate-y-4 gap-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {SOCIALS.map((Icon, idx) => (
                    <span
                      key={idx}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-gym-pink text-gym-violet-dark transition-transform duration-300 hover:scale-110"
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 text-center">
                <h3 className="font-heading text-2xl uppercase tracking-wide text-gym-text">
                  {trainer.name}
                </h3>
                <p className="mt-1 font-montserrat text-xs font-bold uppercase tracking-wider text-gym-pink">
                  {trainer.role}
                </p>
                <p className="mt-2 text-xs text-gym-text-lavender">{trainer.specialty}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
