import React from 'react';
import { Link } from 'gatsby';

import { Underline } from './ui';
import formatTime from '../../utils/format-time';

import StyledPostList from './styled/post-list';

export default function PostList({ posts, showExcerpt, ...rest }) {
  return (
    <StyledPostList {...rest}>
      {posts.map(({ id, frontmatter }) => (
        <li key={id}>
          <time dateTime={formatTime(frontmatter.date)}>
            {frontmatter.date}
          </time>
          <Underline>
            <Link to={frontmatter.slug}>{frontmatter.title}</Link>
          </Underline>
          {showExcerpt && <em>{frontmatter.excerpt}</em>}
        </li>
      ))}
    </StyledPostList>
  );
}
