import { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { TESTIMONIALS } from '@/data/content';

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const count = TESTIMONIALS.length;

  const go = (dir: number) => setIndex((i) => (i + dir + count) % count);

  return (
    <section id="testimonials" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-gym-violet-darker/50 via-transparent to-gym-violet-darker/50" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Real Results"
          title="Member"
          highlight="Stories"
          subtitle="The numbers speak. The people speak louder. Hear from members who transformed their lives at Purple Gym."
        />

        <div className="reveal mt-14 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="w-full shrink-0 px-1">
                <div className="relative mx-auto max-w-3xl rounded-3xl border border-gym-violet-light/25 bg-gym-violet-dark/40 p-8 text-center sm:p-12">
                  <Quote className="mx-auto mb-6 h-10 w-10 text-gym-pink/60" />

                  <div className="mb-5 flex justify-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gym-pink text-gym-pink" />
                    ))}
                  </div>

                  <blockquote className="text-lg leading-relaxed text-gym-text sm:text-xl">
                    "{t.quote}"
                  </blockquote>

                  <figcaption className="mt-8 flex items-center justify-center gap-4">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="h-14 w-14 rounded-full object-cover ring-2 ring-gym-pink"
                      loading="lazy"
                    />
                    <div className="text-left">
                      <div className="font-heading text-xl tracking-wide text-gym-text">{t.name}</div>
                      <div className="font-montserrat text-xs font-semibold uppercase tracking-wider text-gym-pink">
                        {t.result}
                      </div>
                    </div>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => go(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gym-violet-light/40 text-gym-text-lavender transition-all hover:border-gym-pink hover:text-gym-pink"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === index ? 'w-8 bg-gym-pink' : 'w-2.5 bg-gym-violet-light/50 hover:bg-gym-pink/60'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gym-violet-light/40 text-gym-text-lavender transition-all hover:border-gym-pink hover:text-gym-pink"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
