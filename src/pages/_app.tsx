import React, { useEffect } from 'react';
import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Head from 'next/head';
import Header from '../components/organisms/Header';

NProgress.configure({ showSpinner: false, speed: 190, minimum: 0.08 });

function MyApp({ Component, pageProps }: AppProps) {
  if (process.browser) {
    NProgress.start();
  }

  useEffect(() => {
    NProgress.done();
  });

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
