import Head from 'next/head';
import { ReactNode } from 'react';

interface Props {
  title: string;
  description: string;
  actions?: ReactNode;
}

export const PageHeader = ({ title, description, actions }: Props) => (
  <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 py-16 text-white">
    <Head>
      <title>{title} | Rab Noor Pvt Ltd</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={`${title} | Rab Noor Pvt Ltd`} />
      <meta property="og:description" content={description} />
    </Head>
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-sm uppercase tracking-[0.4em] text-emerald-300">Rab Noor Pvt Ltd</p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">{title}</h1>
        <p className="mt-4 text-lg text-emerald-100">{description}</p>
      </div>
      {actions && <div className="flex-shrink-0 space-y-3 text-right md:text-left">{actions}</div>}
    </div>
  </div>
);
