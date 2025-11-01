import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import Layout from '../components/Layout';
import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && !document.body.dataset.fontscale) {
      document.body.dataset.fontscale = '1';
    }
  }, []);

  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
