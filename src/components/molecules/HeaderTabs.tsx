import { FC } from 'react';
import { HeaderTab } from '~/components/atoms';
import { TAB_TITLES, TAB_PATHS } from '~/constants';
import { TabTitle } from '~/types';

export const HeaderTabs: FC = () => {
  return (
    <div className='hidden md:block text-base '>
      {TAB_TITLES.map((title: TabTitle, index: number) => (
        <HeaderTab key={index} title={title} href={TAB_PATHS[title]} index={index} />
      ))}
    </div>
  );
};
