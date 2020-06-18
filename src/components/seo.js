import React from 'react';
import Helmet from 'react-helmet';

import useSiteMetadata from '../hooks/use-site-metadata';

export default function SEO({ title, description }) {
  const metaData = useSiteMetadata();

  const seo = {
    title: title || metaData.title,
    description: description || metaData.description,
    url: metaData.siteUrl,
    author: metaData.author,
  };
  return (
    <Helmet
      title={title}
      defaultTitle={metaData.title}
      titleTemplate={`%s | ${metaData.title}`}
    >
      <html lang={metaData.lang} />
      <meta name="description" content={seo.description} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image:alt" content={seo.description} />
      <meta name="twitter:creator" content={seo.author} />
    </Helmet>
  );
}
