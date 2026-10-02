import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Service } from '@/lib/site-data';

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="card-surface group p-6 transition hover:-translate-y-1 hover:border-gold/50">
      <div className="mb-5 inline-flex rounded-xl bg-slate p-3 text-navy">
        <service.icon className="h-6 w-6" />
      </div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">{service.category}</p>
      <h3 className="mt-3 text-2xl font-semibold text-navy">{service.title}</h3>
      <p className="mt-3 leading-7 text-slate-700">{service.summary}</p>
      <ul className="mt-5 space-y-2 text-sm text-slate-600">
        {service.highlights.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
      <Link href={`/services/${service.slug}`} className="mt-6 inline-flex items-center text-sm font-semibold text-navy hover:text-gold">
        Learn more <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </article>
  );
}
