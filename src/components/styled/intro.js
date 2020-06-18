import tw, { styled } from 'twin.macro';

const StyledIntro = styled.section`
  ${tw`mt-4`};
  p {
    -moz-hyphens: auto;
    hyphens: auto;
  }
  .social-wrapper {
    ${tw`mt-4`};
    a {
      ${tw`inline-block hover:text-pink-400`};
    }
  }
`;

export default StyledIntro;
