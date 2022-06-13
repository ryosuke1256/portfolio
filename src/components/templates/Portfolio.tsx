import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import type { Entry } from 'contentful';
import type { IPortfoliosFields } from '../../../@types/generated/contentful';

type Props = {
  portfolio: Entry<IPortfoliosFields>;
};

export const Portfolio: FC<Props> = ({ portfolio }: Props) => {
  const { title, link, image, alt, explain, technology } = portfolio.fields;
  const url = image.fields.file.url;

  return (
    <>
      {/* TODO: リファクタリング */}
      {/* TODO: テキストと画像が揃ってない */}
      {/* TODO: はぴたすリンクないんだから遷移できないように */}
      <div className='my-12 pb-14 flex flex-col items-center md:w-1/2 md:pr-6 md:items-start md:pb-0'>
        {typeof link === 'string' ? (
          <Link href={link}>
            <a className='w-10/12 text-center rounded-3xl bg-white hover:scale-105 p-2 md:self-center hover:shadow-md '>
              <Image src={`https:${url}`} alt={alt} className='cursor-pointer' layout='intrinsic' width={150} height={150} />
            </a>
          </Link>
        ) : (
          <Image src={`https:${url}`} alt={alt} className='cursor-pointer' width={150} height={150} />
        )}
        <h2 className='text-xl font-semibold pt-6'>{title}</h2>
        <div className='text-center pt-6 pb-3 md:text-left'>{documentToReactComponents(explain)}</div>
        <p className='text-center mb:text-left'>{technology}</p>
      </div>
    </>
  );
};
