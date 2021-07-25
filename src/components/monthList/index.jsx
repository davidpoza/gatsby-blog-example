import React from 'react';
import { Link } from 'gatsby';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import { URL_TAG_FOR_BLOG } from 'src/shared/config/config';
import * as styles from './styles.module.scss';

export default function MonthList({ posts = [] }) {
  return (<ul>
    {
      posts
        .sort()
        .map((post) => {
          return (
            <li className={styles.item}>
              <p className={styles.date}>{dayjs().locale('es').format('DD [de] MMMM')}</p>
              <Link to={`${URL_TAG_FOR_BLOG}${post.slug}`}>{post.title}</Link>
            </li>
          );
        })
    }
  </ul>);
}
