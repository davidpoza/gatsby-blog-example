import React from 'react';
import TagsCloud from 'src/components/tagsCloud';
import LastPosts from 'src/components/lastPosts';
import * as styles from 'src/components/footer/styles.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.cols}>
          <TagsCloud />
          <LastPosts />
        </div>
        <p>David Poza Suárez © 2021</p>
      </div>
    </footer>
  );
}