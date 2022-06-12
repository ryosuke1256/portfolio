import Link from 'next/link';
import type { Dispatch, SetStateAction, FC } from 'react';
import clsx from 'clsx';

type HeaderTabProps = {
  title: string;
  href: string;
  isActive: boolean;
  index: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
};

export const HeaderTab: FC<HeaderTabProps> = ({ title, href, isActive, index, setActiveIndex }) => {
  const activeStyle = isActive ? 'text-blue-400 border-b-2 border-blue-400' : 'border-none';

  return (
    <Link href={href}>
      <a onClick={() => setActiveIndex(index)}>
        <p className={clsx('p-3 mr-2 inline-block cursor-pointer text-lg hover:opacity-60', activeStyle)}>{title}</p>
      </a>
    </Link>
  );
};
