import { ChevronDown, Play } from 'lucide-react';
import Button from '@/components/ui/Button';

const HERO_IMAGE =
  'https://images.pexels.com/photos/38453115/pexels-photo-38453115.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920';

const STATS = [
  { value: '1,200+', label: 'Members' },
  { value: '50+', label: 'Classes' },
  { value: '15', label: 'Trainers' },
];

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Athlete training in a dimly lit gym"
          className="h-full w-full object-cover"
          loading="eager"
        />
        {/* Overlays for readability + violet identity */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2D1843] via-[#2D1843]/80 to-[#2D1843]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D1843] via-transparent to-[#2D1843]/50" />
      </div>

      {/* Decorative floating blob */}
      <div className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-gym-pink/20 blur-3xl animate-float" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-28 pb-20 sm:px-8">
        <div className="max-w-3xl">
          <span className="mb-5 inline-flex animate-fade-in items-center gap-2 rounded-full border border-gym-pink/30 bg-gym-pink/10 px-4 py-1.5 font-montserrat text-xs font-semibold uppercase tracking-[0.2em] text-gym-pink">
            <span className="h-2 w-2 rounded-full bg-gym-pink animate-pulse" />
            Coimbatore's Premium Training Facility
          </span>

          <h1 className="font-heading text-3xl uppercase leading-[1] text-gym-text drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
            Unleash Your
            <br />
            <span className="text-gym-pink">Inner Strength</span>
          </h1>

          <p className="mt-6 max-w-xl animate-fade-up text-base leading-relaxed text-gym-text-lavender sm:text-lg" style={{ animationDelay: '0.15s' }}>
            More than a gym — a transformation. World-class equipment, elite coaching and a
            community that pushes you beyond your limits, every single session.
          </p>

          <div className="mt-9 flex flex-wrap animate-fade-up items-center gap-4" style={{ animationDelay: '0.3s' }}>
            <Button href="#pricing" onClick={() => scrollTo('#pricing')}>
              Join Now
            </Button>
            <Button href="#about" variant="secondary" onClick={() => scrollTo('#about')}>
              <Play className="h-4 w-4 fill-current" />
              Explore More
            </Button>
          </div>

          {/* Quick stats */}
          <div className="mt-14 flex animate-fade-up gap-8 sm:gap-14" style={{ animationDelay: '0.45s' }}>
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="font-heading text-3xl text-gym-pink sm:text-4xl">{s.value}</div>
                <div className="mt-1 font-montserrat text-[11px] font-semibold uppercase tracking-widest text-gym-text-lavender">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={() => scrollTo('#about')}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-gym-text-lavender transition-colors hover:text-gym-pink"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-7 w-7 animate-bounce" />
      </button>
    </section>
  );
}
