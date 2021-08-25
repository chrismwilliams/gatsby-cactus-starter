require('dotenv').config({ path: `.env` });

/*
 ** You're probably going to want to add your own settings in here, particularly the siteMetadata and the manifest settings **
 */

module.exports = {
  siteMetadata: {
    author: `Chris Williams`,
    title: `Gatsby Cactus Starter`,
    description: `An MDX Gatsby starter`,
    lang: `en-GB`,
    siteUrl: `https://gatsby-cactus-starter.netlify.app/`,
    social: [
      {
        name: `GitHub`,
        url: `https://github.com/chrismwilliams/gatsby-cactus-starter`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts/`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets/`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-smartypants`,
          `gatsby-remark-responsive-iframe`,
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: false,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1280,
              linkImagesToOriginal: false,
              withWebp: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require('tailwindcss')('./tailwind.config.js'),
          require('autoprefixer'),
          require('cssnano'),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Cactus Starter`,
        short_name: `Gatsby Cactus Starter`,
        start_url: `/`,
        background_color: `#1d1f21`,
        theme_color: `#2bbc8a`,
        display: `standalone`,
        icon: `src/images/logo.png`,
        theme_color_in_head: false,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
