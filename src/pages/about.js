import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FaGithub } from 'react-icons/fa';

import SEO from '../components/seo';
import { PageLayout } from '../components/ui';
import StyledAbout from '../components/styled/about';

export default function About({ data }) {
  return (
    <PageLayout>
      <SEO title="About" description="Here's a little bit about myself" />
      <StyledAbout>
        <h2>About Me</h2>
        <p>
          Hi, I’m a starter for a React framework called{' '}
          <a
            href="https://www.gatsbyjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby
          </a>
          . I’m particularly great for a personal web page with a simple blog.
        </p>
        <Img fluid={data.aboutImg.childImageSharp.fluid} />
        <p>These are my best features</p>
        <ul>
          <li>I am fully responsive</li>
          <li>I support Google Analytics</li>
          <li>I have Awesome React icons</li>
          <li>I have Tailwind CSS-in-js styling</li>
          <li>I have offline support</li>
          <li>I'm truly the most tsundere of plants</li>
        </ul>
        <p>
          Clone or fork{' '}
          <a
            href="https://github.com/chrismwilliams/gatsby-cactus-starter"
            target="_blank"
            rel="noopener noreferrer"
          >
            my <FaGithub /> repo
          </a>{' '}
          if you like me!
        </p>
      </StyledAbout>
    </PageLayout>
  );
}

export const query = graphql`
  query {
    aboutImg: file(name: { eq: "cactus" }) {
      childImageSharp {
        fluid(maxWidth: 280) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
