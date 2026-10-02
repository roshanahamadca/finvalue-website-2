import type { ReactNode } from 'react';

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className={light ? 'text-white' : 'text-navy'}>
      <span className={light ? 'section-label bg-white/10 text-white border-white/10' : 'section-label'}>{eyebrow}</span>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {description ? <p className={`mt-4 max-w-2xl leading-7 ${light ? 'text-slate-200' : 'text-slate-700'}`}>{description}</p> : null}
    </div>
  );
}
