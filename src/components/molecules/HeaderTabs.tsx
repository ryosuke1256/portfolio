import { FC } from 'react';
import { HeaderTab } from '~/components/atoms';
import { TAB_TITLES, TAB_PATHS } from '~/constants';
import { PageTitle } from '~/types';

export const HeaderTabs: FC = () => {
  return (
    <nav className='hidden md:block text-base '>
      {TAB_TITLES.map((title: PageTitle, index: number) => (
        <HeaderTab key={index} title={title} href={TAB_PATHS[title]} index={index} />
      ))}
    </nav>
  );
};
