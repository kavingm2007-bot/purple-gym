import { useEffect, useState } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';
import { NAV_LINKS } from '@/data/content';
import { useActiveSection } from '@/hooks/useScrollReveal';
import Button from '@/components/ui/Button';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(NAV_LINKS.map((l) => l.href.replace('#', '')));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-dark py-3 shadow-[0_8px_30px_rgba(0,0,0,0.25)]' : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNav('#home');
          }}
          className="flex items-center gap-2.5"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gym-pink text-gym-violet-dark transition-transform duration-300 hover:scale-110">
            <Dumbbell className="h-6 w-6" strokeWidth={2.5} />
          </span>
          <span className="font-heading text-2xl tracking-wider text-gym-text">
            PURPLE <span className="text-gym-pink">GYM</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = active === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.href);
                  }}
                  className={`relative rounded-full px-4 py-2 font-montserrat text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                    isActive ? 'text-gym-pink' : 'text-gym-text-lavender hover:text-gym-text'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-gym-pink transition-all duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Button href="#pricing" onClick={() => handleNav('#pricing')} className="px-6 py-2.5 text-xs">
            Join Now
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-gym-text transition-colors hover:text-gym-pink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass-dark px-5 pb-8 pt-4 sm:px-8">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.href);
                  }}
                  className="block rounded-xl px-4 py-3 font-montserrat text-sm font-semibold uppercase tracking-wider text-gym-text-lavender transition-colors hover:bg-gym-violet-light/30 hover:text-gym-pink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <Button href="#pricing" onClick={() => handleNav('#pricing')} className="w-full">
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
