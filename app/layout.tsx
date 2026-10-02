import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://finvalueadvisory.com'),
  title: {
    default: 'FINVALUE ADVISORY',
    template: '%s | FINVALUE ADVISORY'
  },
  description:
    'FINVALUE ADVISORY provides practical financial insight and professional support for individuals and businesses seeking clarity, confidence and sustainable value.',
  keywords: ['financial advisory', 'business consulting', 'accounting', 'risk management', 'SME finance', 'Sri Lanka'],
  openGraph: {
    title: 'FINVALUE ADVISORY',
    description:
      'Your Finance. Our Expertise. Your Value.',
    siteName: 'FINVALUE ADVISORY',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FINVALUE ADVISORY',
    description: 'Your Finance. Our Expertise. Your Value.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
