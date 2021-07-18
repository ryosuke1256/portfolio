import React, { useEffect } from 'react';
import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Header from '../components/organisms/Header';

NProgress.configure({ showSpinner: false, speed: 270, minimum: 0.08 });

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
      <div className="text-center">
        <main className="inline-block pt-12">
          <div className="flex flex-row w-full text-center">
            <aside className="flex flex-col pr-12">
              <Link href="/">
                <a>portfolio</a>
              </Link>
              <Link href="/about">
                <a>about</a>
              </Link>
              <Link href="/contact">
                <a>contact</a>
              </Link>
            </aside>
            <div className="flex flex-col">
              <Component {...pageProps} />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
export default MyApp;
