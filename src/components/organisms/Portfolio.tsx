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
      <div className='my-12 pb-14 flex flex-col items-center'>
        <p className='text-xl font-semibold pb-7'>{title}</p>
        {typeof link === 'string' ? (
          <Link href={link}>
            <a>
              <Image src={`https:${url}`} alt={alt} className='cursor-pointer' width={150} height={150} />
            </a>
          </Link>
        ) : (
          <Image src={`https:${url}`} alt={alt} className='cursor-pointer' width={150} height={150} />
        )}
        <div className='text-center pt-6 pb-3'>{documentToReactComponents(explain)}</div>
        <p>{technology}</p>
      </div>
    </>
  );
};
