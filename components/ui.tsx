import Link from 'next/link';
import { clsx } from 'clsx';

export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="space-y-4">
      <p className="text-sm font-medium uppercase tracking-[0.28em] text-rose">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      <p className="section-copy">{description}</p>
    </div>
  );
}

export function PrimaryButton({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={clsx(
        'inline-flex items-center justify-center rounded-full border border-transparent bg-ink px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#2f2624] focus:outline-none focus:ring-2 focus:ring-rose/40',
        className
      )}
    >
      {children}
    </Link>
  );
}

export function SecondaryButton({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={clsx(
        'inline-flex items-center justify-center rounded-full border border-ink/10 bg-white/80 px-6 py-3 text-sm font-medium text-ink shadow-soft transition duration-300 hover:-translate-y-0.5 hover:border-rose/30 hover:bg-white',
        className
      )}
    >
      {children}
    </Link>
  );
}
