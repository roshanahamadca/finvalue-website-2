export const metadata = {
  title: 'About Us',
  description: 'Learn more about FINVALUE ADVISORY, our values, mission and approach to financial and business advisory.'
};

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-20 pt-12">
        <div className="container-shell">
          <nav className="mb-8 text-sm text-slate-600">
            <Link href="/" className="hover:text-navy">Home</Link>
            <span className="mx-2">/</span>
            <span className="font-medium text-navy">About Us</span>
          </nav>

          <div className="max-w-4xl">
            <span className="section-label">About FINVALUE</span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-navy sm:text-5xl">Professional advisory built on clarity and trust.</h1>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              FINVALUE ADVISORY supports individuals, entrepreneurs, SMEs and organisations with practical financial guidance and business insight. Our work is centred on helping clients understand what is happening, why it matters and what action should come next.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="card-surface p-8">
              <h2 className="text-2xl font-semibold text-navy">Our mission</h2>
              <p className="mt-4 leading-8 text-slate-700">
                To provide clear, actionable and credible financial and business support that empowers clients to make informed decisions with confidence.
              </p>
            </div>
            <div className="card-surface p-8">
              <h2 className="text-2xl font-semibold text-navy">Our vision</h2>
              <p className="mt-4 leading-8 text-slate-700">
                To be a trusted partner for clients seeking practical guidance, strong financial thinking and sustainable value creation over the long term.
              </p>
            </div>
          </div>

          <div className="mt-14 card-surface p-8 lg:p-10">
            <h2 className="text-3xl font-semibold text-navy">Values and approach</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {[
                'Integrity and professionalism',
                'Practical and solution-focused advice',
                'Clear communication and transparency',
                'Analytical thinking and disciplined execution'
              ].map((value) => (
                <div key={value} className="rounded-2xl border border-slate-200 bg-slate p-5">
                  <p className="text-base font-medium text-navy">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 card-surface p-8 lg:p-10">
            <h2 className="text-3xl font-semibold text-navy">Founder profile</h2>
            <p className="mt-4 max-w-3xl leading-8 text-slate-700">
              A founder profile section can be completed with verified biography, qualifications, experience and memberships once confirmed. The profile is intentionally presented as a placeholder so that no unverified credentials or claims are published.
            </p>
            <div className="mt-8 rounded-2xl border border-dashed border-gold/60 bg-gold/5 p-6">
              <p className="text-lg font-medium text-navy">Profile to be confirmed</p>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li>• Verified biography and background</li>
                <li>• Qualifications and memberships</li>
                <li>• Relevant professional experience</li>
                <li>• Professional memberships and credentials</li>
              </ul>
            </div>
          </div>

          <div className="mt-14 text-center">
            <Link href="/contact" className="btn-primary">
              Discuss Your Requirements
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
