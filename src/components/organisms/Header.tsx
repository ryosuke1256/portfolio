import Link from 'next/link';
import { useRouter } from 'next/router';
import { useReducer, createContext, FC, Dispatch } from 'react';
import { HeaderTabs } from '~/components/molecules';
import { TITLE } from '~/constants';

type Action = {
  type: 'CHANGE';
  activeIndex: number;
};

export type Context = {
  activeIndex: number;
  dispatch: Dispatch<Action> | null;
};

export const ActiveIndexContext = createContext<Context>({ activeIndex: 0, dispatch: null });

const activeIndexReducer = (activeIndex: number, action: Action) => {
  switch (action.type) {
    case 'CHANGE':
      return action.activeIndex;
    default:
      return activeIndex;
  }
};

const getIndexFromPathName = (pathName: string) => {
  switch (pathName) {
    case '/':
      return 0;
    case '/works':
      return 1;
    default:
      throw new Error('undefined path name');
  }
};

export const Header: FC = () => {
  const router = useRouter();
  const [activeIndex, dispatch] = useReducer(activeIndexReducer, getIndexFromPathName(router.pathname));

  return (
    <ActiveIndexContext.Provider value={{ activeIndex, dispatch }}>
      <header className='border-b px-20 pt-4'>
        <Link href='/'>
          <a onClick={() => dispatch && dispatch({ type: 'CHANGE', activeIndex: 0 })}>
            <div className='text-2xl pb-2 font-bold cursor-pointer'>{TITLE}</div>
          </a>
        </Link>
        <div className='hidden md:block text-base '>
          {/* FIXME:hrefsもっと良い書き方できるだろ */}
          <HeaderTabs titles={['About', 'Works']} hrefs={['/', '/works']} />
        </div>
      </header>
    </ActiveIndexContext.Provider>
  );
};