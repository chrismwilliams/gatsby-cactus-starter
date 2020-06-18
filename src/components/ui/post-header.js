import React, { useState } from 'react';
import { Link } from 'gatsby';
import tw from 'twin.macro';
import { FaBars, FaChevronLeft } from 'react-icons/fa';

import TableOfContents from './toc';
import StyledPostHeader from './styled/post-header';

export default function PostHeader({ previous, next, toc }) {
  const [visible, setVisible] = useState(false);

  function handleToggle() {
    setVisible((prevState) => !prevState);
  }

  return (
    <StyledPostHeader>
      <nav css={[visible ? tw`visible` : tw`invisible`]}>
        <div className="page-links">
          <span>
            <Link to="/">Home</Link>
          </span>
          <span>
            <Link to="/about/">About</Link>
          </span>
          <span>
            <Link to="/archives/">Writings</Link>
          </span>
        </div>
        <div className="blog-links">
          {previous && (
            <Link data-tooltip="Previous post" to={previous.frontmatter.slug}>
              <FaChevronLeft />
            </Link>
          )}
          {next && (
            <Link data-tooltip="Next post" to={next.frontmatter.slug}>
              <FaChevronLeft tw="transform rotate-180" />
            </Link>
          )}
        </div>
        <TableOfContents toc={toc} />
      </nav>
      <button
        css={[visible && tw`text-primary`]}
        className="bg-menu"
        onClick={handleToggle}
      >
        <FaBars />
      </button>
    </StyledPostHeader>
  );
}
