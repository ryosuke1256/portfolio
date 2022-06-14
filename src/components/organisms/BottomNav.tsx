import Link from 'next/link';
import React, { FC, useState } from 'react';
import Avatar from '/public/images/avatar.svg';
import Book from '/public/images/book.svg';
import clsx from 'clsx';
import { TAB_TITLES, TAB_PATHS } from '~/constants';
import type { TabTitle } from '~/types';

const image = {
  height: 32,
  width: 32,
} as const;

type BottomNavTab = {
  title: TabTitle;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: (isAvtive: boolean) => any;
  alt: string;
};

const bottomNavTabs: BottomNavTab[] = [
  {
    title: TAB_TITLES[0],
    image(isActive: boolean) {
      return <Avatar fill={isActive ? 'rgba(96, 165, 250)' : '#000'} height={image.height} width={image.width} />;
    },
    alt: `${TAB_TITLES[0]}ページ`,
  },
  {
    title: TAB_TITLES[1],
    image(isActive: boolean) {
      return <Book fill={isActive ? 'rgba(96, 165, 250)' : '#000'} height={image.height} width={image.width} />;
    },
    alt: `${TAB_TITLES[1]}ページ`,
  },
];

// TODO:デザイン修正
export const BottomNav: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <nav className='fixed bottom-0 z-10 box-border bg-white flex justify-around border-t w-full py-2 md:hidden'>
      {bottomNavTabs.map((tab: BottomNavTab, index: number) => {
        return (
          <Link href={TAB_PATHS[tab.title]} key={index}>
            <a className='flex flex-col items-center' onClick={() => setActiveIndex(index)}>
              {tab.image(activeIndex === index)}
              <p className={clsx('text-xs', activeIndex === index ? 'text-blue-400' : '')}>{tab.title}</p>
            </a>
          </Link>
        );
      })}
    </nav>
  );
};
