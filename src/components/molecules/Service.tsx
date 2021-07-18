import React from 'react';
import Image from 'next/image';

type Props = {
  serviceName: string;
  url: string;
  href: string;
  alt: string;
};

const Service: React.VFC<Props> = ({ serviceName, url, href, alt }: Props) => {
  return (
    <div className="pt-6">
      <p className="text-xl font-semibold">{serviceName}</p>
      <a href={href}>
        <Image src={url} alt={alt} className="cursor-pointer" width={150} height={150} />
      </a>
    </div>
  );
};

export default Service;
