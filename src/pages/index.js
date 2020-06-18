import React from 'react';

import SEO from '../components/seo';
import { PageLayout } from '../components/ui';
import Intro from '../components/intro';
import SamplePosts from '../components/sample-posts';
import Technologies from '../components/tech-list';

export default function IndexPage() {
  return (
    <PageLayout>
      <SEO title="Home" />
      <Intro />
      <SamplePosts />
      <Technologies />
    </PageLayout>
  );
}
