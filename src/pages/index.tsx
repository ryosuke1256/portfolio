import type { NextPage } from 'next';
import { PageLayout } from '~/Layout';
import { About } from '~/components/templates';
import { TITLE } from '~/constants';

// TODO:スマホ時のレイアウト
// TODO:全体的にリファクタリング
// デバイスだしわけ
const AboutPage: NextPage = () => {
  return (
    <PageLayout pageTitle={TITLE}>
      <About />
    </PageLayout>
  );
};

export default AboutPage;
