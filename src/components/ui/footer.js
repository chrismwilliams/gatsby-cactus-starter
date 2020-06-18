import React from 'react';
import { Link } from 'gatsby';

import StyledFooter from './styled/footer';
import useSiteMetadata from '../../hooks/use-site-metadata';

export default function Footer() {
  const { author } = useSiteMetadata();

  return (
    <StyledFooter>
      <div>
        Copyright &copy; {new Date().getFullYear()} {author}
      </div>
      <nav>
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="/about/">About</Link>
        </span>
        <span>
          <Link to="/archives/">Writings</Link>
        </span>
      </nav>
    </StyledFooter>
  );
}
