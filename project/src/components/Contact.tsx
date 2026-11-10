import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Navigation, ExternalLink } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { CONTACT } from '@/data/content';

const INFO = [
  { icon: MapPin, label: 'Visit Us', value: CONTACT.address },
  { icon: Phone, label: 'Call Us', value: CONTACT.phone },
  { icon: Mail, label: 'Email Us', value: CONTACT.email },
  { icon: Clock, label: 'Open Hours', value: CONTACT.hours },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Start Your"
          highlight="Journey"
          subtitle="Questions about memberships, programs or a tour of the floor? We're here and ready to help."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Info cards */}
          <div className="reveal space-y-4">
            {INFO.map((item) => (
              <div
                key={item.label}
                className="group flex items-start gap-5 rounded-2xl border border-gym-violet-light/25 bg-gym-violet-dark/40 p-6 transition-all duration-300 hover:border-gym-pink/50 hover:bg-gym-violet-light/15"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gym-pink text-gym-violet-dark transition-transform duration-300 group-hover:scale-110">
                  <item.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-montserrat text-xs font-bold uppercase tracking-widest text-gym-pink">
                    {item.label}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-gym-text-lavender">{item.value}</p>
                </div>
              </div>
            ))}

            {/* Location card */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Singanallur%2C+Coimbatore%2C+Tamil+Nadu+641005"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-2xl border border-gym-violet-light/25 bg-gym-violet-dark/40 p-7 transition-all duration-300 hover:border-gym-pink/50"
            >
              {/* Stylized map-styled backdrop */}
              <div className="pointer-events-none absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0,transparent_calc(25%-1px),rgba(232,207,255,0.4)_calc(25%-1px),rgba(232,207,255,0.4)_25%,transparent_25%),linear-gradient(90deg,transparent_0,transparent_calc(50%-1px),rgba(232,207,255,0.4)_calc(50%-1px),rgba(232,207,255,0.4)_50%,transparent_50%),linear-gradient(90deg,transparent_0,transparent_calc(75%-1px),rgba(232,207,255,0.4)_calc(75%-1px),rgba(232,207,255,0.4)_75%,transparent_75%),linear-gradient(0deg,transparent_0,transparent_calc(33%-1px),rgba(232,207,255,0.4)_calc(33%-1px),rgba(232,207,255,0.4)_33%,transparent_33%),linear-gradient(0deg,transparent_0,transparent_calc(66%-1px),rgba(232,207,255,0.4)_calc(66%-1px),rgba(232,207,255,0.4)_66%,transparent_66%)]" />
                <div className="absolute left-1/4 top-1/3 h-16 w-24 rounded bg-gym-pink/15" />
                <div className="absolute right-1/4 bottom-1/4 h-12 w-20 rounded bg-gym-violet-light/20" />
                <div className="absolute left-1/2 top-1/2 h-px w-3/4 -translate-x-1/2 -translate-y-1/2 rotate-12 bg-gym-pink/40" />
              </div>

              <div className="relative flex items-center gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gym-pink text-gym-violet-dark transition-transform duration-300 group-hover:scale-110">
                  <Navigation className="h-6 w-6" />
                </span>
                <div className="flex-1">
                  <h3 className="font-montserrat text-xs font-bold uppercase tracking-widest text-gym-pink">
                    Find Us On The Map
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-gym-text-lavender">
                    Singanallur, Coimbatore — tap to open in Google Maps
                  </p>
                </div>
                <ExternalLink className="h-5 w-5 shrink-0 text-gym-text-lavender transition-colors group-hover:text-gym-pink" />
              </div>
            </a>
          </div>

          {/* Form */}
          <div className="reveal reveal-delay-1">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-gym-violet-light/25 bg-gym-violet-dark/40 p-8 sm:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" name="name" type="text" placeholder="Your name" />
                <Field label="Phone" name="phone" type="tel" placeholder="+91 ..." />
              </div>
              <div className="mt-5">
                <Field label="Email" name="email" type="email" placeholder="you@example.com" />
              </div>
              <div className="mt-5">
                <label className="mb-2 block font-montserrat text-xs font-bold uppercase tracking-widest text-gym-pink">
                  Interested In
                </label>
                <select
                  name="interest"
                  className="w-full rounded-xl border border-gym-violet-light/30 bg-gym-violet-darker/60 px-4 py-3 text-sm text-gym-text outline-none transition-colors focus:border-gym-pink"
                >
                  <option>Starter Membership</option>
                  <option>Pro Membership</option>
                  <option>Elite Membership</option>
                  <option>Personal Training</option>
                  <option>Free Trial Session</option>
                </select>
              </div>
              <div className="mt-5">
                <label className="mb-2 block font-montserrat text-xs font-bold uppercase tracking-widest text-gym-pink">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your goals..."
                  className="w-full resize-none rounded-xl border border-gym-violet-light/30 bg-gym-violet-darker/60 px-4 py-3 text-sm text-gym-text outline-none transition-colors placeholder:text-gym-text-lavender/50 focus:border-gym-pink"
                />
              </div>

              <button
                type="submit"
                className="group mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-gym-pink py-4 font-montserrat text-sm font-bold uppercase tracking-wider text-gym-violet-dark transition-all duration-300 hover:bg-gym-pink-light hover:shadow-[0_0_30px_rgba(243,184,208,0.45)]"
              >
                {sent ? 'Message Sent!' : 'Send Message'}
                <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              {sent && (
                <p className="mt-4 text-center text-sm text-gym-pink">
                  Thanks! We'll be in touch within 24 hours.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div>
      <label className="mb-2 block font-montserrat text-xs font-bold uppercase tracking-widest text-gym-pink">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-gym-violet-light/30 bg-gym-violet-darker/60 px-4 py-3 text-sm text-gym-text outline-none transition-colors placeholder:text-gym-text-lavender/50 focus:border-gym-pink"
      />
    </div>
  );
}
