import React from 'react';
import { graphql, Link } from 'gatsby';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import BalanceText from 'react-balance-text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faUser } from '@fortawesome/free-solid-svg-icons'
import ArticleLayout from 'src/components/layouts/article';
import LastPosts from 'src/components/lastPosts';
import { URL_TAG_FOR_TAGS } from 'src/shared/config/config';
import { parseBlogPost } from 'src/shared/utils/helpers';
import * as styles from './styles.module.scss';

export default function PageTemplate({ data }) {
  const post = parseBlogPost({ node: data.markdownRemark });
  const sideBar = [
    <LastPosts />
  ];

  const Header = () => {
    return (
      <div className={styles.articleHeader}>
        <h1><BalanceText>{post.title}</BalanceText></h1>
        <div className={styles.extendedInfo}>
          <span><FontAwesomeIcon icon={faClock} />{dayjs(post.date).locale('es').format('DD [de] MMMM YYYY')}</span>
          <span><FontAwesomeIcon icon={faUser} />{post.author}</span>
        </div>
      </div>
    );
  };

  return (<ArticleLayout
    articleHeader={<Header />}
    sideBar={sideBar}
    title={post.title}
    description={post.excerpt}
    image={post.resizedImage}
  >
    <div dangerouslySetInnerHTML={{ __html: post?.html }} />
  </ArticleLayout>);
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      tableOfContents
      fields {
        gitAuthorTime
      }
      excerpt
      frontmatter {
        excerpt
        author
        title
        date
        modDate
        tags
        category
        coverImage {
          childImageSharp {
            ogImage: resize (width: 1200, height: 627) {
              src
            }
          }
          childrenImageSharp {
            gatsbyImageData(width: 600)
          }
        }
      }
    }
  }
`
