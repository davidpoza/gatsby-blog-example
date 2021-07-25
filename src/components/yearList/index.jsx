import React from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import MonthList from 'src/components/monthList';
import * as styles from './styles.module.scss';

export default function YearList({ months = {} }) {
  return (<div>
    {
      Object.keys(months)
        .sort((a, b) => (b - a))
        .map((month) => {
          return (
            <div className={styles.month}>
              <h3>{dayjs(month, 'MM').locale('es').format('MMMM')}</h3>
              <MonthList posts={months[month]} />
            </div>
          );
        })
    }
  </div>);
}
