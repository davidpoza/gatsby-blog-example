import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import BalanceText from 'react-balance-text';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import * as styles from './styles.module.scss';

export default function Card({
  title, date, content, imageData, link
}) {
  const image = getImage(imageData);
  return (
    <section className={styles.card}>
      <a href={link}>
        <GatsbyImage image={image} className={styles.image} alt="" />
      </a>
      <article className={styles.body}>
        <div className={styles.date}>
          {dayjs(date).locale('es').format('DD [de] MMMM YYYY')}
        </div>
        <Link to={link}>
          <h3>
            <BalanceText>{title}</BalanceText>
          </h3>
        </Link>
        {content}
      </article>
    </section>
  );
}