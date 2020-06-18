<p align="center">
  <img alt="Gatsby Cactus Starter logo" src="https://res.cloudinary.com/dqzlshiwt/image/upload/v1581006740/web/gatsby-theme-cactus.png" width="70" />
</p>
<h1 align="center">
  Gatsby Cactus Starter
</h1>

<p align="center">
  <img src="https://api.netlify.com/api/v1/badges/fd22fadd-1539-4744-a382-c9c29802f9b8/deploy-status" alt="Netlify Deploy Status">
</p>

[Demo](https://gatsby-cactus-starter.netlify.app/) of this example hosted on Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/chrismwilliams/gatsby-cactus-starter)

A simple Gatsby starter inspired by [Hexo Theme Cactus](https://github.com/probberechts/hexo-theme-cactus)

If you prefer using Gatsby Theme's, I've created [Gatsby Theme Cactus](https://github.com/chrismwilliams/gatsby-theme-cactus) as an alternative for shadowing components.

## Features

- GatsbyJS - for blazingly fast static websites built with React
- MDX - markdown evolved
- Twin - Tailwind CSS-in-js
- React Icons
- Responsive design
- Lazy loading - for images and inc webp support

Starter includes:

- Example MDX Blog posts
- Prism React code syntax styling
- Google Analytics
- Auto-generated sitemap
- Offline support

## Getting Started

```sh
# download the template zip via dropdown or
git clone https://github.com/chrismwilliams/gatsby-cactus-starter.git

# install dependencies
yarn install
​
# development
yarn dev

# production
yarn build
```

### Config

Add your own meta data to `gatsby-config.js`. The following settings are sourced by `./src/components/seo` and `./src/hooks/use-site-metadata.js` to provide page SEO, and page data respectively.

### Content

_Post_

Any `.mdx` or `.md` files added to the `./content/posts` folder will be transformed into a post page and added to your site.

_Assets_

Any shared images for pages or blogs live in `./content/assets`

_Styles_

The starter shows a number of ways to use Twin Tailwind CSS-in-js variants to quickly style pages and components. To customise and add your own styles and variants visit - `tailwind.config.js` & `./src/components/styled/global.js` and follow the styles shown.

This demo uses a Prism code style, edit `./src/components/ui/code-block.js` to select your chosen Prism styling, options can be found [here](https://github.com/FormidableLabs/prism-react-renderer).

### Analytics

Add your google analytics ID to an `.env` file with the key `GOOGLE_ANALYTICS_ID` and place it at the root of your site folder (here it is `demo`).

## Licence

MIT
