import tw, { styled, css } from 'twin.macro';

const StyledUnderline = styled.span(
  ({ theme }) => css`
    ${tw`bg-bottom`};
    background-image: linear-gradient(
      transparent,
      transparent 5px,
      ${theme.colors.font} 5px,
      ${theme.colors.font}
    );
    background-size: 100% 6px;
    background-repeat: repeat-x;
    &:hover {
      background-image: linear-gradient(
        transparent,
        transparent 4px,
        ${theme.colors.pink[400]} 4px,
        ${theme.colors.pink[400]}
      );
    }
  `
);

export default StyledUnderline;
