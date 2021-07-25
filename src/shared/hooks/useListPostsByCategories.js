import { graphql, useStaticQuery } from 'gatsby';
import { parseBlogPost } from 'src/shared/utils/helpers';

export default function useListPostsByCategories(category, limit) {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark (
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              excerpt
              date
              category
              coverImage {
                childrenImageSharp {
                  gatsbyImageData(width: 600)
                }
              }
            }
            fields {
              slug
            }
            html
            excerpt
          }
        }
      }
    }
  `);
  if (!category) return null;
  return data?.allMarkdownRemark?.edges.filter((post) =>  {
    if (category === 'últimos-post' && post.node.frontmatter.category) return true;
    if (post.node.frontmatter.category === category) return true;
    return false;
  })
    .slice(0, limit)
    .map((post) => {
      return parseBlogPost(post);
    });
}