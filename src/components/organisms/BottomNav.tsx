import Link from 'next/link'
import Image from 'next/image';
import React,{FC} from 'react'

export const BottomNav:FC = () => {
  return (
    <nav className='fixed bottom-0 bg-white flex justify-around border-t-2 w-full py-4 md:hidden'>
      <Link href='/'>
        <a>
          <Image src='/images/qiita.png' height={32} width={32} alt="About"/>
          <p>About</p>
        </a>
      </Link>
      <Link href='/works'>
        <a>
          <Image src='/images/qiita.png' height={32} width={32} alt="Works"/>
          <p>Works</p>
        </a>
      </Link>
    </nav>
  );
}
