export const metadata = {
  title: 'Industries & Clients',
  description: 'Explore the client groups and sectors FINVALUE ADVISORY supports across personal, SME and organisational contexts.'
};

import Link from 'next/link';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

const segments = [
  'Individuals and professionals',
  'Startups and founders',
  'Entrepreneurs and family businesses',
  'SMEs and growth-stage organisations',
  'Established organisations',
  'Non-profits and mission-driven groups',
  'Project stakeholders and advisory clients'
];

export default function IndustriesPage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-20 pt-12">
        <div className="container-shell">
          <nav className="mb-8 text-sm text-slate-600">
            <Link href="/" className="hover:text-navy">Home</Link>
            <span className="mx-2">/</span>
            <span className="font-medium text-navy">Industries &amp; Clients</span>
          </nav>

          <div className="max-w-3xl">
            <span className="section-label">Who we support</span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-navy sm:text-5xl">Support across the stages of growth and change.</h1>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              We work with clients whose needs vary by sector, business maturity, complexity and risk profile. Our focus is to provide clear, practical support relevant to the decisions they are making now.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {segments.map((segment) => (
              <div key={segment} className="card-surface p-6">
                <h2 className="text-xl font-semibold text-navy">{segment}</h2>
                <p className="mt-3 leading-7 text-slate-700">
                  Financial and operational support shaped around the realities of each client context.
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
