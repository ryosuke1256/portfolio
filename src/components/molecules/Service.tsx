import React from 'react';
import Image from 'next/image';
import { Text } from '../../constants/Text';

type Props = {
  serviceName: string;
  url: string;
  href: string;
  alt: string;
};

const Service: React.VFC<Props> = ({ serviceName, url, href, alt }: Props) => {
  return (
    <div className="pb-14">
      <p className="text-xl font-semibold">{serviceName}</p>
      <a href={href}>
        <Image src={url} alt={alt} className="cursor-pointer" width={150} height={150} />
      </a>
      <p className="text-left pt-6">{Text.explain}</p>
    </div>
  );
};

export default Service;
