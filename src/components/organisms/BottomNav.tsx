import Link from 'next/link';
import Image from 'next/image';
import React, { FC } from 'react';

const tabs = [
  {
    href: '/',
    src: '/images/github.png',
    alt: 'Aboutページ',
    title: 'About',
  },
  {
    href: 'works',
    src: '/images/qiita.png',
    alt: 'Worksページ',
    title: 'Works',
  },
];

// TODO:デザイン修正
// FIXME: アイコン変更
export const BottomNav: FC = () => {
  return (
    <nav className='fixed bottom-0 z-10 box-border bg-white flex justify-around border-t w-full py-2 md:hidden'>
      {tabs.map((tab, index: number) => {
        return (
          <Link href={tab.href} key={index}>
            <a>
              <Image src={tab.src} height={32} width={32} alt={tab.alt} />
              <p className='text-xs'>{tab.title}</p>
            </a>
          </Link>
        );
      })}
    </nav>
  );
};
