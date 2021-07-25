import React from 'react';
import FrontLayout from 'src/components/layouts/front';
import NotFound from 'src/components/notFound';

export default function Archive() {
  return (<FrontLayout title="No encontrado">
    <NotFound />
  </FrontLayout>);
}
