import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import 'twin.macro';

import PostList from './post-list';

export default function SamplePosts() {
  const { allMdx } = useStaticQuery(BlogListQuery);

  return (
    <section>
      <Link to="/archives/">
        <h2 tw="title">Writings</h2>
      </Link>
      <PostList posts={allMdx.nodes} tw="space-y-2" />
    </section>
  );
}

export const BlogListQuery = graphql`
  query {
    allMdx(
      sort: { fields: [frontmatter___date, frontmatter___title], order: DESC }
      limit: 50
    ) {
      nodes {
        id
        frontmatter {
          slug
          title
          date(formatString: "DD MMM YYYY")
        }
      }
    }
  }
`;
