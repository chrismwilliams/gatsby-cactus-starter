import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Link } from 'gatsby';

import DefaultLayout from './default';
import { PostHeader, Footer } from '../';
import Underline from '../underline';
import CodeBlock from '../code-block';

const shortcodes = { Link, Underline, CodeBlock };

export default function PostLayout({ children, previous, next, toc }) {
  return (
    <DefaultLayout>
      <PostHeader previous={previous} next={next} toc={toc} />
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
      <Footer />
    </DefaultLayout>
  );
}
