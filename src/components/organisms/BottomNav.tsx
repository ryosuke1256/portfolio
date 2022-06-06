import Link from 'next/link'
import Image from 'next/image';
import React from 'react'

export const BottomNav = () => {
  return (
    <nav className='fixed bottom-0 bg-white flex justify-between'>
      <Link href='/about'>
        <a>
          <Image src='/images/hoge.png' />
        </a>
      </Link>
      <Link href='/works'>
        <a>
          <Image src='/images/hoge.png' />
        </a>
      </Link>
    </nav>
  );
}
