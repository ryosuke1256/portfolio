import Link from 'next/link';
import { useReducer, createContext, FC, Dispatch } from 'react';
import { HeaderTabs } from '~/components/molecules';
import { TITLE } from '~/constants';

type Action = {
  type: 'CHANGE';
  activeIndex: number;
};

type CreateContext = {
  activeIndex: number;
  dispatch: Dispatch<Action> | null;
};

export const ActiveIndexContext = createContext<CreateContext>({ activeIndex: 0, dispatch: null });

const activeIndexReducer = (activeIndex: number, action: Action) => {
  switch (action.type) {
    case 'CHANGE':
      return action.activeIndex;
    default:
      return activeIndex;
  }
};

export const Header: FC = () => {
  const [activeIndex, dispatch] = useReducer(activeIndexReducer, 0);

  return (
    <ActiveIndexContext.Provider value={{ activeIndex, dispatch }}>
      <header className='border-b px-20 pt-4'>
        {/* FIXME:URL */}
        <Link href='/about'>
          <a onClick={() => dispatch && dispatch({ type: 'CHANGE', activeIndex: 0 })}>
            <div className='text-2xl pb-2 font-bold cursor-pointer'>{TITLE}</div>
          </a>
        </Link>
        <div className='hidden md:block text-base '>
          {/* FIXME:hrefsもっと良い書き方できるだろ */}
          <HeaderTabs titles={['About', 'Works']} hrefs={['/about', '/']} />
        </div>
      </header>
    </ActiveIndexContext.Provider>
  );
};
