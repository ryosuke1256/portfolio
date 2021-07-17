import React from 'react';
import Link from 'next/link';

const about: React.VFC = () => {
  return (
    <>
      <p>This page is about</p>
      <Link href="/">
        <a>back home</a>
      </Link>
    </>
  );
};

export default about;
