import { Portfolio } from '~/components/organisms';
import { createClient, Entry } from 'contentful';
import { GetStaticProps } from 'next';
import { Client } from '~/types/index';
import { PageLayout } from '~/Layout';
import type { IPortfoliosFields } from '../../@types/generated/contentful';

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  } as Client);

  try {
    const res = await client.getEntries<IPortfoliosFields>({ content_type: 'portfolios' });
    return {
      props: {
        portfolios: res.items,
      },
    };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error.message);
  }
};

type Props = {
  // portfolios: object[];
  portfolios: Entry<IPortfoliosFields>[];
};

// hタグデフォルトのスタイル合たってた方がいいな
// TODO: getLayout
export default function Home({ portfolios }: Props) {
  return (
    <PageLayout>
      {portfolios.map((portfolio: Entry<IPortfoliosFields>, key: number) => (
        <Portfolio portfolio={portfolio} key={key} />
      ))}
    </PageLayout>
  );
}
