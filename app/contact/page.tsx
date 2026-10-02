export const metadata = {
  title: 'Contact Us',
  description: 'Contact FINVALUE ADVISORY by email or phone and submit an enquiry through our secure contact form.'
};

import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-20 pt-12">
        <div className="container-shell">
          <nav className="mb-8 text-sm text-slate-600">
            <Link href="/" className="hover:text-navy">Home</Link>
            <span className="mx-2">/</span>
            <span className="font-medium text-navy">Contact Us</span>
          </nav>

          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-8">
              <div>
                <span className="section-label">Contact</span>
                <h1 className="mt-6 text-4xl font-semibold tracking-tight text-navy sm:text-5xl">Let’s discuss your requirements.</h1>
              </div>

              <div className="space-y-5 card-surface p-6">
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 text-navy" />
                  <a href="mailto:finvalueadvisory@gmail.com" className="text-lg font-medium text-navy hover:text-gold">finvalueadvisory@gmail.com</a>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 text-navy" />
                  <div>
                    <a href="tel:+94742869382" className="block text-lg font-medium text-navy hover:text-gold">074 286 9382</a>
                    <a href="tel:+94763244397" className="mt-2 block text-lg font-medium text-navy hover:text-gold">076 324 4397</a>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-slate-700">
                  <MapPin className="mt-1 h-5 w-5 text-navy" />
                  <p>Location details to be confirmed before publication.</p>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
