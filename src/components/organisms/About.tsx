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
      <h1 className={clsx('pt-14', section.title)}>About</h1>
      <p className={section.paragraph}>
        東京でエンジニアをしている石川県出身のRyosukeです。大学の電気電子工学科卒業後、１年半ほどニートを経験。。その後少人数の受託会社に就職しフルスタックな開発をしました。
        <br />
        趣味は洋楽やEDMなどの音楽を聞くことや筋トレとサウナが好きです。
        <br />
        将来はいろんな人に使われるサービスを作ってみたい。
      </p>
      <h1 className={clsx('pt-12', section.title)}>Contact</h1>
      <div className={clsx('flex flex-row justify-between w-4/12', section.paragraph)}>
        {/* FIXME:開いた時のサイズ */}
        <Link href={'mailto:info&#64;engineerxx1245.gmail.com"'}>
          <a className={'hover:scale-110'}>
            <Image src='/images/gmail.svg' alt='Gmailのアイコン' height={32} width={32} />
          </a>
        </Link>
        <Link href={'https://github.com/ryosuke1256'}>
          <a target='_blank' rel='noopener noreferrer' className={'hover:scale-110'}>
            <Image src='/images/github.png' alt='GitHubのアイコン' height={32} width={32} />
          </a>
        </Link>
        <Link href={'https://zenn.dev/reactlover'}>
          <a target='_blank' rel='noopener noreferrer' className={'hover:scale-110'}>
            <Image src='/images/zenn.svg' alt='Zennのアイコン' height={32} width={32} />
          </a>
        </Link>
        <Link href={'https://qiita.com/e8750520'}>
          <a target='_blank' rel='noopener noreferrer' className={'hover:scale-110'}>
            <Image src='/images/qiita.png' alt='Qiitaのアイコン' height={32} width={32} />
          </a>
        </Link>
      </div>
    </>
  );
};
