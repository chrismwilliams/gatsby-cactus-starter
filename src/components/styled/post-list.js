import tw, { styled } from 'twin.macro';

const StyledPostList = styled.ul`
  ${tw`mt-4`};
  time {
    ${tw`mr-4 text-tertiary`};
  }
  em {
    ${tw`block`};
    &::before {
      content: '\\201C';
    }
    &::after {
      content: '\\201D';
    }
  }
`;

export default StyledPostList;
