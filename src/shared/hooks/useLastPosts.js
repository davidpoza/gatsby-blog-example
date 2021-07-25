import { graphql, useStaticQuery } from 'gatsby';
import { parseBlogPost } from 'src/shared/utils/helpers';

export default function useLastPosts(limit) {
  return useStaticQuery(graphql`
    query {
      allMarkdownRemark (
        filter: { frontmatter: { category: { ne: null } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              date
              category
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)?.allMarkdownRemark?.edges
    .slice(0, limit)
    .map((post) => {
      return parseBlogPost(post);
    });
}