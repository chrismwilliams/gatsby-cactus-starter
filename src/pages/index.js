import React from 'react';

import Seo from '../components/seo';
import { PageLayout } from '../components/ui';
import Intro from '../components/intro';
import SamplePosts from '../components/sample-posts';
import Technologies from '../components/tech-list';

export default function IndexPage() {
  return (
    <PageLayout>
      <Seo title="Home" />
      <Intro />
      <SamplePosts />
      <Technologies />
    </PageLayout>
  );
}
