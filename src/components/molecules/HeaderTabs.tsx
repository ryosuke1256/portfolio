import { FC } from 'react';
import { HeaderTab } from '~/components/atoms';

type HeaderTabsProps = {
  titles: string[];
  hrefs: string[];
};

export const HeaderTabs: FC<HeaderTabsProps> = ({ titles, hrefs }) => {
  return (
    <div className='hidden md:block text-base '>
      {titles.map((title: string, index: number) => (
        <HeaderTab key={index} title={title} href={hrefs[index]} index={index} />
      ))}
    </div>
  );
};
