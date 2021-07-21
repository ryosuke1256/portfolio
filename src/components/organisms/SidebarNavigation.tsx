import React from 'react';
import SidebarNavigationItem from '../atoms/SidebarNavigationItem';

const SidebarNavigation: React.VFC = () => {
  return (
    <nav className="flex flex-row sm:flex-col sm:h-full justify-around sm:justify-start pb-12 sm:pr-12 sm:pb-0">
      <SidebarNavigationItem ItemName={'portfolio'} URL={'/'} />
      <SidebarNavigationItem ItemName={'about'} URL={'/about'} />
      <SidebarNavigationItem ItemName={'contact'} URL={'/contact'} />
    </nav>
  );
};

export default SidebarNavigation;
