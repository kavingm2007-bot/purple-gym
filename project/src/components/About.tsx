import { CheckCircle2 } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { STATS } from '@/data/content';

const ABOUT_IMAGE =
  'https://images.pexels.com/photos/6389516/pexels-photo-6389516.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200';
const ABOUT_IMAGE_2 =
  'https://images.pexels.com/photos/6390233/pexels-photo-6390233.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200';

const PILLARS = [
  'State-of-the-art strength & cardio equipment',
  'Certified coaches who tailor every program',
  'A community that holds you accountable',
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Images */}
          <div className="reveal relative">
            <div className="relative overflow-hidden rounded-3xl rounded-tr-[6rem] shadow-2xl">
              <img
                src={ABOUT_IMAGE}
                alt="Barbell on the gym floor"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gym-violet-darker/70 to-transparent" />
            </div>

            <div className="absolute -bottom-8 -right-4 hidden w-48 overflow-hidden rounded-2xl border-4 border-gym-violet shadow-2xl sm:block md:w-56">
              <img
                src={ABOUT_IMAGE_2}
                alt="Athlete preparing for a workout"
                className="aspect-square w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -left-4 top-8 rounded-2xl bg-gym-pink px-5 py-4 text-gym-violet-dark shadow-xl animate-float">
              <div className="font-heading text-3xl leading-none">8+</div>
              <div className="font-montserrat text-[10px] font-bold uppercase tracking-wider">Years Strong</div>
            </div>
          </div>

          {/* Text */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="About Purple Gym"
              title="Where Strength"
              highlight="Begins"
              subtitle="Founded in the heart of Coimbatore, Purple Gym was built on one belief — that everyone carries untapped power inside. We exist to help you find it."
            />

            <p className="reveal reveal-delay-1 mt-6 text-base leading-relaxed text-gym-text-lavender">
              From first-timers to competitive athletes, our floor is designed to meet you where you
              are and take you further. Premium equipment, expert coaching, and an atmosphere that
              makes you want to come back tomorrow.
            </p>

            <ul className="reveal reveal-delay-2 mt-8 space-y-4">
              {PILLARS.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gym-pink" />
                  <span className="text-gym-text-lavender">{p}</span>
                </li>
              ))}
            </ul>

            {/* Stats grid */}
            <div className="reveal reveal-delay-3 mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-gym-violet-light/30 bg-gym-violet-dark/40 p-4 text-center transition-all duration-300 hover:border-gym-pink/50 hover:bg-gym-violet-light/20"
                >
                  <s.icon className="mx-auto mb-2 h-6 w-6 text-gym-pink" />
                  <div className="font-heading text-2xl text-gym-text">{s.value}</div>
                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-gym-text-lavender">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
