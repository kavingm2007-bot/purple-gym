import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
};

const base =
  'group inline-flex items-center justify-center gap-2 rounded-full font-montserrat font-bold uppercase tracking-wider transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gym-pink focus-visible:ring-offset-2 focus-visible:ring-offset-gym-violet';

const variants = {
  primary:
    'bg-gym-pink text-gym-violet-dark px-8 py-3.5 text-sm hover:bg-gym-pink-light hover:shadow-[0_0_30px_rgba(243,184,208,0.45)] hover:-translate-y-0.5 active:translate-y-0',
  secondary:
    'bg-transparent text-gym-text px-8 py-3.5 text-sm border-2 border-gym-text/40 hover:border-gym-pink hover:text-gym-pink hover:-translate-y-0.5',
  ghost:
    'bg-transparent text-gym-text-lavender px-5 py-2 text-xs hover:text-gym-pink',
};

export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  type = 'button',
  onClick,
}: Props) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
