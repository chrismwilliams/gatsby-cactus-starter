import React from 'react';
import { Global } from '@emotion/core';
import tw from 'twin.macro';

import Theme from '../../theme';
import globalStyles from '../../styled/global';

const StyledWrapper = tw.div`relative flex flex-col min-h-full py-16 antialiased break-words`;

export default function DefaultLayout({ children }) {
  return (
    <Theme>
      <Global styles={globalStyles} />
      <StyledWrapper>{children}</StyledWrapper>
    </Theme>
  );
}
