import React from 'react';
import FrontLayout from 'src/components/layouts/front';
import ArchiveWidget from 'src/components/archive';

export default function Archive() {
  return (<FrontLayout title="Archivo de artículos">
    <ArchiveWidget />
  </FrontLayout>);
}
