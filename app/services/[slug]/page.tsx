import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services } from '@/lib/site-data';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = services.find((item) => item.slug === params.slug);

  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The requested FINVALUE ADVISORY service could not be found.'
    };
  }

  return {
    title: service.title,
    description: service.summary
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((item) => item.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <main className="pb-20 pt-12">
        <div className="container-shell">
          <nav className="mb-8 text-sm text-slate-600">
            <Link href="/" className="hover:text-navy">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-navy">Services</Link>
            <span className="mx-2">/</span>
            <span className="font-medium text-navy">{service.title}</span>
          </nav>

          <div className="card-surface overflow-hidden">
            <div className="bg-navy px-6 py-10 text-white md:px-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{service.category}</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">{service.title}</h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">{service.summary}</p>
            </div>

            <div className="grid gap-8 p-6 md:p-10 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate p-6">
                <h2 className="text-2xl font-semibold text-navy">Typical client needs</h2>
                <ul className="mt-4 space-y-3 text-slate-700">
                  {service.clientNeeds.map((need) => (
                    <li key={need}>• {need}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h2 className="text-2xl font-semibold text-navy">Scope of support</h2>
                <ul className="mt-4 space-y-3 text-slate-700">
                  {service.scope.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid gap-8 border-t border-slate-200 p-6 md:p-10 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-semibold text-navy">Potential deliverables</h2>
                <ul className="mt-4 space-y-3 text-slate-700">
                  {service.deliverables.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-navy">Information clients may need to provide</h2>
                <ul className="mt-4 space-y-3 text-slate-700">
                  {service.clientInput.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-slate-200 p-6 md:p-10">
              <div className="rounded-2xl border border-dashed border-gold/60 bg-gold/5 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Important note</p>
                <p className="mt-3 max-w-3xl text-slate-700 leading-8">
                  Scope, fees and delivery timelines are determined by the client’s requirements and agreed engagement. This service description is illustrative and does not imply a fixed fee, statutory authority or regulated service unless separately confirmed and verified.
                </p>
              </div>

              <div className="mt-8 text-center">
                <Link href="/contact" className="btn-primary">
                  Discuss This Service
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
