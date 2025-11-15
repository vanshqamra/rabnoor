import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Playfair_Display, Inter } from 'next/font/google';

const headingFont = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-heading'
});

const bodyFont = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://marblesnearme.com'),
  title: 'Marbles Near Me | Rab Noor Pvt Ltd — Premium Indian & European Marble',
  description:
    'Rab Noor Pvt Ltd operates marblesnearme.com to connect Indian marble quarries with European distribution hubs for global projects.',
  openGraph: {
    title: 'Marbles Near Me | Rab Noor Pvt Ltd',
    description: 'Premium marble sourcing with synchronized logistics between India and Europe.',
    url: 'https://marblesnearme.com'
  },
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} min-h-screen bg-white text-slate-900 antialiased font-[var(--font-body)]`}
      >
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
