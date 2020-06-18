import tw, { styled } from 'twin.macro';

const StyledHeader = styled.header`
  ${tw`grid justify-start w-full grid-rows-2 row-gap-1 col-gap-4 mx-auto mb-8`};
  grid-template-columns: 50px auto;

  &:hover {
    .logo svg {
      filter: none;
    }
  }

  .logo {
    ${tw`row-span-2`};
    width: 50px;
    height: 50px;
    svg {
      ${tw`w-full h-full`};
      filter: grayscale(100%);
    }
  }

  .title-link {
    ${tw`inline-block`};
    h1 {
      ${tw`m-0 text-2xl font-bold leading-8`};
      letter-spacing: 0.01em;
    }
  }

  nav {
    ${tw`self-start col-start-2 font-thin`};
    line-height: 15px;
    letter-spacing: 0.01em;
    font-size: 0.8rem;
    span {
      ${tw`inline-block mr-4 border-r border-dotted border-primary`};
      &:last-of-type {
        ${tw`border-r-0`};
      }
    }
    a {
      ${tw`mr-4 text-primary`};
      &:hover {
        background-image: linear-gradient(
          transparent,
          transparent 5px,
          ${(props) => props.theme.colors.primary} 5px,
          ${(props) => props.theme.colors.primary}
        );
        background-position: bottom;
        background-size: 100% 6px;
        background-repeat: repeat-x;
      }
    }
  }
`;

export default StyledHeader;
