import Link from 'next/link';
import { useMemo, useContext, FC } from 'react';
import clsx from 'clsx';
import { ActiveIndexContext, Context } from '../organisms/Header';
import type { PageTitle, PagePath } from '~/types';

type HeaderTabProps = {
  title: PageTitle;
  href: PagePath;
  index: number;
};

export const HeaderTab: FC<HeaderTabProps> = ({ title, href, index }) => {
  const { activeIndex, dispatch } = useContext<Context>(ActiveIndexContext);
  const activeClasses = useMemo(() => {
    return index === activeIndex ? 'text-blue-400 border-b-2 border-blue-400' : 'border-none';
  }, [index, activeIndex]);

  return (
    <Link href={href}>
      <a onClick={() => dispatch && dispatch({ type: 'CHANGE', activeIndex: index })}>
        <p className={clsx('p-3 mr-2 inline-block cursor-pointer text-lg font-medium hover:opacity-60', activeClasses)}>{title}</p>
      </a>
    </Link>
  );
};
