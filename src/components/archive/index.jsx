import React from 'react';
import YearList from 'src/components/yearList';
import useListPostsByMonth from 'src/shared/hooks/useListPostsByMonth';
import * as styles from './styles.module.scss';

export default function ArchiveWidget() {
  const months = useListPostsByMonth();
  return (<div className={styles.container}>
    {
      Object.keys(months)
        .sort((a, b) => (b - a))
        .map((year) => {
          return <div>
            <h2 className={styles.year}>{year}</h2>
            <YearList months={months[year]} />
          </div>
        })
    }
  </div>);
}
