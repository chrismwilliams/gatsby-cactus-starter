import React from 'react';

import DefaultLayout from './default';
import { Header, Footer } from '../';

export default function PageLayout({ children }) {
  return (
    <DefaultLayout>
      <Header />
      <main>{children}</main>
      <Footer />
    </DefaultLayout>
  );
}
