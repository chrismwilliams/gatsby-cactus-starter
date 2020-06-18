import tw, { styled } from 'twin.macro';

const StyledAbout = styled.div`
  h2 {
    ${tw`text-xl font-semibold`};
  }
  p,
  ul {
    ${tw`my-4`};
    svg {
      ${tw`inline-block`};
    }
  }
  .gatsby-image-wrapper {
    ${tw`mx-auto my-8`};
    max-width: 200px;
  }
  ul {
    ${tw`list-disc list-inside`};
  }
`;

export default StyledAbout;
