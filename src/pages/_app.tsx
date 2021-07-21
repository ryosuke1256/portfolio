import React, { useEffect } from 'react';
import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Layout from '../layout/Layout';

NProgress.configure({ showSpinner: false, speed: 270, minimum: 0.08 });

function MyApp({ Component, pageProps }: AppProps) {
  if (process.browser) {
    NProgress.start();
  }

  useEffect(() => {
    NProgress.done();
  });

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
