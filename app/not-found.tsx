import Link from 'next/link';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="flex min-h-[60vh] items-center justify-center pb-20 pt-12">
        <div className="container-shell">
          <div className="mx-auto max-w-xl text-center card-surface p-10">
            <p className="text-sm uppercase tracking-[0.2em] text-gold">404</p>
            <h1 className="mt-4 text-4xl font-semibold text-navy">Page not found</h1>
            <p className="mt-4 text-slate-700">
              The page you are looking for may have moved or no longer exists. Please return to the homepage.
            </p>
            <Link href="/" className="btn-primary mt-8">
              Back to home
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
