import type { NextPage } from 'next';
import { PageLayout } from '~/Layout';
import { About } from '~/components/organisms';
import { TITLE } from '~/constants';

//FIXME: About, Rename
const AboutPage: NextPage = () => {
  return (
    <PageLayout pageTitle={TITLE}>
      <About />
    </PageLayout>
  );
};

export default AboutPage;
