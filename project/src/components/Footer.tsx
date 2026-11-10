import { Dumbbell, Instagram, Facebook, Youtube, Twitter, ArrowUp } from 'lucide-react';
import { NAV_LINKS, CONTACT } from '@/data/content';

const SOCIALS = [Instagram, Facebook, Youtube, Twitter];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-gym-violet-light/20 bg-gym-violet-darker/60">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gym-pink text-gym-violet-dark">
                <Dumbbell className="h-6 w-6" strokeWidth={2.5} />
              </span>
              <span className="font-heading text-2xl tracking-wider text-gym-text">
                PURPLE <span className="text-gym-pink">GYM</span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-gym-text-lavender">
              Coimbatore's premium training facility. Unleash your inner strength with elite coaching
              and a community that lifts you up.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gym-violet-light/30 text-gym-text-lavender transition-all duration-300 hover:border-gym-pink hover:bg-gym-pink hover:text-gym-violet-dark"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-montserrat text-xs font-bold uppercase tracking-widest text-gym-pink">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-sm text-gym-text-lavender transition-colors hover:text-gym-pink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-montserrat text-xs font-bold uppercase tracking-widest text-gym-pink">
              Programs
            </h3>
            <ul className="mt-5 space-y-3">
              {['Power Lifting', 'Lean Burn', 'Functional Athlete', 'Combat Conditioning'].map((p) => (
                <li key={p}>
                  <a
                    href="#programs"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#programs')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-sm text-gym-text-lavender transition-colors hover:text-gym-pink"
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-montserrat text-xs font-bold uppercase tracking-widest text-gym-pink">
              Reach Us
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-gym-text-lavender">
              <li className="leading-relaxed">{CONTACT.address}</li>
              <li>
                <a href={`tel:${CONTACT.phone}`} className="transition-colors hover:text-gym-pink">
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-gym-pink">
                  {CONTACT.email}
                </a>
              </li>
              <li>{CONTACT.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-gym-violet-light/15 pt-8 sm:flex-row">
          <p className="text-xs text-gym-text-lavender">
            © {new Date().getFullYear()} Purple Gym. All rights reserved.
          </p>
          <p className="text-xs text-gym-text-lavender">
            Crafted with strength in Coimbatore.
          </p>
          <button
            onClick={scrollTop}
            className="flex items-center gap-2 font-montserrat text-xs font-bold uppercase tracking-widest text-gym-text-lavender transition-colors hover:text-gym-pink"
            aria-label="Back to top"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gym-violet-light/30 transition-all hover:border-gym-pink">
              <ArrowUp className="h-4 w-4" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
