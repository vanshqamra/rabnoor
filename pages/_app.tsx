import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { MainLayout } from '../components/layout/MainLayout';

const App = ({ Component, pageProps }: AppProps) => (
  <MainLayout>
    <Component {...pageProps} />
  </MainLayout>
);

export default App;
