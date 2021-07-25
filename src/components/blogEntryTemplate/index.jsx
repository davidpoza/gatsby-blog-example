import React from 'react';
import { graphql, Link } from 'gatsby';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import BalanceText from 'react-balance-text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faClock, faFolderOpen, faUser } from '@fortawesome/free-solid-svg-icons';
import ArticleLayout from 'src/components/layouts/article';
import AboutMe from 'src/components/aboutMe';
import Toc from 'src/components/toc';
import { URL_TAG_FOR_CATEGORIES, URL_TAG_FOR_TAGS } from 'src/shared/config/config';
import { parseBlogPost } from 'src/shared/utils/helpers';
import * as styles from './styles.module.scss';

export default function BlogEntryTemplate({ data }) {
  const post = parseBlogPost({ node: data.markdownRemark });
  const coverImage = getImage(post.coverImageData);
  const sideBar = [
    <AboutMe />,
    !post.disabledToc && <Toc key="toc" html={post.tableOfContents} />,
  ];

  const Header = () => {
    return (
      <div className={styles.articleHeader}>
        <h1><BalanceText>{post.title}</BalanceText></h1>
        <div className={styles.extendedInfo}>
          <span><FontAwesomeIcon height="1em" icon={faClock} />{dayjs(post.date).locale('es').format('DD [de] MMMM YYYY')}</span>
          <span><FontAwesomeIcon height="1em" icon={faFolderOpen} /><Link to={`${URL_TAG_FOR_CATEGORIES}${post.category}`}>{`${post.category.replace('-', ' ')}`}</Link></span>
          <span><FontAwesomeIcon height="1em" icon={faUser} />{post.author}</span>
        </div>
      </div>
    );
  };

  const Tags = () => {
    return(
      <div className={styles.tags}>
        {
          post?.tags.map((tag) => {
            return <Link to={`${URL_TAG_FOR_TAGS}${tag}`} >{tag}</Link>
          })
        }
      </div>
    );
  }

  return (<ArticleLayout
    articleHeader={<Header />}
    sideBar={sideBar}
    title={post.title}
    description={post.excerpt}
    image={post.resizedImage}
  >
    <GatsbyImage image={coverImage} className={styles.coverImage} alt="" />
    <div className={styles.contentInfo}>
      {
        dayjs(post.modificationDate).diff(post.date, 'days') > 7
        ? <div className={styles.updatedDateMessage}>
          <FontAwesomeIcon icon={faInfoCircle} height="1em" /> Actualizado el {dayjs(post.modificationDate).locale('es').format('DD [de] MMMM YYYY')}
        </div>
        : <div className={styles.emptyUpdatedDateMessage}></div>
      }
      <Tags />
    </div>
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
        disabledToc
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
