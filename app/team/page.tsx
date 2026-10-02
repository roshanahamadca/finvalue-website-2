export const metadata = {
  title: 'Our Team',
  description: 'Learn about FINVALUE ADVISORY’s team and the founder profile placeholders for verified experience and credentials.'
};

import Link from 'next/link';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export default function TeamPage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-20 pt-12">
        <div className="container-shell">
          <nav className="mb-8 text-sm text-slate-600">
            <Link href="/" className="hover:text-navy">Home</Link>
            <span className="mx-2">/</span>
            <span className="font-medium text-navy">Our Team</span>
          </nav>

          <div className="max-w-3xl">
            <span className="section-label">Our team</span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-navy sm:text-5xl">A focused advisory team committed to clarity and long-term value.</h1>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Team member details, biographies and professional credentials will be published once verified and approved. No unconfirmed expertise or memberships are included at this stage.
            </p>
          </div>

          <div className="mt-12 rounded-3xl border border-dashed border-gold/60 bg-gold/5 p-8">
            <h2 className="text-3xl font-semibold text-navy">Founder profile</h2>
            <p className="mt-4 max-w-2xl leading-8 text-slate-700">
              This section is intentionally structured for verified biography, years of experience, qualifications, professional memberships and relevant specialist experience. Add details only after confirmation.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
