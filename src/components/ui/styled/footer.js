import tw, { styled } from 'twin.macro';

const StyledFooter = styled.footer`
  ${tw`absolute bottom-0 flex flex-col items-center justify-center w-full mb-4 text-center align-top text-tertiary md:flex-row md:justify-between`};
  font-size: 11px;

  div {
    ${tw`mr-0 md:mr-4`};
  }

  nav {
    ${tw`flex`};
    span {
      ${tw`inline-block mr-4 align-middle border-r border-tertiary`};
      &:last-of-type {
        ${tw`mr-0 border-r-0`};
        a {
          ${tw`mr-0`};
        }
      }
      a {
        ${tw`mr-4 underline hover:text-gray-600`};
      }
    }
  }
`;

export default StyledFooter;
