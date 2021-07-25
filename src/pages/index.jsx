import React from 'react';
import FrontLayout from 'src/components/layouts/front';
import CategoryList from 'src/components/categoryList';

export default function Home() {
  return (<FrontLayout>
    {
      ['últimos-post', 'javascript', 'linux', 'herramientas-desarrollo', 'css', 'software'].map((c) =>
        <CategoryList key={c} category={c} limit={6} />
      )
    }
  </FrontLayout>);
}
