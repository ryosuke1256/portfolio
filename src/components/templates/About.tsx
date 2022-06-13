import Link from 'next/link';
import Image from 'next/image';
import React, { FC } from 'react';
import clsx from 'clsx';

const section = {
  title: 'text-2xl font-semibold',
  paragraph: 'py-4',
};

export const About: FC = () => {
  return (
    <>
      {/* TODO:タイピングアニメーション */}
      <div className='text-3xl tracking-wider font-semibold leading-normal'>
        {`Hi! I'm Ryosuke👋,`}
        <br />A software developer.
      </div>
      <h1 className={clsx(section.title, 'pt-14')}>About</h1>
      <p className={section.paragraph}>
        東京でエンジニアをしている石川県出身のRyosukeです。大学の電気電子工学科卒業後、１年半ほどニートを経験。。その後少人数の受託会社に就職しフルスタックな開発をしました。
        <br />
        趣味は洋楽やEDMなどの音楽を聞くことや筋トレとサウナが好きです。
        <br />
        将来はいろんな人に使われるサービスを作ってみたい。
      </p>
      <h1 className={clsx(section.title, 'pt-12')}>Contact</h1>
      <div className={clsx('flex flex-row justify-between w-full max-w-sm', section.paragraph)}>
        {images.map((image, index: number) => (
          <Link key={index} href={image.href}>
            <a target={image.target} rel={image.rel} className={'hover:scale-110'}>
              <Image src={image.src} alt={image.alt} height={32} width={32} />
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

const images = [
  {
    href: 'mailto:engineerxx1245.gmail.com',
    target: '_self',
    rel: '',
    src: '/images/gmail.svg',
    alt: 'Gmailのアイコン',
  },
  {
    href: 'https://github.com/ryosuke1256',
    target: '_blank',
    rel: 'noopener noreferrer',
    src: '/images/github.png',
    alt: 'GitHubのアイコン',
  },
  {
    href: 'https://zenn.dev/reactlover',
    target: '_blank',
    rel: 'noopener noreferrer',
    src: '/images/zenn.svg',
    alt: 'Zennのアイコン',
  },
  {
    href: 'https://qiita.com/e8750520',
    target: '_blank',
    rel: 'noopener noreferrer',
    src: '/images/qiita.png',
    alt: 'Qiitaのアイコン',
  },
] as const;
