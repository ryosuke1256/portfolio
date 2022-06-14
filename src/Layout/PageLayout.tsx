import Head from 'next/head';
import React, { FC, ReactNode } from 'react';

type PageLayoutProps = {
  pageTitle: string;
  children: ReactNode;
};

export const PageLayout: FC<PageLayoutProps> = ({ pageTitle, children }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div className='w-10/12 mx-auto max-w-3xl pt-12 pb-36'>{children}</div>
    </>
  );
};
