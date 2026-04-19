import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
});

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'LU Beauty Clinic | Premium Güzellik Merkezi',
  description:
    'LU Beauty Clinic, cilt bakımı, lazer epilasyon ve profesyonel güzellik uygulamalarında modern, zarif ve güvenilir bir premium bakım deneyimi sunar.',
  keywords: [
    'güzellik merkezi',
    'cilt bakımı',
    'lazer epilasyon',
    'hydrafacial',
    'kadıköy güzellik merkezi',
    'premium beauty clinic'
  ],
  openGraph: {
    title: 'LU Beauty Clinic',
    description:
      'Işıltınızı ortaya çıkaran premium bakım deneyimi.',
    url: 'https://www.lubeautyclinic.com',
    siteName: 'LU Beauty Clinic',
    locale: 'tr_TR',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LU Beauty Clinic',
    description: 'Işıltınızı ortaya çıkaran premium bakım deneyimi.'
  },
  metadataBase: new URL('https://www.lubeautyclinic.com')
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${inter.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
