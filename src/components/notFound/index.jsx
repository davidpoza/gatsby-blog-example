import React from 'react';
import * as styles from './styles.module.scss';

export default function NotFound() {
  return (
    <div className={styles.container} >
      <h3>Error 404</h3>
      <div className={styles.message}>La página que buscas no existe</div>
      <div className={styles.sad}>:-(</div>
    </div>
  );
}