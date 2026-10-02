export const metadata = {
  title: 'Privacy Notice',
  description: 'Privacy notice for FINVALUE ADVISORY website visitors and enquiry submissions.'
};

import Link from 'next/link';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-20 pt-12">
        <div className="container-shell">
          <nav className="mb-8 text-sm text-slate-600">
            <Link href="/" className="hover:text-navy">Home</Link>
            <span className="mx-2">/</span>
            <span className="font-medium text-navy">Privacy Notice</span>
          </nav>

          <div className="max-w-4xl card-surface p-8 lg:p-10">
            <span className="section-label">Privacy notice</span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-navy">How we handle personal information.</h1>
            <div className="mt-8 space-y-6 text-slate-700 leading-8">
              <p>FINVALUE ADVISORY respects the privacy of visitors and prospective clients. Personal information is only collected where reasonably necessary for communication, service enquiries or website administration.</p>
              <p>We may process contact information submitted through our website form to respond to an enquiry, understand your requirements and provide appropriate follow-up. Information is used only for the purposes for which it was provided unless required by law.</p>
              <p>We take reasonable measures to safeguard submitted information and to avoid unnecessary retention. Where third-party services are used for form submission or processing, the relevant provider’s privacy practices should be reviewed.</p>
              <p>The website may use privacy-conscious analytics only where configured and consented in accordance with applicable requirements.</p>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
