import React from 'react';
import SidebarNavigationItem from '../atoms/SidebarNavigationItem';

const SidebarNavigation: React.VFC = () => {
  return (
    <nav className="flex flex-row pb-12 pr-12  sm:flex-col">
      <SidebarNavigationItem ItemName={'portfolio'} URL={'/'} />
      <SidebarNavigationItem ItemName={'about'} URL={'/about'} />
      <SidebarNavigationItem ItemName={'contact'} URL={'/contact'} />
    </nav>
  );
};

export default SidebarNavigation;
