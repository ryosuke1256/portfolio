import Link from 'next/link';
import type { FC } from 'react';
import { HeaderTabs } from '~/components/molecules';
import { TITLE } from '~/constants';

export const Header: FC = () => {
  return (
    <header className='border-b px-20 pt-4'>
      {/* FIXME:URL */}
      {/* FIXME:タブインデックス　 useContext? */}
      <Link href='/about'>
        <a>
          <div className='text-2xl pb-2 font-bold cursor-pointer'>{TITLE}</div>
        </a>
      </Link>
      <div className='hidden md:block text-base '>
        {/* FIXME:hrefsもっと良い書き方できるだろ */}
        <HeaderTabs titles={['About', 'Works']} hrefs={['/about', '/']} />
      </div>
    </header>
  );
};
