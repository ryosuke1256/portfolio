import type { FC } from 'react';
import { SidebarNavigationItem } from '../atoms/SidebarNavigationItem';

export const SidebarNavigation: FC = () => {
  return (
    <nav className='flex flex-row sm:flex-col sm:h-full justify-around sm:justify-start pb-12 sm:pr-12 sm:pb-0'>
      <SidebarNavigationItem ItemName={'portfolio'} URL={'/'} />
      <SidebarNavigationItem ItemName={'about'} URL={'/about'} />
      <SidebarNavigationItem ItemName={'contact'} URL={'/contact'} />
    </nav>
  );
};
