import Head from 'next/head';
import type { FC, ReactNode } from 'react';
import { Header } from '~/components/molecules';
import { BottomNav } from '~/components/organisms';

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <div className='min-h-screen bg-primaryColor'>
        <div className='pt-12'>{children}</div>
      </div>
      <BottomNav />
    </>
  );
};
