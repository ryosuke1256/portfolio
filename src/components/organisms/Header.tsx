import Link from 'next/link';
import { useContext, FC } from 'react';
import { HeaderTabs } from '~/components/molecules';
import { TITLE } from '~/constants';
import { ActiveIndexContext, Context } from '../ContextProvider';

export const Header: FC = () => {
  const { dispatch } = useContext<Context>(ActiveIndexContext);

  return (
    <header className='fixed top-0 z-10 bg-white border-b w-full box-border px-20 pt-4'>
      <Link href='/'>
        <a onClick={() => dispatch && dispatch({ type: 'CHANGE', activeIndex: 0 })}>
          <div className='text-2xl pb-4  font-bold cursor-pointer md:pb-2'>{TITLE}</div>
        </a>
      </Link>
      <HeaderTabs />
    </header>
  );
};
