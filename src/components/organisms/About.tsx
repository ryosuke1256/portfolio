import Link from 'next/link';
import Image from 'next/image';
import React, { FC } from 'react';

export const About: FC = () => {
  return (
    <div className='mt-80 mr-auto w-10/12'>
      <div>{`Hi! I'm Ryosuke👋,A software developer.`}</div>
      <h1>About</h1>
      {/* TODO: 自己紹介　 */}
      <p>自己紹介、後で考える</p>
      {/* TODO:Contactなのか？ */}
      <h1>Contact</h1>
      <section className='flex-row justify-between'>
        {/* TODO: src */}
        <Link href={'mailto:info&#64;engineerxx1245.gmail.com"'}>
          <a>
            <Image src='images/hoge.png' alt='Gmailのアイコン' />
          </a>
        </Link>
        <Link href={'https://github.com/ryosuke1256'}>
          <a>
            <Image src='images/github.png' alt='GitHubのアイコン' />
          </a>
        </Link>
        <Link href={'https://zenn.dev/reactlover'}>
          <a>
            <Image src='images/zenn.svg' alt='Zennのアイコン' />
          </a>
        </Link>
        <Link href={'https://qiita.com/e8750520'}>
          <a>
            <Image src='images/qiita.png' alt='Qiitaのアイコン' />
          </a>
        </Link>
      </section>
    </div>
  );
};
