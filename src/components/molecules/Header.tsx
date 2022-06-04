import type { FC } from 'react';

const Header: FC = () => {
  return (
    <header className='h-16 w-full border-b text-black flex items-center text-xl'>
      <div className='w-8/12 m-auto'>Portfolio</div>
    </header>
  );
};

export default Header;
