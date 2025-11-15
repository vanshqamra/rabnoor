import { ReactNode } from 'react';
import Head from 'next/head';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface Props {
  children: ReactNode;
  title?: string;
  description?: string;
}

export const MainLayout = ({ children, title, description }: Props) => {
  const metaTitle = title
    ? `${title} | Rab Noor Pvt Ltd`
    : 'Rab Noor Pvt Ltd | marblesnearme.com';

  const metaDescription =
    description ||
    'Rab Noor Pvt Ltd connects Indian quarries and European buyers with premium marble sourcing, logistics, and B2B solutions.';

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:site_name" content="marblesnearme.com" />
      </Head>

      <div className="flex min-h-screen flex-col bg-white text-slate-900">
        {/* Site chrome */}
        <Navbar />

        {/* Page content area */}
        <main className="flex-1 bg-gradient-to-b from-slate-50 via-white to-white">
          <div className="mx-auto flex max-w-6xl flex-col px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 gap-8">
            {/* Optional subtle top border to separate navbar */}
            <div className="h-px w-full bg-slate-200/70" />
            {children}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};
