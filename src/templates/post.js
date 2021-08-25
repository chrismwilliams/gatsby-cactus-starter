import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { FaTag } from 'react-icons/fa';

import formatTime from '../../utils/format-time';
import Seo from '../components/seo';
import { PostLayout } from '../components/ui';
import StyledPost from '../components/styled/post';

export default function Post({ data: { post, previous, next } }) {
  return (
    <PostLayout previous={previous} next={next} toc={post.tableOfContents}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.excerpt}
      />
      <StyledPost>
        <div>
          <h1>{post.frontmatter.title}</h1>
          <div className="meta">
            <time dateTime={formatTime(post.frontmatter.date)}>
              {post.frontmatter.date}
            </time>
            <span>|</span>
            <div className="tags">
              <FaTag />
              <ul>
                {post.frontmatter.tags.map((tag) => (
                  <li key={tag}>#{tag}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="post-body">
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>
      </StyledPost>
    </PostLayout>
  );
}

export const postQuery = graphql`
  query PostPageQuery($id: String!, $previousId: String, $nextId: String) {
    post: mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        excerpt
        tags
      }
      body
      tableOfContents
    }
    previous: mdx(id: { eq: $previousId }) {
      id
      frontmatter {
        title
        slug
      }
    }
    next: mdx(id: { eq: $nextId }) {
      id
      frontmatter {
        title
        slug
      }
    }
  }
`;
