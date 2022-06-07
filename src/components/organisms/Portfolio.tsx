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
      <h1>Portfolios</h1>
      <div className='pb-14'>
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
        <div className='text-left pt-6 pb-3'>{documentToReactComponents(explain)}</div>
        <p>{technology}</p>
      </div>
    </>
  );
};

// import type { FC } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// type Props = {
//   portfolio: any;
// };

// export const Portfolio: FC<Props> = ({ portfolio }: Props) => {
//   const { title, link, image, alt, explain, technology } = portfolio.fields;
//   const url = image.fields.file.url;

//   return (
//     <div className='pb-14'>
//       <p className='text-xl font-semibold pb-7'>{title}</p>
//       <Link href={link}>
//         <a>
//           <Image src={`https:${url}`} alt={alt} className='cursor-pointer' width={150} height={150} />
//         </a>
//       </Link>
//       <div className='text-left pt-6 pb-3'>{documentToReactComponents(explain)}</div>
//       <p>{technology}</p>
//     </div>
//   );
// };
