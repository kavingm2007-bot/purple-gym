import {
  Dumbbell,
  HeartPulse,
  Bike,
  HandMetal,
  Flame,
  Activity,
  Users,
  Sparkles,
} from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Programs', href: '#programs' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export type Service = {
  icon: typeof Dumbbell;
  title: string;
  description: string;
};

export const SERVICES: Service[] = [
  {
    icon: Dumbbell,
    title: 'Strength Training',
    description: 'Build raw power with free weights, racks and progressive overload systems tailored to your body.',
  },
  {
    icon: HeartPulse,
    title: 'Cardio Zone',
    description: 'Premium treadmills, rowers and arc trainers to push your endurance and torch calories.',
  },
  {
    icon: Bike,
    title: 'Cycling Studio',
    description: 'High-energy spin sessions with rhythm-based coaching and atmospheric lighting.',
  },
  {
    icon: HandMetal,
    title: 'Martial Arts',
    description: 'Boxing, Muay Thai and MMA fundamentals from certified combat-sport coaches.',
  },
  {
    icon: Flame,
    title: 'HIIT & Conditioning',
    description: 'Metabolic circuits that burn fat fast and rebuild your engine in under 30 minutes.',
  },
  {
    icon: Activity,
    title: 'Functional Fitness',
    description: 'Kettlebells, ropes and bodyweight flows that build real-world athletic mobility.',
  },
];

export type Program = {
  name: string;
  tagline: string;
  level: string;
  sessions: string;
  image: string;
  highlights: string[];
};

export const PROGRAMS: Program[] = [
  {
    name: 'Power Lifting',
    tagline: 'Squat. Bench. Deadlift.',
    level: 'Intermediate → Advanced',
    sessions: '5 sessions / week',
    image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    highlights: ['Progressive overload cycles', '1-on-1 form coaching', 'Peak strength testing'],
  },
  {
    name: 'Lean Burn',
    tagline: 'Shred fat. Reveal definition.',
    level: 'All levels',
    sessions: '4 sessions / week',
    image: 'https://images.pexels.com/photos/6388450/pexels-photo-6388450.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    highlights: ['Metabolic HIIT circuits', 'Nutrition guidance', 'Weekly body composition scan'],
  },
  {
    name: 'Functional Athlete',
    tagline: 'Move better. Feel stronger.',
    level: 'Beginner → Intermediate',
    sessions: '4 sessions / week',
    image: 'https://images.pexels.com/photos/4720827/pexels-photo-4720827.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    highlights: ['Kettlebell & mobility flows', 'Agility & balance drills', 'Injury-proof foundations'],
  },
  {
    name: 'Combat Conditioning',
    tagline: 'Train like a fighter.',
    level: 'All levels',
    sessions: '3 sessions / week',
    image: 'https://images.pexels.com/photos/4761785/pexels-photo-4761785.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    highlights: ['Boxing & Muay Thai technique', 'Pad work & sparring', 'Core & conditioning finishers'],
  },
];

export type Trainer = {
  name: string;
  role: string;
  specialty: string;
  image: string;
};

export const TRAINERS: Trainer[] = [
  {
    name: 'Arjun Veeran',
    role: 'Head Strength Coach',
    specialty: 'Powerlifting · Olympic Lifting',
    image: 'https://images.pexels.com/photos/12600523/pexels-photo-12600523.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Meera Krishnan',
    role: 'HIIT & Conditioning',
    specialty: 'Fat loss · Endurance',
    image: 'https://images.pexels.com/photos/38167615/pexels-photo-38167615.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Rahav Nair',
    role: 'Combat Sports Coach',
    specialty: 'Boxing · Muay Thai',
    image: 'https://images.pexels.com/photos/14591567/pexels-photo-14591567.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Divya Sharma',
    role: 'Functional & Mobility',
    specialty: 'Movement · Rehabilitation',
    image: 'https://images.pexels.com/photos/6739935/pexels-photo-6739935.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export type Plan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  featured?: boolean;
  badge?: string;
};

export const PLANS: Plan[] = [
  {
    name: 'Starter',
    price: '₹1,499',
    period: '/ month',
    description: 'Everything you need to begin your journey.',
    features: ['Full gym floor access', '2 group classes / week', 'Locker & shower access', 'Fitness assessment'],
  },
  {
    name: 'Pro',
    price: '₹2,999',
    period: '/ month',
    description: 'For serious lifters chasing real results.',
    features: [
      'Unlimited gym access',
      'Unlimited group classes',
      '1 personal training session / week',
      'Custom nutrition plan',
      'Body composition tracking',
    ],
    featured: true,
    badge: 'Most Popular',
  },
  {
    name: 'Elite',
    price: '₹4,999',
    period: '/ month',
    description: 'Premium coaching for maximum performance.',
    features: [
      'Everything in Pro',
      '3 personal training sessions / week',
      'Priority booking & private studio',
      'Recovery & physio sessions',
      'Quarterly performance review',
    ],
  },
];

export type Testimonial = {
  name: string;
  result: string;
  quote: string;
  image: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Karthik R',
    result: 'Lost 18 kg in 5 months',
    quote: 'The coaches at Purple Gym completely transformed how I train. I never thought I could feel this strong at 40.',
    image: 'https://images.pexels.com/photos/14085134/pexels-photo-14085134.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Ananya P',
    result: 'First marathon finisher',
    quote: 'The conditioning program built my endurance from nothing to a full marathon. The energy here is unmatched.',
    image: 'https://images.pexels.com/photos/5906249/pexels-photo-5906249.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Vignesh S',
    result: 'Deadlift PR 220 kg',
    quote: 'Real coaching, real progress. The strength program took my lifts to a level I only dreamed of.',
    image: 'https://images.pexels.com/photos/4720784/pexels-photo-4720784.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export const STATS = [
  { icon: Users, value: '1,200+', label: 'Active Members' },
  { icon: Dumbbell, value: '50+', label: 'Weekly Classes' },
  { icon: Sparkles, value: '15', label: 'Expert Trainers' },
  { icon: Flame, value: '8 yrs', label: 'Transforming Lives' },
];

export const CONTACT = {
  address: '12, Trichy Main Road, Singanallur, Coimbatore, Tamil Nadu – 641005',
  phone: '+91 98765 43210',
  email: 'hello@purplegym.in',
  hours: 'Mon – Sat: 5:00 AM – 11:00 PM',
};
