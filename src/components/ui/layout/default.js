import React from 'react';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';
import { Global } from '@emotion/react';

import Theme from '../../theme';
import globalStyles from '../../styled/global';

const StyledWrapper = tw.div`relative flex flex-col min-h-full py-16 antialiased break-words`;

export default function DefaultLayout({ children }) {
  return (
    <Theme>
      <BaseStyles />
      <Global styles={globalStyles} />
      <StyledWrapper>{children}</StyledWrapper>
    </Theme>
  );
}
