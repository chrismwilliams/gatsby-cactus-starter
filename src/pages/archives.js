import React from 'react';
import { graphql } from 'gatsby';
import 'twin.macro';

import Seo from '../components/seo';
import { PageLayout } from '../components/ui';
import PostList from '../components/post-list';

export default function Archives({ data: { allMdx } }) {
  return (
    <PageLayout>
      <Seo
        title="Archives"
        description="Collection of all my blogs in one place"
      />
      <h2 tw="text-xl font-semibold">Archives</h2>
      <PostList tw="space-y-8" posts={allMdx.nodes} showExcerpt />
    </PageLayout>
  );
}

export const query = graphql`
  query ArchiveQuery {
    allMdx(
      sort: { fields: [frontmatter___date, frontmatter___title], order: DESC }
      limit: 1000
    ) {
      nodes {
        id
        frontmatter {
          slug
          title
          date(formatString: "DD MMM YYYY")
          excerpt
          tags
        }
      }
    }
  }
`;
