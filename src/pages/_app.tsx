import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '../components/organisms/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="This is my portfolio site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
