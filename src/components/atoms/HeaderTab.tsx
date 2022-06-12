import Link from 'next/link';
import { useContext, FC, Dispatch } from 'react';
import clsx from 'clsx';
import { ActiveIndexContext } from '../molecules/Header';

type HeaderTabProps = {
  title: string;
  href: string;
  index: number;
};

type Action = {
  type: 'CHANGE';
  activeIndex: number;
};

type CreateContext = {
  activeIndex: number;
  dispatch: Dispatch<Action> | null;
};

export const HeaderTab: FC<HeaderTabProps> = ({ title, href, index }) => {
  const { activeIndex, dispatch } = useContext<CreateContext>(ActiveIndexContext);
  
  // FIXME:customHook
  const activeStyle = index === activeIndex ? 'text-blue-400 border-b-2 border-blue-400' : 'border-none';

  return (
    <Link href={href}>
      <a onClick={() => dispatch && dispatch({ type: 'CHANGE', activeIndex: index })}>
        <p className={clsx('p-3 mr-2 inline-block cursor-pointer text-lg hover:opacity-60', activeStyle)}>{title}</p>
      </a>
    </Link>
  );
};
