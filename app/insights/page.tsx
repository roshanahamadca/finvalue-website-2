export const metadata = {
  title: 'Insights & Research',
  description: 'Explore FINVALUE ADVISORY insights across accounting, reporting, tax, risk and SME finance topics.'
};

import Link from 'next/link';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

const insights = [
  { title: 'Accounting and financial reporting', summary: 'Practical considerations for clearer reporting, stronger controls and better management insight.' },
  { title: 'Tax information and compliance', summary: 'Overview of tax planning, compliance awareness and key obligations for individuals and businesses.' },
  { title: 'SME finance and business performance', summary: 'How financial information can be translated into clearer decisions for growth and stability.' },
  { title: 'Financial analysis and modelling', summary: 'Approaches to financial review, scenario analysis and performance understanding.' },
  { title: 'Risk management and internal controls', summary: 'Key themes around governance, control environment and risk awareness.' },
  { title: 'Economics, markets and policy research', summary: 'Relevant business and economic commentary that supports practical decision-making.' }
];

export default function InsightsPage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-20 pt-12">
        <div className="container-shell">
          <nav className="mb-8 text-sm text-slate-600">
            <Link href="/" className="hover:text-navy">Home</Link>
            <span className="mx-2">/</span>
            <span className="font-medium text-navy">Insights &amp; Research</span>
          </nav>

          <div className="max-w-3xl">
            <span className="section-label">Insights &amp; research</span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-navy sm:text-5xl">Clear thinking on financial, operational and business performance topics.</h1>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              We publish practical content on key areas relevant to financial and business decision-making. Future articles will be added as they become available.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {insights.map((item) => (
              <article key={item.title} className="card-surface p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">Insight topic</p>
                <h2 className="mt-4 text-2xl font-semibold text-navy">{item.title}</h2>
                <p className="mt-4 leading-7 text-slate-700">{item.summary}</p>
                <p className="mt-5 text-sm text-slate-500">Content placeholder for future publication.</p>
              </article>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
