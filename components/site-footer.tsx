import Link from 'next/link';
import { navItems } from '@/lib/site-data';

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-shell grid gap-10 py-12 md:grid-cols-3 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 overflow-hidden rounded-xl bg-white/5 p-2">
              <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                <path d="M32 126V54H62.8C81.2 54 94.2 64.2 94.2 79.6C94.2 94.2 81.2 104.2 62.8 104.2H56V126H32ZM56 87.6H62C72.2 87.6 78 83.2 78 79.4C78 75.6 72.2 70.8 62 70.8H56V87.6Z" fill="#B99552"/>
                <path d="M100.4 126V54H119.8V126H100.4Z" fill="white"/>
              </svg>
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Finvalue</div>
              <div className="text-xs font-semibold tracking-[0.14em] text-white">ADVISORY</div>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-7 text-slate-200">
            Your Finance. Our Expertise. Your Value.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Navigation</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-200">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-200">
            <li><a href="mailto:finvalueadvisory@gmail.com" className="hover:text-white">finvalueadvisory@gmail.com</a></li>
            <li><a href="tel:+94742869382" className="hover:text-white">074 286 9382</a></li>
            <li><a href="tel:+94763244397" className="hover:text-white">076 324 4397</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Legal</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-200">
            <li><Link href="/privacy" className="hover:text-white">Privacy Notice</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="container-shell text-sm text-slate-300">
          © 2026 FINVALUE ADVISORY. Professional advisory support only. Scope, fees and timelines are based on agreed engagement.
        </div>
      </div>
    </footer>
  );
}
