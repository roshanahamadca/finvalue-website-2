import Link from 'next/link';
import { Menu } from 'lucide-react';
import { navItems } from '@/lib/site-data';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="container-shell flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-11 w-11 overflow-hidden rounded-xl bg-navy p-2">
            <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
              <path d="M32 126V54H62.8C81.2 54 94.2 64.2 94.2 79.6C94.2 94.2 81.2 104.2 62.8 104.2H56V126H32ZM56 87.6H62C72.2 87.6 78 83.2 78 79.4C78 75.6 72.2 70.8 62 70.8H56V87.6Z" fill="#B99552"/>
              <path d="M100.4 126V54H119.8V126H100.4Z" fill="white"/>
              <path d="M65 126V54H81V126H65Z" fill="#B99552"/>
            </svg>
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Finvalue</div>
            <div className="text-base font-semibold tracking-[0.14em] text-navy">ADVISORY</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="site-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link href="/contact" className="btn-primary">
            Discuss Your Requirements
          </Link>
        </div>

        <button className="inline-flex items-center justify-center rounded-full border border-slate-200 p-3 lg:hidden" aria-label="Open menu">
          <Menu className="h-5 w-5 text-navy" />
        </button>
      </div>
    </header>
  );
}
