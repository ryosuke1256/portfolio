import Portfolio from '../components/organisms/Portfolio';
import { Text } from '../constants/Text';
import { Services } from '../constants/Services';
import { createClient } from 'contentful';
import { GetStaticProps } from 'next';
import { Client } from '../types/index';

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  } as Client);

  try {
    const res = await client.getEntries({ content_type: 'portfolios' });
    return {
      props: {
        portfolios: res.items,
      },
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

type Props = {
  portfolios: object[];
};

export default function Home({ portfolios }: Props) {
  console.log({ portfolios });

  return (
    <>
      <p className="pb-16 w-full block break-words">{Text.portfolioIntro}</p>
      <div className="text-center">
        <Portfolio serviceName={Services.hapitasu.name} url={Services.hapitasu.url} href={Services.hapitasu.href} alt={Services.hapitasu.alt} />
        <Portfolio serviceName={Services.quiz.name} url={Services.quiz.url} href={Services.quiz.href} alt={Services.quiz.alt} />
      </div>
    </>
  );
}
