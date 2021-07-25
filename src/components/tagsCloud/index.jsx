import React from 'react';
import { Link } from 'gatsby';
import * as styles from './styles.module.scss';
import { URL_TAG_FOR_TAGS } from 'src/shared/config/config';
import useTags from 'src/shared/hooks/useTags';

export default function TagsCloud({ minSize = 10, maxSize = 20 }) {
  const tags = useTags();
  const itemsOnBiggestTag = Object.keys(tags).map((tag) => tags[tag].count).reduce((acc, curr) => {
    return (curr > acc ? curr : acc);
  });
  const fontSize =  (n) => (n / itemsOnBiggestTag) * (maxSize - minSize) + minSize;

  return (<div className={styles.container}>
    <h3>Etiquetas</h3>
    <div className={styles.content}>
      {
        Object.keys(tags).map((tag) => <Link style={{ fontSize: `${fontSize(tags[tag].count)}px` }} className={styles.tag} to={`${URL_TAG_FOR_TAGS}${tag}`}>
            {`${tag} (${tags[tag].count})`}
          </Link>
        )
      }
    </div>
  </div>);
}