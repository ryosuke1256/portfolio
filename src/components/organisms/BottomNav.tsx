import Link from 'next/link';
import React, { FC, useContext } from 'react';
import Avatar from '/public/images/avatar.svg';
import Book from '/public/images/book.svg';
import clsx from 'clsx';
import { TAB_TITLES, TAB_PATHS } from '~/constants';
import type { PageTitle } from '~/types';
import { ActiveIndexContext, Context } from '../ContextProvider';

const image = {
  height: 32,
  width: 32,
} as const;

type BottomNavTab = {
  title: PageTitle;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: (isAvtive: boolean) => any;
};

const bottomNavTabs: BottomNavTab[] = [
  {
    title: TAB_TITLES[0],
    image(isActive: boolean) {
      return <Avatar fill={isActive ? 'rgba(96, 165, 250)' : '#000'} height={image.height} width={image.width} />;
    },
  },
  {
    title: TAB_TITLES[1],
    image(isActive: boolean) {
      return <Book fill={isActive ? 'rgba(96, 165, 250)' : '#000'} height={image.height} width={image.width} />;
    },
  },
];

export const BottomNav: FC = () => {
  const { activeIndex, dispatch } = useContext<Context>(ActiveIndexContext);

  return (
    <nav className='fixed bottom-0 z-10 box-border bg-white flex justify-around border-t w-full py-2 md:hidden'>
      {bottomNavTabs.map((tab: BottomNavTab, index: number) => {
        return (
          <Link href={TAB_PATHS[tab.title]} key={index}>
            <a className='flex flex-col items-center' onClick={() => dispatch && dispatch({ type: 'CHANGE', activeIndex: index })}>
              {tab.image(activeIndex === index)}
              <p className={clsx('text-xs', activeIndex === index ? 'text-blue-400' : '')}>{tab.title}</p>
            </a>
          </Link>
        );
      })}
    </nav>
  );
};
