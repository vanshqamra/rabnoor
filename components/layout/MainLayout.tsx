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
  const metaTitle = title ? `${title} | Rab Noor Pvt Ltd` : 'Rab Noor Pvt Ltd | marblesnearme.com';
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
      <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
};
