import React from 'react';
import { Link } from 'gatsby';
import Card from 'src/components/card';
import { URL_TAG_FOR_CATEGORIES, URL_TAG_FOR_TAGS, URL_TAG_FOR_BLOG, URL_TAG_FOR_ARCHIVE } from 'src/shared/config/config';
import useListPostsByCategories from 'src/shared/hooks/useListPostsByCategories';
import * as styles from './styles.module.scss';
import { CATEGORY_COLORS } from 'src/shared/config/config';
import { parseBlogPost } from 'src/shared/utils/helpers';

export default function CategoryList({ injectedPosts, category, tag, limit, disableShowMore = false }) {
  const fetchedPosts = useListPostsByCategories(category, limit);
  const posts = injectedPosts?.map(p => parseBlogPost(p)) || fetchedPosts;
  return (<div className={styles.container}>
    <div className={styles.categoryTitle} style={{ borderLeftColor: CATEGORY_COLORS[category] }}>
      <h2>{(category || tag).replace('-', ' ')}</h2>
      <div className={styles.line}></div>
      {
        !disableShowMore && category &&
        <div className={styles.showMore}><Link to={ category === 'últimos-post' ? URL_TAG_FOR_ARCHIVE : `${URL_TAG_FOR_CATEGORIES}${category}` }>Ver todos</Link></div>
      }
      {
        !disableShowMore && tag &&
        <div className={styles.showMore}><Link to={`${URL_TAG_FOR_TAGS}${tag}`}>Ver todos</Link></div>
      }
    </div>
    <div className={styles.list}>
    {
      posts?.map(post => <Card key={post.title} title={post.title} content={post.excerpt}
          imageData={post.coverImageData} link={`${URL_TAG_FOR_BLOG}${post.slug}`} date={post.date} />
      )
    }
    </div>
  </div>);
}
