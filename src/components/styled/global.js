import tw, { css } from 'twin.macro';

const globalStyles = css`
  html {
    ${tw`border-0 border-t-2 border-font`};
    line-height: 1.725;
  }
  html,
  #___gatsby,
  #gatsby-focus-wrapper {
    ${tw`h-full m-0 p-0`};
  }
  body {
    ${tw`h-full max-w-3xl mx-auto my-0 px-8 font-mono font-normal text-font bg-background`};
    font-size: 14px;
    text-rendering: geometricprecision;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default globalStyles;
