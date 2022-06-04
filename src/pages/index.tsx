import Portfolio from '../components/organisms/Portfolio';
import { createClient } from 'contentful';
import { GetStaticProps } from 'next';
import { Client } from '../types/index';

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  } as Client);

  try {
    const res = await client.getEntries({ content_type: 'portfolios' });
    return {
      props: {
        portfolios: res.items,
      },
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
};

type Props = {
  portfolios: object[];
};

export default function Home({ portfolios }: Props) {
  return (
    <>
      {portfolios.map((portfolio: object, key) => (
        <Portfolio portfolio={portfolio} key={key} />
      ))}
    </>
  );
}
