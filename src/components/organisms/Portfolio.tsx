import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Entry } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import type { IPortfoliosFields } from '../../../@types/generated/contentful';
import clsx from 'clsx';

const img = {
  height: 150,
  width: 150,
};

const imageClass = 'w-full max-w-sm text-center rounded-3xl bg-white p-2 md:self-center';

type Props = {
  portfolio: Entry<IPortfoliosFields>;
};

export const Portfolio: FC<Props> = ({ portfolio }: Props) => {
  const { title, link, image, alt, explain, technology } = portfolio.fields;
  const url = image.fields.file.url;

  return (
    <>
      {/* TODO: 画像hoverした時に遷移できることを伝えるなら右上に矢印とか合ったほうがいい */}
      <div className='pb-12 flex flex-col items-center md:w-1/2 md:pr-10 md:even:pr-0 md:even:pl-10 md:items-start'>
        {typeof link === 'string' ? (
          <Link href={link}>
            <a target='_blank' rel='noopener noreferrer' className={clsx(imageClass, 'hover:scale-105 hover:shadow-md cursor-pointer')}>
              <Image src={`https:${url}`} alt={alt} layout='intrinsic' height={img.height} width={img.width} />
            </a>
          </Link>
        ) : (
          <p className={imageClass}>
            <Image src={`https:${url}`} alt={alt} layout='intrinsic' height={img.height} width={img.width} />
          </p>
        )}
        <h2 className='text-xl font-semibold pt-6'>{title}</h2>
        <div className='max-w-sm text-center pt-6 pb-3 md:text-left md:max-w-none'>{documentToReactComponents(explain)}</div>
        <p className='text-center mb:text-left'>{technology}</p>
      </div>
    </>
  );
};
