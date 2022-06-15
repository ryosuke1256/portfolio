import { createClient, Entry } from 'contentful';
import { GetStaticProps } from 'next';
import { PageLayout } from '~/Layout';
import { TITLE } from '~/constants/app';
import { Works } from '~/components/templates';
import type { IPortfoliosFields } from '../../@types/generated/contentful';
import { Portfolio } from '~/components/organisms';

type Client = {
  space: string;
  accessToken: string;
};

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

export type Portfolio = Entry<IPortfoliosFields>;

type Props = {
  portfolios: Portfolio[];
};

export default function WorksPage({ portfolios }: Props) {
  return (
    <PageLayout pageTitle={`Works - ${TITLE}`}>
      <Works portfolios={portfolios} />
    </PageLayout>
  );
}
