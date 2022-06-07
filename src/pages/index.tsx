import { Portfolio } from '~/components/organisms';
import { createClient } from 'contentful';
import { GetStaticProps } from 'next';
import { Client } from '~/types/index';
import { PageLayout } from '~/Layout';

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

// hタグデフォルトのスタイル合たってた方がいいな
// TODO: エイリアス登録
// TODO: Cotnentful型自動生成
// TODO: getLayout
export default function Home({ portfolios }: Props) {
  return (
    <PageLayout>
      {portfolios.map((portfolio: object, key) => (
        <Portfolio portfolio={portfolio} key={key} />
      ))}
    </PageLayout>
  );
}
