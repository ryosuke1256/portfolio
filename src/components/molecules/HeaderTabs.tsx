import { FC, useState } from 'react';
import { HeaderTab } from '../atoms';

type HeaderTabsProps = {
  titles: string[];
  hrefs: string[];
};

// FIXME: リロードずれる
export const HeaderTabs: FC<HeaderTabsProps> = ({ titles, hrefs }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  
  return (
    <div className='hidden md:block text-base '>
      {titles.map((title: string, index: number) => (
        <HeaderTab key={index} title={title} href={hrefs[index]} isActive={activeIndex === index} index={index} setActiveIndex={setActiveIndex} />
      ))}
    </div>
  );
};
