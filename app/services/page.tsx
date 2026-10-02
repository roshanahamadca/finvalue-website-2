export const metadata = {
  title: 'Services',
  description: 'Explore FINVALUE ADVISORY services covering accounting, tax, audit support, risk, financial advisory and business consulting.'
};

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { services } from '@/lib/site-data';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-20 pt-12">
        <div className="container-shell">
          <nav className="mb-8 text-sm text-slate-600">
            <Link href="/" className="hover:text-navy">Home</Link>
            <span className="mx-2">/</span>
            <span className="font-medium text-navy">Services</span>
          </nav>

          <div className="max-w-3xl">
            <span className="section-label">Our services</span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-navy sm:text-5xl">Financial support designed around your business and goals.</h1>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Scope, fees and delivery timelines are determined by the client’s requirements and agreed engagement. We do not publish fixed prices.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {services.map((service) => (
              <article key={service.slug} className="card-surface p-8 md:p-10">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">{service.category}</p>
                    <h2 className="mt-3 text-3xl font-semibold text-navy">{service.title}</h2>
                  </div>
                  <Link href={`/services/${service.slug}`} className="btn-secondary whitespace-nowrap">
                    View details
                  </Link>
                </div>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">{service.summary}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {service.highlights.slice(0, 3).map((highlight) => (
                    <span key={highlight} className="rounded-full bg-slate px-3 py-2 text-sm text-navy">{highlight}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
