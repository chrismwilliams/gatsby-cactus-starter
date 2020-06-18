import tw, { styled, css } from 'twin.macro';

const StyledPostHeader = styled.header(
  ({ theme }) =>
    css`
      ${tw`fixed right-0 z-50 grid items-start grid-cols-2 grid-rows-2 pr-2 sm:pr-16`};
      top: 2rem;

      nav {
        ${tw`flex flex-col`};
        grid-area: 1 / 1 / -1 / -1;

        .page-links {
          ${tw`flex pt-1 pr-4 text-xs font-thin`};
          line-height: 15px;
          letter-spacing: 0.01em;
          > span {
            ${tw`inline-block mr-4 border-r border-dotted border-primary`};
            &:last-of-type {
              ${tw`border-0`};
            }
            a {
              ${tw`mr-4 text-primary`};
              &:hover {
                ${tw`bg-bottom bg-repeat-x`};
                background-image: linear-gradient(
                  transparent,
                  transparent 5px,
                  ${theme.colors.primary} 5px,
                  ${theme.colors.primary}
                );
                background-size: 100% 6px;
              }
            }
          }
        }
        .blog-links {
          ${tw`relative self-end hidden mt-8 sm:block space-x-3`};

          a {
            ${tw`inline-block hover:cursor-pointer`};
          }

          [data-tooltip] {
            ${tw`hover:text-pink-400`};
            &::before {
              ${tw`absolute top-0 right-0 z-50 invisible mr-16 italic text-right whitespace-no-wrap opacity-0 text-font`};
              content: attr(data-tooltip);
              transform: translateX(-50%) translateY(-2px);
              transition: opacity 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
            }
            &:hover {
              &::before {
                ${tw`visible block opacity-100`};
                transform: translateX(-50%) translateY(0);
              }
            }
          }
        }
      }
      .toc {
        ${tw`hidden mt-4 text-xs xl:block`};
        max-width: 15rem;
        max-height: calc(95vh - 7rem);
        ul {
          ${tw`text-right space-y-2`};
          li {
            ${tw`hover:text-pink-400`};
            &::before {
              ${tw`mr-2 text-primary`};
              content: '#';
            }
          }
        }
      }
      .bg-menu {
        ${tw`text-2xl bg-transparent outline-none hover:text-primary`};
        grid-area: 1 / 2;
        justify-self: flex-end;
      }
    `
);

export default StyledPostHeader;
