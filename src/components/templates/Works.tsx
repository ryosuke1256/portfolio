import React, { FC } from 'react';
import { Portfolio } from '~/components/organisms';
import type { Portfolio as PortfolioType } from '~/pages/works';

type WorksProps = {
  portfolios: PortfolioType[];
};

export const Works: FC<WorksProps> = ({ portfolios }) => {
  return (
    <>
      <h1 className='text-2xl font-semibold pb-14'>Portfolios</h1>
      <div className='flex flex-col flex-wrap md:flex-row'>
        {portfolios.map((portfolio: PortfolioType) => (
          <Portfolio portfolio={portfolio} key={portfolio.sys.createdAt} />
        ))}
      </div>
    </>
  );
};
