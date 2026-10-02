export const metadata = {
  title: 'Careers',
  description: 'Learn about current opportunities and recruitment information at FINVALUE ADVISORY.'
};

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export default function CareersPage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-20 pt-12">
        <div className="container-shell">
          <nav className="mb-8 text-sm text-slate-600">
            <Link href="/" className="hover:text-navy">Home</Link>
            <span className="mx-2">/</span>
            <span className="font-medium text-navy">Careers</span>
          </nav>

          <div className="max-w-3xl">
            <span className="section-label">Careers</span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-navy sm:text-5xl">Build your career in a values-led advisory environment.</h1>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Opportunity details will be published when positions are confirmed. This page is ready for current vacancies, candidate expectations and application guidance.
            </p>
          </div>

          <div className="mt-12 card-surface p-8">
            <h2 className="text-2xl font-semibold text-navy">Current opportunities</h2>
            <p className="mt-4 leading-8 text-slate-700">
              No vacancies are currently listed. Once roles are approved, information will be shared here with responsibility areas, required skills and the application process.
            </p>
            <Link href="/contact" className="mt-8 inline-flex items-center text-sm font-semibold text-navy hover:text-gold">
              Enquire about future opportunities <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
