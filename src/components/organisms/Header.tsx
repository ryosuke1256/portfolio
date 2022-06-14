import Link from 'next/link';
import { useRouter } from 'next/router';
import { useReducer, createContext, FC, Dispatch } from 'react';
import { HeaderTabs } from '~/components/molecules';
import { TITLE } from '~/constants';
import { getIndexFromPathName } from '~/utils';

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

export const Header: FC = () => {
  const router = useRouter();
  const [activeIndex, dispatch] = useReducer(activeIndexReducer, getIndexFromPathName(router.pathname));

  return (
    <ActiveIndexContext.Provider value={{ activeIndex, dispatch }}>
      <header className='fixed top-0 z-10 bg-white border-b w-full box-border px-20 pt-4'>
        <Link href='/'>
          <a onClick={() => dispatch && dispatch({ type: 'CHANGE', activeIndex: 0 })}>
            <div className='text-2xl pb-4  font-bold cursor-pointer md:pb-2'>{TITLE}</div>
          </a>
        </Link>
        <div className='hidden md:block'>
          <HeaderTabs />
        </div>
      </header>
    </ActiveIndexContext.Provider>
  );
};
