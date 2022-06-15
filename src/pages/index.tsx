import type { NextPage } from 'next';
import { PageLayout } from '~/Layout';
import { About } from '~/components/templates';
import { TITLE } from '~/constants';

const Home: NextPage = () => {
  return (
    <PageLayout pageTitle={TITLE}>
      <About />
    </PageLayout>
  );
};

export default Home;
