import tw, { styled } from 'twin.macro';

const StyledPost = styled.main`
  h1 {
    ${tw`text-xl font-semibold text-primary`};
  }
  .meta {
    ${tw`flex flex-col items-start sm:flex-row sm:items-center`};
    span {
      ${tw`hidden mx-2 sm:block`};
    }
    .tags {
      ${tw`flex items-center`};
      ul {
        ${tw`flex flex-wrap ml-2`};

        li {
          ${tw`mr-2`};
        }
      }
    }
  }
  .post-body {
    ${tw`mt-8`};
    h2 {
      ${tw`relative mt-16 mb-2 text-base font-semibold text-white`};
      &::before {
        ${tw`absolute text-xl font-bold text-primary`};
        content: '#';
        top: -0.15rem;
        left: -1.2rem;
      }
    }

    p {
      ${tw`my-2`};
      -moz-hyphens: auto;
      hyphens: auto;
    }
    ul,
    ol {
      ${tw`my-6 list-inside`};
    }
    ul {
      ${tw`list-disc`};
    }
    ol {
      ${tw`list-decimal`};
    }
    pre {
      ${tw`my-8 px-4 py-2 rounded-sm`};
    }
    code {
      ${tw`text-white bg-gray-700`};
    }
    blockquote {
      ${tw`mx-3 my-4 px-3 py-2 font-bold text-secondary`};
      quotes: '\\201C''\\201D''\\2018''\\2019';
      &::before {
        ${tw`text-2xl`};
        content: '\\201C';
        vertical-align: -0.4em;
        line-height: 0.1em;
      }
    }
  }
`;

export default StyledPost;
