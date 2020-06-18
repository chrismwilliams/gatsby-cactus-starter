import React from 'react';
import {
  FaEnvelope,
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
} from 'react-icons/fa';

import { Underline } from './ui';
import StyledIntro from './styled/intro';
import useSiteMetadata from '../hooks/use-site-metadata';

export default function Intro() {
  const { social } = useSiteMetadata();

  return (
    <StyledIntro>
      <p>
        Hi, I’m a starter for the React static generating framework,{' '}
        <Underline>
          <a
            href="https://www.gatsbyjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            GatsbyJS
          </a>
        </Underline>
        . I'm an example of how you can use this starter with GatsbyJS, to
        create a personal blog. If you want to know more about how I was
        created, click on one of the social links which will take you to my
        repo. Further is a list of example blog posts created with mdx, and
        after that a list of technologies I use.
      </p>
      <div className="social-wrapper">
        Find me on{' '}
        <a href={social[0].url} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        ,{' '}
        <a href={social[0].url} target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        ,{' '}
        <a href={social[0].url} target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        ,{' '}
        <a href={social[0].url} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>{' '}
        and{' '}
        <a href="mailto:me@email.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
        .
      </div>
    </StyledIntro>
  );
}
