import type { FC } from 'react';
import Link from 'next/link';

type Props = {
  ItemName: string;
  URL: string;
};

export const SidebarNavigationItem: FC<Props> = ({ ItemName, URL }: Props) => {
  return (
    <div className='sm:pt-12'>
      <Link href={URL}>
        <a>{ItemName}</a>
      </Link>
    </div>
  );
};
