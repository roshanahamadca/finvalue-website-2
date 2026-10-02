export const metadata = {
  title: 'Terms of Service',
  description: 'Website terms of service for FINVALUE ADVISORY, pending review and approval.'
};

import Link from 'next/link';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-20 pt-12">
        <div className="container-shell">
          <nav className="mb-8 text-sm text-slate-600">
            <Link href="/" className="hover:text-navy">Home</Link>
            <span className="mx-2">/</span>
            <span className="font-medium text-navy">Terms of Service</span>
          </nav>

          <div className="max-w-4xl card-surface p-8 lg:p-10">
            <span className="section-label">Terms of service</span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-navy">Terms will be published after review and approval.</h1>
            <div className="mt-8 space-y-6 text-slate-700 leading-8">
              <p>The website terms of service for FINVALUE ADVISORY will be published once reviewed and approved by the relevant stakeholders.</p>
              <p>Until then, this page serves as a placeholder and should be updated with the final legal terms, disclaimers and engagement framework prior to launch.</p>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
