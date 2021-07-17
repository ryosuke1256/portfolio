import React from 'react';
import Link from 'next/link';

const contact: React.VFC = () => {
  return (
    <>
      <p>This page is contact</p>
      <Link href="/">
        <a>back home</a>
      </Link>
    </>
  );
};

export default contact;
