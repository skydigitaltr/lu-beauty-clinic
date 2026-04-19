'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navLinks } from './site-data';
import { PrimaryButton } from './ui';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? 'border-ink/5 bg-white/80 shadow-soft backdrop-blur-xl' : 'border-transparent bg-transparent'
      }`}
    >
      <div className="section-shell flex h-20 items-center justify-between">
        <Link href="#" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-rose/20 bg-white text-lg font-semibold text-ink shadow-soft">
            LU
          </div>
          <div>
            <p className="font-display text-2xl leading-none">Beauty Clinic</p>
            <p className="text-xs uppercase tracking-[0.32em] text-taupe">Premium Care</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-taupe transition hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <PrimaryButton href="#iletisim">Randevu Al</PrimaryButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white/85 text-ink lg:hidden"
          aria-label="Menüyü aç"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/5 bg-white/95 lg:hidden">
          <div className="section-shell flex flex-col gap-4 py-5">
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-ink" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <PrimaryButton href="#iletisim" className="w-full">
              Randevu Al
            </PrimaryButton>
          </div>
        </div>
      )}
    </header>
  );
}
