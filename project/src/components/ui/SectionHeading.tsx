type Props = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = 'center',
  className = '',
}: Props) {
  return (
    <div
      className={`reveal max-w-2xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'} ${className}`}
    >
      {eyebrow && (
        <span className="mb-3 inline-block font-montserrat text-xs font-bold uppercase tracking-[0.25em] text-gym-pink">
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading text-4xl uppercase leading-none text-gym-text sm:text-5xl md:text-6xl">
        {title}{' '}
        {highlight && <span className="text-gym-pink">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base leading-relaxed text-gym-text-lavender sm:text-lg">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-gym-pink to-gym-pink/30 ${align === 'center' ? 'mx-auto' : ''}`}
      />
    </div>
  );
}
