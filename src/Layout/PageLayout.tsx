import React, { FC, ReactNode } from 'react';

type PageLayoutProps = {
  children: ReactNode;
};

export const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return <div className='w-10/12 mx-auto'>{children}</div>;
};
