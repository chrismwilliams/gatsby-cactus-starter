import React from 'react';
import 'twin.macro';

import { PageLayout } from '../components/ui';

export default function PageNotFound() {
  return (
    <PageLayout>
      <h2 tw="text-xl font-semibold mb-4">404</h2>
      <p>Whoops, the page you're looking for could not be found!</p>
    </PageLayout>
  );
}
