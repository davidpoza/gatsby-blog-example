import React from 'react';
import { Link } from 'gatsby';
import BalanceText from 'react-balance-text';
import * as styles from './styles.module.scss';
import useLastPosts from 'src/shared/hooks/useLastPosts';
import { URL_TAG_FOR_BLOG } from 'src/shared/config/config.js';

export default function LastPosts() {
  const posts = useLastPosts(10);
  return (
    <div id="lastPosts" className={styles.container} >
      <h3>Últimos posts</h3>
      <div className={styles.content} >
        <ul>
          {
            posts.map((post) => <li><Link to={`${URL_TAG_FOR_BLOG}${post.slug}`}><BalanceText>{post.title}</BalanceText></Link></li>)
          }
        </ul>
      </div>
    </div>
  );
}