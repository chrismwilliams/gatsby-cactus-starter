import React from 'react';
import { ThemeProvider } from '@emotion/react';
import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfig from '../../tailwind.config';

const { theme } = resolveConfig(tailwindConfig);

export default function Theme(props) {
  return <ThemeProvider {...props} {...{ theme }} />;
}
